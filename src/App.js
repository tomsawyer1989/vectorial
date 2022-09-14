import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoggedin } from './reducers/loginSlice';
import LoginPage from "./pages/LoginPage";
import HomePage from './pages/HomePage';

function RequireAuth({ children, loggedin }) {
  let location = useLocation();

  if (!loggedin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  const loggedin = useSelector(selectLoggedin);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <RequireAuth loggedin={ loggedin }>
              <HomePage />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;