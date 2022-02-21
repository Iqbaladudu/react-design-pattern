import { FunctionComponent } from 'react'
import { People } from './../App'

type Props = {
    person: Pick<People, "name" | "age">
}

export const SmallPersonListItem: FunctionComponent<Props> = ({ person }) => {
    const { name, age } = person

    return (
        <p>Name: {name}, Age: {age} years</p>
    )
}