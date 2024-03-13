
import Home from './pages/Home';
import Members from './pages/Members';
import Wallet from './pages/Wallet'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Wallet /> },
    { path: '/home', element: <Home /> },
    { path: '/members', element: <Members /> }
  ])

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
