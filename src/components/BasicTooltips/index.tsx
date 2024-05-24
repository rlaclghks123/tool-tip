import { useState } from 'react';

import './index.css';
import Tooltip from '../Tooltip.tsx';
import useHoverTooltip from '../../hooks/useHoverTooltip.ts';

import {
  BOTTOM_INFO,
  BasicTooltipsType,
  LEFT_INFO,
  RIGHT_INFO,
  TOP_INFO,
} from '../../db/basicTolltipsDb.ts';
import changedPosition from '../../utils/changedPosition.ts';

function BasicTooltips() {
  const [tooltipState, setTooltipState] = useState({
    contents: [''],
    direction: '',
  });

  const { isOpen, position, setPosition, handleMouseOver, handleMouseLeave } = useHoverTooltip({
    direction: '',
  });

  function handle(e: React.MouseEvent<HTMLButtonElement>, info: BasicTooltipsType) {
    const { direction, tooltipContents } = info;
    const position = {
      top: { changeTop: 30, changeLeft: 10 },
      left: { changeTop: -33, changeLeft: 110 },
      right: { changeTop: -33, changeLeft: -80 },
      bottom: { changeTop: -90, changeLeft: 15 },
    };

    const { changedTop, changedLeft } = changedPosition({ direction, position });

    handleMouseOver(e);

    setPosition((prev) => ({
      left: prev.left - changedLeft,
      top: prev.top - changedTop,
      direction,
    }));

    setTooltipState(() => {
      return {
        contents: tooltipContents,
        direction: direction,
      };
    });
  }

  return (
    <>
      <div className="basicTooltips-wrapper">
        <div className="non-scroll-container">
          <div className="top-wrapper">
            {TOP_INFO.map((info) => (
              <button
                key={info.id}
                onMouseOver={(e) => handle(e, info)}
                onMouseLeave={() => handleMouseLeave(true)}
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
                  onMouseOver={(e) => handle(e, info)}
                  onMouseLeave={() => handleMouseLeave(true)}
                  className="tooltip-btn"
                >
                  {info.bottonContents}
                </button>
              ))}
            </div>
            <div className="right-wrapper">
              {RIGHT_INFO.map((info) => (
                <button
                  key={info.id}
                  onMouseOver={(e) => handle(e, info)}
                  onMouseLeave={() => handleMouseLeave(true)}
                  className="tooltip-btn"
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
                onMouseOver={(e) => handle(e, info)}
                onMouseLeave={() => handleMouseLeave(true)}
                className="tooltip-btn"
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
                onMouseOver={(e) => handle(e, info)}
                onMouseLeave={() => handleMouseLeave(true)}
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
                  onMouseOver={(e) => handle(e, info)}
                  onMouseLeave={() => handleMouseLeave(true)}
                  className="tooltip-btn"
                >
                  {info.bottonContents}
                </button>
              ))}
            </div>
            <div className="right-wrapper">
              {RIGHT_INFO.map((info) => (
                <button
                  key={info.id}
                  onMouseOver={(e) => handle(e, info)}
                  onMouseLeave={() => handleMouseLeave(true)}
                  className="tooltip-btn"
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
                onMouseOver={(e) => handle(e, info)}
                onMouseLeave={() => handleMouseLeave(true)}
                className="tooltip-btn"
              >
                {info.bottonContents}
              </button>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <Tooltip position={position}>
          <div className="default-tooltip-contents">
            {tooltipState?.contents.map((content, idx) => (
              <p key={idx}>{content}</p>
            ))}
          </div>
        </Tooltip>
      )}
    </>
  );
}

export default BasicTooltips;
