import { CssBaseline } from '@mui/material';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './cache/queryClient';

const defaultTheme = createTheme();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </QueryClientProvider>

  )
}

export default App
