
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

// DRY = Do not Repeat Yourself
const Services = () => {
  const services = useServices();

    // const [services, setServices] = useState([]);

    // useEffect(() =>{
    //     fetch('https://cardoctor-bdserver-chi.vercel.app/services')
    //     .then(res => res.json())
    //     .then(data => setServices(data));
    // }, [])

  return (
    <div className="mt-12">
      <div className="text-center space-y-3">
        <h3 className="text-2xl font-bold text-orange-500">Service</h3>
        <h2 className="text-5xl ">Our Service Area</h2>
        <p>the majority have suffered alteration in some form, <br />by injected humour, or randomised words which do not look even slightly believable. </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        services.map(service => <ServiceCard
        key={service._id}
        service={service}
        ></ServiceCard>)
      }
      </div>
    </div>
  );
};

export default Services;
