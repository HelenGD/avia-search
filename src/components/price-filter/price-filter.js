import './price-filter.css';

function PriceFilter() {
  return (
    <div className="price-filter-container">
      <span className="price-filter-description">Цена</span>
      <div className="price-filter-input-wrapper">
        <div className="price-filter-input-form">
        <label htmlFor="text">От</label>
          <input className="price-filter-input" id="text" type="text" name="text" defaultValue="" placeholder="0" min="0"/>
        </div>
        <div className="price-filter-input-form">
          <label htmlFor="text">До</label>
          <input className="price-filter-input" id="text" type="text" name="text" defaultValue="" placeholder="10000" max="10000"/>
        </div>
      </div>
    </div>
  );
}

export {PriceFilter};