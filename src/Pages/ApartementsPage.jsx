
import "./ApartementsPage.css";
import ChildrenDescription from "../components/parentDescription/parentDescription";
import ApartementPageBanner from "../components/ApartementPageBanner/ApartementPageBanner";
import ApartementPageHeader from '../components/ApartementPageHeader/ApartementPageHeader';
import { useParams } from 'react-router-dom';
import { useFetchFlat } from "../assets/util/fetchDataApartement";


function ApartementsPage() {
    const { id } = useParams();
    const flat = useFetchFlat(id);

    if (!flat) return <div>Loading....</div>

    return (
        <div className='Apartement-Page'>
            <ApartementPageBanner imageUrl={flat.pictures} />
            <ApartementPageHeader
                title={flat.title}
                location={flat.location}
                tags={flat.tags}
                name={flat.host && flat.host.name}
                picture={flat.host && flat.host.picture}
                rating={flat.rating}
            />
            <div className="ParentDescription">
                <ChildrenDescription title="Description" content={flat.description} />
                <ChildrenDescription title="Equipments" content={flat.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)} />
            </div>
        </div>
    )
}

export default ApartementsPage;
