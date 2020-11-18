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
