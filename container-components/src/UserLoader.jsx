import React, { useState, useEffect } from "react"
import axios from "axios"

export const UserLoader = ({ userId, children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async () => {
            console.log("mulai");
            const response = await axios.get(`http://localhost:8080/users/${userId}`)
            console.log(response);
            console.log("Oke");
            setUser(response.data)
        })()
    }, [userId])

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