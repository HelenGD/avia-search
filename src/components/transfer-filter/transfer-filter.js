import './transfer-filter.css';

function TransferFilter() {
  return (
    <div className="transfer-filter-container">
      <span className="transfer-filter-description">Фильтровать</span>
      <div className="transfer-filter-checkbox-buttons">
        <div className="transfer-filter-checkbox-form">
          <input type="checkbox" id="one-transfer" name="one-transfer" />
          <label htmlFor="one-transfer">- 1 пересадка</label>
        </div>
        <div className="transfer-filter-checkbox-form">
          <input type="checkbox" id="no-transfer" name="no-transfer" />
          <label htmlFor="no-transfer">- без пересадок</label>
        </div>
      </div>
    </div>
  );
}

export { TransferFilter };