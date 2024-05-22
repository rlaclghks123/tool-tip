import { useState } from 'react';

import './index.css';
import Tooltip from '../Tooltip.tsx';
import {
  BOTTOM_INFO,
  BasicTooltipsType,
  LEFT_INFO,
  RIGHT_INFO,
  TOP_INFO,
} from '../../db/basicTolltipsDb.ts';

function BasicTooltips() {
  const [isHover, setIsHover] = useState(false);
  const [tooltipState, setTooltipState] = useState({
    contents: '',
    direction: '',
  });

  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  function handleMouseOver(e: React.MouseEvent<HTMLButtonElement>, info: BasicTooltipsType) {
    const target = e.target as HTMLButtonElement;

    setPosition(() => {
      return {
        top: target.offsetTop,
        left: target.offsetLeft,
      };
    });

    setTooltipState(() => {
      return {
        contents: info.tooltipContents,
        direction: info.direction,
      };
    });

    setIsHover(true);
  }

  return (
    <>
      <div className="basicTooltips-wrapper">
        <div className="non-scroll-container">
          <div className="top-wrapper">
            {TOP_INFO.map((info) => (
              <button
                key={info.id}
                onMouseOver={(e) => handleMouseOver(e, info)}
                onMouseLeave={() => setIsHover(false)}
                className="tooltip-btn"
              >
                {info.bottonContents}
              </button>
            ))}
          </div>

          <div className="side-wrapper">
            <div className="left-wrapper">
              {LEFT_INFO.map((info) => (
                <button
                  key={info.id}
                  className="tooltip-btn"
                  onMouseOver={(e) => handleMouseOver(e, info)}
                  onMouseLeave={() => setIsHover(false)}
                >
                  {info.bottonContents}
                </button>
              ))}
            </div>
            <div className="right-wrapper">
              {RIGHT_INFO.map((info) => (
                <button
                  key={info.id}
                  className="tooltip-btn"
                  onMouseOver={(e) => handleMouseOver(e, info)}
                  onMouseLeave={() => setIsHover(false)}
                >
                  {info.bottonContents}
                </button>
              ))}
            </div>
          </div>

          <div className="bottom-wrapper">
            {BOTTOM_INFO.map((info) => (
              <button
                key={info.id}
                className="tooltip-btn"
                onMouseOver={(e) => handleMouseOver(e, info)}
                onMouseLeave={() => setIsHover(false)}
              >
                {info.bottonContents}
              </button>
            ))}
          </div>
        </div>

        <div className="scroll-box">
          <div className="top-wrapper">
            {TOP_INFO.map((info) => (
              <button
                key={info.id}
                className="tooltip-btn"
                onMouseOver={(e) => handleMouseOver(e, info)}
                onMouseLeave={() => setIsHover(false)}
              >
                {info.bottonContents}
              </button>
            ))}
          </div>
          <div className="side-wrapper">
            <div className="left-wrapper">
              {LEFT_INFO.map((info) => (
                <button
                  key={info.id}
                  className="tooltip-btn"
                  onMouseOver={(e) => handleMouseOver(e, info)}
                  onMouseLeave={() => setIsHover(false)}
                >
                  {info.bottonContents}
                </button>
              ))}
            </div>
            <div className="right-wrapper">
              {RIGHT_INFO.map((info) => (
                <button
                  key={info.id}
                  className="tooltip-btn"
                  onMouseOver={(e) => handleMouseOver(e, info)}
                  onMouseLeave={() => setIsHover(false)}
                >
                  {info.bottonContents}
                </button>
              ))}
            </div>
          </div>

          <div className="bottom-wrapper">
            {BOTTOM_INFO.map((info) => (
              <button
                key={info.id}
                className="tooltip-btn"
                onMouseOver={(e) => handleMouseOver(e, info)}
                onMouseLeave={() => setIsHover(false)}
              >
                {info.bottonContents}
              </button>
            ))}
          </div>
        </div>
      </div>

      {isHover && (
        <Tooltip position={position} direction={tooltipState?.direction}>
          {tooltipState?.contents}
        </Tooltip>
      )}
    </>
  );
}

export default BasicTooltips;
