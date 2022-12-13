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
          <h1>{first_name} {last_name}</h1>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteWorker(id)}>
            Delete
          </button>
          <button>EDIT ME: Link to Services</button>
        </>
      }
    </>
  )
}

export default WorkerShow;