import { User } from "@supabase/supabase-js";
import React from "react";
interface IUser {
  user: User | null;
}
export default function UserCard({ user }: IUser) {
  return (
    <div>
      Email : <p>{user?.email}</p>
    </div>
  );
}
