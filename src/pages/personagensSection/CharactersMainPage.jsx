import { useLocation } from "react-router-dom";
import './Characters.css';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export function CharactersMainPage() {

    const location = useLocation();
    const name = location.state.name;
    const descricion = location.state.descricion;
    const image = location.state.image;

    return (
        <div className="container-main">
            <Navbar />
            <div className="list-item content-list" key={name}>
                <img className="image-main" src={image} alt="" />
                <div className='list-text text-descricion'>
                    <h1>{name}</h1>
                    <p>{descricion}</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}