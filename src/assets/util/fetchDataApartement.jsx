import React, { useEffect, useState } from 'react';
import product from "../../../public/db.json"

export function useFetchFlat(id) {
    const [flat, setFlat] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simula la chiamata API utilizzando i dati del file "product"
                const flat = product.find(item => item.id === id);
                console.log("flat trovato:", flat);
                setFlat(flat);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [id]);

    return flat;
}
