"use client"

import { useEffect } from "react";
import ReactPortal from "./ReactPortal";
import React from "react";
import CrossIcon from "@/app/components/Icons/CrossIcon";

export default function Modal ({ children, isOpen, handleClose, className}) {
  //close modal on escape key press
  useEffect(() => {
    const closeOnEscape = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscape);
    };
  }, [handleClose]);

  //disable scrolling website scoll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="modal-wrapper">
      <div data-testId="modal-rendered">
        <div className="fixed top-0 left-0 w-screen h-screen z-40 bg-color-2 backdrop-blur-sm opacity-60" />
        <div className={`fixed rounded-xl justify-center flex flex-col box-border overflow-auto p-5 bg-[--color-white] inset-y-12 inset-x-12 z-50 opacity-100 ${className}`}>
          <button className="absolute top-4 right-4" onClick={handleClose}>
            <CrossIcon />
          </button>
          <div className="box-border h-5/6">{children}</div>
        </div>
      </div>
    </ReactPortal>
  );
}
