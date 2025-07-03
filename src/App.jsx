import { useRoutes , Navigate } from 'react-router-dom';
import { router } from './routes/routers'
function App() {
  const routes = useRoutes(router);
  return (
    <>
      <div>
        {routes ? routes : <Navigate to={'/not-found-page'} />}
      </div>
    </>
  )
}

export default App
