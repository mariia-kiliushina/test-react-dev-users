import { FC, useEffect, useState } from 'react'
import { User, TUser } from './components/User'

import classes from './index.module.css'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

const URL =
  'https://file.notion.so/f/s/b697dfd0-4a6f-4555-bd14-60559f2a8179/users.json?id=cc13eeae-fbeb-4b40-9b71-228fe193a8f6&table=block&spaceId=a73b0a18-75ee-4904-8f1e-0681ca27036a&expirationTimestamp=1687779317876&signature=atnjfQMrdLKznYe9YMwZkBN0Sv9cYKB4f9AZ8eIMgok&downloadName=users.json'

export const Team: FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [users, setUsers] = useState<TUser[]>([])

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then(setUsers)
  }, [])

  const filteredUsers =
    searchTerm === '' ? users : users.filter((user) => user.email.includes(searchTerm))

  return (
    <>
      <div className={classes.header}>
        <h1>Команда</h1>
        <Input onChange={setSearchTerm} value={searchTerm} placeholder="Поиск по Email" />
        <Button size="medium">Добавить пользователя</Button>
      </div>
      <div className={classes.users}>
        {filteredUsers.map((user) => (
          <User
            user={user}
            key={user.name}
            deleteUser={({ userEmail }) => {
              setUsers(users.filter((user) => user.email !== userEmail))
            }}
          />
        ))}
      </div>
    </>
  )
}
