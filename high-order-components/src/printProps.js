export const printProps = Components => {
    return (props) => {
        console.log(props)
        return <Components {...props} />
    }
}