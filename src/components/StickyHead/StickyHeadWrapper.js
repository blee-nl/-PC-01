import styled from "styled-components";

const StickyheaderWrapper = styled.div`
  width: 100%;
  .floating {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 10;
    border-bottom: 1px solid #868383;
    background: white;
    filter: drop-shadow(0px 2px 8px rgba(190, 201, 214, 0.3));
  }
`;
export default StickyheaderWrapper;
