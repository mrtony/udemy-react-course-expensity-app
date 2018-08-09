import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker, SingleDatePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import moment from 'moment';

export class ExpenseListFilters extends React.Component {
    state = {
        focusedInput: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange = (focusedInput) => {     
        this.setState(() => ({focusedInput}));
    }
    onTextChange = (e) => {
      this.props.setTextFilter(e.target.value);
    }
    onSortChange = (e) => {
      e.target.value === 'date'? 
      this.props.sortByDate() : this.props.sortByAmount();
    }
    render() {
        return (
            <div>
                <input type="text" 
                value={this.props.filters.text} 
                onChange={this.onTextChange}
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                    >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                startDateId="your_unique_start_date_id"
                startDate={this.props.filters.startDate}
                endDateId="your_unique_end_date_id"
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.focusedInput}
                onFocusChange={this.onFocusChange}
                readOnly={true}
                isOutsideRange={() => false}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
