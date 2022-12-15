import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ServicesList from './ServicesList';
import ServicesForm from './ServicesForm';

const Services = () => {
  const [services, setServices] = useState([])
  const { workerID } = useParams()

  useEffect( () => {
    axios.get(`/api/workers/${workerID}/services`)
      .then(res => setServices(res.data))
      .catch( err => console.log(err))
  }, [])
  
  const addService = (service) => {
    axios.post(`/api/workers/${workerID}/services`, { service })
      .then( res => setServices([...services, res.data]))
      .catch( err => console.log(err))
  }

  const updateServices = (id, service) => {
    axios.put(`/api/workers/${workerID}/services/${id}`, { service })
      .then( res => {
        const newUpdatedServices = services.map( s => {
          if (s.id === id) {
            return res.data
          } 
          return s
        })
        setServices(newUpdatedServices)
      })
      .catch( err => console.log(err))
  }

  const deleteService = (id) => {
    axios.delete(`/api/workers/${workerID}/services/${id}`)
      .then( res => {
        setServices( services.filter(s => s.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <ServicesForm addService={addService} />
      <h1>All services</h1>
      <ServicesList 
        services={services}
        updateServices={updateServices}
        deleteService={deleteService}
      />
    </>
  )
}

export default Services;