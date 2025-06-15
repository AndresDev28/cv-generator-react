import React from 'react'
import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'


function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  function handleGeneralInfoChange(e) {
    const { id, value } = e.target;
    setGeneralInfo (prevInfo => ({
      ...prevInfo, // Copia todo lo que ya había
      [id]: value // Sobrescribe solo la propiedad que cambió
    }));
  }

  return (
    <>
      <h1>CV-Generator</h1>
      <GeneralInfo
        data={generalInfo}
        onDataChange={handleGeneralInfoChange}
      />
    </>
  )
}

export default App
