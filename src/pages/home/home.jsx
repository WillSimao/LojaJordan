import React from "react";

import Header from "../../components/header/header";
import background from '../../../public/images/wallpaper.png';

const Home = () => {

    return (
        <>
            <Header 
                topBar={'Ganhe R$ 10,00 de desconto no frete'}
                title={'jordanShoes'}
                background={{backgroundImage: `url(${background})`}}
                titleBg={'A melhor loja de Jordan'}
                paragraphBg={'O tênis Jordan é fruto de uma velha e forte parceria entre \n a Nike e o jogador Michael Jordan.'}
            />
        </>
    )
}

export default Home;