import { FC, PropsWithChildren } from 'react'
import classes from './index.module.css'
import clsx from 'clsx'

type TButtonProps = {
  className?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
}

export const Button: FC<PropsWithChildren<TButtonProps>> = ({
  children,
  className,
  onClick,
  variant = 'primary',
  size = 'medium',
  ...restProps
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        classes.button,
        size === 'small' && classes.smallSize,
        size === 'medium' && classes.mediumSize,
        size === 'large' && classes.largeSize,
        variant === 'primary' && classes.primaryVariant,
        variant === 'secondary' && classes.secondaryVariant,
        className,
      )}
      {...restProps}
    >
      {children}
    </button>
  )
}
