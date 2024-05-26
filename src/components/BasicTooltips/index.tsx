import { useState } from 'react';

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

  const { isOpen, position, setPosition, handleMouseOver, handleMouseLeave } = useHoverTooltip({
    direction: '',
  });

  function handleExpandMouseOver(e: React.MouseEvent<HTMLButtonElement>, info: BasicTooltipsType) {
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
      <div className="basic-tooltips-wrapper">
        <div className="non-scroll-container">
          <CommonBasicTooltipsContainer
            handleMouseLeave={handleMouseLeave}
            handleExpandMouseOver={handleExpandMouseOver}
          />
        </div>

        <div className="scroll-box">
          <CommonBasicTooltipsContainer
            handleMouseLeave={handleMouseLeave}
            handleExpandMouseOver={handleExpandMouseOver}
          />
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
