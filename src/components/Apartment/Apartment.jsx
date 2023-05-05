
import "./Apartment.css";
import Studio from "../Studio/Studio.jsx";
import apartments from "../../assets/db.json";
function Apartment() {
  
  return (
    <div className='apartment'>
      {apartments.map((apartment) => (
        <Studio key={apartment.id} title={apartment.title} imageUrl={apartment.cover}  id={apartment.id}/>
      ))}
    </div>
  );
}

export default Apartment;
