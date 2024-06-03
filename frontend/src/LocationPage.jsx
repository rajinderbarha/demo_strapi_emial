import { Link } from 'react-router-dom';
import './App.css'

export default function LocationPage({ data }) {
  const baseUrl = 'http://localhost:1337';

  console.log(data);
  return (
    <>
      <div className="container" style={{ padding: "0 100px" }}>
        <div className="section" >
          <img src={`${baseUrl}${data.sectionImg.data[0].attributes.url}`} alt="4f" />
          <h1>{data.SectionHeading}</h1>
        </div>
        <h1>Available Locations: </h1>
        <div className="card-grid">
          {data.available_locations.data.map(location => (
            <div key={location.id} className="card">
              <Link to={`${location.attributes.title}`}>
                <img src={`${baseUrl}${location.attributes.CoverImage.data.attributes.url}`} alt={location.attributes.LocationName} />
                <h3>{location.attributes.LocationName}</h3>
                <p><b>Address: </b>{location.attributes.heading}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="featuredLocations">
            <h1>Featured Office Space Locations In NY, NJ & CA :</h1>
        </div>
      </div>
    </>
  )
}
