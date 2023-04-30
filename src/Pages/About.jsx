import React from 'react'
import "./About.css"

import ParentDescription from "../components/parentDescription/parentDescription"
import ApartementPageBanner from '../components/ApartementPageBanner/ApartementPageBanner';
import Banner from '../layout/Banner/Banner';
import BannerAbout from '../components/BannerAbout/BannerAbout';
function About() {
  return (
    <>

      <BannerAbout/>
      <div className="DescriptionContain">
        <div className="blockDescription">
          <ParentDescription title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
          <ParentDescription title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
          <ParentDescription title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
          <ParentDescription title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
        </div>
      </div>
    </>
  );
}

export default About;
