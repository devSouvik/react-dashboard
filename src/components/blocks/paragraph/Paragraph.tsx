import React from "react";
import "./style.css";

const Paragraph = ({ content }: { content: string }) => {
    return <p className="para-content">{content}</p>;
};

export default Paragraph;
