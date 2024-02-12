import { useEffect, useState } from "react";
import Navbar from "./food/generator/navbar";
import { authProvider } from "../provider/authProvider/clientSide";
import ProvideToken from "../provider/sessionProvider";
import { useRouter } from "next/navigation";

function IsAuthenticatedLogique({ children, token }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (token !== "" && token !== null) {
      authProvider
        .whoami(token)
        .then((user) => {
          setUser(user);
        })
        .catch((err) => {
          sessionStorage.removeItem(process.env.NEXT_PUBLIC_SESSION);
          router.push("/login");
        });
    }
  }, [token, router]);

  return (
    <>
      <Navbar user={user} />
      {user ? children : <></>}
    </>
  );
}

export default function IsAuthenticated({ children }) {
  return (
    <ProvideToken
      Component={({ token }) => {
        console.log(token);
        return (
          <IsAuthenticatedLogique token={token}>
            {children}
          </IsAuthenticatedLogique>
        );
      }}
    />
  );
}
