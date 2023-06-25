import { FC } from 'react'
import classes from './index.module.css'
import clsx from 'clsx'

type TPermissonProps = {
  children: string
  isHiglighted: boolean
}

export const Permisson: FC<TPermissonProps> = ({ children, isHiglighted }) => {
  return (
    <div className={clsx(classes.permission, isHiglighted && classes.highlighted)}>{children}</div>
  )
}
