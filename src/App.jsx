import './App.css'
import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from './context/ThemeContext'
import { UIProvider } from './context/UIContext'

const App = () => {
  return (
    <ThemeProvider>
      <UIProvider>
        <AppRoutes />
      </UIProvider>
    </ThemeProvider>
  )
}

export default App
