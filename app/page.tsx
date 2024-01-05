import UserCard from "@/components/UserCard";
import { supabase } from "@/lib/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // const setNewView = async () => {
  //   const { data, error } = await supabase.from("views").insert({
  //     name: "random name",
  //   });

  //   if (data) console.log(data);
  //   if (error) console.log(error);
  // };
  // setNewView();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main>
      <div className="space-x-3">
        <Link href="/login">Login</Link>
        <Link href="/login">Register</Link>
      </div>
      <div className="mt-10 w-full  max-w-sm h-[40vh] flex justify-center items-center">
        <h3 className="text-2xl">Welcome to my supabase authentication app</h3>
      
        
      </div>
      

      <div>
        <div><h2>User Details</h2></div>
        <UserCard user={user} /></div>
    </main>
  );
}
