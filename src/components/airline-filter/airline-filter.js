import './airline-filter.css';

function AirlineFilter(props) {
  const {flights, onChange} = props;
  return (
    <div className="airline-filter-container">
      <span className="airline-filter-description">Авиакомпании</span>
      <div className="airline-filter-checkbox-buttons">
        {Object.keys(flights).map(key => (
          <div 
            key={key}
            className="airline-filter-checkbox-form"
          >
            <input
              type="checkbox"
              id={`airline-${key}`}
              name="airline"
              onChange={() => onChange({...flights, [key]: !flights[key]})}
              checked={flights[key]}
            />
            <label htmlFor={`airline-${key}`}>
              {key}
            </label>
          </div>
        ))}

      </div>
    </div>
  );
}

export { AirlineFilter };
