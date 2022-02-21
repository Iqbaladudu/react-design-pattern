import React, { useState, useEffect } from "react"
import axios from "axios"

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
    const [state, setState] = useState(null)

    useEffect(() => {
        (async () => {
            console.log("mulai");
            const response = await axios.get(resourceUrl)
            console.log(response);
            console.log("Oke");
            setState(response.data)
        })()
    }, [resourceUrl])

    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [resourceName]: state })
                }
                return child
            })}
        </>
    )
}