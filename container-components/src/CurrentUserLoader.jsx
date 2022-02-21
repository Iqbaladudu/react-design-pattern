import React, { useState, useEffect } from "react"
import axios from "axios"

export const CurrentUserLoader = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async () => {
            console.log("mulai");
            const response = await axios.get('http://localhost:8080/current-user')
            console.log(response);
            console.log("Oke");
            setUser(response.data)
        })()
    }, [])

    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { user })
                }
                return child
            })}
        </>
    )
}