import React from 'react'
import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'


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

  const [educationList, setEducationList] = useState([{
    id: crypto.randomUUID(),
    school: 'Universidad Central de Venezuela',
    degree: 'Licenciatura en Ciencias de la Computación',
    startDate: '2018',
    endDate: '2023'
  }])

  /**
   * Agrega un nuevo objeto de estudio a la lista de educación
   * Esta función sigue el principio de inmutabilidad de React.
   * @param {object} newEducationItem - El nuevo objeto de estudio a añadir.
   */
  function handleAddEducation(newEducationItem) {
    // Usamos la función de actualización de estado `setEducationList`.
    // Le pasamos una función para garantizar que operamos sobre el estado más reciente.
    // `prevList` est el valor actual del array `educationList` que nos proporciona React.
    setEducationList(prevList => [
      // 1. Usamos el 'spread operator'(...) para crear una copia superficial en `prevList`.
      ...prevList,
      // 2. Agregamos el `newEducationItem`al final de esa nueva copia del array.
      newEducationItem]);
      // React recibel este array completamente nuevo, detecta el cambio y re-renderiza el componente
  }

  /**
   * Elimina un objeto de la lista de estudio
   * @param {string} itemToDelete - La ID del estudio a eliminar
   */
  function handleDeleteEducation(idToDelete) {
    setEducationList(prevList => [
      // .filter() ya crea y devuelve un nuevo array.
      // Simplemente retornamos el resultado de la operación de filtrado.
      ...prevList.filter(item => item.id !== idToDelete)])
  }

  /**
   * Edita un objeto en la lista de estudio
   * @param {object} updatedItem
   */
  function handleUpdateEducation(updatedItem) {
    setEducationList(prevList => 
      prevList.map(item => 
        item.id === updatedItem.id ? updatedItem : item
      )
    );
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
      <Education
        items={educationList}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
        onUpdateEducation={handleUpdateEducation}
      />
    </>
  )
}

export default App
