import React from "react";
import CardWrapper from "../../common/Card";
const withPropsStyles = (Component) => (props) => {
    const isLogin = localStorage.getItem("auth");
    return (
        <CardWrapper>
            <Component {...props} isAuth={isLogin} />
        </CardWrapper>
    );
};

export default withPropsStyles;
