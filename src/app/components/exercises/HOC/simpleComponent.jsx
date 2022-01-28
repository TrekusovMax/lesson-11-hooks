import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ isAuth, onLogin, onLogOut, text }) => {
    const handleToggleAuth = (isAuth) => {
        isAuth === "true" ? onLogOut() : onLogin();
    };
    return (
        <button
            className="btn btn-primary"
            onClick={() => handleToggleAuth(isAuth)}
        >
            {text}
        </button>
    );
};
SimpleComponent.propTypes = {
    isAuth: PropTypes.string,
    text: PropTypes.string,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};
export default SimpleComponent;
