import React from 'react'
import './Home.css';
import Apartment from "../components/Apartment/Apartment.jsx"
import Banner from '../layout/Banner/Banner.jsx';
function Home() {
  return (
    <div>
      <Banner title="Chez vous, partout et ailleurs" />
      <Apartment />
    </div>
  )
}

export default Home;