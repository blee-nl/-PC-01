import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import StickyHeadWrapper from "./StickyHeadWrapper";

export function StickyHead({ children, className, topPosition }) {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      setActive(ref.current.getBoundingClientRect().top <= topPosition);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <StickyHeadWrapper className={classNames(className)} ref={ref}>
      <div className={classNames({ floating: active })}>{children}</div>
    </StickyHeadWrapper>
  );
}

StickyHead.defaultProps = {
  topPosition: 0,
};

StickyHead.propTypes = {
  children: PropTypes.any.isRequired,
  topPosition: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export default StickyHead;
