"use client";

import { useNavigation } from "@/hooks/useNavigation";
import useAuthStore from "@/store/authStore";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
interface IUser {
  user: User | null;
}
export default function Navbar({ user }: IUser) {
  const { signOut } = useAuthStore();
  const { router } = useNavigation();

  const handleSignOut = async () => {
    signOut;
    router.refresh();
    window.location.reload();
  };
  return (
    <header className="flex justify-between items-center px-4 lg:px-[15%] py-4 bg-purple-800 text-white">
      <Link className="text-xl md:text-2xl uppercase font-bold" href="/">
        Supabase Auth with Next Js
      </Link>
      <div className="flex gap-2 items-center">
        {!user ? (
          <>
            <Link href="/signup">
              <button className="w-full px-5 py-2 border border-purple-700 bg-purple-700 text-white rounded-lg text-sm font-medium">
                Create Account
              </button>
            </Link>
            <Link href="/login">
              <button className="w-full px-5 py-2 border border-purple-700 bg-purple-700 text-white rounded-lg text-sm font-medium">
                Log in
              </button>
            </Link>
          </>
        ) : (
          <button
            onClick={handleSignOut}
            className="w-full px-5 py-2 border border-purple-700 bg-red-700 text-white rounded-lg text-sm font-medium"
          >
            Log out
          </button>
        )}
      </div>
    </header>
  );
}
