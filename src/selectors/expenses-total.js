export default (expenses) => {
  if (!expenses || expenses.length === 0)
    return 0;
  return expenses.map(e => e.amount).reduce((sum, curr) => sum + curr, 0);
};