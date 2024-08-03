import React from "react";
import categories from "../categories";

interface Props {
  onSelectFilter: (category: string) => void;
}

const ExpenseFilter = ({ onSelectFilter }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectFilter(event?.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
