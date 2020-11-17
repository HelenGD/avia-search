import './airline-filter.css';

function AirlineFilter(props) {
  const {flights} = props;
  console.log(flights)
  return (
    
    <div className="airline-filter-container">
      <span className="airline-filter-description">Авиакомпании</span>
      <div className="airline-filter-checkbox-buttons">
        <div className="airline-filter-checkbox-form">
          <input type="checkbox" id="Polish Airlines" name="Polish Airlines" />
          <label htmlFor="Polish Airlines">Polish Airlines от 21049р</label>
        </div>
      </div>
    </div>
  );
}

export { AirlineFilter };

{/* <div className="airline-filter-checkbox-form">
          <input type="checkbox" id="Russian Airlines" name="Russian Airlines" />
          <label htmlFor="Russian Airlines">- Аэрофлот - рос.... от 31733р</label>
        </div> */}