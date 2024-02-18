import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link } from "@/components";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Auth } from "@/types";
import { auth } from "@/validators";

import { authProvider } from "@/providers";
import { resetValues } from "@/lib";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const { login } = authProvider;

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Auth>({
    resolver: yupResolver(auth),
  });

  const onSubmit: SubmitHandler<Auth> = async (data) => {
    setIsLoading(true);
    try {
      await login!(data);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
      resetValues([data.email, data.password]);
    }
  };

  return (
    <main className="w-full min-h-screen  flex justify-center items-center">
      <Card className="w-[350px] h-[360px] _container">
        <CardHeader className="w-full flex items-center">
          <Avatar className="w-27 h-27">
            <AvatarImage className="_logo" src="/logo.png" alt="@shadcn" />
          </Avatar>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1">
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email address"
                  className=" _input py-1 rounded-xl px-2 bg-slate-50 shadow-md outline-none"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <input
                  {...register("password")}
                  placeholder="Password"
                  type="password"
                  className="_input py-1 rounded-xl px-2 bg-slate-50 shadow-md outline-none"
                />
              </div>
            </div>
            <div className="flex justify-center mt-3">
              <Button
                type="submit"
                className="py-1 text-[15px] _button text-white rounded-xl"
              >
                {isLoading ? "In progress..." : "Log in"}
              </Button>
            </div>
          </form>
          <div className="w-full flex justify-center">
            <Link
              path="sign-up"
              text="Already have an account ?"
              className="mt-3 self-end _link"
            />
          </div>
        </CardContent>
      </Card>
    </main>
  );
};
