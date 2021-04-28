import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";

import { CATEGORIES } from "../../utils/category";

import "./multi-filter.styles.css";

const onSelect = (selectedList, selectedItem) => {};

const onRemove = (selectedList, removedItem) => {};

const MultiFilter = () => {
  const [options] = useState(CATEGORIES);

  const [selectedValues] = useState(CATEGORIES);

  return (
    <div style={{ minHeight: "20rem" }}>
      <Multiselect
        options={options}
        selectedValues={selectedValues}
        isObject={true}
        placeholder="Category"
        closeOnSelect={false}
        displayValue="categoryName"
        onSelect={onSelect}
        onRemove={onRemove}
      />
    </div>
  );
};

export default MultiFilter;
