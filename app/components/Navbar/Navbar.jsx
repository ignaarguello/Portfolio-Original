import Navbar_Desktop from "./Navbar_Desktop"
import Navbar_Mobile from './Navbar_Mobile'
import '../../styles/styles.css'

export default function Navbar() {
    return (
        <>
            <Navbar_Desktop id='navbar-desktop' />
            <Navbar_Mobile id='navbar-mobile' />
        </>
    )
}
