import { useState } from "react";
import logo from "../../assets/logo.png";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="w-[360px] bg-white rounded-2xl shadow-xl p-6">

                {/* LOGO */}
                <div className="text-center mb-4">
                    <img src={logo} alt="Medi Connect" className="w-24 mx-auto mb-2" />
                    <h2 className="text-2xl font-bold">
                        <span className="text-blue-600">Medi</span>
                        <span className="text-red-500">Connect</span>
                    </h2>
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-center">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h3>
                <p className="text-sm text-gray-500 text-center mb-4">
                    {isSignIn
                        ? "Enter your credentials to sign in"
                        : "Create your new account"}
                </p>

                {/* FULL NAME – SIGN UP ONLY */}
                {!isSignIn && (
                    <>
                        <label className="text-sm font-medium">
                            Full Name<span className="text-red-500">*</span>
                        </label>
                        <div className="relative mt-1">
                            <input
                                type="text"
                                placeholder="Oliver Bennett"
                                className="input pl-10"
                            />
                            <span className="absolute left-3 top-4 text-gray-400">👤</span>
                        </div>
                    </>
                )}

                {/* EMAIL – BOTH */}
                <label className="text-sm font-medium mt-4 block">
                    Email
                </label>
                <div className="relative mt-1">
                    <input
                        type="email"
                        placeholder="OliverBennett12@gmail.com"
                        className="input pl-10"
                    />
                    <span className="absolute left-3 top-4 text-gray-400">✉️</span>
                </div>

                {/* PASSWORD – BOTH */}
                <label className="text-sm font-medium mt-4 block">
                    Password<span className="text-red-500">*</span>
                </label>
                <div className="relative mt-1">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        className="input pl-10 pr-10"
                    />
                    <span className="absolute left-3 top-4 text-gray-400">🔒</span>
                    <span
                        className="absolute right-3 top-4 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        👁️
                    </span>
                </div>

                {/* CONFIRM PASSWORD – SIGN UP ONLY */}
                {!isSignIn && (
                    <>
                        <label className="text-sm font-medium mt-4 block">
                            Confirm Password<span className="text-red-500">*</span>
                        </label>
                        <div className="relative mt-1">
                            <input
                                type={showConfirm ? "text" : "password"}
                                placeholder="********"
                                className="input pl-10 pr-10"
                            />
                            <span className="absolute left-3 top-4 text-gray-400">🔒</span>
                            <span
                                className="absolute right-3 top-4 cursor-pointer"
                                onClick={() => setShowConfirm(!showConfirm)}
                            >
                                👁️
                            </span>
                        </div>
                    </>
                )}

                {/* FORGOT PASSWORD – SIGN IN ONLY */}
                {isSignIn && (
                    <p className="text-right text-sm text-blue-600 cursor-pointer mt-2">
                        Forgot Password?
                    </p>
                )}

                {/* REMEMBER ME – SIGN UP ONLY */}
                {!isSignIn && (
                    <div className="flex items-center mt-4 text-sm">
                        <input type="checkbox" className="mr-2" />
                        Remember me
                    </div>
                )}

                {/* BUTTON */}
                <button className="w-full mt-5 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold">
                    {isSignIn ? "LOGIN" : "SIGN UP"}
                </button>

                {/* SOCIAL LOGIN – BOTH */}
                <p className="text-center text-sm text-gray-400 my-4">
                    Or continue with
                </p>

                <div className="flex gap-3">
                    <button className="flex-1 border rounded-xl py-2 flex items-center justify-center gap-2">
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google logo"
                            className="w-5"
                        />
                        Google
                    </button>

                    <button className="flex-1 border rounded-xl py-2 flex items-center justify-center gap-2">
                        <img
                            src="https://www.svgrepo.com/show/511330/apple-173.svg"
                            alt="Apple logo"
                            className="w-5"
                        />
                        Apple
                    </button>
                </div>

                {/* SWITCH */}
                <p className="text-center text-sm mt-4">
                    {isSignIn
                        ? "Don’t have an account?"
                        : "Already have an account?"}
                    <span
                        className="text-blue-600 cursor-pointer font-medium"
                        onClick={() => setIsSignIn(!isSignIn)}
                    >
                        {isSignIn ? " Sign Up" : " Sign In"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;