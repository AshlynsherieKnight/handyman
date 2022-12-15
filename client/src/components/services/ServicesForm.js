import { useState, useEffect } from 'react';

const ServicesForm = ({ addService, id, service_type, info, location, updateServices, setEdit }) => {
  const [service, setService] = useState({ service_type: '', info: '', location: '' })

  useEffect( () => {
    if (id) {
      setService({ service_type, info, location })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateServices(id, service)
      setEdit(false)
    } else {
      addService(service)
    }
    setService({ service_type: '', info: '', location: '' })
  }

  return (
    <>
      <h1>{id ? 'Update' : 'Create'} Service </h1>
      <form onSubmit={handleSubmit}>
        <label>Service Type</label>
        <input 
          name='service_type'
          value={service.service_type}
          onChange={(e) => setService({ ...service, service_type: e.target.value })}
          required
        />
        <label>Info</label>
        <textarea 
          name='info'
          value={service.info}
          onChange={(e) => setService({ ...service, info: e.target.value})}
          required
          max='5'
          min='0'
        ></textarea>
        <label>Location</label>
        <input 
          name='location'
          value={service.location}
          onChange={(e) => setService({ ...service, location: e.target.value })}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ServicesForm;