import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <h1>Hello world</h1>

      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="graduates" />} />
              <Route path="graduates" element={<Graduates />} />
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
