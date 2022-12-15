import { useState, useEffect } from 'react';

const ServiceForm = ({ addService, id, service_subject, service_body, updateService, setEdit }) => {
  const [service, setService] = useState({ title: '', rating: 0, complete: false, price: null })

  useEffect( () => {
    if (id) {
      setService({ service_subject, service_body })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateService(id, service)
      setEdit(false)
    } else {
      addService(service)
    }
    setService({ service_body: '', service_subject: '' })
  }

  return (
    <>
      <h1>{id ? 'Update' : 'Create'} Todo</h1>
      <form onSubmit={handleSubmit}>
        <label>Subject</label>
        <input 
          name='subject'
          value={comment.subject}
          onChange={(e) => setService({ ...service, subject: e.target.value })}
          required
        />
        <label>Service</label>
        <textarea 
          name='body'
          value={service.service_body}
          onChange={(e) => setService({ ...service, service_body: e.target.value})}
          required
          max='5'
          min='0'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ServiceForm;