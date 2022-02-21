import { ElementType, FunctionComponent } from "react";
import { People, Product } from "./App";

interface Props {
    items: People[] | Product[]
    resourceName: "person" | "product"
    ItemComponent: ElementType
}

export const RegularList: FunctionComponent<Props> = ({ items, resourceName, ItemComponent }) => {
    return (
        <>
            {items.map((item, i) => {
                return (
                    <ItemComponent key={i} {...{ [resourceName]: item }} />
                )
            })}
        </>
    )
}