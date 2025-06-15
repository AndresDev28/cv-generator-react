export default function GeneralInfo({data, onDataChange, isEditing, onSubmit, onEdit}) {

  return (
    <section>
      <h2>General Information</h2>
      {isEditing ? (
        // Si isEditing es true, renderiza el formulario
        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}>
        <div>
          <label htmlFor="name">Name</label>
          <input  
            type="text" 
            id="name" 
            data={data.name}
            onChange={onDataChange}
            />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            data={data.email}
            onChange={onDataChange}
            />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            data={data.phone}
            onChange={onDataChange}
            />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      ) : (
        // Si isEditing es false, renderiza la VISTA PREVIA DE LA PRESENTACÍON
        <div>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <button 
            type="button"
            onClick={() => onEdit()}
            >Edit
          </button>
        </div>
      )}
    </section>  
      
  )
}