import styled from "styled-components";
import { screen, colors } from "~/Style";
const ProductComparisonPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  margin: auto;
  .title {
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.25;
    margin-bottom: 20px;
    text-align: center;
  }
  .compare-wrapper {
    @media screen and (max-width: ${screen.medium}) {
      overflow-x: scroll;
      width: fit-content;
    }
    .header-block {
      border-bottom: 1px solid #d8d8d8;

      .checkbox-group {
        @media screen and (min-width: ${screen.large}) {
          min-width: 240px;
        }
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

      @media screen and (max-width: ${screen.default}) {
        .list-header-row {
          border-top: 1px solid ${colors.cream};
          flex-direction: column;
          .checkbox-group {
            padding: 30px 0 20px;
            justify-content: center;
            margin: auto;
          }
          .table-row {
            border-top: 1px solid ${colors.cream};
          }
        }
        .floating .list-header-row .checkbox-group {
          display: none;
        }

        @media screen and (max-width: ${screen.medium}) {
          .product-card {
            min-width: 200px;
          }
        }
      }
    }

    .comparison-list-body {
      .list-body-row {
        @media screen and (min-width: ${screen.default}) {
          &:nth-child(2n + 1) {
            &:not(.highlight) {
              background-color: #f9f9fa52;
            }
          }
        }
        &.highlight {
          background-color: #89b3ff1f;
        }
        display: flex;
        flex-direction: row;
        @media screen and (max-width: ${screen.default}) {
          flex-direction: column;
          &.highlight {
            background-color: #789fe4b8;
          }
        }
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
          @media screen and (max-width: ${screen.default}) {
            font-weight: 700;
            font-size: 10px;
            background-color: #f9f9faf0;
          }
        }
        .list-cell-row {
          display: flex;
          min-height: 40px;
          flex-direction: row;
          flex: ${({ numberOfItems }) =>
            numberOfItems && numberOfItems !== 0 ? numberOfItems : "1"};
          @media screen and (max-width: ${screen.medium}) {
            .list-cell {
              min-width: 200px;
            }
          }
        }
      }
    }
  }
`;

export default ProductComparisonPageWrapper;
