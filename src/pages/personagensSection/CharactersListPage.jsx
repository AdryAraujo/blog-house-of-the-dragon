import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import './Characters.css';
import { CharactersList } from "./CharactersList";

export function CharactersListPage() {

    return (
        <div className="container-pai">
            <Navbar/>
            <h1 id="tittle">Personagens em Destaque</h1>
            <CharactersList />
            <Footer/>
        </div>
    )
}