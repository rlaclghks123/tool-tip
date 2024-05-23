import { Position } from '../types/tooltip';
import './index.css';

interface Props {
  direction: string;
  position: Position;
  onMouseOver?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
}

function Tooltip({ direction, position, onMouseOver, onMouseLeave, children }: Props) {
  return (
    <div
      className="container"
      onMouseOver={onMouseLeave && onMouseOver}
      onMouseLeave={onMouseLeave && onMouseLeave}
    >
      {(direction === 'top' || direction === 'topLeft' || direction === 'topRight') && (
        <div
          style={{
            top: `${position?.top - 55}px`,
            left: position?.left,
          }}
          className={`content content-${direction}`}
        >
          {children}
        </div>
      )}

      {(direction === 'left' || direction === 'leftTop' || direction === 'leftBottom') && (
        <div
          style={{
            top: position?.top,
            left: `${position?.left - 80}px`,
          }}
          className={`content content-${direction}`}
        >
          {children}
        </div>
      )}

      {(direction === 'right' || direction === 'rightTop' || direction === 'rightBottom') && (
        <div
          style={{
            top: position?.top,
            left: `${position?.left + 80}px`,
          }}
          className={`content content-${direction}`}
        >
          {children}
        </div>
      )}

      {(direction === 'bottom' || direction === 'bottomLeft' || direction === 'bottomRight') && (
        <div
          style={{
            top: `${position?.top + 35}px`,
            left: position?.left,
          }}
          className={`content content-${direction}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
