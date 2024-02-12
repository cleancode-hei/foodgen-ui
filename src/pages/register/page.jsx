"use client"
import React from "react"
import { authProvider } from "@/app/provider/authProvider/clientSide"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import CarouselComponent from "@/app/components/carousel/Carousel";
import Link from "next/link"
import "./register.css"
import Image from "next/image"

export default function Register() {
  return <RegisterLogique UI={RegisterSimpleDesignUi} />
}

function RegisterLogique({ UI }) {
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      email: "",
    },
  });

  const formSubmit = (data) => {
    console.log(data)
    authProvider.createUser(data).then((user) => {

      authProvider.login(user).then((token) => {
        sessionStorage.setItem(process.env.NEXT_PUBLIC_SESSION, token);
        router.push("/food/form")
      }).catch(()=>{
        router.push("login")
      })
    }).catch((e) => {
      throw e;
    });
  }

  return <UI register={register} formSubmit={formSubmit} handleSubmit={handleSubmit} />;
}

function RegisterSimpleDesignUi({ register, formSubmit, handleSubmit }) {
  return (

    <div className="main_bg">
      <div className=" w-full "></div>
      <nav>
        <Link href="/">
          <Image src="/images/home.png" className="logo_register" alt="logo" height={140} width={140} />
        </Link>
      </nav>
      <div className="font-[sans-serif] bg-gradient-to-r  via-emerald-800 to-emerald-600 text-[#333]">
        <div className="_bodyContainer flex fle-col items-center justify-center lg:p-6 p-4">
          <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
            <div className="max-md:text-center">
              <CarouselComponent />
            </div>

            <div className="_registering shadow-md p-6">

              <Image className="mx-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="happy" width={56} height={56} />

          <h2 className="my-3 text-center text-3xl font-bold tracking-tight">
            Sign up for an account
          </h2>
          <form className="space-y-6" method="POST" onSubmit={handleSubmit(formSubmit)}>
            <div>
              <div className="mt-1 _inputList">
                <input
                  {...register("username", { required: true })}
                  name="username"
                  type="text"
                  autoComplete="current-username"
                  required
                  className="register-input"
                  placeholder="Username"
                />
              </div>
            </div>
            <div>
              <div className="mt-1 _inputList">
              <input
                {...register("email", {
                  required: true,
                  validate: {
                    isValidEmail: (value) =>
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                        value,
                      ) || "Email is not valid",
                  },
                })}
                name="email"
                type="email"
                autoComplete="email"
                required
                className="register-input"
                placeholder="Email address"
              />
              </div>
            </div>

            <div>
              <div className="mt-1 _inputList">
              <input
                {...register("password", { required: true })}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="register-input"
                placeholder="Password"
              />
              </div>
            </div>
            <div>
    
              <button type="submit"
                className=" shadow-xl py-2.5 px-4 text-sm focus:outline-none _btn">Register
                Account
              </button>
            </div>
          </form>
          <nav className="text-center text-white">
              <Link href="/login">Go to Login</Link>
            </nav>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}
