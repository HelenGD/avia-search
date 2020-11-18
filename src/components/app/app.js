import './app.css';
import {Main} from '../main/main'
import { useEffect, useState } from 'react';
import { fetchFlights } from '../api/flights';

function App(props) {
  const [flights, setFlights] = useState([]);

  useEffect(
    () => {
      fetchFlights().then((newFlights) => {
        setFlights(newFlights);
      })
    },
    [],
  );

  return (
    <div className="App">
     <Main flights={flights}/>
    </div>
  );
}

export default App;
