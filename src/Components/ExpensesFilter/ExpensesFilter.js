import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={props.onFilterChange}>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2019">2018</option>
        </select>
      </div>
      <div>Graph here</div>
    </div>
  );
};

export default ExpensesFilter;
