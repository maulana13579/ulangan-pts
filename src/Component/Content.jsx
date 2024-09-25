import '../Style/Content.css'
import image1 from '../assets/isi1.jpg'
import image2 from '../assets/isi2.jpg'
import image3 from '../assets/isi3.jpg'
import baner from '../assets/pala.jpg'



function Content() {
return (
    <>
    <div className="baner">
    <img src={baner} alt="" className="baner" />
    </div>
    {/* <div className="isi1">
    Menjadi merek makanan cepat saji terdepan di Indonesia dengan menyediakan produk berkualitas dan layanan terbaik yang dapat dinikmati oleh seluruh keluarga
    </div>

    <div className="isi2">
    Menyediakan makanan berkualitas, pelayanan cepat dan ramah, serta berinovasi dalam menciptakan menu yang terjangkau dan sesuai dengan kebutuhan pelanggan
    </div> */}

    <div className="produk">
                <h1 className='title'>PROMO TERBARU!!!</h1>
                <br />  
            </div>
            <div className="tables">
                <ul>
                    <li>
                        <div className="kotak1">
                        <img src={image1} alt="" className="isikotak" />
                        <h2>PAKET KATERING</h2>
                        </div>
                    </li>
                    <li>
                        <div className="kotak2">
                        <img src={image2} alt="" className="isikotak" />
                        <h2>MENU RICEBOWL</h2>
                        </div>
                    </li>
                    <li>
                        <div className="kotak3">
                        <img src={image3} alt="" className="isikotak" />
                        <h2>PROMO BOKS</h2>
                        </div>
                    </li>
                </ul>
            </div>
    </>
    )
}

export default Content