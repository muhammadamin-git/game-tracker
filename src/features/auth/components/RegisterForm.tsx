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
  RegisterSchema,
  type RegisterFormData,
} from "@/features/auth/schemas/authSchema";
import { useRegister } from "@/features/auth/hooks/useRegister";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";

export const RegisterForm = () => {
  const registerSubmit = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (data: RegisterFormData) => {
    registerSubmit.mutate(data, {
      onSuccess: () => navigate({ to: "/" }),
    });
  };

  return (
    <Card className="px-5 py-8 shadow-md transition-shadow hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-xl font-bold">
          Register
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                {...register("name")}
                id="name"
                type="text"
                placeholder="Jack..."
              />
              {errors.name && <FieldError>{errors.name.message}</FieldError>}
            </Field>
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
              <FieldLabel htmlFor="confirm">Confirm password</FieldLabel>
              <Input {...register("confirm")} id="confirm" type="password" />
              {errors.confirm && (
                <FieldError>{errors.confirm.message}</FieldError>
              )}
            </Field>
            <Field>
              <Button type="submit" className="py-5">
                Sign Up
              </Button>
              <FieldDescription className="text-center">
                Already have an account? <Link to="/login">Sign in</Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
};
