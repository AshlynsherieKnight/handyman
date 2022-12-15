import ServicesShow from './ServicesShow';

const ServicesList = ({ services, updateServices, deleteService }) => (
  <>
    { services.map(s => 
      <ServicesShow
        key={s.id}
        {...s}
        updateServices={updateServices}
        deleteService={deleteService}
      />
    )}
  </>
)

export default ServicesList;