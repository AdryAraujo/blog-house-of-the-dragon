import { useEffect, useRef, useState } from 'react';
import './Characters.css';
import { Navigate, useNavigate } from 'react-router-dom';

export function CharactersList() {

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetch('https://blog-house-of-the-dragon.vercel.app/static/data.json')
            .then((response) => response.json())
            .then(setData);
    }, []);

    function handleRedirectToInfo(name, descricion, image) {
        navigate(`/personagemEscolhido`, { state: { name, descricion, image } }); // Redireciona com state
        console.log("chegou aqui")
      }

    return (
        <div>
            <div className='container-list' ref={carousel}>
                {data.map((item) => {
                    const { name, image, descricionSummary, descricion } = item
                    return (
                        <div className="list-item" key={name}>
                            <img src={image} alt="" />
                            <div className='list-text'>
                                <h2>{name}</h2>
                                <p>{descricionSummary}</p>
                                <button 
                                className='button-learn'
                                onClick={() => handleRedirectToInfo(name, descricion, image)}
                                >Saiba Mais</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}