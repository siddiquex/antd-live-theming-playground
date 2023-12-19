import { createContext, useState } from 'react'
import { ConfigProvider } from "antd";
import Playground from "./components/Playground.jsx";
import './App.css'

export const ThemeConfigContext = createContext({});
function App() {
  const [themeConfig, setThemeConfig] = useState({})

  return (
    <>
      <ConfigProvider theme={themeConfig}>
        <ThemeConfigContext.Provider value={{ setThemeConfig }}>
          <Playground />
        </ThemeConfigContext.Provider>
      </ConfigProvider>
    </>
  )
}

export default App
