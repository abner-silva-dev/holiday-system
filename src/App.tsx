import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import GlobalStyles from './style/GlobalStyles';
import User from './pages/Users';
import Departments from './pages/Departments';
import Holiday from './pages/Holiday';
import Seniority from './pages/Seniority';
import Enterprise from './pages/Enterprise';
import HolidayManagement from './features/holiday/HolidayManagement';
import Settings from './pages/Settings';
import Account from './pages/Account';
import ProtectedRoute from './ui/ProtectedRoute';
import UserAccess from './pages/UserAccess';
import RestrictRoute from './ui/RestrictRoute';
import RedirectRole from './ui/RedirectRole';
import Header from './features/user-app/Header';
import AppLayoutUser from './ui/AppLayoutUser';
import Authentication from './pages/Authentication';
import Request from './pages/Request';
import UserManagement from './pages/UserManagement';
import RequestForm from './features/request/RequestForm';
import Documents from './features/users/Documents';
import PassRecovery from './features/users/PassRecovery';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools /> */}
        <BrowserRouter>
          <Routes>
            {/* PERSONNEL MANAGEMENT APP */}
            <Route path="request" element={<Request />} />
            <Route path="login" element={<Authentication />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Outlet />
                </ProtectedRoute>
              }
            >
              <Route index element={<RedirectRole />} />

              {/* USER ROUTES */}
              <Route
                path="user"
                element={
                  <>
                    <Header />
                    <Outlet />
                  </>
                }
              >
                <Route path="home" element={<UserAccess />} />
                <Route element={<AppLayoutUser />}>
                  <Route index element={<Navigate replace to="home" />} />
                  <Route path="holidays/:holidayId" element={<HolidayManagement />} />
                  <Route path="me" element={<Account />} />
                </Route>
              </Route>

              {/* ADMIN ROUTES */}
              <Route path="admin" element={<AppLayout />}>
                <Route index element={<Navigate replace to="holidays" />} />
                <Route path="holidays" element={<Holiday />} />
                <Route path="holidays/:holidayId" element={<HolidayManagement />} />

                <Route
                  path="users"
                  element={
                    <RestrictRoute restrictTo={['manager']}>
                      <User />
                    </RestrictRoute>
                  }
                />
                <Route path="users/:userId" element={<UserManagement />}>
                  <Route path="request" element={<RequestForm />} />
                  <Route path="documents" element={<Documents />} />
                  <Route path="recovery" element={<PassRecovery />} />
                  <Route />
                </Route>

                <Route
                  path="enterprise"
                  element={
                    <RestrictRoute restrictTo={['manager']}>
                      <Enterprise />
                    </RestrictRoute>
                  }
                />
                <Route
                  path="departments"
                  element={
                    <RestrictRoute restrictTo={['manager']}>
                      <Departments />
                    </RestrictRoute>
                  }
                />
                <Route path="seniority" element={<Seniority />} />
                <Route
                  path="settings"
                  element={
                    <RestrictRoute restrictTo={['manager']}>
                      <Settings />
                    </RestrictRoute>
                  }
                />
                <Route path="me" element={<Account />} />
              </Route>
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
