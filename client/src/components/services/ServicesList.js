import ServiceShow from './ServiceShow';

const ServiceList = ({ services, updateServices, deleteService }) => (
  <>
    { services.map(t => 
      <ServiceShow
        key={t.id}
        {...t}
        updateServices={updateServices}
        deleteService={deleteService}
      />
    )}
  </>
)

export default ServiceList;