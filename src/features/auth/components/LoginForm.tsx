import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  LoginSchema,
  type LoginFormData,
} from "@/features/auth/schemas/authSchema";
import { useLogin } from "@/features/auth/hooks/useLogin";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";

export const LoginForm = () => {
  const login = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormData) => {
    login.mutate(data, {
      onSuccess: () => navigate({ to: "/" }),
    });
  };

  return (
    <Card className="px-5 py-8 shadow-md transition-shadow hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-xl font-bold">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                {...register("email")}
                id="email"
                type="email"
                placeholder="m@example.com"
              />
              {errors.email && <FieldError>{errors.email.message}</FieldError>}
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input {...register("password")} id="password" type="password" />
              {errors.password && (
                <FieldError>{errors.password.message}</FieldError>
              )}
            </Field>
            <Field>
              <Button type="submit" className="py-5">
                Login
              </Button>
              <FieldDescription className="text-center">
                Don&apos;t have an account? <Link to="/register">Sign up</Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
};
