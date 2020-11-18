import './card-route.css';
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru'
import clock from './wall-clock.svg';
import rightArrow from './rightarrow.svg';
import { formatDuration } from '../../utils';

function CardRoute(props) {
  const { route } = props;

  return (
    <div className="card-container-with-routs">
      <div className="card-direction-departure">
        <span className="card-direction-description">
          {route.departureCity.caption}, {route.departureAirport.caption}
          {' '}
          <span className="card-airport-code card-airport-code-departure">
            ({route.departureAirport.uid})
          </span>
          <img src={rightArrow} alt="right-arrow" width={12} height={12} />
          {' '}
          {route.arrivalCity.caption}, {route.arrivalAirport.caption}
          {' '}
          <span className="card-airport-code">
            ({route.arrivalAirport.uid})
          </span>
        </span>
      </div>
      <div className="card-departure-container">
        <div className="card-departure">
          <div>
            <span className="card-time card-time-departure">
              {format(new Date(route.departureDate), 'HH:mm')}
            </span>
            <span className="card-date card-date-departure">
              {format(new Date(route.departureDate), 'd MMM EEEEEE', { locale: ru })}
            </span>
          </div>
          <div>
            <img src={clock} height={12} width={12} alt="clock" />
            <span className="card-flight-duration">
              {formatDuration(route.duration)}
            </span>
          </div>
          <div>
            <span className="card-date card-date-arrival">
              {format(new Date(route.arrivalDate), 'HH:mm')}
            </span>
            <span className="card-time card-time-arrival">
              {format(new Date(route.arrivalDate), 'd MMM EEEEEE', { locale: ru })}
            </span>
          </div>
        </div>
        <div className="card-transfers">
          {route.stops} пересад{route.stops === 0 ? `ок` : `ка`}
        </div>
      </div>
      <div className="card-airline-name">
        <span className="card-airline-name-description">
          Рейс выполняет: {route.airline.caption}
        </span>
      </div>
    </div>
  );
}

export { CardRoute };