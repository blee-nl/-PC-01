import React from "react";
import PropTypes from "prop-types";
import { ProductCard } from "~/components";

const CardList = ({ onDelete, cardListInfo, cardIds }) => (
  <div className="table-row">
    {cardIds.map((cardId) => {
      const cardInfo = cardListInfo[cardId];
      const product = {
        name: cardInfo.name,
        imageSource: cardInfo.productImage,
        price: cardInfo.salePrice,
        id: cardId,
        priceUnit: "per stuk/ excl. btw",
      };
      return (
        <ProductCard
          key={product.id}
          onDelete={onDelete}
          product={product}
          deleteDisable={cardIds.length <= 1}
          hasControllers
        />
      );
    })}
  </div>
);

CardList.propTypes = {
  cardIds: PropTypes.array.isRequired,
  cardListInfo: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
};

export default CardList;
