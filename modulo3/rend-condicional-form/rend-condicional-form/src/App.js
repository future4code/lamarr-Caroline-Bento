import React, {useState} from 'react'
import DadosGerais from './components/DadosGerais/DadosGerais'
import SectionAgradecimento from './components/SectionAgradecimento/SectionAgradeciomento';
import SectionComSuperior from './components/SectionComSuperior/SectionComSuperior'
import SectionSemSuperior from './components/SectionSemSuperior/SectionSemSuperior';

function App() {
  
  
  return (
    <div>
      <DadosGerais/>
      <button onClick={SectionComSuperior}>Próxima etapa</button>
      
    </div>
  )
}

export default App;
