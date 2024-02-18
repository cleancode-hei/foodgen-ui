/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { userProvider } from "@/providers";
import { User } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, DialogIngredient } from "@/components";

const { save } = userProvider;
export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [preferences, setPreferences] = useState<string[]>([]);
  const [allergyList, setAllergies] = useState<string[]>([]);
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

  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <Card className="w-[500px] h-[500px] rounded-xl">
        <CardHeader className="w-full flex items-center">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>Avatar</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row w-full gap-4">
              <div className="flex flex-col">
                <div className="flex flex-col space-y-2 my-1">
                  <Label htmlFor="firstname" className="text-base px-2">
                    First name
                  </Label>
                  <input
                    {...register("firstname")}
                    type="text"
                    className="py-1 rounded-xl px-2 bg-slate-50 shadow-md outline-none"
                    name="firstname"
                  />
                </div>
                <div className="flex flex-col space-y-2 my-1">
                  <Label htmlFor="username" className="text-base px-2">
                    Username
                  </Label>
                  <input
                    {...register("username")}
                    type="text"
                    className="py-1 rounded-xl px-2 bg-slate-50 shadow-md outline-none"
                    name="username"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col space-y-2 my-1">
                  <Label htmlFor="lastname" className="text-base px-2">
                    Last name
                  </Label>
                  <input
                    {...register("lastname")}
                    type="text"
                    className="py-1 rounded-xl px-2 bg-slate-50 shadow-md outline-none"
                    name="lastname"
                  />
                </div>
                <div className="flex flex-col space-y-2 my-1">
                  <Label htmlFor="email" className="text-base px-2">
                    Email
                  </Label>
                  <input
                    {...register("email")}
                    type="email"
                    className="py-1 rounded-xl px-2 bg-slate-50 shadow-md outline-none"
                    name="email"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2 my-1">
              <Label htmlFor="password" className="text-base px-2">
                Password
              </Label>
              <input
                {...register("password")}
                type="password"
                className="py-1 rounded-xl px-2 bg-slate-50 shadow-md outline-none"
                name="password"
              />
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
