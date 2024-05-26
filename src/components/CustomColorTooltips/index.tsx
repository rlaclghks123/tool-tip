import './index.css';
import Tooltip from '../Tooltip.tsx';
import useHoverTooltip from '../../hooks/useHoverTooltip';

function PinkContents() {
  return <div className="pink-contents-container">pink</div>;
}
function YellowContents() {
  return <div className="yellow-contents-container">Yellow</div>;
}

function CustomColorTooltips() {
  const {
    isOpen: pinkIsOpen,
    position: pinkPosition,
    handleMouseOver: pinkHandleMouseOver,
    handleMouseLeave: pinkHandleMouseLeave,
  } = useHoverTooltip({
    direction: 'top',
  });

  const {
    isOpen: yellowIsOpen,
    position: yellowPosition,
    handleMouseOver: yellowHandleMouseOver,
    handleMouseLeave: yellowHandleMouseLeave,
  } = useHoverTooltip({
    direction: 'top',
  });

  return (
    <>
      <section className="custom-content-tooltips-container custom-color-tooltips-container">
        <button
          className="tooltip-btn pink-button"
          onMouseOver={(e) => pinkHandleMouseOver(e)}
          onMouseLeave={() => pinkHandleMouseLeave(true)}
        >
          Pink
        </button>
        <button
          className="tooltip-btn yellow-button"
          onMouseOver={(e) => yellowHandleMouseOver(e)}
          onMouseLeave={() => yellowHandleMouseLeave(true)}
        >
          Yellow
        </button>
      </section>

      {pinkIsOpen && (
        <Tooltip
          backgroundColor="#fac"
          borderColor="#fac"
          position={{
            top: pinkPosition.top + 5,
            left: pinkPosition.left + 14,
            direction: 'top',
          }}
        >
          <PinkContents />
        </Tooltip>
      )}

      {yellowIsOpen && (
        <Tooltip
          backgroundColor="#fff1aa"
          borderColor="#fff1aa"
          position={{
            top: yellowPosition.top + 5,
            left: yellowPosition.left + 4,
            direction: 'top',
          }}
        >
          <YellowContents />
        </Tooltip>
      )}
    </>
  );
}

export default CustomColorTooltips;
