import { useState, useEffect } from 'react';
import { Position } from '../components/types/tooltip';

interface Props {
  direction: string;
  variant: 'ENTER_DELAY' | 'LEAVE_DELAY';
  delayTime?: number;
}

function useHoverTooltip({ direction, variant, delayTime }: Props) {
  const [isHover, setIsHover] = useState(false);
  const [isHoverLeave, setIsHoverLeave] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<Position>({
    top: 0,
    left: 0,
    direction: '',
  });

  function handleMouseOver(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    const top = target.offsetTop - 10;
    let left = target.offsetLeft;

    if (direction === 'top') left += 40;
    if (direction === 'topRight') left += 90;

    setPosition({ top, left, direction });

    if (variant === 'ENTER_DELAY') {
      setIsHover(true);
    } else {
      setIsOpen(true);
      setIsHoverLeave(false);
    }
  }

  function handleMouseLeave(isLeave: boolean) {
    if (isLeave) {
      setIsHoverLeave(true);
      setIsOpen(true);
    } else {
      setIsHover(false);
      setIsOpen(false);
    }
  }

  useEffect(() => {
    if (isHover) {
      const timer = setTimeout(() => setIsOpen(true), delayTime);
      return () => clearTimeout(timer);
    }
  }, [isHover, delayTime]);

  useEffect(() => {
    if (isHoverLeave) {
      const timer = setTimeout(() => setIsOpen(false), delayTime);
      return () => clearTimeout(timer);
    }
  }, [isHoverLeave, delayTime]);

  return {
    isOpen,
    setIsOpen,
    position,
    setIsHoverLeave,
    handleMouseOver,
    handleMouseLeave,
  };
}

export default useHoverTooltip;
