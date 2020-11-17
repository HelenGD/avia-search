import { memo } from "react";
import {Card} from "../card/card";
import {ShowMoreButton} from "../show-more-button/show-more-button";

function CardList(props) {
  const {flights} = props;
  return (
    <div>
    {flights.map(flight => (
      <Card
        key={flight.key}
        flight={flight}
      />
    ))}
    <ShowMoreButton />
  </div>
  );
}

const CardListMemo = memo(CardList);
export {CardListMemo as CardList};
