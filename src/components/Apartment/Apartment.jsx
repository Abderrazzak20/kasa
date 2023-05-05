import { useState, useEffect } from 'react';
import "./Apartment.css";
import Studio from "../Studio/Studio.jsx";
import apartmentsData from "../../assets/db.json";

function useApartments() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    setApartments(apartmentsData);
  }, []);

  return apartments;
}

function Apartment() {
  const apartments = useApartments();

  return (
    <div className='apartment'>
      {apartments.map((apartment) => (
        <Studio key={apartment.id} title={apartment.title} imageUrl={apartment.cover}  id={apartment.id}/>
      ))}
    </div>
  );
}

export default Apartment;
