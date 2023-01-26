import React from 'react';
import Icon from '@ant-design/icons';

const SwedenFlagComponent = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10" {...props}>
    <rect width="16" height="10" fill="#006aa7" />
    <rect width="2" height="10" x="5" fill="#fecc00" />
    <rect width="16" height="2" y="4" fill="#fecc00" />
  </svg>
);

export const SwedenFlagIcon = (props: any) => <Icon component={SwedenFlagComponent} {...props} />;

const NorwayFlagComponent = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16" {...props}>
    <path fill="#ba0c2f" d="M0 0h22v16H0z" />
    <g fill="#fff">
      <path d="M6 0h4v16H6z" />
      <path d="M0 6h22v4H0z" />
    </g>
    <g fill="#00205b">
      <path d="M7 0h2v16H7z" />
      <path d="M0 7h22v2H0z" />
    </g>
  </svg>
);
export const NorwayFlagIcon = (props: any) => <Icon component={NorwayFlagComponent} {...props} />;

const DenmarkFlagComponent = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 280" {...props}>
    <rect width="370" height="280" fill="#c60c30" />
    <rect width="40" height="280" x="120" fill="#fff" />
    <rect width="370" height="40" y="120" fill="#fff" />
  </svg>
);
export const DenmarkFlagIcon = (props: any) => <Icon component={DenmarkFlagComponent} {...props} />;

const FinlandFlagComponent = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 1100" {...props}>
    <rect width="1800" height="1100" fill="#fff" />
    <rect width="1800" height="300" y="400" fill="#003580" />
    <rect width="300" height="1100" x="500" fill="#003580" />
  </svg>
);
export const FinlandFlagIcon = (props: any) => <Icon component={FinlandFlagComponent} {...props} />;

const GermanyFlagComponent = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" {...props}>
    <path d="M0 0h5v3H0z" />
    <path fill="#D00" d="M0 1h5v2H0z" />
    <path fill="#FFCE00" d="M0 2h5v1H0z" />
  </svg>
);
export const GermanyFlagIcon = (props: any) => <Icon component={GermanyFlagComponent} {...props} />;
