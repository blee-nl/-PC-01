import styled from "styled-components";
import { colors } from "~/Style";

const CheckboxWrapper = styled.div`
  display: flex;
  padding: 2px;

  button {
    background: white;
    border: none;
    display: flex;
    &:hover {
      .check-box {
        background-color: ${colors.blue};
        color: ${colors.blue};
      }
    }
    &:focus {
      outline: none;
    }
    &.actived {
      .check-box {
        color: ${colors.blue};
        border: 1px solid #d8d8d8;
        background: white;
        &:hover {
          background-color: ${colors.blue};
          color: ${colors.blue};
        }
      }
    }
    &.disabled {
      .check-box {
        border: 1px solid #d8d8d8;
        background: #e2e0e0;
        color: #e5f2ff;
        &:hover {
          cursor: not-allowed;
        }
      }
      label:hover {
        cursor: not-allowed;
      }
    }

    label {
      font-size: 12px;
      line-height: 18px;
      font-weight: 500;
      cursor: pointer;
    }
    cursor: pointer;
    .check-box {
      min-width: 18px;
      height: 18px;
      margin: 0 10px 0 5px;
      position: relative;
      color: #e8e8e8;
      border: 1px solid #d8d8d8;
      background: white;
      box-sizing: border-box;
      border-radius: 4px;
      svg {
        position: absolute;
        left: 2px;
        top: 3px;
      }
    }
  }
`;

export default CheckboxWrapper;
