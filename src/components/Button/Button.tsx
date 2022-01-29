import { PropsWithChildren } from 'react';
import './Button.css';

interface ButtonProps {
  design: 'bright' | 'normal';
  className?: string;
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { children, design, className } = props;
  return (
    <button className={`button ${design} ${className}`}>{children}</button>
  );
};
