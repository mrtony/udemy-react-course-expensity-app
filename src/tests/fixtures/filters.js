import moment from 'moment';

const filters = {
  text: '',
  srotBy: 'amount',
  startDate: undefined,
  endDate: undefined
};

const altFilters = {
  text: 'Bills',
  srotBy: 'date',
  startDate: moment(0),
  endDate: moment(0).add(4, 'day')
};

export {filters, altFilters};