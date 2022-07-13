import React from 'react';
import { IconProps } from './Icon.types';

export const RuFlagIcon = ({ width = 24, height = 16 }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 640 480" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#fff" d="M0 0h640v480H0z" />
        <path fill="#0039a6" d="M0 160h640v320H0z" />
        <path fill="#d52b1e" d="M0 320h640v160H0z" />
      </g>
    </svg>
  );
};
