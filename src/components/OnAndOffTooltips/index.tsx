import { useState } from 'react';

import './index.css';
import Tooltip from '../Tooltip.tsx';
import useHoverTooltip from '../../hooks/useHoverTooltip';

function OnAndOffTooltips() {
  const [isPossibleHover, setIsPossibleHover] = useState(true);
  const { isOpen, position, handleMouseOver, handleMouseLeave } = useHoverTooltip({
    direction: 'top',
  });

  function Button() {
    return (
      <button className="on-and-off-button" onClick={() => setIsPossibleHover((prev) => !prev)}>
        {isPossibleHover ? 'Disable' : 'Enable'}
      </button>
    );
  }

  return (
    <>
      <section className="custom-content-tooltips-container on-and-off-tooltips-container">
        <Button />

        <p
          className="on-and-off-discription"
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseLeave={() => handleMouseLeave(true)}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores atque
        </p>
      </section>

      {isPossibleHover && isOpen && (
        <Tooltip
          position={{
            top: position.top - 40,
            left: position.left + 130,
            direction: position.direction,
          }}
        >
          <div className="on-and-off-tooltip-container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quo, quod saepe
            facilis.
          </div>
        </Tooltip>
      )}
    </>
  );
}

export default OnAndOffTooltips;
