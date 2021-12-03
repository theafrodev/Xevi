import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex w-full fixed p-5 justify-between bg-background dark:bg-dark lg:bg-transparent">
            <div className="brand font-bold text-2xl">
                <Link to="/">XVI</Link>
            </div>

            <div className="links">
                <ul className="flex gap-4">
                    <li>
                        <Link to="/">Pricing</Link>
                    </li>

                    <li>
                        <Link to="/">Privacy Policy</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;