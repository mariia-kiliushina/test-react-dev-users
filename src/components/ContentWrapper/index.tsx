import { FC, PropsWithChildren } from 'react'
import classes from './index.module.css'

export const ContentWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>
}
