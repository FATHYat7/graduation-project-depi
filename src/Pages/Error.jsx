import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="text-center" style={{ maxWidth: "600px" }}>
                <h1 className="display-3 fw-bold mb-3">404 Not Found</h1>
                <p className="text-muted fs-5 mb-4">Your visited page not found. You may go home page.</p>
                <Link to="/" className="btn btn-danger btn-md px-5 py-2">
                    Back to home page
                </Link>
            </div>
        </div>
    );
}
