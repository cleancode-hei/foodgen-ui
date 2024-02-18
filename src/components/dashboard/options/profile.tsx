import { userProvider } from "@/providers";
import { User } from "@/types";
import { useState, useEffect } from "react";

export const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState(""); 

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await userProvider.findByOther({ token });
        setUser(fetchedUser);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [token]);

  return (
    <>
      <h1>Profile</h1>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </>
  );
};