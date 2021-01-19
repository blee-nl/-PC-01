import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import CheckboxGroupWrapper from "./CheckboxGroupWrapper";
import Checkbox from "../Checkbox";

const CheckboxGroup = ({
  subjects,
  list,
  currentSelected,
  onChange,
  minimumSelection,
  direction,
}) => (
  <CheckboxGroupWrapper
    className={classNames("checkbox-group", {
      vertical: direction === "column",
    })}
  > 
    {subjects.map((subject) => {
      const actived = currentSelected.indexOf(subject) !== -1;
      const disabled = currentSelected.length === minimumSelection && actived;

      const product = list[subject];
      return (
        <Checkbox
          key={subject}
          id={subject}
          checked={actived}
          onChange={onChange}
          label={product.name}
          disabled={disabled}
        />
      );
    })}
  </CheckboxGroupWrapper>
);

CheckboxGroup.defaultProps = {
  minimumSelection: 1,
  subjects:[]
};

CheckboxGroup.propTypes = {
  subjects: PropTypes.array.isRequired,
  list: PropTypes.object.isRequired,
  currentSelected: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  direction: PropTypes.string,
  minimumSelection: PropTypes.number,
};

export default CheckboxGroup;
