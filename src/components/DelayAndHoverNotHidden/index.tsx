import './index.css';
import Tooltip from '../Tooltip.tsx';
import useHoverTooltip from '../../hooks/useHoverTooltip.ts';

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
    setIsOpen: thirdIsOpen,
    setIsHoverLeave: thirdIsHoverLeave,
    position: thirdPosition,
    handleMouseOver: thirdHandleMouseOver,
    handleMouseLeave: thirdHandleMouseLeave,
  } = useHoverTooltip({ direction: 'topRight', variant: 'LEAVE_DELAY', delayTime: 300 });

  function handleMouseEnterTooltip() {
    thirdIsOpen(true);
    thirdIsHoverLeave(false);
  }

  function handleMouseLeaveTooltip() {
    thirdIsOpen(false);
    thirdIsHoverLeave(false);
  }

  return (
    <>
      <div className="delayAndHoverNotHidden-container">
        <button
          className="tooltip-btn delayAndHoverNotHidden-btn"
          onMouseOver={(e) => firstHandleMouseOver(e)}
          onMouseLeave={() => firstHandleMouseLeave(false)}
        >
          enter-delay 1s
        </button>
        <button
          className="tooltip-btn delayAndHoverNotHidden-btn"
          onMouseOver={(e) => secondHandleMouseOver(e)}
          onMouseLeave={() => secondHandleMouseLeave(true)}
        >
          leave-delay 1s
        </button>

        <button
          className="tooltip-btn delayAndHoverNotHidden-btn"
          onMouseOver={(e) => thirdHandleMouseOver(e)}
          onMouseLeave={() => thirdHandleMouseLeave(true)}
        >
          hover not hidden
        </button>

        {firstOpen && (
          <Tooltip position={firstPosition} direction={firstPosition.direction}>
            enter-delay 1s contents
          </Tooltip>
        )}

        {secondOpen && (
          <Tooltip position={secondPosition} direction={secondPosition.direction}>
            leave-delay 1s contents
          </Tooltip>
        )}

        {thirdOpen && (
          <Tooltip
            position={thirdPosition}
            direction={thirdPosition.direction}
            onMouseOver={handleMouseEnterTooltip}
            onMouseLeave={handleMouseLeaveTooltip}
          >
            hover not hidden
          </Tooltip>
        )}
      </div>
    </>
  );
}

export default DelayAndHoverNotHidden;
