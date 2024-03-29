import { Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './components/PrivateRoutes';
import Navbar from './components/Navbar';
import Notifications from './components/Notifications';

// Views
import Index from './views/index';
import Login from './views/login';
import Todos from './views/todos';

function App() {
  return (
    <>
      <Navbar />
      <Notifications />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />

        <Route element={<PrivateRoutes />}>
          <Route path='/todos' element={<Todos />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
