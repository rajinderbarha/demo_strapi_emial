import './App.css';
import LocationPage from './LocationPage';
import Navbar from './Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react'
import qs from 'qs'
import Contact from './Contact';

const query = qs.stringify(
    {
        populate: {
            available_locations: {
                populate: {
                    CoverImage: {
                        fields: ["url"]
                    }
                }
            },
            sectionImg :{
              fields:["url"]
            }

        }
    }
)
const baseUrl = 'http://localhost:1337';

async function fetchdata(path){
    const url = new URL(path, baseUrl)
    url.search = query;
    try {
        const response = await fetch(url.href)
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

function App() {
  const [data, setData] = useState(null);

    useEffect(() => {
        async function getdata(){
           const data = await fetchdata('/api/location-page');
           setData(data)
           
        }
        getdata();
    },[])
    if (!data) {
        return null;
      }

      const availableLocations = data.data.attributes;
  return (
    <>
    <Navbar />
    <BrowserRouter>
    <Routes >
      <Route path='/location' element={<LocationPage data={availableLocations}/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
