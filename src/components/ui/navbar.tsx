import { cn } from "@/lib/utils";
import {} from "@radix-ui/react-context";
import React, { HTMLAttributes, ReactNode } from "react";

export const Navbar = ({
  className = "",
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <nav className={`h-[60px] w-full sticky z-10 p-2 ${className}`} {...rest}>
      <div
        className={`h-full rounded-xl overflow-hidden px-2 w-full bg-[--color-2] relative flex flex-row ${className}`}
      >
        {children}
      </div>
    </nav>
  );
};

export const UserInformation = ({
  className = "",
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`absolute h-full flex flex-row items-center right-0 bg-gray-300 ${className}`}
      {...rest}
    >
      <div className="h-full flex flex-row">{children}</div>
    </div>
  );
};

export const LogoPart = ({
  className = "",
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`h-full flex items-center right-0 bg-gray-300 ${className}`}
      {...rest}
    >
      <div>{children}</div>
    </div>
  );
};

export const UserName = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={cn("items-center flex", className)} {...rest}>
      <div>{children}</div>
    </span>
  );
};

export const Logo = ({
  src,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img src={src} alt="logo" width={40} height={40} {...rest} />;
};

export const AvatarPlace = ({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...rest}
      className={cn("flex justify-center items-center", className)}
    />
  );
};
