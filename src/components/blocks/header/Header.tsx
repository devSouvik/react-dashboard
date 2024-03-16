import React from "react";
import "./style.css";

const Header = ({ content }: { content: string }) => {
    return <div className="header">{content}</div>;
};

export default Header;
