import { useState } from 'react';
import FormEducation from './FormEducation';

// Recibe la lista 'items' y la función 'onAddEducation' de App.jsx
export default function Education({items, onAddEducation}) {

  // Estado local para controlar si el formulario es visible.
  const [isFormVisible, setIsFormVisible] = useState(false)

  // Función para manejar el guardado que viene de FormEducation
  function handleSave(newItem) {
    // 1. Llama a la función que viene de App.jsx
    onAddEducation(newItem);
    // 2. Oculta el formulario despues de guardar
    setIsFormVisible(false);
  }

  return (
    <section>
      <h2>Education</h2>

      {items.map((item, index) => (
        <div key={item.id}>
          <h3>Study #{index + 1}</h3>
          <p><strong>School: </strong>{item.school}</p>
          <p><strong>Degree: </strong>{item.degree}</p>
          <p><strong>Start Date: </strong>{item.startDate}</p>
          <p><strong>End Date: </strong>{item.endDate}</p>
        </div>
      ))}

      {!isFormVisible ? (
        <button
          onClick={() => setIsFormVisible(true)}>
          Add Education
        </button>
      ) : (
        <FormEducation 
          onSave={handleSave}
          onCancel={() => setIsFormVisible(false)}
        />
      )}
    </section>
  )
}