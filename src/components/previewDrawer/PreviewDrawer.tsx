import React from "react";
import "./style.css";
import Card from "../blocks/card/Card.tsx";
import Header from "../blocks/header/Header.tsx";
import Paragraph from "../blocks/paragraph/Paragraph.tsx";

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
                if (component.name === "Paragraph") {
                    return <Paragraph content={component.content} />;
                }
            })}
        </div>
    );
};

export default PreviewDrawer;
