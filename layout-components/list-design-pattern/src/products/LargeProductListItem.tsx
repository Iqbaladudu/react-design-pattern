import { FunctionComponent } from 'react'

export interface Product {
    name: string
    price: string
    description: string
    rating: number
}

interface Props {
    product: Product
}

export const LargeProductListItem: FunctionComponent<Props> = ({ product: { name, price, description, rating } }) => {

    return (
        <>
            <h3>{name}</h3>
            <p>{price}</p>
            <h3>Description:</h3>
            <p>{description}</p>
            <p>Average Rating: {rating}</p>
        </>
    )
}