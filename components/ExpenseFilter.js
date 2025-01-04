import React from "react";
import DatePicker from "react-datepicker";

const ExpenseFilter = ({ filter, setFilter }) => {
  const handleCategoryChange = (e) => {
    setFilter({ ...filter, category: e.target.value });
  };

  const handleDateRangeChange = (dates) => {
    setFilter({ ...filter, dateRange: dates });
  };

  return (
    <div className="expense-filter">
      <select value={filter.category} onChange={handleCategoryChange}>
        <option value="All">All Categories</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Rent">Rent</option>
        <option value="Other">Other</option>
      </select>
      <DatePicker
        selectsRange
        startDate={filter.dateRange ? filter.dateRange[0] : null}
        endDate={filter.dateRange ? filter.dateRange[1] : null}
        onChange={handleDateRangeChange}
        isClearable
      />
    </div>
  );
};

export default ExpenseFilter;
