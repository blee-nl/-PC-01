import styled from "styled-components";

const ProductComparisonPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 15px;
  margin: auto;
  .title {
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.25;
    margin-bottom: 20px;
    text-align: center;
  }
  .compare-wrapper {
    .header-block {
      border-bottom: 1px solid #d8d8d8;
      .checkbox-group {
        min-width: 240px;
        flex: 1;
      }
      .table-row {
        flex: ${({ numberOfItems }) =>
          numberOfItems && numberOfItems !== 0 ? numberOfItems : "1"};
      }
      .list-header-row {
        margin: auto;
        flex: 1 1;
        justify-content: center;
        .product-card {
          border: none;
        }
      }
      .list-header-row,
      .table-row {
        display: flex;
        flex-direction: row;
      }
    }

    .comparison-list-body {
      .list-body-row {
        &:nth-child(2n + 1) {
          &:not(.highlight) {
            background-color: #f9f9fa52;
          }
        }
        &.highlight {
          background-color: #89b3ff1f;
        }
        display: flex;
        flex-direction: row;

        border-bottom: 1px solid #f1f1f1;
        .list-cell,
        .list-title {
          flex: 1;
          .value {
            margin: 10px 20px;
            &.badges {
              display: flex;
              flex-wrap: wrap;
              img {
                margin-right: 5px;
                height: 18px;
                width: 18px;
              }
            }
          }
        }
        .list-title {
          font-weight: 500;
          min-width: 240px;
          padding: 2px 10px;
        }
      }
    }
  }
`;

export default ProductComparisonPageWrapper;
