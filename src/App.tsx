import { SideBar } from '@components/SideBar'
import { Team } from './pages/team'

import classes from './App.module.css'

export const App = () => {
  return (
    <>
      <SideBar />
      <main>
        <Team />
      </main>
    </>
  )
}
