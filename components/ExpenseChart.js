import React from "react";
import { Chart } from "react-google-charts";

const ExpenseChart = ({ expenses }) => {
  const chartData = React.useMemo(() => {
    const data = [["Category", "Amount"]];
    const categoryMap = {};

    expenses.forEach(({ category, amount }) => {
      categoryMap[category] = (categoryMap[category] || 0) + amount;
    });

    for (const [category, amount] of Object.entries(categoryMap)) {
      data.push([category, amount]);
    }

    return data;
  }, [expenses]);

  const options = {
    title: "Expenses by Category",
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <Chart
      chartType="PieChart"
      data={chartData}
      options={options}
      width="100%"
      height="400px"
    />
  );
};

export default ExpenseChart;
