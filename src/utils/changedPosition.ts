import { Direction } from '../components/types/tooltip';

interface PositionChanges {
  changeTop?: number;
  changeLeft?: number;
}

interface Props {
  direction: Direction;
  position: {
    top: PositionChanges;
    right: PositionChanges;
    bottom: PositionChanges;
    left: PositionChanges;
  };
}

function changedPosition({ direction, position }: Props) {
  const { top, right, bottom, left } = position;

  let changedTop = 0;
  let changedLeft = 0;

  if (direction === 'top' || direction === 'topLeft' || direction === 'topRight') {
    changedTop += top.changeTop ?? 0;
    changedLeft += top.changeLeft ?? 0;
  }

  if (direction === 'left' || direction === 'leftBottom' || direction === 'leftTop') {
    changedTop += left.changeTop ?? 0;
    changedLeft += left.changeLeft ?? 0;
  }
  if (direction === 'right' || direction === 'rightTop' || direction === 'rightBottom') {
    changedTop += right.changeTop ?? 0;
    changedLeft += right.changeLeft ?? 0;
  }
  if (direction === 'bottom' || direction === 'bottomLeft' || direction === 'bottomRight') {
    changedTop += bottom.changeTop ?? 0;
    changedLeft += bottom.changeLeft ?? 0;
  }

  return { changedTop, changedLeft };
}

export default changedPosition;
