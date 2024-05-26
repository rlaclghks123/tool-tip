import './index.css';

import Tooltip from '../Tooltip.tsx';
import useHoverTooltip from '../../hooks/useHoverTooltip';
import CommonCustomContents from './CommonCustomContents.tsx';

function CustomContentTooltips() {
  const {
    isOpen: topOpen,
    setIsHoverLeave: topIsHoverLeave,
    position: topPosition,
    handleMouseOver: topHandleMouseOver,
    handleMouseLeave: topHandleMouseLeave,
  } = useHoverTooltip({ direction: 'top', variant: 'LEAVE_DELAY', delayTime: 300 });

  const {
    isOpen: leftOpen,
    setIsHoverLeave: leftIsHoverLeave,
    position: leftPosition,
    handleMouseOver: leftHandleMouseOver,
    handleMouseLeave: leftHandleMouseLeave,
  } = useHoverTooltip({ direction: 'left', variant: 'LEAVE_DELAY', delayTime: 300 });

  const {
    isOpen: rightOpen,
    setIsHoverLeave: rightIsHoverLeave,
    position: rightPosition,
    handleMouseOver: rightHandleMouseOver,
    handleMouseLeave: rightHandleMouseLeave,
  } = useHoverTooltip({ direction: 'right', variant: 'LEAVE_DELAY', delayTime: 300 });

  const {
    isOpen: bottomOpen,
    setIsHoverLeave: bottomIsHoverLeave,
    position: bottomPosition,
    handleMouseOver: bottomHandleMouseOver,
    handleMouseLeave: bottomHandleMouseLeave,
  } = useHoverTooltip({ direction: 'bottom', variant: 'LEAVE_DELAY', delayTime: 300 });

  return (
    <>
      <section className="custom-content-tooltips-container">
        <button
          className="custom-content-tooltips-btn tooltip-btn"
          onMouseOver={(e) => topHandleMouseOver(e)}
          onMouseLeave={() => topHandleMouseLeave(true)}
        >
          Top
        </button>
        <div className="side-wrapper custom">
          <button
            className="custom-content-tooltips-btn tooltip-btn"
            onMouseOver={(e) => leftHandleMouseOver(e)}
            onMouseLeave={() => leftHandleMouseLeave(true)}
          >
            Left
          </button>
          <button
            className="custom-content-tooltips-btn tooltip-btn"
            onMouseOver={(e) => rightHandleMouseOver(e)}
            onMouseLeave={() => rightHandleMouseLeave(true)}
          >
            Right
          </button>
        </div>
        <button
          className="custom-content-tooltips-btn tooltip-btn"
          onMouseOver={(e) => bottomHandleMouseOver(e)}
          onMouseLeave={() => bottomHandleMouseLeave(true)}
        >
          Bottom
        </button>
      </section>

      {topOpen && (
        <Tooltip
          borderColor="white"
          backgroundColor="white"
          position={{
            top: topPosition.top - 40,
            left: topPosition.left - 105,
            direction: topPosition.direction,
          }}
          onMouseOver={() => topIsHoverLeave(false)}
          onMouseLeave={() => topHandleMouseLeave(true)}
        >
          {<CommonCustomContents direction="top" />}
        </Tooltip>
      )}

      {leftOpen && (
        <Tooltip
          borderColor="white"
          backgroundColor="white"
          position={{
            top: leftPosition.top + 25,
            left: leftPosition.left - 300,
            direction: leftPosition.direction,
          }}
          onMouseOver={() => leftIsHoverLeave(false)}
          onMouseLeave={() => leftHandleMouseLeave(true)}
        >
          {<CommonCustomContents direction="left" />}
        </Tooltip>
      )}

      {rightOpen && (
        <Tooltip
          borderColor="white"
          backgroundColor="white"
          position={{
            top: rightPosition.top + 25,
            left: rightPosition.left + 85,
            direction: rightPosition.direction,
          }}
          onMouseOver={() => rightIsHoverLeave(false)}
          onMouseLeave={() => rightHandleMouseLeave(true)}
        >
          {<CommonCustomContents direction="right" />}
        </Tooltip>
      )}

      {bottomOpen && (
        <Tooltip
          borderColor="white"
          backgroundColor="white"
          position={{
            top: bottomPosition.top + 90,
            left: bottomPosition.left - 107,
            direction: bottomPosition.direction,
          }}
          onMouseOver={() => bottomIsHoverLeave(false)}
          onMouseLeave={() => bottomHandleMouseLeave(true)}
        >
          {<CommonCustomContents direction="bottom" />}
        </Tooltip>
      )}
    </>
  );
}

export default CustomContentTooltips;
