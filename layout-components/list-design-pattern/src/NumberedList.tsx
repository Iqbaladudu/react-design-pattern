import { ElementType, FunctionComponent } from "react";
import { People, Product } from "./App";

interface Props {
    items: People[] | Product[]
    resourceName: string
    ItemComponent: ElementType
}

export const NumberedList: FunctionComponent<Props> = ({ items, resourceName, ItemComponent }) => {
    return (
        <>
            {items.map((item, i) => {
                return (
                    <>
                        <h3>{i + 1}</h3>
                        <ItemComponent key={i} {...{ [resourceName]: item }} />
                    </>
                )
            })}
        </>
    )
}