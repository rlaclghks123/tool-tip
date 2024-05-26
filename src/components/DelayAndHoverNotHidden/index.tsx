import './index.css';
import Tooltip from '../Tooltip.tsx';
import useHoverTooltip from '../../hooks/useHoverTooltip.ts';
import { TOOLTIP_CONTENTS } from '../../db/basicTolltipsDb.ts';

function DelayAndHoverNotHidden() {
  const {
    isOpen: firstOpen,
    position: firstPosition,
    handleMouseOver: firstHandleMouseOver,
    handleMouseLeave: firstHandleMouseLeave,
  } = useHoverTooltip({ direction: 'topLeft', variant: 'ENTER_DELAY', delayTime: 1000 });

  const {
    isOpen: secondOpen,
    position: secondPosition,
    handleMouseOver: secondHandleMouseOver,
    handleMouseLeave: secondHandleMouseLeave,
  } = useHoverTooltip({ direction: 'top', variant: 'LEAVE_DELAY', delayTime: 1000 });

  const {
    isOpen: thirdOpen,
    setIsHoverLeave: thirdIsHoverLeave,
    position: thirdPosition,
    handleMouseOver: thirdHandleMouseOver,
    handleMouseLeave: thirdHandleMouseLeave,
  } = useHoverTooltip({ direction: 'topRight', variant: 'LEAVE_DELAY', delayTime: 300 });

  return (
    <>
      <div className="delay-and-hover-not-hidden-container">
        <button
          className="tooltip-btn delay-and-hover-not-hidden-btn"
          onMouseOver={firstHandleMouseOver}
          onMouseLeave={() => firstHandleMouseLeave(false)}
        >
          enter-delay 1s
        </button>
        <button
          className="tooltip-btn delay-and-hover-not-hidden-btn"
          onMouseOver={secondHandleMouseOver}
          onMouseLeave={() => secondHandleMouseLeave(true)}
        >
          leave-delay 1s
        </button>

        <button
          className="tooltip-btn delay-and-hover-not-hidden-btn"
          onMouseOver={thirdHandleMouseOver}
          onMouseLeave={() => thirdHandleMouseLeave(true)}
        >
          hover not hidden
        </button>

        {firstOpen && (
          <Tooltip
            position={{
              top: firstPosition.top - 30,
              left: firstPosition.left - 10,
              direction: firstPosition.direction,
            }}
          >
            <div className="default-tooltip-contents">
              {TOOLTIP_CONTENTS.map((content, idx) => (
                <p key={idx}>{content}</p>
              ))}
            </div>
          </Tooltip>
        )}

        {secondOpen && (
          <Tooltip
            position={{
              top: firstPosition.top + 10,
              left: firstPosition.left + 25,
              direction: secondPosition.direction,
            }}
          >
            <div className="default-tooltip-contents">
              {TOOLTIP_CONTENTS.map((content, idx) => (
                <p key={idx}>{content}</p>
              ))}
            </div>
          </Tooltip>
        )}

        {thirdOpen && (
          <Tooltip
            position={{
              top: thirdPosition.top - 30,
              left: thirdPosition.left + 60,
              direction: thirdPosition.direction,
            }}
            onMouseOver={() => thirdIsHoverLeave(false)}
            onMouseLeave={() => thirdHandleMouseLeave(true)}
          >
            <div className="default-tooltip-contents">
              {TOOLTIP_CONTENTS.map((content, idx) => (
                <p key={idx}>{content}</p>
              ))}
            </div>
          </Tooltip>
        )}
      </div>
    </>
  );
}

export default DelayAndHoverNotHidden;
