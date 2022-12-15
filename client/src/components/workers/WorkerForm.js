import { useState, useEffect } from 'react';

const WorkerForm = ({ addWorker, id, first_name, last_name, updateWorker, setEdit }) => {
  const [worker, setWorker] = useState({ first_name: '', last_name: '' })

  useEffect(() => {
    if (id) {
      setWorker({ first_name, last_name })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateWorker(id, worker)
      setEdit(false)
    } else {
      addWorker(worker)
    }
    setWorker({ first_name: '', last_name: '' })
  }

  return (
    <>
      <h2>{id ? "Update" : "Add New"} Worker</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input 
          name='first_name' 
          value={worker.first_name} 
          onChange={(e) => setWorker({ ...worker, first_name: e.target.value })} 
          required
        />
        <label>Last Name</label>
        <input
          name='last_name' 
          value={worker.last_name} 
          onChange={(e) => setWorker({ ...worker, last_name: e.target.value })} 
          required
        ></input>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default WorkerForm;