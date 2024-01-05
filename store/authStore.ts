import { create } from "zustand";
import { supabase } from "@/lib/supabase"; // Import your Supabase client
import { User } from "@supabase/supabase-js";

interface AuthState {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  signUp: async (email: string, password: string) => {  
    const {
      data: { user },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    if (error) throw error;
    set({ user });
  },
  signIn: async (email: string, password: string) => {
    const {
      data: { user },
      error,
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    set({ user });
  },
  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },
  // Add more methods as needed (e.g., password reset, update profile, etc.)
}));

export default useAuthStore;
