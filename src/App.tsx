import React, { useState } from "react";
import "./App.css";
import Navbar from "../src/components/navbar/Navbar.tsx";
import ComponentsDrawer from "./components/componentsDrawer/ComponentsDrawer.tsx";
import PreviewDrawer from "./components/previewDrawer/PreviewDrawer.tsx";
import PropertiesDrawer from "./components/propertiesDrawer/PropertiesDrawer.tsx";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

function App() {
    const [components, setComponents] = useState([
        { id: 1, name: "Card", title: "card title", desc: "card description" },
        {
            id: 2,
            name: "Card",
            title: "card title 1",
            desc: "card description 1",
        },
        {
            id: 3,
            name: "Card",
            title: "card title 2",
            desc: "card description 2",
        },
        {
            id: 4,
            name: "Header",
            content: "this is the header",
        },
        { id: 5, name: "Card", title: "card title", desc: "card description" },
        {
            id: 6,
            name: "Card",
            title: "card title 1",
            desc: "card description 1",
        },
        {
            id: 7,
            name: "Card",
            title: "card title 2",
            desc: "card description 2",
        },
        // {
        //     id: 8,
        //     name: "Header",
        //     content: "this is the header",
        // },
        // { id: 9, name: "Card", title: "card title", desc: "card description" },
        // {
        // id: 10,
        // name: "Card",
        // title: "card title 1",
        // desc: "card description 1",
        // },
        // {
        //     id: 11,
        //     name: "Card",
        //     title: "card title 2",
        //     desc: "card description 2",
        // },
        // {
        //     id: 12,
        //     name: "Header",
        //     content: "this is the header",
        // },
    ]);

    function getComponentsPos(id: number | string) {
        return components.findIndex((component) => component.id === id);
    }

    function handleDragEnd(event: { active: any; over: any }) {
        const { active, over } = event;
        if (active.id === over.id) return; // checks if the original position is same as new position

        setComponents((compos): any => {
            const originalPos = getComponentsPos(active.id);
            const newPos = getComponentsPos(over.id);

            return arrayMove(compos, originalPos, newPos);
        });
    }

    return (
        <div className="App">
            <Navbar />
            <div className="drawers">
                <DndContext
                    collisionDetection={closestCorners}
                    onDragEnd={handleDragEnd}
                >
                    <ComponentsDrawer
                        components={components}
                        setComponents={setComponents}
                    />
                </DndContext>
                <PreviewDrawer components={components} />
                <PropertiesDrawer />
            </div>
        </div>
    );
}

export default App;
