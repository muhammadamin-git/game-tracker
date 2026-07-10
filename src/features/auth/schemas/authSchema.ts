import { z } from "zod";

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string().min(8, { message: "Minimum 8 characters" }),
});

export const RegisterSchema = z
  .object({
    name: z.string().min(2, { message: "Minimum 2 characters" }),
    email: z.email(),
    password: z.string().min(8, { message: "Minimum 8 characters" }),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

export type LoginFormData = z.infer<typeof LoginSchema>;
export type RegisterFormData = z.infer<typeof RegisterSchema>;
