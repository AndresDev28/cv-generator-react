import React from 'react'
import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'


function App() {

  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [isEditing, setIsEditing] = useState(true);

  function handleGeneralInfoChange(e) {
    const { id, value } = e.target;
    setGeneralInfo (prevInfo => ({
      ...prevInfo, // Copy everything that was already there
      [id]: value  // Overwrite only the property that changed
    }));
  }

  const [educationList, setEducationList] = useState([{
    id: crypto.randomUUID(),
    school: 'Universidad Central de Venezuela',
    degree: 'Licenciatura en Ciencias de la Computación',
    startDate: '2018',
    endDate: '2023'
  }])

  const [experienceList, setExperienceList] = useState([{
    id: crypto.randomUUID(),
    jobTitle: 'Text input for the position held',
    companyName: `Text input for the employer's name.`,
    startDate: 'Date picker for when the job began.',
    endDate: 'Data picker when the job end',
    jobDescription: 'Textarea for summarising main task or achievements.'
  }])

  /**
   * Adds a new study object to the education list.
   * This function follows React's immutability principle.
   * @param {object} newEducationItem - The new study object to add.
   */
  function handleAddEducation(newEducationItem) {
    // We use the state update function `setEducationList`.
    // We pass it a function to ensure we operate on the most recent state.
    // `prevList` is the current value of the `educationList` array provided by React.
    setEducationList(prevList => [
      // 1. We use the 'spread operator' (...) to create a shallow copy of `prevList`.
      ...prevList,
      // 2. We add the `newEducationItem` to the end of that new copy of the array.
      newEducationItem]);
      // React receives this completely new array, detects the change, and re-renders the component.
  }

  /**
   * Deletes an object from the study list.
   * @param {string} idToDelete - The ID of the study to delete.
   */
  function handleDeleteEducation(idToDelete) {
    setEducationList(prevList => [
      // .filter() already creates and returns a new array.
      // We simply return the result of the filtering operation.
      ...prevList.filter(item => item.id !== idToDelete)])
  }

  /**
   * Edits an object in the study list.
   * @param {object} updatedItem - The updated item.
   */
  function handleUpdateEducation(updatedItem) {
    setEducationList(prevList => 
      prevList.map(item => 
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  }

  function handleAddExperience(newExperienceItem) {
    setExperienceList(prevList => [
      ...prevList, newExperienceItem
    ]);
  }

  function handleDeleteExperience(idToDelete) {
    setExperienceList(prevList => [...prevList.filter(item => item.id !== idToDelete)]);
  }

  function handleUpdateExperience(updatedItem) {
    setExperienceList(prevList => 
      prevList.map(item => item.id === updatedItem.id ? updatedItem : item)
    );
  }



  return (
    <>
      <h1>CV-Generator</h1>
      <GeneralInfo
        data={generalInfo}
        onDataChange={handleGeneralInfoChange}
        isEditing={isEditing}
        onSubmit={() => setIsEditing(false)} // Pass a function that changes the state
        onEdit={() => setIsEditing(true)} // And another for the opposite action
      />
      <Education
        items={educationList}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
        onUpdateEducation={handleUpdateEducation}
      />
      <Experience
        items={experienceList}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
        onUpdateExperience={handleUpdateExperience}
      />
    </>
  );
}

export default App
