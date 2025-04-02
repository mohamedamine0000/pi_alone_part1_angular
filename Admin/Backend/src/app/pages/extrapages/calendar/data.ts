import { EventInput } from '@fullcalendar/core';


let eventGuid = 0;
export function createEventId() {
  return String(eventGuid++);
}


var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();

const defaultEvents = [
  {
    id: 1,
    title: "Alfred Hurst",
    start: "2023-01-04",
    location: 'Atlanta, Georgia',
    allDay: true,
    className: "bg-info-subtle",
    status: "New",
    payment: "354.99",
  },
  {
    id: 2,
    title: "Tommy Carey",
    start: "2023-01-30",
    className: "bg-info-subtle",
    location: 'Virginia Beach, Virginia',
    allDay: true,
    status: "New",
    payment: "742.00",
  },
  {
    id: 3,
    title: "Cassius Brock",
    start: "2023-02-21",
    className: "bg-info-subtle",
    location: 'Sacramento, California',
    allDay: true,
    status: "New",
    payment: "150.99",
  },
  {
    id: 4,
    title: "Camilla Winters",
    start: "2023-03-08",
    className: "bg-info-subtle",
    location: 'Fresno, California',
    allDay: true,
    status: "New",
    payment: "96.26",
  },
  {
    id: 5,
    title: "Gabrielle Holden",
    start: "2023-02-22",
    className: "bg-info-subtle",
    location: 'El Paso, Texas',
    allDay: true,
    status: "New",
    payment: "229.00",
  },
  {
    id: 6,
    title: '#TBT86-Kristina Hooper',
    start: "2023-03-21",
    className: "bg-info-subtle",
    location: 'Seattle, Washington',
    allDay: true,
    status: "New",
    payment: "354.99",
  },
  {
    id: 7,
    title: "Jacques Leon",
    start: "2023-03-22",
    className: "bg-info-subtle",
    location: 'Fort Worth, Texas',
    allDay: true,
    status: "New",
    payment: "120.00",
  },
  {
    id: 8,
    title: "Theresa Crawford",
    start: "2023-04-07",
    className: "bg-info-subtle",
    location: 'Atlanta, Georgia',
    allDay: true,
    status: "New",
    payment: "81.99",
  },
  {
    id: 9,
    title: "Alina Holland",
    start: "2023-04-16",
    className: "bg-info-subtle",
    location: 'Portland, Oregon',
    allDay: true,
    status: "New",
    payment: "209.99",
  },
  {
    id: 10,
    title: "Edward Rogers",
    start: "2023-04-22",
    className: "bg-info-subtle",
    location: 'Denver, Colorado',
    allDay: true,
    status: "New",
    payment: "309.09",
  },

];

export const events: EventInput[] = [
  {
    id: createEventId(),
    title: '#TBT8153-Catherine Flores',
    start: new Date(y, m, 1),
    className: 'bg-success-subtle',
    location: 'Charlotte, North Carolina',
    allDay: true,
    status: "Delivered",
    extendedProps: {
      department: 'All Day Event'
    },
    description: 'An all-day event is an event that lasts an entire day or longer',
    payment: "$126.99",
    borderColor: 'transparent'
  },
  {
    id: createEventId(),
    title: '#TBT8136-William Hendrix',
    start: new Date(y, m, d - 5),
    end: new Date(y, m, d - 2),
    allDay: true,
    status: "New",
    className: 'bg-info-subtle',
    location: 'San Francisco, California',
    extendedProps: {
      department: 'Long Event'
    },
    description: 'Long Term Event means an incident that last longer than 12 hours.',
    payment: "$211.99",
    borderColor: 'transparent'
  },
  {
    id: createEventId(),
    title: 'Joan Trimble',
    start: new Date(y, m, d + 22, 20, 0),
    end: new Date(y, m, d + 24, 16, 0),
    allDay: true,
    status: "New",
    className: 'bg-info-subtle',
    location: 'Seattle, Washington',
    extendedProps: {
      department: 'Meeting with Alexis'
    },
    description: 'A meeting is a gathering of two or more people that has been convened for the purpose of achieving a common goal through verbal interaction, such as sharing information or reaching agreement.',
    payment: "$260.04",
    borderColor: 'transparent'
  },
  {
    id: createEventId(),
    title: 'Emma Harper',
    start: new Date(y, m, d + 4, 16, 0),
    end: new Date(y, m, d + 9, 16, 0),
    allDay: true,
    status: "New",
    className: 'bg-info-subtle',
    location: 'Las Vegas, Nevada',
    extendedProps: {
      department: 'Repeating Event'
    },
    description: 'A recurring or repeating event is simply any event that you will occur more than once on your calendar. ',
    payment: "$354.99",
    borderColor: 'transparent'
  },
  {
    id: createEventId(),
    title: 'Michael Burks',
    start: new Date(y, m, d, 12, 30),
    allDay: true,
    status: "Shipped",
    className: 'bg-warning-subtle',
    location: 'San Antonio, Texas',
    extendedProps: {
      department: 'Meeting'
    },
    description: 'Tell how to boost website traffic',
    payment: "$94.69",
    borderColor: 'transparent'
  },
  {
    id: createEventId(),
    title: '#TBT8113-David McMillan',
    start: new Date(y, m, d + 9),
    end: new Date(y, m, d + 11),
    allDay: true,
    status: "New",
    className: 'bg-info-subtle',
    location: 'Phoenix, Arizona',
    extendedProps: {
      department: 'Lunch'
    },
    description: 'Strategies for Creating Your Weekly Schedule',
    payment: "$350.99",
    borderColor: 'transparent'

  },
  {
    id: createEventId(),
    title: '#TBT8112-Michael Burks',
    start: new Date(y, m, d + 1, 19, 0),
    allDay: true,
    status: "Cancelled",
    className: 'bg-danger-subtle',
    location: 'Los Angeles, California',
    extendedProps: {
      department: 'Birthday Party'
    },
    description: 'Family slumber party – Bring out the blankets and pillows and have a family slumber party! Play silly party games, share special snacks and wind down the fun with a special movie.',
    payment: "$205.55",
    borderColor: 'transparent'

  },
  {
    id: createEventId(),
    title: '#TBT87-Jacques Leon',
    start: new Date(y, m, 28),
    end: new Date(y, m, 29),
    allDay: true,
    status: "Shipped",
    className: 'bg-warning-subtle',
    location: 'Chicago, Illinois',
    payment: "$154.28",
    borderColor: 'transparent'

  },
  {
    id: createEventId(),
    title: '#TBT86-Ryan Simmons',
    start: new Date(y, m, d + 23, 20, 0),
    end: new Date(y, m, d + 24, 16, 0),
    allDay: true,
    className: 'bg-info-subtle',
    location: 'Los Angeles, California',
    status: "New",
    extendedProps: {
      department: 'Discussion'
    },
    description: 'Tell how to boost website traffic',
    payment: "$180.09",
    borderColor: 'transparent'

  },


];
export { defaultEvents }