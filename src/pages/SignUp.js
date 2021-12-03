import React from "react";
import { Link } from "react-router-dom";
import ObLayout from "../components/ObLayout";

const SignUp = () => {
    return (
        <ObLayout imgRightTop="/assets/images/registerTop.svg" imgLeftBottom="assets/images/registerBottom.svg" imgDarkRightTop="assets/images/registerTopDark.svg" imgDarkLeftBottom="assets/images/registerBottomDark.svg">
            <div className="min-w-full my-10 text-center rounded-xl border dark:border-background border-dark bg-black text-background dark:bg-background dark:text-dark">

                <div className="p-10">
                    <h2 className="text-3xl pb-4">Register</h2>

                    <p>
                        Create an account and quickly become the real manager of your account
                    </p>
                </div>

                <div className="p-10 rounded-xl w-full text-left text-dark dark:text-background bg-background dark:bg-dark">
                    <form action="post">
                        <label htmlFor="fname" className="block">First Name</label>

                        <input type="text" id="fname" className="w-full rounded-lg p-2 mt-1 mb-4 border bg-background dark:bg-dark" />

                        <label htmlFor="lname" className="block">Last Name</label>

                        <input type="text" id="lname" className="w-full rounded-lg p-2 mt-1 mb-4 border bg-background dark:bg-dark" />

                        <label htmlFor="username" className="block">Twitter Username</label>

                        <input type="text" id="username" className="w-full rounded-lg p-2 mt-1 mb-4 border bg-background dark:bg-dark" />

                        <label htmlFor="password" className="block">Twitter Password</label>

                        <input type="password" id="password" className="w-full rounded-lg p-2 mt-1 mb-4 border bg-background dark:bg-dark" />

                        <button className="text-center w-full rounded-lg p-3 mt-3 mb-3 bg-dark dark:bg-background text-background dark:text-dark">Login with Twitter</button>
                    </form>

                    <p className="text-center mt-2">Already have an account? <Link className="underline" to="/">Sign In</Link></p>
                </div>

            </div>
        </ObLayout>
    );
}

export default SignUp;