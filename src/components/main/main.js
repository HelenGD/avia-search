import './main.css';
import { Sort } from '../sort/sort';
import { TransferFilter } from '../transfer-filter/transfer-filter';
import { PriceFilter } from '../price-filter/price-filter';
import { AirlineFilter } from '../airline-filter/airline-filter';
import { Card } from '../card/card';

function Main() {
  return (
    <div className="main-container">
      <div className="main-filter-container">
        <div className="main-filter-wrapper">
          <Sort />
          <TransferFilter />
          <PriceFilter />
          <AirlineFilter />
        </div>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export { Main };