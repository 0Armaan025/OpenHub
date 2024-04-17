import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const supabase = createClient(
   
  );

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
      } else {
        // Handle successful login (e.g., redirect to dashboard)
        console.log("User signed in successfully:", user);
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <>
      <Navbar />
      <center>
        <section className="">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1
                  className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
                  style={{ fontFamily: "Poppins" }}
                >
                  Log in
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                      style={{ fontFamily: "Poppins" }}
                    >
                      Your email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleChangeEmail}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                      style={{ fontFamily: "Poppins" }}
                    >
                      Your password:
                    </label>
                    <input
                      type="password"
                      onChange={handleChangePassword}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        for="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the{" "}
                        <a
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 bg-gray-700 hover:bg-gray-600 transition-all focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Log in
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    New to the platform?
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </center>
      <br />
      <Footer />
    </>
  );
}

export default LoginForm;
