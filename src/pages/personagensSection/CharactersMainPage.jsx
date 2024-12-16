import { useLocation } from "react-router-dom";
import './Characters.css';
import Navbar from "../../components/navbar/Navbar";
// import { CharactersList } from "./CharactersList";

export function CharactersMainPage() {

    const location = useLocation();
    const name = location.state.name;
    //const descricionSummary = location.state.descricionSummary;
    const descricion = location.state.descricion;
    const imageProfile = location.state.imageProfile;

    return (
        <div className="container-main">
            <Navbar />
            <div className="list-item content-list" key={name}>
                <img className="image-main" src={imageProfile} alt="" />
                <div className='list-text text-descricion'>
                    <h1 id="tittle">{name}</h1>
                    <p>{descricion}</p>
                </div>
            </div>
            {/* <CharactersList /> */}
        </div>
    )
}