import React from "react";
import ObLayout from "../components/ObLayout";
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <ObLayout imgLeftTop="/assets/images/signTop.svg" imgRightBottom="assets/images/signBottom.svg" imgDarkLeftTop="assets/images/signTopDark.svg" imgDarkRightBottom="assets/images/signBottomDark.svg">
            <div className="min-w-full my-10 text-center rounded-xl border dark:border-background border-dark bg-black text-background dark:bg-background dark:text-dark">

                <div className="p-10">
                    <h2 className="text-3xl pb-4">Sign In</h2>

                    <p>
                        Log into your account to take control of what matters to you
                    </p>
                </div>

                <div className="p-10 rounded-xl w-full text-left text-dark dark:text-background bg-background dark:bg-dark">
                    <form action="post">
                        <label htmlFor="username" className="block">Username</label>

                        <input type="text" id="username" className="w-full rounded-lg p-2 mt-1 mb-4 border bg-background dark:bg-dark" />

                        <label htmlFor="password" className="block">Password</label>

                        <input type="password" className="w-full rounded-lg p-2 mt-1 mb-4 border bg-background dark:bg-dark" />

                        <button className="text-center w-full rounded-lg p-3 mt-3 mb-3 bg-dark dark:bg-background text-background dark:text-dark">Login with Twitter</button>
                    </form>

                    <p className="text-center mt-2">Don't have an account? <Link className="underline" to="/SignUp">Register Now</Link></p>
                </div>

            </div>
        </ObLayout>
    );
}

export default SignIn;