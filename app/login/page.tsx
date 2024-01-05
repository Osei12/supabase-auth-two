"use client";
import React, { useState } from "react";
import Link from "next/link";
import useAuthStore from "@/store/authStore";
import { useNavigation } from "@/hooks/useNavigation";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuthStore();
  const {router } = useNavigation()

  const handleSignIn = async ()=>{
    await signIn(email, password)
    router.push('/')
    router.refresh()
  }
  return (
    <main className="flex justify-center items-center flex-col w-full h-screen">
      <div className="max-w-sm w-full flex flex-col gap-5 ">
        <div className="my-8">
          <h1 className="text-xl md:text-3xl">Login</h1>
        </div>
        <div className="flex-col flex gap-2">
          <label className="text-gray-600" htmlFor="email">
            Email Address
          </label>
          <input
            name="email"
            className="border px-4 py-4 text-black "
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex-col flex gap-2">
          <label className="text-gray-600" htmlFor="password">
            Passsword
          </label>
          <input
            name="password"
            className="border px-4 py-4 text-black "
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="w-full mt-4">
          <button
            onClick={handleSignIn}
            className="w-full px-5 py-2 border border-purple-700 bg-purple-700 text-white rounded-lg text-sm font-medium"
          >
            Login
          </button>
        </div>
        <div>
          <p>Don&apos;t have an accont? </p>{" "}
          <span>
            <Link href="/signup">Sign Up</Link>
          </span>
        </div>
      </div>
    </main>
  );
}
