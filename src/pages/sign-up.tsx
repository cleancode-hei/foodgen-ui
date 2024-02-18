/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { userProvider } from "@/providers";
import { User } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link, DialogIngredient } from "@/components";

const { save } = userProvider;
export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [preferences, setPreferences] = useState<string[]>([]);
  const [allergyList, setAllergies] = useState<string[]>([]);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<User>();

  const onSubmit: SubmitHandler<User> = async (data) => {
    setIsLoading(true);
    const { allergies, preference, ...rest } = data;
    const toSave = {
      ...rest,
      preference: preferences,
      allergies: allergyList,
    };
    try {
      await save!(toSave);
      navigate("/");
    } catch (error) {
      console.error("Sign up failed:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleNext = () => {
    setStep(2);
  };

  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <Card className="w-[350px] h-[460px] _container">
      <CardHeader className="w-full flex items-center">
          <Avatar className="w-27 h-27">
            <AvatarImage className="_logo" src="/logo.png" alt="@shadcn" />
          </Avatar>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1">
                {step === 1 && (
                  <div className="flex flex-col space-y-1">
                    <input
                      {...register("firstname")}
                      placeholder="First name"
                      type="text"
                      className="_input py-1 rounded-xl px-2 bg-slate-50 shadow-md outline-none"
                      name="firstname"
                    />

                    <input
                      {...register("lastname")}
                      placeholder="Last name"
                      type="text"
                      className="_input py-1 rounded-xl px-2 bg-slate-50 shadow-md outline-none"
                      name="lastname"
                    />
                    <input
                      {...register("username")}
                      placeholder="Username"
                      type="text"
                      className="_input py-1 rounded-xl px-2 bg-slate-50 shadow-md outline-none"
                      name="username"
                    />
                  </div>
                )}

                {step === 2 && (
                  <>
                    <input
                      {...register("email")}
                      placeholder="Email address"
                      type="email"
                      className="py-1 rounded-xl px-2 bg-slate-50 shadow-md outline-none"
                      name="email"
                    />
                    <input
                      {...register("password")}
                      placeholder="Password"
                      type="password"
                      className="py-1 rounded-xl px-2 bg-slate-50 shadow-md outline-none"
                      name="password"
                    />
                  </>
                )}
              </div>
            </div>
            <div className="w-full flex flex-row justify-between mt-10">
              <DialogIngredient text="Preferences" setState={setPreferences} />
              <DialogIngredient text="Allergies" setState={setAllergies} />
            </div>
            <div className="flex justify-center mt-3">
              <Button
                type="submit"
                className="py-1 text-[15px] bg-blue-600 hover:bg-blue-800 text-white shadow-md rounded-xl"
              >
                {isLoading ? "In progress..." : "Sign up"}
              </Button>
            </div>
          </form>
          <div className="w-full flex justify-center">
            <Link
              path="login"
              text="Already have an account ?"
              className="mt-3 self-end"
            />
          </div>
        </CardContent>
      </Card>
    </main>
  );
};
