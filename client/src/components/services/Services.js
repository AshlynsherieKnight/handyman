import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ServiceList from './ServiceList';
import ServiceForm from './ServiceForm';

const Services = () => {
  const [services, setService] = useState([])
  const { serviceId } = useParams()

  useEffect( () => {
    axios.get(`/api/services/${serviceId}/services`)
      .then(res => setService(res.data))
      .catch( err => console.log(err))
  }, [])
  
  const addservice = (service) => {
    axios.post(`/api/services/${serviceId}/services`, { service })
      .then( res => setService([...services, res.data]))
      .catch( err => console.log(err))
  }

  const updateservices = (id, service) => {
    axios.put(`/api/services/${serviceId}/services/${id}`, { service })
      .then( res => {
        const newUpdatedservices = services.map( t => {
          if (t.id === id) {
            return res.data
          } 
          return t
        })
        setService(newUpdatedservices)
      })
      .catch( err => console.log(err))
  }

  const deleteservice = (id) => {
    axios.delete(`/api/services/${serviceId}/services/${id}`)
      .then( res => {
        setService( services.filter(t => t.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <ServiceForm addservice={addservice} />
      <h1>All services</h1>
      <ServicesList 
        services={services}
        updateservices={updateservices}
        deleteservice={deleteservice}
      />
    </>
  )
}

export default services;