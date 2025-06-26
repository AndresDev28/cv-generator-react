import { useState } from 'react';
import FormExperience from './FormExperience';
import Modal from './Modal/Modal';

export default function Experience({items, onAddExperience, onDeleteExperience, onUpdateExperience}) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  function handleSave(newExperience) {
    onAddExperience(newExperience);
    setIsFormVisible(false);
  }

  function handleEditSave(updatedItem) {
    onUpdateExperience(updatedItem);
    setEditingId(null);
  }

  return (
    <section className="cv-section">
      <h2>Experience</h2>
      
      {items.map((item, index) => (
        <div key={item.id} className="cv-item">
        <div>
          <h3>Experience #{index + 1}</h3>
          <p>
            <span className="cv-label">Job Title: </span>
            <span className="cv-value">{item.jobTitle}</span>
          </p>
          <p>
          <span className="cv-label">Company Name: </span>
          <span className="cv-value">{item.companyName}</span>
          </p>
          <p>
          <span className="cv-label">Start Date: </span>
          <span className="cv-value">{item.startDate}</span>
          </p>
          <p>
          <span className="cv-label">End Date: </span>
          <span className="cv-value">{item.endDate}</span>
          </p>
          <p>
          <span className="cv-label">Job Description: </span>
          <span className="cv-value">{item.jobDescription}</span>
          </p>

          <button className="cv-edit-btn" onClick={() => setEditingId(item.id)}>Edit</button>
          <button className="cv-delete-btn" onClick={() => onDeleteExperience(item.id)}>Delete</button>
        </div>
      </div>
      ))}

      {/* Modal to edit */}
      {editingId && (
        <Modal isOpen={!!editingId} onClose={() => setEditingId(null)}>
          <FormExperience
            initialData={items.find(item => item.id === editingId)}
            onSave={handleEditSave}
            onCancel={() => setEditingId(null)}
          />
        </Modal>
      )}

      {/* Logic to add a new experience with the Modal */}
      {!isFormVisible ? (
        <button className="cv-add-btn" onClick={() => setIsFormVisible(true)}>Add Experience</button>
      ) : (
        <Modal isOpen={isFormVisible} onClose={() => setIsFormVisible(false)}>
          <FormExperience
          onSave={handleSave}
          onCancel={() => setIsFormVisible(false)}
        />
        </Modal>
        
      )}
    </section>
  );
}
