import React from "react";
import "./style.css";
import DrawerComponent from "./drawerComponent/DrawerComponent.tsx";
import {
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";

interface iComponent {
    id: number | string;
    name: string;
}

const ComponentsDrawer = ({ components }: { components: iComponent[] }) => {
    return (
        <div className="components-drawer">
            <SortableContext
                items={components}
                strategy={verticalListSortingStrategy}
            >
                {components.map((comp) => {
                    return (
                        <DrawerComponent
                            id={comp.id}
                            key={comp.id}
                            comp={comp}
                        />
                    );
                })}
            </SortableContext>
        </div>
    );
};

export default ComponentsDrawer;
