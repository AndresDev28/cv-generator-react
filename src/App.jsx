import React from 'react'
import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'


function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [isEditing, setIsEditing] = useState(true);

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
        isEditing={isEditing}
        onSubmit={() => setIsEditing(false)} // Pasamos una función que cambia el estado
        onEdit={() => setIsEditing(true)} // Y otra para la acción contraria
      />
    </>
  )
}

export default App
