import { Navbar } from "../../component"

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <div>{props.children}</div>
        </div>
    )
}

export default Layout;