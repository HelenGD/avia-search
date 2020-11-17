import './main.css';
import { Sort } from '../sort/sort';
import { TransferFilter } from '../transfer-filter/transfer-filter';
import { PriceFilter } from '../price-filter/price-filter';
import { AirlineFilter } from '../airline-filter/airline-filter';
// import { Card } from '../card/card';
// import { ShowMoreButton } from '../show-more-button/show-more-button';
import { useMemo, useState } from 'react';
import { getSortedTickets, SortType } from '../../filters/sort';
import { getFilteredFlights } from '../../filters/stops';
import { CardList } from '../card-list/card-list';

const getAirlinesFilter = (flights) => {
  const result = flights.reduce(function (map, obj) {
    map[obj.caption] = true;
    return map;
  }, {});
  console.log(result)
};

function Main(props) {
  const { flights } = props;
  const [sort, setSort] = useState(SortType.PRICE_LOW_TO_HIGH);

  const [stops, setStops] = useState({
    0: true,
    1: true,
  });

  const [airlines, setAirlines] = useState({
    'Polish Airlines от 21049р': true,
  });

  console.log('AirlinesFilter', getAirlinesFilter(flights))

  const [range, setRange] = useState({
    min: 0,
    max: 1000000,
  });

  const filteredFlights = useMemo(
    () => getFilteredFlights(flights, { stops, range }),
    [flights, stops, range],
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
          <AirlineFilter flights={filteredFlights} />
        </div>
      </div>
      <CardList flights={sortedFlights} />
      {/* <div>
        {sortedFlights.map(flight => (
          <Card
            key={flight.key}
            flight={flight}
          />
        ))}
        <ShowMoreButton />
      </div> */}
    </div>
  );
}

export { Main };