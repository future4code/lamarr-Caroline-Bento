import React, {useState} from 'react'
import SectionComSuperior from '../SectionComSuperior/SectionComSuperior'
import SectionSemSuperior from '../SectionSemSuperior/SectionSemSuperior'
import SectionAgradecimento from '../SectionAgradecimento/SectionAgradeciomento';
function DadosGerais () {
    const [inputName, setInputName] = useState('');
    const [inputYear, setInputYear] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputSchooling, setInputSchooling] = useState('');
  
    
 

  return (
    <div>
      <form>
        <label htmlFor="name">Nome completo</label>
        <input 
        type="text" 
        name="name"
        onchange={(e)=> setInputName(e.target.value)}
        />

        <label htmlFor="years">Digite sua idade</label>
        <input 
        type="text" 
        name="years"
        onchange={(e)=> setInputYear(e.target.value)}
        />

        <label htmlFor= "email">Digite seu email</label>
        <input 
        type='email' 
        name= "email"
        onchange={(e)=> setInputEmail(e.target.value)}
        />

        <label>Escolaridade</label>
        <select value={inputSchooling} onChange={(e)=> setInputSchooling(e.target.value)}>
            <option value=" ">Selecione uma opção</option>
            <option value="ensinoMedioIncompleto">Ensino Médio Incompleto</option>
            <option value="ensinoMedioCompleto">Ensino Medio Completo</option>
            <option value="superiorIncompleto">Ensino Superior Incompleto</option>
            <option value="superiorCompleto">Ensino Superior Completo</option>
        </select>
      </form>
    </div>
  );
}

export default DadosGerais;