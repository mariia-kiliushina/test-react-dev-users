import { FC, useState } from 'react'

import { Modal, Popover } from 'antd'

import classes from './index.module.css'
import { Permisson } from '../../../../components/Permisson'
import { Avatar } from '../../../../components/Avatar'
import clsx from 'clsx'
import { Dots } from '@assets/svg'
import { Button } from '@components/Button'

type TPermission =
  | 'Администратор'
  | 'Акции'
  | 'Аналитика'
  | 'Блог'
  | 'Модерация объявлений'
  | 'Обращение клиентов'
  | 'Тех. поддержка'

const permissionHighlightCondition = 'Администратор'

export type TUser = {
  name: string
  email: string
  permissions: TPermission[]
  image: string
}

type TUserProps = {
  user: TUser
  isAuthorized?: boolean
  deleteUser: (params: { userEmail: TUser['email'] }) => void
}

export const User: FC<TUserProps> = ({ deleteUser, user, isAuthorized = 'true' }) => {
  return (
    <>
      <div className={clsx(classes.user, !isAuthorized && classes.notAuthorized)}>
        <div className={classes.avatar}>
          <Avatar src={user.image} />
        </div>
        <div className={classes.name}>{user.name}</div>
        {!isAuthorized && <div className={classes.authorizationStatus}>Не авторизован</div>}
        <div className={classes.email}>{user.email}</div>
        <div className={classes.permissions}>
          {user.permissions.map((permission) => (
            <Permisson isHiglighted={permission === permissionHighlightCondition} key={permission}>
              {permission}
            </Permisson>
          ))}
        </div>
        <Popover
          content={
            <>
              <Button size="small" variant="secondary">
                Изменить права доступа
              </Button>
              <Button size="small" variant="secondary">
                Отправить код повторно
              </Button>
              <Button
                onClick={() => deleteUser({ userEmail: user.email })}
                size="small"
                variant="secondary"
              >
                Удалить
              </Button>
            </>
          }
        >
          <Button variant="secondary" className={classes.optionsButton}>
            <Dots />
          </Button>
        </Popover>
      </div>
    </>
  )
}
