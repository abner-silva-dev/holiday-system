import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';

import AppLayout from './shared/ui/AppLayout';
import GlobalStyles from './shared/style/GlobalStyles';
import User from './pages/users/Users';
import Departments from './pages/departments/Departments';
import Holiday from './pages/holidays/Holiday';
import Seniority from './pages/settings/Seniority';
import Enterprise from './pages/enterprise/Enterprise';
import HolidayManagement from './features/holiday/components/HolidayManagement';
import Settings from './pages/settings/Settings';
import Account from './pages/account/Account';
import ProtectedRoute from './shared/ui/ProtectedRoute';
import UserAccess from './pages/users/UserAccess';
import RestrictRoute from './shared/ui/RestrictRoute';
import RedirectRole from './shared/ui/RedirectRole';
import Header from './features/users/components/user-app/Header';
import AppLayoutUser from './shared/ui/AppLayoutUser';
import Authentication from './pages/account/Authentication';
import Request from './pages/users/Request';
import UserManagement from './pages/users/UserManagement';
import PassRecovery from './features/users/components/PassRecovery';
import Print from './pages/Print';
import Archive from './pages/users/Archive';
import Assignment from './pages/users/Assignment';

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
            {/* GENERAL ACCESS */}
            <Route path="print" element={<Print />} />
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
                  {/* <Route index element={<ContentEmpty $size="large" />} /> */}
                  <Route path="request" element={<Request />} />
                  <Route path="documents" element={<Archive />} />
                  <Route path="recovery" element={<PassRecovery />} />
                  <Route path="assignment" element={<Assignment />} />
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
