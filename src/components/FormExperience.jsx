import { useState } from 'react'

export default function FormExperience({onSave, onCancel, initialData}) {
  const [experienceData, setExperienceData] = useState(
    initialData || {
      id: crypto.randomUUID(),
      jobTitle: '',
      companyName: '',
      startDate: '',
      endDate: '',
      jobDescription: ''
    }
  );

  // HANDLER FUNCTION: to update the local state
  function handleChange(e) {
    const {id, value} = e.target;
    setExperienceData (prevData => ({
      ...prevData, [id]: value
    }));
  }

  // SUBMIT FUNCTION: Runs when the form is submitted
  function handleSubmit(e) {
    e.preventDefault();

    const isEditingMode = Boolean(initialData);
    const finalData = {
      ...experienceData, id: isEditingMode ? initialData.id : crypto.randomUUID()
    };
    onSave(finalData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="jobTitle"><strong>Job Title: </strong></label>
      <input 
        type="text"
        id="jobTitle"
        value={experienceData.jobTitle}
        onChange={handleChange}
      />
      <label htmlFor="companyName"><strong>Company Name: </strong></label>
      <input 
        type="text"
        id="companyName"
        value={experienceData.companyName}
        onChange={handleChange}
      />
      <label htmlFor="startDate"><strong>Start Date: </strong></label>
      <input 
        type="date"
        id="startDate"
        value={experienceData.startDate}
        onChange={handleChange}
      />
      <label htmlFor="endDate"><strong>End Date: </strong></label>
      <input 
        type="date"
        id="endDate"
        value={experienceData.endDate}
        onChange={handleChange}
      />
      <label htmlFor="jobDescription"><strong>Job Description: </strong></label>
      <input 
        type="text"
        id="jobDescription"
        value={experienceData.jobDescription}
        onChange={handleChange}
      />

      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  )
}
