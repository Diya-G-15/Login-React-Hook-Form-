
import React from "react";
import {useForm} from "react-hook-form";
import "./index.css";
import rightImage from "./images/rightimage.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";


const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    // Simulating an API call
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center items-center  px-8">
        <div className="w-3/4">
          <h1 className="text-4xl font-bold mb-6 text-gray-800 text-left">Welcome back!</h1>
          <p className="text-gray-600 mb-8 text-left">
            Enter your credentials to access your account
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Input */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2 text-left"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-400"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2 text-left"
                >
                  Password
                </label>
                <a
                  href="/forgot-password"
                  className="text-blue-600 text-sm hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-400"
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                  {...register("rememberMe")}
                />
                <span className="ml-2 text-gray-700">Remember me for 30 days</span>
              </label>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-lg ${
                isSubmitting
                  ? "bg-green-600 text-white cursor-not-allowed"
                  : "bg-green-800 text-white hover:bg-green-700"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging In" : "Login"}
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="my-8 flex items-center w-3/4">
          <div className="flex-grow border-t border-gray-200"></div>
          <h2 className="px-3 text-gray-500 text-sm font-medium">Or</h2>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>



        {/* Social Login Buttons */}
        <div className="flex justify-around gap-10 mt-6 w-3/4">
          {/* Google Button */}
          <button className="flex items-center justify-center bg-gray-100 border border-gray-300 p-1 rounded-lg hover:bg-gray-200 w-3/4">
            <FcGoogle className=' text-2xl mr-2' />
            Sign in with Google
          </button>

          {/* Apple Button */}
          <button className="flex items-center justify-center bg-gray-100 border border-gray-300 p-1 rounded-lg hover:bg-gray-200 w-3/4">
            <FaApple className='text-2xl mr-2' />
            Sign in with Apple
          </button>
        </div>



        {/* Sign Up Link */}
        <p className="mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>

      {/* Right Section */}
      <div className="w-1/2">
        <img
          src={rightImage}
          alt="Right"
          className="w-full h-full object-cover"
          style={{ borderTopLeftRadius: '40px', borderBottomLeftRadius: '40px' }}
        />
      </div>
    </div>
  );
};

export default LoginPage;
