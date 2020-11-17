const getMaxStops = (flight) => flight.routes.reduce(
  (total, route) => Math.max(total, route.stops),
  0,
);

export const getFilteredFlights = (flights, {stops, range}) => {
  return flights.filter(flight =>  {
    const maxStops = getMaxStops(flight);

    const amount = parseInt(flight.amount, 10);
    const inRange = range.min <= amount && range.max >= amount

    return stops[maxStops] && inRange;
  });
}
