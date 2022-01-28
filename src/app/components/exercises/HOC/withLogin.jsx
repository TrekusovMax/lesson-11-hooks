import React, { useState } from "react";
import CardWrapper from "../../common/Card";

const withLogin = (Component) => (props) => {
    const [text, setText] = useState("Войти");
    const isAuth = localStorage.getItem("auth");

    const handleLogin = () => {
        localStorage.setItem("auth", true);
        setText("Выйти из системы");
    };
    const handleLogout = () => {
        localStorage.setItem("auth", false);
        setText("Войти");
    };
    return (
        <>
            <CardWrapper>
                <Component
                    isAuth={isAuth}
                    onLogin={handleLogin}
                    onLogOut={handleLogout}
                    text={text}
                />
            </CardWrapper>
        </>
    );
};

export default withLogin;
