// src/components/CustomArrows.tsx

import {CSSProperties, FC} from 'react';

interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export const NextArrow: FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

export const PrevArrow: FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};
