import React, { useState } from "react";
import "./style.css";
import DrawerComponent from "./drawerComponent/DrawerComponent.tsx";
import {
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";

interface iComponent {
    id: number;
    name: string;
}

const ComponentsDrawer = ({
    components,
    setComponents,
}: {
    components: iComponent[];
    setComponents: any;
}) => {
    const [openDropDown, setOpenDropDown] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState("Select");

    let count = components.length;

    count = count + 1;

    function handleClickPlus() {
        setOpenDropDown(!openDropDown);
    }

    function handleChange(e: {
        target: { value: React.SetStateAction<string> };
    }) {
        setSelectedComponent(e.target.value);
    }

    function handleClickAddComponent() {
        let compData = {};

        if (selectedComponent === "Header") {
            compData = {
                id: count,
                type: "Header",
                name: "Header",
                content: "This is a new heading",
            };
        }
        if (selectedComponent === "Card") {
            compData = {
                id: count,
                type: "Card",
                name: "Card",
                title: "card title 1",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequuntur nam nobis debitis eveniet molestias iure ad perferendis fugiat amet vitae magnam maiores, sapiente odit. Alias tenetur id nesciunt ab!",
            };
        }
        if (selectedComponent === "Paragraph") {
            compData = {
                id: count,
                name: "Paragraph",
                type: "Paragraph",
                componentName: "new Paragraph",
                content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, porro enim quo vero labore cupiditate beatae optio mollitia autem iure eum? Dolorum omnis ut eveniet maxime sequi ipsa libero minima.",
            };
        }

        setComponents([...components, compData]);
    }

    return (
        <div className="components-drawer">
            <SortableContext
                items={components}
                strategy={verticalListSortingStrategy}
            >
                {components.map((comp: iComponent) => {
                    return (
                        <DrawerComponent
                            id={comp.id}
                            key={comp.id}
                            comp={comp}
                        />
                    );
                })}
            </SortableContext>
            <button onClick={handleClickPlus}>➕</button>
            {openDropDown && (
                <div className="drop-down">
                    <select onChange={handleChange} name="" id="comp-list">
                        <option value="Select">Select</option>
                        <option value="Header">Heading</option>
                        <option value="Card">Card</option>
                        <option value="Paragraph">Paragraph</option>
                    </select>
                    <button
                        disabled={selectedComponent == "Select"}
                        onClick={handleClickAddComponent}
                    >
                        Add Component
                    </button>
                </div>
            )}
        </div>
    );
};

export default ComponentsDrawer;
