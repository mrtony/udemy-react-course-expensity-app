import moment from 'moment';

const expenses = [
  {
    id: '1',
    description: 'water bill',
    note: '',
    amount: 20010,
    createdAt: +moment(0).subtract(4, 'day')
  },
  {
    id: '2',
    description: 'gas bill',
    note: '',
    amount: 30000,
    createdAt: +moment(0)
  },
  {
    id: '3',
    description: 'car bill',
    note: '',
    amount: 130000,
    createdAt: +moment(0).add(4, 'day')
  }
];

export {expenses};