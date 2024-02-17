import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

export const ReactPortal = ({
  children,
  wrapperId,
}: {
  children: ReactNode;
  wrapperId: string;
}) => {
  let root = document.getElementById(wrapperId);
  if (!root) {
    root = createWrapperAndAppendToBody(wrapperId);
  }
  return createPortal(children, root);
};

export const Modal = ({
  children,
  open,
  handleClose,
}: {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <ReactPortal wrapperId="modal-wrapper">
      <div
        onClick={handleClose}
        className="fixed z-20 justify-center items-center top-0 w-[100vw] h-[100vh] bg-[#343434b7]"
        hidden={!open}
      >
        {children}
      </div>
    </ReactPortal>
  );
};

export const ModalContent = ({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "w-full h-full flex justify-center items-center",
        className,
      )}
      {...rest}
    />
  );
};
