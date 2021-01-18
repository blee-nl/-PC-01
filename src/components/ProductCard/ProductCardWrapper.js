import styled from "styled-components";

const ProductCardWrapper = styled.div`
  font-size: 12px;
  line-height: 14px;
  width: 100%;
  color: #25282b;
  flex-direction: column;
  position: relative;
  padding: 20px;
  border: 1px solid #d8d8d8;
  .product-image {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 110px;
      height: 110px;
    }
  }
  .controllers {
    position: absolute;
    z-index: 1;
    top: 0.4rem;
    right: 0.4rem;
    .remove-btn {
      width: 2rem;
      background: none;
      border: none;
      cursor: pointer;
      color: #a0a4a8;
      &:hover {
        color: #25282b;
      }
      height: 2rem;
      font-size: 1.5rem;

      &:focus {
        outline: none;
      }
    }
  }
  .product-details {
    padding: 18px 0 10px;

    a {
      color: #333;
      display: block;
      text-decoration: none;
      background-color: transparent;
      font-size: 14px;
      line-height: 20px;
      &:hover {
        text-decoration: underline;
      }
    }
    .name {
      font-family: Roboto;
      font-size: 13px;
      line-height: 14px;
      width: 100%;
      font-weight: 500;
      border-bottom: 1px solid #ccc;
      padding-bottom: 8px;
    }
    .price-unit {
      color: #6b6c6f;
    }
    .price {
      padding: 5px 0;
      margin: 0;
      font-size: 24px;
      line-height: 32px;
    }
  }
`;
export default ProductCardWrapper;
