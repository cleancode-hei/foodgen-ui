"use client";

import { UserInformationAccess } from "./UserInformationAccess";
import { Logo } from "./Logo";
import React from "react";

export default function Navbar(props) {
  return (
    <header data-testid="my-navbar" className="sticky top-0 w-full z-10">
      <nav
        className="mx-auto w-full bg-color-1 flex flex-row drop-shadow-xl"
        aria-label="navigation-bar for the generator page"
      >
        <div className="w-5/6">
          <Logo />
        </div>
        {props.user ? <UserInformationAccess user={props.user}/> : <></>}
      </nav>
    </header>
  );
}
