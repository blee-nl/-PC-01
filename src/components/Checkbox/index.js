import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FaCheck, FaTimes } from "react-icons/fa";
import CheckboxWrapper from "./CheckboxWrapper";

const Checkbox = ({ checked, onChange, label, id, disabled }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const onClick = (e) => {
    e.preventDefault();
    if (!disabled) {
      onChange(id);
      setIsChecked(!isChecked);
    }
  };
  useEffect(() => {
    if (checked !== isChecked) {
      setIsChecked(checked);
    }
  }, [checked]);

  return (
    <CheckboxWrapper className="checkbox">
      <button
        onClick={onClick}
        className={classNames({
          actived: isChecked,
          disabled: disabled,
        })}
        data-testid="checkbox-button" 
        disabled={ disabled}
      >
        <div className="check-box">{isChecked ? <FaCheck data-testid="checkedIcon" size={10} />:<FaTimes data-testid='closedIcon'size={10}/>} </div>
        <label>{label}</label>
      </button>
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
