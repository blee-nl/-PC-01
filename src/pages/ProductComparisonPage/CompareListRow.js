import React from "react";
import PropTypes from "prop-types";

const CompareListRow = ({ label, list, key }) => (
  <div class="list-row">
    <div class="row-header">
      <label>{label}</label>
    </div>
    <div class="table-row">
      {list.map((item) => (
        <div class="td">{item[key]}</div>
      ))}
    </div>
  </div>
);

CompareListRow.propTypes = {
  key: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  label: PropTypes.string,
};

export default CompareListRow;
