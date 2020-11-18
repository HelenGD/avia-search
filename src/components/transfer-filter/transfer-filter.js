import './transfer-filter.css';

const displayStops = {
  0: 'без пересадок',
  1: '1 пересадка',
};

function TransferFilter(props) {
  const { stops, onChange } = props;

  return (
    <div className="transfer-filter-container">
      <span className="transfer-filter-description">Фильтровать</span>
      <div className="transfer-filter-checkbox-buttons">
        {Object.keys(stops).map(key => (
          <div 
            key={key}
            className="transfer-filter-checkbox-form"
          >
            <input
              type="checkbox"
              id={`transfer-${key}`}
              name="transfer"
              onChange={() => onChange({...stops, [key]: !stops[key]})}
              checked={stops[key]}
            />
            <label htmlFor={`transfer-${key}`}>
              {displayStops[key]}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export { TransferFilter };