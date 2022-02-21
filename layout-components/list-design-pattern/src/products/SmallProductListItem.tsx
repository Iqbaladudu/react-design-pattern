import { FunctionComponent } from "react";
import { Product } from "../App";

interface Props {
    product: Pick<Product, "name" | "price">
}

export const SmallProductListItem: FunctionComponent<Props> = ({ product: { name, price } }) => {
    return (
        <h3>{name} - {price}</h3>
    )
}