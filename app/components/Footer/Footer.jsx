import { MdCopyright } from "react-icons/md";

export default function Footer() {
    return (
        <div id="container-general__Footer">
            <div id="container-nameAndLogo__Footer">
                <h2 className="text-footer__footer">Arguello Ignacio</h2>
                <MdCopyright id="logo-copyright__footer" />
            </div>
            |
            <div id="container-2__footer">
                <h2 className="text-footer__footer">Quilmes - Argentina</h2>
            </div>
            <h2 className="text-footer__footer">Desarrollado con React - Next 13</h2>
        </div>
    )
}