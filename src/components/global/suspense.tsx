import { ReactNode, Suspense } from "react";

type props<T> = {
  children: ReactNode;
  wait: T | null;
};

export function LoadingBoundary<T>({ children, wait }: props<T>) {
  return (
    <Suspense fallback={<>loading</>}>
      {wait !== null ? children : <>loading</>}
    </Suspense>
  );
}
