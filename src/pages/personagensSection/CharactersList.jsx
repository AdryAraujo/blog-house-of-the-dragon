import { useEffect, useRef, useState } from 'react';
import './Characters.css';

export function CharactersList() {

    // const navigate = useNavigate();
    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetch('http://localhost:5173/static/data.json')
            .then((response) => response.json())
            .then(setData);
    }, []);

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
                                <button className='button-learn'>Saiba Mais</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}