import React from "react";
import PropTypes from "prop-types";
import { capitalCase } from "capital-case";
import classNames from "classnames";
import {
  getimageLinkArray,
  getDisplayValue,
  checkObjOfObtKeyValueDifference,
} from "~/helpers";

const listToNotHighlight = [
  "atp",
  "BUP_Conversion",
  "BUP_UOM",
  "BUP_Value",
  "channel",
  "display",
  "grossPrice",
  "listPrice",
  "productImage",
  "manufacturerImage",
  "manufacturerName",
  "minQuantity",
  "name",
  "salePrice",
  "sku",
  "uom",
];

const CompareBody = ({
  productIds,
  productsInfo,
  productInfoKeys,
  numberOfCloumn,
}) => (
  <div className="comparison-list-body">
    {productInfoKeys.map((productInfoKey) => {
      const hasDifferentValue = checkObjOfObtKeyValueDifference(
        productsInfo,
        productInfoKey
      );
      const isNotInlistToNotHighlight =
        listToNotHighlight.indexOf(productInfoKey) === -1;
      return (
        <div
          className={classNames("list-body-row", {
            highlight: isNotInlistToNotHighlight && hasDifferentValue,
          })}
          key={productInfoKey}
        >
          <div className="list-title">
            <div className="value">{capitalCase(productInfoKey)}</div>
          </div>
          <div className="list-cell-row">
            {productIds.map((productId) => {
              let value = productsInfo[productId][productInfoKey];
              //badges section is set of icons to show
              //badges value is string and has multiple image urls
              //if icons has values , it will return array of image url strings or flase
              const icons =
                productInfoKey === "badges" &&
                value &&
                getimageLinkArray(value).length > 0
                  ? getimageLinkArray(value)
                  : false;

              return (
                <div className="list-cell" key={productId}>
                  <div className={classNames("value", { badges: icons })}>
                    {!icons && getDisplayValue(value)}
                    {icons &&
                      icons.map((iconUrl, index) => (
                        <img
                          key={productInfoKey + index}
                          src={iconUrl}
                          alt="img"
                        />
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    })}
  </div>
);

CompareBody.propTypes = {
  productIds: PropTypes.array.isRequired,
  productsInfo: PropTypes.object.isRequired,
  productInfoKeys: PropTypes.array.isRequired,
};

export default CompareBody;
