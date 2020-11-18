import './main.css';
import { Sort } from '../sort/sort';
import { TransferFilter } from '../transfer-filter/transfer-filter';
import { PriceFilter } from '../price-filter/price-filter';
import { AirlineFilter } from '../airline-filter/airline-filter';
import { useEffect, useMemo, useState } from 'react';
import { getSortedTickets, SortType } from '../../filters/sort';
import { getFilteredFlights } from '../../filters/filter';
import { CardList } from '../card-list/card-list';

const getAirlinesFilter = (flights) => {
  const result = flights.reduce((map, flight) => {
    map[flight.caption] = true;
    return map;
  }, {});
  
  return result;
};

function Main(props) {
  const { flights } = props;
  const [sort, setSort] = useState(SortType.PRICE_LOW_TO_HIGH);

  const [stops, setStops] = useState({
    0: true,
    1: true,
  });

  const [airlines, setAirlines] = useState(getAirlinesFilter(flights));

  useEffect(
    () => {
      setAirlines(getAirlinesFilter(flights));
    },
    [flights]
  );

  const [range, setRange] = useState({
    min: 0,
    max: 1000000,
  });

  const filteredFlights = useMemo(
    () => getFilteredFlights(flights, { stops, range, airlines }),
    [flights, stops, range, airlines],
  );

  const sortedFlights = useMemo(
    () => getSortedTickets(filteredFlights, sort),
    [filteredFlights, sort],
  );

  return (
    <div className="main-container">
      <div className="main-filter-container">
        <div className="main-filter-wrapper">
          <Sort
            type={sort}
            onChange={setSort}
          />
          <TransferFilter
            stops={stops}
            onChange={setStops}
          />
          <PriceFilter
            onChange={setRange}
            range={range}
          />
          <AirlineFilter 
            flights={airlines} 
            onChange={setAirlines}
          />
        </div>
      </div>
      <CardList flights={sortedFlights} />
    </div>
  );
}

export { Main };