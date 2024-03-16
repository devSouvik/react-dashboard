import React from "react";
import "./style.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface iComp {
    id: number;
    name: string;
}

const DrawerComponent = ({ comp, id }: { comp: iComp; id: number }) => {
    //
    const { setNodeRef, attributes, listeners, transform, transition } =
        useSortable({ id });

    const style = { transition, transform: CSS.Transform.toString(transform) };

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className="drawer-component"
        >
            <p>{comp.name}</p>
        </div>
    );
};

export default DrawerComponent;
