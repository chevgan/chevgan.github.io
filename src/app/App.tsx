import { RouterProvider } from 'react-router-dom';
import { SessionContext as AuthProvider } from '../contexts/AuthContext.tsx';
import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { router } from './routes';

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AuthProvider>
        <CssBaseline>
          <>
            <RouterProvider router={router} />
          </>
        </CssBaseline>
      </AuthProvider>
    </LocalizationProvider>
  );
};

export default App;
