"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { useAuth } from "../../../firebase/auth";
import { useRouter } from "next/navigation";
import { useToastMessages } from "@/components/message/useToastMessages";
const Navbar = () => {
  const router = useRouter();
  const { Info } = useToastMessages();
  const { authUser, isLoading, signOut } = useAuth();
  useEffect(() => {
    if (!isLoading && !authUser) {
      router.push("/");
    }
  }, [isLoading, authUser]);

  return (
    <>
      <div className="bg-blue-800 flex justify-around items-center gap-9 p-5 text-3xl sticky top-0 ">
        <h1 className="text-2xl text-white font-semibold flex justify-center items-center gap-4">
          <div className="relative h-6 w-6">
            <Image src="/da-chart-logo.svg" alt="Logo" layout="fill" />
          </div>
          Dealer Acumen
        </h1>

        <nav>
          <ul className="flex items-center gap-10 text-sm text-white font-light">
            {!authUser && (
              <li>
                <Link href="/register">Register</Link>
              </li>
            )}
            {!authUser && (
              <li>
                <Link href="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
        {authUser && (
          <button
            className="font-Pacifico text-xl rounded-lg hover:text-white w-auto p-2 bg-[#7b9194]"
            onClick={() => {
              signOut();
              Info("Logged Out !");
            }}
          >
            Logout
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
