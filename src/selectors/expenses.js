export default (expenses, {
    text,
    sortBy,
    startDate,
    endDate
}) => {
    return expenses.filter(expense => {
            const textMatch = !text || expense.description.toLowerCase().includes(text.toLowerCase());
            const startDateMatch = startDate? startDate.isSameOrBefore(expense.createdAt, 'day'): true;
            const endDateMatch = endDate? endDate.isSameOrAfter(expense.createdAt, 'day'): true;
            return textMatch && startDateMatch && endDateMatch;
        })
        .sort((a, b) => {
            if (sortBy === 'date')
                return (a.createdAt < b.createdAt ? 1 : -1);
            else if (sortBy === 'amount')
                return (a.amount < b.amount ? 1 : -1);
        });
}