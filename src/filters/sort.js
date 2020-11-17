export const SortType = {
  PRICE_LOW_TO_HIGH: 'PRICE_LOW_TO_HIGH',
  PRICE_HIGH_TO_LOW: 'PRICE_HIGH_TO_LOW',
  TRAVEL_TIME: 'TRAVEL_TIME',
};

const getTotalDuration = (flight) => flight.routes.reduce(
  (total, route) => total + route.duration,
  0,
);

export const getSortedTickets = (tickets, sortType = SortType.PRICE_LOW_TO_HIGH) => {
  switch (sortType) {
    case SortType.PRICE_LOW_TO_HIGH:
      return tickets.slice().sort((a, b) => a.amount - b.amount);
    case SortType.PRICE_HIGH_TO_LOW:
      return tickets.slice().sort((a, b) => b.amount - a.amount);
    case SortType.TRAVEL_TIME:
      return tickets.slice().sort((a, b) => getTotalDuration(a) - getTotalDuration(b));
    default:
      return tickets;
  }
};

