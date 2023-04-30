import React, { useEffect, useState } from 'react';

export function useFetchApartments() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("./db.json")
      .then(res => res.json())
      .then(res => setApartments(res))
      .catch(console.error);
  }, []);

  return apartments;
}