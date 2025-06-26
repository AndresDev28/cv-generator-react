import { useState } from 'react';
import FormEducation from './FormEducation';
import Modal from './Modal/Modal';

export default function Education({ items, onAddEducation, onDeleteEducation, onUpdateEducation }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingId, setEditingId] = useState(null);

  function handleSave(newItem) {
    onAddEducation(newItem);
    setIsFormVisible(false);
  }

  function handleEditSave(updatedItem) {
    onUpdateEducation(updatedItem);
    setEditingId(null);
  }

  return (
    <section className="cv-section">
      <h2>Education</h2>

      {items.map((item, index) => (
        <div key={item.id} className="cv-item">
          <div>
            <h3>Study #{index + 1}</h3>
            <p>
            <span className="cv-label">School: </span>
            <span className="cv-value">{item.school}</span>
            </p>
            <p>
            <span className="cv-label">Degree: </span>
            <span className="cv-value">{item.degree}</span>
            </p>
            <p>
              <span className="cv-label">Start date: </span>
              <span className="cv-value">{item.startDate}</span></p>
            <p>
            <span className="cv-label">End date: </span>
            <span className="cv-value">{item.endDate}</span>
            </p>
            <button className="cv-edit-btn" onClick={() => setEditingId(item.id)}>Edit</button>
            <button className="cv-delete-btn" onClick={() => onDeleteEducation(item.id)}>Delete</button>
          </div>
        </div>
      ))}

      {/* Modal para editar */}
      {editingId && (
        <Modal isOpen={!!editingId} onClose={() => setEditingId(null)}>
          <FormEducation
            initialData={items.find(item => item.id === editingId)}
            onSave={handleEditSave}
            onCancel={() => setEditingId(null)}
          />
        </Modal>
      )}

      {/* Modal para añadir */}
      {!isFormVisible ? (
        <button className="cv-add-btn" onClick={() => setIsFormVisible(true)}>
          Add Education
        </button>
      ) : (
        <Modal isOpen={isFormVisible} onClose={() => setIsFormVisible(false)}>
          <FormEducation
            onSave={handleSave}
            onCancel={() => setIsFormVisible(false)}
          />
        </Modal>
      )}
    </section>
  );
}