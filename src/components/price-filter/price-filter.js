
import './price-filter.css';

const displayRange = {
  min: "От",
  max: "До",
};

const placeholderRange = {
  min: 0,
  max: 10000,
}

// {Object.keys(stops).map(key => (
//   <div 
//     key={key}
//     className="transfer-filter-checkbox-form"
//   >
//     <input
//       type="checkbox"
//       id={`transfer-${key}`}
//       name="transfer"
//       onChange={() => onChange({...stops, [key]: !stops[key]})}
//       checked={stops[key]}
//     />
//     <label htmlFor={`transfer-${key}`}>
//       {displayStops[key]}
//     </label>
//   </div>
// ))}

function PriceFilter(props) {
  const { onChange, range } = props;

  return (
    <div className="price-filter-container">
      <span className="price-filter-description">Цена</span>
      <div className="price-filter-input-wrapper">
        {Object.keys(range).map(key => (
          <div
            key={key}
            className="price-filter-input-form">
            <label htmlFor={`text-${key}`}>{displayRange[key]}</label>
            <input
              className="price-filter-input"
              id={`text-${key}`}
              type="number"
              name="text"
              value={range[key]}
              placeholder={placeholderRange[key]}
              onChange={(e) => {
                onChange({
                  ...range,
                  [key]: e.target.value,
                })
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export { PriceFilter };
