import React from "react";
import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
import ProductCardWrapper from "./ProductCardWrapper";
import PriceWithCurrency from "../PriceWithCurrency";

const ProductCard = ({
  hasControllers,
  onDelete,
  product: { name, imageSource, price, id, priceUnit },
  deleteDisable,
}) => (
  <ProductCardWrapper className="product-card" data-testid="product-card">
    {hasControllers && (
      <div className="controllers">
        {!deleteDisable && (
          <button
            className="remove-btn"
            onClick={(e) => {
              e.preventDefault();
              onDelete(id);
            }}
            data-testid="remove-button"
          >
            <FaTrashAlt data-testid="remove-button-icon" size={15} />
          </button>
        )}
      </div>
    )}
    <div className="product-image">
      <img src={imageSource} alt={name} />
    </div>
    <div className="product-details">
      <a className="name" href={id}>
        {name}
      </a>
      <div className="price">
        {price && <PriceWithCurrency price={price} />}
      </div>
      <div className="price-unit">{priceUnit}</div>
    </div>
  </ProductCardWrapper>
);

ProductCard.defaultProps = {
  hasControllers: true,
};

ProductCard.propTypes = {
  deleteDisable: PropTypes.bool,
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    priceUnit: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  hasControllers: PropTypes.bool,
  onDelete: PropTypes.func,
};

ProductCard.propTypes = {
  hasControllers: PropTypes.bool,
  onDelete: PropTypes.func,
};

export default ProductCard;
