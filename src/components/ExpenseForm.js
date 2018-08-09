import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        description: props.expense? props.expense.description: '',
        note: props.expense? props.expense.note: '',
        amount: props.expense? (props.expense.amount / 100).toString(): '',
        createdAt: props.expense? moment(props.expense.createdAt): moment(),
        calenderFocused: false,
        error: ''
      }
    }

    onDescriptionChange = (e) => {
      const { value: description} = e.target;
      this.setState(() => ({description}));
    }
    onNoteChange = e => {
      const { value: note} = e.target;
      this.setState(() => ({note}));
    }
    onAmountChange = e => {
      const { value: amount } = e.target;
      if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
        this.setState(() => ({amount}));
    }
    onDateChange = (createdAt) => {
      if (createdAt)
        this.setState(() => ({createdAt}));
    }
    onFocusChange = ({focused: calenderFocused}) => {
      this.setState(() => ({calenderFocused}));
    }
    onSubmit = e => {
      e.preventDefault();
      if (!this.state.description || !this.state.amount)
        this.setState(() => ({error: 'Please provide description and amount'}));
      else {
        this.setState(() => ({error: ''}));
        this.props.onSubmit({
          description: this.state.description,
          amount: parseFloat(this.state.amount, 10) * 100,
          createdAt: +this.state.createdAt,
          note: this.state.note
        });
      }
    }
    render() {
        return (
            <div>
                <h1>Expense Form</h1>
                {
                  this.state.error && <p>{this.state.error}</p>
                }
                <form onSubmit={this.onSubmit}>
                  <input type="text" placeholder="Description" autoFocus 
                  value={this.state.description}
                  onChange={this.onDescriptionChange} />
                  <input type="text" 
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    placeholder="Amount"/>
                  <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    id="d001"
                  />
                  <textarea placeholder="Add a note for your expense(optional)"
                  value={this.state.note}
                  onChange={this.onNoteChange}>
                  </textarea>
                  <button>Add Expense</button>
                </form>
            </div>
        );
    }
}
export default ExpenseForm;