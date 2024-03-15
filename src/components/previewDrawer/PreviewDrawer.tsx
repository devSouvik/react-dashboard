import React from "react";
import "./style.css";
import Card from "../blocks/card/Card.tsx";
import Header from "../blocks/header/Header.tsx";

const PreviewDrawer = ({ components }) => {
    return (
        <div className="preview-drawer">
            {components.map((component, index) => {
                if (component.name === "Card") {
                    return (
                        <Card
                            key={index}
                            title={component.title}
                            description={component.desc}
                        />
                    );
                }
                if (component.name === "Header") {
                    return <Header content={component.content} />;
                }
                // return <div className="" key={index}>{component.name}</div>;
            })}
        </div>
    );
};

export default PreviewDrawer;
