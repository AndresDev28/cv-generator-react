import { useState } from 'react';

export default function FormEducation({onSave, onCancel, initialData}) {

  // Usa `initialData` para inicializar el estado.
  // Si `initialData` existe (modo edición), úsala.
  // Si no (modo añadir), usa un objeto vacío.

  // ESTADO LOCAL: objeto para manejar los datos
  const [educationData, setEducationData] = useState(
    initialData || {
    school: '',
    degree: '',
    startDate: '',
    endDate: ''
  }
);

  // FUNCIÓN DE MANEJO: para actualizar el estado local
  function handleChange(e) {
    const {id, value} = e.target;
    setEducationData (prevData => ({
      ...prevData, // Copia todo lo que ya había
      [id]: value // Sobrescribe solo la propiedad que cambió
    }));
  }

  // FUNCIÓN DE ENVÍO: Se ejecuta cuando el form es enviado (con el modo edición es un poco más inteligente)
  // Si estamos en modo edición, ya tenemos una ID
  function handleSubmit(e) {
    e.preventDefault();
    // Llamamos a onSave con los datos del formulario.
    // Si era una edición, la ID ya estaba en `educationData` desde `initialData`.
    // Si era una adición, le añadimos una nueva ID.
    // Si estamos en modo edicion, `initialData` existirá.
    const isEditingMode = Boolean(initialData);
    const finalData = {
      ...educationData, // Toma todos los datos del fomulario
      id: isEditingMode ? initialData.id : crypto.randomUUID() // Usa la ID correcta
    };
    onSave(finalData);
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
