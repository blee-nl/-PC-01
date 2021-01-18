import styled from "styled-components";
import { colors } from "~/Style";

const CheckboxWrapper = styled.div`
  display: flex;
  padding: 2px;
  label {
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
  }
  button {
    width: 18px;
    height: 18px;
    margin: 4px 10px 0 5px;
    border: none;
    position: relative;
    color: white;
    border: 1px solid #d8d8d8;
    background: white;
    &:hover {
      background-color: ${colors.blue};
      color: white;
    }
    &:focus {
      outline: none;
    }
    &.actived {
      color: ${colors.blue};
      border: 1px solid #d8d8d8;
      background: white;
      &:hover {
        background-color: ${colors.blue};
        color: white;
      }
    }
    &.disabled {
      border: 1px solid #d8d8d8;
      background: #e2e0e0;
      color: #e5f2ff;
      &:hover {
        cursor: not-allowed;
      }
    }
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    svg {
      position: absolute;
      left: 2px;
      top: 3px;
    }
  }
`;

export default CheckboxWrapper;
