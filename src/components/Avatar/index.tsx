import classes from './index.module.css'

type TAvatarProps = {
  src: string
  className?: string
}

export const Avatar = ({ src, className }: TAvatarProps) => {
  return <img src={src} width={60} height={60} className={classes.avatar} alt="User Avatar" />
}
