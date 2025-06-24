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

      {/* We use braces {} to be able to define a constant before returning */}
      {items.map((item, index) => { // <-- Change 1: Parenthesis to brace
        
        // The constant is defined here, inside the map block
        const isEditing = item.id === editingId;

        // Now we explicitly return the JSX
        return (
          <div key={item.id}>
            {/* The ternary operator for conditional rendering */}
            {isEditing ? (
              // If we are editing...
              <FormEducation
                initialData={item} // Pass the data of the current item
                onSave={(updatedItem) => { // Define what to do on save
                  onUpdateEducation(updatedItem); // Call the function from App
                  setEditingId(null); // Exit edit mode
                }}
                onCancel={() => { // Define what to do on cancel
                  setEditingId(null); // Simply exit edit mode
                }}
              />
            ) : (
              // If not, the normal view
              <div>
                <h3>Study #{index + 1}</h3>
                <p><strong>School: </strong>{item.school}</p>
                <p><strong>Degree: </strong>{item.degree}</p>
                <p><strong>Start Date: </strong>{item.startDate}</p>
                <p><strong>End Date: </strong>{item.endDate}</p>
                
                {/* Change 2: The Edit button should call setEditingId */}
                <button onClick={() => setEditingId(item.id)}>Edit</button>
                <button onClick={() => onDeleteEducation(item.id)}>Delete</button>
              </div>
            )}
          </div>
        ); // <-- Closing parenthesis of the return
      })} {/* <-- Closing brace and parenthesis of the map */}

      {/* Logic to add a new study */}
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