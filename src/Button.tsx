/* eslint-disable react/button-has-type */
import React from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Defines the variant of the button
   */
  variant?: 'primary' | 'success' | 'warn' | 'danger';
  /**
   * Defines the size of the button
   */
  size?: 'small' | 'medium';
  /**
   * Display the button as full width
   */
  fullWidth?: boolean;
}

export const Button = React.forwardRef(function Button(
  {
    children,
    size = 'medium',
    type = 'button',
    variant = 'primary',
    disabled = false,
    fullWidth,
    className,
    ...props
  }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>
): JSX.Element {
  const classes = clsx(
    styles.base,
    styles.animate,
    styles[size],
    disabled ? styles.disabled : styles[variant],
    { [styles.fullWidth]: fullWidth },
    className
  );

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
});
