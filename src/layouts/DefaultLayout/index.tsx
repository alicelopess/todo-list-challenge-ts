import { Outlet } from 'react-router-dom'
import { Header } from './styles'
import applicationLogo from '../../assets/applicationLogo.svg'

export function DefaultLayout() {
  return (
    <>
      <Header>
        {/* <h1>Default Layout</h1> */}
        <img src={applicationLogo} alt="" />
      </Header>
      <Outlet />
    </>
  )
}
