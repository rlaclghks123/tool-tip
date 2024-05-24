import { Position } from '../types/tooltip';
import './index.css';

interface Props {
  position: Position;
  onMouseOver?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
}

function Tooltip({
  position,
  onMouseOver,
  onMouseLeave,
  backgroundColor,
  borderColor,
  children,
}: Props) {
  const arrowDirectionStyle = {
    top: { borderColor: `${borderColor} transparent transparent transparent` },
    topLeft: { borderColor: `${borderColor} transparent transparent transparent` },
    topRight: { borderColor: `${borderColor} transparent transparent transparent` },

    left: { borderColor: `transparent transparent transparent ${borderColor}` },
    leftTop: { borderColor: `transparent transparent transparent ${borderColor}` },
    leftBottom: { borderColor: `transparent transparent transparent ${borderColor}` },

    right: { borderColor: `transparent  ${borderColor} transparent transparent` },
    rightTop: { borderColor: `transparent  ${borderColor} transparent transparent` },
    rightBottom: { borderColor: `transparent  ${borderColor} transparent transparent` },

    bottom: { borderColor: `transparent transparent ${borderColor} transparent` },
    bottomLeft: { borderColor: `transparent transparent ${borderColor} transparent` },
    bottomRight: { borderColor: `transparent transparent ${borderColor} transparent` },
  };

  return (
    <div
      className="container"
      onMouseOver={onMouseLeave && onMouseOver}
      onMouseLeave={onMouseLeave && onMouseLeave}
    >
      <div
        style={{
          top: `${position?.top - 52}px`,
          left: `${position?.left}px`,
          backgroundColor,
        }}
        className={`content content-${position.direction}`}
      >
        <div className="tooltip-arrow" style={arrowDirectionStyle[position.direction]}></div>
        {children}
      </div>
    </div>
  );
}

export default Tooltip;
