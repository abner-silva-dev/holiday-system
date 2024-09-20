import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import GlobalStyles from './style/GlobalStyles';
import User from './pages/Users';
import Departments from './pages/Departments';
import Holiday from './pages/Holiday';
import Seniority from './pages/Seniority';
import Enterprise from './pages/Enterprise';
import HolidayManagement from './features/holiday/HolidayManagement';
import Login from './pages/Login';
import Settings from './pages/Settings';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="holidays" />} />
              <Route path="holidays" element={<Holiday />} />
              <Route path="holidays/:holidayId" element={<HolidayManagement />} />
              <Route path="users" element={<User />} />
              <Route path="enterprise" element={<Enterprise />} />
              <Route path="departments" element={<Departments />} />
              <Route path="seniority" element={<Seniority />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 3000 },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            zIndex: 999,
          },
        }}
      />
    </>
  );
}

export default App;
