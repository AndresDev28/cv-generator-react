export default function GeneralInfo({data, onDataChange, isEditing, onSubmit, onEdit}) {

  return (
    <section className="cv-section">
      <h2>General Information</h2>
      {isEditing ? (
        // If isEditing is true, render the form
        <form className="general-info-form" onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}>
        <div>
          <label htmlFor="name"><strong>Name </strong></label>
          <input  
            type="text" 
            id="name" 
            data={data.name}
            onChange={onDataChange}
            />
        </div>
        <div>
          <label htmlFor="email"><strong>Email </strong></label>
          <input 
            type="email" 
            id="email" 
            data={data.email}
            onChange={onDataChange}
            />
        </div>
        <div>
          <label htmlFor="phone"><strong>Phone </strong></label>
          <input 
            type="tel" 
            id="phone" 
            data={data.phone}
            onChange={onDataChange}
            />
        </div>
        <div>
          <button className="cv-add-btn" type="submit">Submit</button>
        </div>
      </form>
      ) : (
        // If isEditing is false, render the PRESENTATION PREVIEW
        <div>
          <p>
            <span className="cv-label">Name: </span>
            <span className="cv-value">{data.name}</span>
          </p>
          <p>
          <span className="cv-label">Email: </span>
          <span className="cv-value">{data.email}</span>
          </p>
          <p>
          <span className="cv-label">Phone: </span>
          <span className="cv-value">{data.phone}</span>
          </p>
          <button className="cv-edit-btn"
            type="button"
            onClick={() => onEdit()}
            >Edit
          </button>
        </div>
      )}
    </section>  
      
  )
}