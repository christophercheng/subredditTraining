import React from 'react';

const DropSelector = ({ subcategories, handleChangeSubcategory, selectedSubcategory }) => {
  const selectHandler = (e) => {
    e.preventDefault();
    handleChangeSubcategory(this.select.value);
  };
  return (
    <div className="drop-selector">
      <select onChange={selectHandler} ref={(el) => { this.select = el; }}>
        {subcategories.map((el) => {
          const isSelected = (selectedSubcategory === el) ? "selected" : "";
          return (
            <option
              key={`${el}`}
              value={`${el}`}
              selected={isSelected}
            >
              {el}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropSelector;
