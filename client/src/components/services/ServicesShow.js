import { useState } from 'react';
import ServicesForm from './ServicesForm';
import { Link } from 'react-router-dom';

const ServicesShow = ({ id, service_type, info, location, updateServices, deleteService }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
        <>
          <ServicesForm
            id={id}
            service_type={service_type}
            info={info}
            location={location}
            updateServices={updateServices}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}> 
            Cancel
          </button>
        </> 
        :
        <>
          <h2>{service_type}</h2>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteService(id)}>
            Delete
          </button>
          <Link to={`/${id}/comments`}>
            <button>Comments</button>
          </Link>
        </>
      }    
    </>
  )
}

export default ServicesShow;