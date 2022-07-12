import React, {useState}from 'react'


function SectionComSuperior() {
   const [inputCourse, setInputCourse]= useState('');
   const [inputInstitution, setInputInstitution]= useState('');

    return (
        <div>
            <label htmlFor="course">Qual curso?</label>
            <input 
                type='text' 
                name='course'
                value= {inputCourse}
                onChange={(e) => setInputCourse (e.target.value)}
            />

            <label htmlFor="educationalInstitution">Em qual instituição de ensino?</label>
            <input 
            type='text' 
            name='educationalInstitution'
            value= {inputInstitution}
            onChange={(e) => setInputInstitution (e.target.value)}
            />
        </div>
    )
}


export default SectionComSuperior;