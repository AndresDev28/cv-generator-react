import { useState } from 'react';
import FormExperience from './FormExperience';

export default function Experience({items, onAddExperience, onDeleteExperience, onUpdateExperience}) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  function handleSave(newExperience) {
    onAddExperience(newExperience);
    setIsFormVisible(false);
  }

  return (
    <section>
      <h2>Experience</h2>
      
      {items.map((item, index) => {
        const isEditing = item.id === editingId;


        return (
          <div key={item.id}>
            {isEditing ? (
              <FormExperience
              initialData={item} // Pass current item data
              onSave={(updatedItem) => { // Define what to do on save
                onUpdateExperience(updatedItem); // Call the function from App
                setEditingId(null); // Exit edit mode
              }}
              onCancel={() => { // Define what to do on cancel
                setEditingId(null); // Simply exit edit mode
              }}
            />
            ) : (
              <div>
                <h3>Experience #{index + 1}</h3>
                <p><strong>Job Title: </strong>{item.jobTitle}</p>
                <p><strong>Company Name: </strong>{item.companyName}</p>
                <p><strong>Start Date: </strong>{item.startDate}</p>
                <p><strong>End Date: </strong>{item.endDate}</p>
                <p><strong>Job Description: </strong>{item.jobDescription}</p>

                <button onClick={ () => setEditingId(item.id)}>Edit</button>
                <button onCLick={() => onDeleteExperience(item.id)}>Delete</button>
              </div>
            )}
          </div>          
        );
      })}

      {/* Logic to add a new experience */}
      {!isFormVisible ? (
        <button onClick={() => setIsFormVisible(true)}>Add Experience</button>
      ) : (
        <FormExperience
          onSave={handleSave}
          onCancel={() => setIsFormVisible(false)}
        />
      )}
    </section>
  );
}
