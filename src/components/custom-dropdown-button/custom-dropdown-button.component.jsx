import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

import "./custom-dropdown-button.styles.css";

const CustomDropDownButton = ({
  categories,
  label,
  name,
  customClass,
  handleChange,
}) => {
  return (
    <div>
      <label>{label}</label>
      <DropdownButton
        id="custom-dropdown-button"
        variant="Secondary"
        title={name}
        className={"cdd-button " + customClass}
      >
        {categories.map((category, key) => {
          return (
            <Dropdown.Item
              key={key}
              name={label}
              onClick={() =>
                handleChange(category.categoryName, category.color)
              }
            >
              <i
                className={`fas ${category.icon} category-icon`}
                style={{ background: `${category.color}` }}
              ></i>{" "}
              {category.categoryName}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </div>
  );
};

export default CustomDropDownButton;
