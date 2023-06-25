import { FC } from 'react'
import classes from './index.module.css'
import clsx from 'clsx'

type TInputProps = {
  className?: string
  placeholder?: string
  size?: 'medium' | 'large'
  value: string
  onChange: (newValue: string) => void
}

export const Input: FC<TInputProps> = ({
  className,
  onChange,
  placeholder,
  size = 'medium',
  value,
}) => {
  return (
    <input
      placeholder={placeholder}
      className={clsx(
        classes.input,
        size === 'medium' && classes.mediumSize,
        size === 'large' && classes.largeSize,
        className,
      )}
      value={value}
      onChange={(event) => {
        onChange(event.target.value)
      }}
    />
  )
}
