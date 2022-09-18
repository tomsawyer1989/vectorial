import React from "react";
import HeaderComponent from "./HeaderComponent";

function DefaultLayout({ children }) {
    return (
        <div className="vh-100 d-flex flex-column justify-content-between">
            <HeaderComponent />
            <div className="container mt-4 mb-4" style={{ flex: 'auto' }}>
                { children }
            </div>
        </div>
    );
}

export default DefaultLayout;