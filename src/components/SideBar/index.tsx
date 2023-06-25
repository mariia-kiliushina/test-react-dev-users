import { FC } from 'react'

import { Avatar } from '@components/Avatar'

import {
  AudienceIcon,
  BlanksIcon,
  CheckedIcon,
  CoinsIcon,
  DollarIcon,
  LogoIcon,
  LogoutIcon,
  MessageIcon,
  PicturesIcon,
  PieChartIcon,
  ProfileIcon,
} from '@assets/svg'
import logo from '@assets/1.png'

import styles from './index.module.css'
import { Button } from '@components/Button'

export const SideBar: FC = () => {
  return (
    <nav className={styles.navigationBar}>
      <Button variant="secondary">
        <LogoIcon className={styles.logo} />
      </Button>
      <Button variant="secondary" size="large">
        <Avatar src={logo} className={styles.avatar} />
      </Button>
      <Button variant="secondary">
        <PieChartIcon />
      </Button>
      <Button variant="secondary">
        <ProfileIcon />
      </Button>
      <Button variant="secondary">
        <CheckedIcon />
      </Button>
      <Button variant="secondary">
        <MessageIcon />
      </Button>
      <Button variant="secondary">
        <PicturesIcon />
      </Button>
      <Button variant="secondary">
        <AudienceIcon />
      </Button>
      <Button variant="secondary">
        <BlanksIcon />
      </Button>
      <Button variant="secondary">
        <DollarIcon />
      </Button>
      <Button variant="secondary">
        <CoinsIcon />
      </Button>
      <Button variant="secondary">
        <LogoutIcon />
      </Button>
    </nav>
  )
}
