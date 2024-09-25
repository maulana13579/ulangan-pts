import '../Style/Navbar.css'
import cfc from '../assets/cfc.png';


function Navbar() {
return (
    <>
    <nav>
        <ul>
            <li>
            <img src={cfc} alt="cfc" />
            </li>
            <li>MENU</li>
            <li>LAYANAN</li>
            <li>PROMO</li>
            <li>HUBUNGI</li>
        </ul>
    </nav>
    </>
    )
}

export default Navbar