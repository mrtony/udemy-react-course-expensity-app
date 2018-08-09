import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = props => (
    <div>
        <Link to={`/edit/${props.id}`}><h3>Description: {props.description}</h3></Link>
        <p>Note: {props.amount}-{props.createdAt}</p>
    </div>
);

export default ExpenseListItem;