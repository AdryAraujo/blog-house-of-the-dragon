import './Modal.css';
import memeBlack from '../../assets/meme-black.jpg';
import memeGreen from '../../assets/memes-house-of-the-dragon-dragao-olho.jpg';

export function Modal({greenOpen, blackOpen, setCloseBlack, setCloseGreen}){
    if(greenOpen){
        return(
            <div className='container-modal'>
                <div className='content-modal'>
                    <p>Reveja seus conceitos e escolha o time certo</p>
                    <img id='image-green' src={memeGreen} alt="" />
                    <button className='buttons-close'onClick={setCloseGreen}>Fechar</button>
                </div>
            </div>
        )
    }
    if(blackOpen){
        return(
            <div className='container-modal'>
                <div className='content-modal'>
                    <p>Fogo nos verdes, Rhaenyra rainha resto nadinha</p>
                    <img id='image-black' src={memeBlack} alt="" />
                    <button className='buttons-close' onClick={setCloseBlack}>Fechar</button>

                </div>
            </div>
        )
    } return null
}