import { useState } from 'react';
import WorkerForm from './WorkerForm';
import { Link } from 'react-router-dom';

const WorkerShow = ({ id, first_name, last_name, updateWorker, deleteWorker, created_at }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
          <>
            <WorkerForm 
              id={id}
              first_name={first_name}
              last_name={last_name}
              updateWorker={updateWorker}
              setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>
              Cancel
            </button>
          </>
        :
        <>
          <h3>{first_name} {last_name}</h3>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteWorker(id)}>
            Delete
          </button>
          <Link to={`/${id}/services`}>
            <button>Services</button>
          </Link>
        </>
      }
    </>
  )
}

export default WorkerShow;