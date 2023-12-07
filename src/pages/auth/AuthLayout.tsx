import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <div className="min-h-screen w-full bg-gradient-to-r bg-gradient-to-r from-violet-500 to-purple-500">
            <section className="h-5/6 w-full flex justify-center items-center ">
              <Outlet />
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default AuthLayout;
