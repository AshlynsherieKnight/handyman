import { useState } from 'react';
import ServiceForm from './ServiceForm';

const ServiceShow = ({ id, title, rating, complete, price, updateServices, deleteService }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
        <>
          <ServiceForm
            id={id}
            service_subject={service_subject}
            service_body={service_body}
            updateServices={updateServices}
            setEdit={setEdit}
          />
          <button
            onClick={() => setEdit(false)}
          >
            Cancel
          </button>
        </> 
        :
        <>
          <button
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button
            onClick={() => deleteService(id)}
          >
            Delete
          </button>
        </>
      }
    </>
  )
}

export default ServiceShow;