import { CardRoute } from '../card-routs/card-route';
import './card.css';

function Card(props) {
  const {flight} = props;

  return (
    <div className="card-container">
    <div className="card-airline-container">
      <div className="card-airline-name-container">
        <span className="card-airlaine-name">{flight.caption}</span>
      </div>
      <div className="card-airline-price-container">
        <span className="card-airlaine-price">{flight.amount}₽</span>
        <span className="card-airlaine-price-text">
          Стоимость для одного взрослого пассажира
        </span>
      </div>
    </div>
    {flight.routes.map(route => (
      <CardRoute
        key={route.key}
        route={route}
      />
    ))}
    <button className="card-button-selection" type="button" >ВЫБРАТЬ</button>
    </div>
  );
}

export { Card };
