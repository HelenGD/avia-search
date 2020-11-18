import {v4 as uuidv4} from 'uuid';

import mock from './flights.json';
import {random} from '../../utils';


export const fetchFlights = () => {

  const flights = mock.result.flights.map(flight => ({
    key: uuidv4(),
    caption: flight.flight.carrier.caption,
    amount: flight.flight.price.total.amount,
    routes: flight.flight.legs.map(leg => {
      const segment = leg.segments[0].departureCity
        ? leg.segments[0]
        : leg.segments[1];

      return {
        key: uuidv4(),
        duration: leg.duration,
        airline: segment.airline,
        departureCity: segment.departureCity,
        arrivalDate: segment.arrivalDate,
        departureAirport: segment.departureAirport,
        departureDate: segment.departureDate,

        arrivalCity: segment.arrivalCity,
        arrivalAirport: segment.arrivalAirport,
        stops: random(0, 1),
      };
    })
  }))

  return Promise.resolve(flights);
};
