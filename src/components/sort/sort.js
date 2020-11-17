import './sort.css';
import { SortType } from '../../filters/sort';

const sortItems = [
  {
    type: SortType.PRICE_LOW_TO_HIGH,
    text: `по возрастанию цены`
  },
  {
    type: SortType.PRICE_HIGH_TO_LOW,
    text: `по убыванию цены`
  },
  {
    type: SortType.TRAVEL_TIME,
    text: `по времени в пути`
  }
];

function Sort(props) {
  const {type, onChange} = props;

  return (
    <div className="sort-container">
      <span className="sort-description">Сортировать</span>
      <div className="sort-radio-buttons">
        {sortItems.map((sortItem) => (
          <div
            key={sortItem.type}
            className="sort-radio-form"
          >
            <input 
              id={sortItem.type}
              checked={sortItem.type === type}
              type="radio"
              name="radio"
              value={sortItem.type} 
              onChange={() => onChange(sortItem.type)}
            />
            <label htmlFor={sortItem.type}>{sortItem.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Sort };


// {menuItems.map((menuItem) => (
//   <li key={menuItem.type}
//     className={`places__option ${menuItem.type === currentSortType ? `places__option--active` : ``}`}
//     tabIndex="0"
//     onClick={() => this._handleMenuClick(menuItem.type)}
//   >
//     {menuItem.text}
//   </li>
// ))}

 /* <div className="sort-radio-form">
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
        </div> */