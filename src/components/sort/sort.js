import './sort.css';

// const sort = [
//   {
//     id: 1,
//     type: 
//   }
// ]

function Sort() {
  return (
    <div className="sort-container">
      <span className="sort-description">Сортировать</span>
      <div className="sort-radio-buttons">
        <div className="sort-radio-form">
          <input id="increase-price" type="radio" name="radio" value="radio-1" defaultChecked/>
          <label htmlFor="increase-price">- по возрастанию цены</label>
        </div>
        <div className="sort-radio-form">
          <input id="decrease-price" type="radio" name="radio" value="radio-2" />
          <label htmlFor="decrease-price">- по убыванию цены</label>
        </div>
        <div className="sort-radio-form">
          <input id="travel-time" type="radio" name="radio" value="radio-3" />
          <label htmlFor="travel-time">- по времени в пути</label>
        </div>
      </div>
    </div>
  );
}

export { Sort };
