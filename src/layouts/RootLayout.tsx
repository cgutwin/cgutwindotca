import React from "react"
import { lightTheme } from "../styles/themes"
import GlobalStyle from "../styles/GlobalStyle"
import InjectTheme from "../components/InjectTheme"

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <InjectTheme initialTheme={lightTheme}>
    <GlobalStyle/>
    {children}
  </InjectTheme>
)

export default RootLayout
