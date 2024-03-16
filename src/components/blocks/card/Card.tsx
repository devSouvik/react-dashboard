import React from "react";
import "./style.css";

const Card = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    return (
        <div className="card-element">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;
