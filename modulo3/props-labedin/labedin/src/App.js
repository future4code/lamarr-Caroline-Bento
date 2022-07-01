import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import foto from './img/foto.jpg';
import tjmg from './img/tjmg.jfif';
import fuscao from './img/fuscao.jpg';
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto}
          nome="Caroline de Ávila Dias Bento" 
          descricao="Olá, sou Caroline, mas podem me chamar de Carol ou Ávila (ou como preferir). Tenho 21 anos, 2 gatos e 1 video game. Sou estudante Labenu e feliz por finalmente fazer algo que me motiva.
          Gosto de ver Star Wars e também de pôr-do-sol. Sei que possa ter parecido estranho nesa leitura, mas na próxima você entende. Caso contrário, minhas redes sociais está lá embaixo."
        />
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
          <CardPequeno
            frase="Email:"
            endereco="avelan@gmail.com"
          />
          <CardPequeno
            frase="Endereço:"
            endereco="Rua dos ladrilhos, 07 "
          />

      </div>     
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={tjmg}
          nome="TJMG - São João del-Rei" 
          descricao="Estagiária trabalhando o tripo de servidor." 
        />
        
        <CardGrande 
          imagem={fuscao} 
          nome="Palpiteira em problemas de automóveis antigos" 
          descricao="Assisto tanto vídeo de carros que já me sinto quase com uma oficina montada. Acredito fielmente que resolver esses problemas de lasanhas (carros mais velhos que o velho do rio) vai me ajudar a programar" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
