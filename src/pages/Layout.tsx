import { Outlet }  from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <h1>Jaca</h1>

      <Outlet/>
    </>
  )
}