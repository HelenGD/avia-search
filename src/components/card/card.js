import './card.css';
import clock from './wall-clock.svg';
import rightArrow from './rightarrow.svg';
import { ShowMoreButton } from '../show-more-button/show-more-button';

function Card() {
  return (
    <div className="card-container">
      <div className="card-airline-container">
        <div className="card-airline-name-container">
          <span className="card-airlaine-name">Polish Airlanes</span>
        </div>
        <div className="card-airline-price-container">
          <span className="card-airlaine-price">21049 ₽</span>
          <span className="card-airlaine-price-text">Стоимость для одного взрослого пассажира</span>
        </div>
      </div>
      <div className="card-container-with-routs">
        <div className="card-direction-departure">
          <span className="card-direction-description">Москва, Шереметьево <span className="card-airport-code card-airport-code-departure">(SVO)</span><img src={rightArrow} alt="right-arrow" style={{ height: 12, width: 12 }} /> ЛОНДОН, Лондон, Хитроу <span className="card-airport-code">(LHR)</span></span>
        </div>
        <div className="card-departure-container">
          <div className="card-departure">
            <div>
              <span className="card-time card-time-departure">20:40</span>
              <span className="card-date card-date-departure">18 авг. вт</span>
            </div>
            <div>
              <img src={clock} style={{ height: 12, width: 12 }} alt="clock" />
              <span className="card-flight-duration">14 ч 45 мин</span>
            </div>
            <div>
              <span className="card-date card-date-arrival">18 авг. вт</span>
              <span className="card-time card-time-arrival">20:40</span>
            </div>
          </div>
          <div className="card-transfers">
            1 пересадка
          </div>

        </div>
        <div className="card-airline-name">
          <span className="card-airline-name-description">Рейс выполняет: LOT Polish Airlines</span>
        </div>
      </div>
      <div className="card-container-with-routs">
        <div className="card-direction-departure">
          <span className="card-direction-description">ЛОНДОН, Лондон, Хитроу <span className="card-airport-code card-airport-code-departure">(LHR)</span><img src={rightArrow} alt="right-arrow" style={{ height: 12, width: 12 }} /> Москва, Шереметьево (SVO) <span className="card-airport-code">(SVO)</span></span>
        </div>
        <div className="card-departure-container">
          <div className="card-departure">
            <div>
              <span className="card-time card-time-departure">18:10</span>
              <span className="card-date card-date-departure">19 авг. ср</span>
            </div>
            <div>
              <img src={clock} style={{ height: 12, width: 12 }} alt="clock" />
              <span className="card-flight-duration">23 ч 35 мин</span>
            </div>
            <div>
              <span className="card-date card-date-arrival">20 авг. чт</span>
              <span className="card-time card-time-arrival">19:45</span>
            </div>
          </div>
          <div className="card-transfers">
            1 пересадка
          </div>

        </div>
        <div className="card-airline-name-return-flight">
          <span>Рейс выполняет: LOT Polish Airlines</span>
        </div>
      </div>
      <button className="card-button-selection" type="button" >ВЫБРАТЬ</button>
      <ShowMoreButton />
    </div >
  );
}

export { Card };