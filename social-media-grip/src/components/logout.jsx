import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './logout.css';

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button className="logout_btn scale-in-ver-bottom" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            <span className="text-focus-in">Log Out</span>
        </button>
    );
};

export default LogoutButton;