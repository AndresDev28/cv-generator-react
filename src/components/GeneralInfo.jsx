export default function GeneralInfo({data, onDataChange}) {

  return (
    <section>
      <h2>General Information</h2>
      <form>
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
    </section>  
      
  )
}