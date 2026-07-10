import { supabase } from "@/lib/supabase";
import type {
  LoginFormData,
  RegisterFormData,
} from "@/features/auth/schemas/authSchema";

export const login = async (data: LoginFormData) => {
  const { data: result, error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });
  if (error) throw new Error(error.message);
  return result;
};

export const register = async (data: RegisterFormData) => {
  const { data: result, error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: { name: data.name },
    },
  });
  if (error) throw new Error(error.message);
  return result;
};
