"use client";
import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import useAuthStore from "@/store/authStore";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useAuthStore();
  return (
    <main className="flex justify-center items-center flex-col w-full h-screen">
      <div className="max-w-sm w-full flex flex-col gap-5 ">
        <div className="my-8">
          <h1 className="text-xl md:text-3xl">Create Account</h1>
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
            onClick={() => signUp(email, password)}
            className="w-full px-5 py-2 border border-purple-700 bg-purple-700 text-white rounded-lg text-sm font-medium"
          >
            Create Account
          </button>
        </div>
      </div>
    </main>
  );
}
