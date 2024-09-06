import { NavLink } from "react-router-dom"

export const Error = () => {
    return (<div className="error">
        <h1>404❌</h1>
        <p>Oops! The page you’re looking for doesn’t exist.</p>
        <NavLink to="/" >Go to Home</NavLink>
    </div>)
}