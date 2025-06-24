import { useState } from 'react';

export default function FormEducation({onSave, onCancel, initialData}) {

  // Use `initialData` to initialize the state.
  // If `initialData` exists (edit mode), use it.
  // If not (add mode), use an empty object.

  // LOCAL STATE: object to manage the data
  const [educationData, setEducationData] = useState(
    initialData || {
    school: '',
    degree: '',
    startDate: '',
    endDate: ''
  }
);

  // HANDLER FUNCTION: to update the local state
  function handleChange(e) {
    const {id, value} = e.target;
    setEducationData (prevData => ({
      ...prevData, // Copy everything that was already there
      [id]: value // Overwrite only the property that changed
    }));
  }

  // SUBMIT FUNCTION: Runs when the form is submitted (it's a bit smarter in edit mode)
  // If we are in edit mode, we already have an ID
  function handleSubmit(e) {
    e.preventDefault();
    // We call onSave with the form data.
    // If it was an edit, the ID was already in `educationData` from `initialData`.
    // If it was an addition, we add a new ID.
    // If we are in edit mode, `initialData` will exist.
    const isEditingMode = Boolean(initialData);
    const finalData = {
      ...educationData, // Take all the data from the form
      id: isEditingMode ? initialData.id : crypto.randomUUID() // Use the correct ID
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
