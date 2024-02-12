"use client"
import React from "react";
import { useForm } from "react-hook-form";

export default function UserProfile() {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            username: "user",
            email: "user@domain.com",
            password: "hardpassword"
        },
    });

    const onSubmit = (data) => {
      
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">
                  Username:
                  <input
                    {...register("username", {
                      required: true,
                      minLength: {
                        value: 3,
                        message: "Username should contain at least 3 characters."
                      },
                      maxLength: {
                        value: 10,
                        message: "Username should not exceed 10 characters."
                      }
                    })}
                    name="username"
                    type="text"
                  />
                </label>
                <label htmlFor="email">
                  Email:
                  <input
                    {...register("email", {
                      required: true,
                      validate: {
                        isValidEmail: (value) =>
                          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                            value,
                          ) || "Email is not valid",
                      }
                    })}
                    name="email"
                    type="email"
                  />
                </label>
                <label htmlFor="password">
                  Password:
                  <input
                    {...register("password", {
                      required: true,
                      minLength: {
                        value: 8,
                        message: "Username should contain at least 8 characters."
                      },
                      maxLength: {
                        value: 12,
                        message: "Username should not exceed 12 characters."
                      }
                    })}
                    name="password"
                    type="password"
                  />
                </label>
                <button
                  type="submit"
                >
                  Update profile
                </button>
            </form>
        </div>
    );
}