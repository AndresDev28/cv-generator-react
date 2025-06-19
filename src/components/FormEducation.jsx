import { useState } from 'react';

export default function FormEducation({onSave, onCancel}) {

  // ESTADO LOCAL: objeto para manejar los datos
  const [educationData, setEducationData] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: ''
  });

  // FUNCIÓN DE MANEJO: para actualizar el estado local
  function handleChange(e) {
    const {id, value} = e.target;
    setEducationData (prevData => ({
      ...prevData, // Copia todo lo que ya había
      [id]: value // Sobrescribe solo la propiedad que cambió
    }));
  }

  // FUNCIÓN DE ENVÍO: Se ejecuta cuando el form es enviado
  function handleSubmit(e) {
    e.preventDefault();
    // Llamamos la función que pasamos por props, dandole los datos del form y con su nuevo ID
    onSave({...educationData, id: crypto.randomUUID() });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="school"><strong>School: </strong></label>
      <input 
        type="text" 
        id="school" 
        value={educationData.school} 
        onChange={handleChange} />
      <label htmlFor="degree"><strong>Degree: </strong></label>
      <input 
        type="text" 
        id="degree" 
        value={educationData.degree} 
        onChange={handleChange} />  
      <label htmlFor="startDate"><strong>Start Date: </strong></label>
      <input 
        type="date" 
        id="startDate" 
        value={educationData.startDate} 
        onChange={handleChange} />
      <label htmlFor="endDate"><strong>End Date: </strong></label>
      <input 
        type="date" 
        id="endDate" 
        value={educationData.endDate} 
        onChange={handleChange} />

      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}
