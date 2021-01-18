import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FaCheck } from "react-icons/fa";
import CheckboxWrapper from "./CheckboxWrapper";

const Checkbox = ({ checked, onChange, label, id, disabled }) => {

  const onClick = (e) => {
    e.preventDefault();
    if (!disabled) {
      onChange(id);
    }
  };
  
  return (
    <CheckboxWrapper className="checkbox">
      <button
        onClick={onClick}
        className={classNames({
          actived: checked,
          disabled: disabled,
        })}
      >
        {checked && <FaCheck size={10} />}
      </button>
      <label>{label}</label>
    </CheckboxWrapper>
  );
};

Checkbox.defaultProps = {
  onChange: () => false,
  disabled: false,
};

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
