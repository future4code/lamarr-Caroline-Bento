import React, {useState}from 'react'


function SectionSemSuperior() {
    const [inputNoCourse, setInputNoCourse] = useState('');
    const [inputComplementaryCourse, setInputComplementaryCourse] = useState('');
    return (
        <div>
            <label htmlFor= "noCourse">Por que você não terminou o curso de graduação?</label>
            <input 
            type="text" 
            id="noCourse" 
            name="noCourse"
            value = {inputNoCourse}
            onChange={(e)=> setInputNoCourse (e.target.value)} 
            />
            <label htmlFor= "complementaryCourse">Você fez algum curso complementar?</label>
            <select
            type="text" 
            id="complementaryCourse" 
            name="complementaryCourse"
            value = {inputComplementaryCourse}
            onChange={(e)=> setInputComplementaryCourse (e.target.value)} 
            >
                <option value= " "> Selecione uma opção</option>
                <option value= "technicalCourse">Curso Técnico</option>
                <option value= "englishCourse">Curso de Inglês</option>
                <option value= "noCurseComplementaryNow"> Não fiz curso complementar</option>
            </select>
        </div>
    )
}

export default SectionSemSuperior;