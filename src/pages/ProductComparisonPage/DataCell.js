import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  getDisplayValue,
} from "~/helpers";

const DataCell = ({ value, icons, id }) => (
  <div className="list-cell">
    <div className={classNames("value", { icons: icons })}>
      {!icons && getDisplayValue(value)}
      {icons &&
        icons.map((iconUrl, index) => (
          <img key={id + index} src={iconUrl} alt="icon" />
        ))}
    </div>
  </div>
);

DataCell.defaultProps={
  icons:false
}

DataCell.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  icons: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  id: PropTypes.string,
};

export default DataCell;
