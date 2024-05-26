import { useLayoutEffect, useRef, useState } from 'react';

import './index.css';
import Tooltip from '../Tooltip.tsx';
import useHoverTooltip from '../../hooks/useHoverTooltip.ts';

import { BasicTooltipsType } from '../../db/basicTolltipsDb.ts';
import changedPosition from '../../utils/changedPosition.ts';
import CommonBasicTooltipsContainer from './CommonBasicTooltipsContainer.tsx';

function BasicTooltips() {
  const [tooltipState, setTooltipState] = useState({
    contents: [''],
    direction: '',
  });

  const ref = useRef(null);

  const {
    isOpen: nonScrollIsOpen,
    position: nonScrollPosition,
    setPosition: nonScrollSetPosition,
    handleMouseOver: nonScrollHandleMouseOver,
    handleMouseLeave: nonScrollHandleMouseLeave,
  } = useHoverTooltip({
    direction: '',
  });

  const {
    isOpen: scrollIsOpen,
    position: scrollPosition,
    setPosition: scrollSetPosition,
    handleMouseOver: scrollHandleMouseOver,
    handleMouseLeave: scrollHandleMouseLeave,
  } = useHoverTooltip({
    direction: '',
  });

  function nonScrollHandleExpandMouseOver(
    e: React.MouseEvent<HTMLButtonElement>,
    info: BasicTooltipsType
  ) {
    const { direction, tooltipContents } = info;
    const position = {
      top: { changeTop: 30, changeLeft: 10 },
      left: { changeTop: -33, changeLeft: 110 },
      right: { changeTop: -33, changeLeft: -80 },
      bottom: { changeTop: -90, changeLeft: 15 },
    };

    const { changedTop, changedLeft } = changedPosition({ direction, position });

    nonScrollHandleMouseOver(e);

    nonScrollSetPosition((prev) => ({
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

  function handleExpandMouseOver(e: React.MouseEvent<HTMLButtonElement>, info: BasicTooltipsType) {
    const { top, left } = e.currentTarget.getBoundingClientRect();
    const { direction, tooltipContents } = info;
    const position = {
      top: { changeTop: 30, changeLeft: 13 },
      left: { changeTop: -30, changeLeft: 110 },
      right: { changeTop: -30, changeLeft: -80 },
      bottom: { changeTop: -90, changeLeft: 15 },
    };

    const { changedTop, changedLeft } = changedPosition({ direction, position });

    scrollHandleMouseOver(e);

    scrollSetPosition((prev) => ({
      left: left - changedLeft,
      top: top - changedTop,
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
      <div className="basic-tooltips-wrapper">
        <div className="non-scroll-container">
          <CommonBasicTooltipsContainer
            handleMouseLeave={nonScrollHandleMouseLeave}
            handleExpandMouseOver={nonScrollHandleExpandMouseOver}
          />
        </div>

        <div className="scroll-box" ref={ref}>
          <CommonBasicTooltipsContainer
            handleMouseLeave={scrollHandleMouseLeave}
            handleExpandMouseOver={handleExpandMouseOver}
          />
        </div>
      </div>

      {nonScrollIsOpen && (
        <Tooltip position={nonScrollPosition}>
          <div className="default-tooltip-contents">
            {tooltipState?.contents.map((content, idx) => (
              <p key={idx}>{content}</p>
            ))}
          </div>
        </Tooltip>
      )}

      {scrollIsOpen && (
        <Tooltip position={scrollPosition}>
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
