import { Link, useLocation } from "react-router"
export const Header = () => {
    const location = useLocation();
    return (
        <>
            <header className="headerContainer space-x-8 ml-40">
                <Link to="/" className={`${location.pathname === "/" ? "text-blue-700" : ""} font-bold`}>Home</Link>
                <Link to="/form" className={`${location.pathname === "/form" ? "text-blue-700" : ""} font-bold`}>Form</Link>
                <Link to="/about" className={`${location.pathname === "/about" ? "text-blue-700" : ""} font-bold`}>About Us</Link>
                <Link to="/product" className={`${location.pathname === "/product" ? "text-blue-700" : ""} font-bold`}>Products</Link>
            </header>
        </>
    )
}

export const Footer = () => {
    return (
        <>
            <footer className="footerContainer">
                <h1>My Footer</h1>
            </footer>
        </>
    )
}