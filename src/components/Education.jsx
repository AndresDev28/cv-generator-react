import { useState } from 'react';
import FormEducation from './FormEducation';

export default function Education({ items, onAddEducation, onDeleteEducation, onUpdateEducation }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingId, setEditingId] = useState(null);

  function handleSave(newItem) {
    onAddEducation(newItem);
    setIsFormVisible(false);
  }

  return (
    <section>
      <h2>Education</h2>

      {/* Usamos llaves {} para poder definir una constante antes de retornar */}
      {items.map((item, index) => { // <-- Cambio 1: Paréntesis a llave
        
        // La constante se define aquí, dentro del bloque del map
        const isEditing = item.id === editingId;

        // Ahora retornamos explícitamente el JSX
        return (
          <div key={item.id}>
            {/* El operador ternario para el renderizado condicional */}
            {isEditing ? (
              // Si estamos editando...
              <FormEducation
                initialData={item} // Pasa los datos del item actual
                onSave={(updatedItem) => { // Define qué hacer al guardar
                  onUpdateEducation(updatedItem); // Llama a la función de App
                  setEditingId(null); // Sale del modo edición
                }}
                onCancel={() => { // Define qué hacer al cancelar
                  setEditingId(null); // Simplemente sale del modo editar
                }}
              />
            ) : (
              // Si no, la vista normal
              <div>
                <h3>Study #{index + 1}</h3>
                <p><strong>School: </strong>{item.school}</p>
                <p><strong>Degree: </strong>{item.degree}</p>
                <p><strong>Start Date: </strong>{item.startDate}</p>
                <p><strong>End Date: </strong>{item.endDate}</p>
                
                {/* Cambio 2: El botón de Edit debe llamar a setEditingId */}
                <button onClick={() => setEditingId(item.id)}>Edit</button>
                <button onClick={() => onDeleteEducation(item.id)}>Delete</button>
              </div>
            )}
          </div>
        ); // <-- Cierre del paréntesis del return
      })} {/* <-- Cierre de la llave y paréntesis del map */}

      {/* Lógica para añadir un nuevo estudio */}
      {!isFormVisible ? (
        <button onClick={() => setIsFormVisible(true)}>
          Add Education
        </button>
      ) : (
        <FormEducation 
          onSave={handleSave}
          onCancel={() => setIsFormVisible(false)}
        />
      )}
    </section>
  );
}