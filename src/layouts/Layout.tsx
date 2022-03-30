import React from "react"
import styled from "styled-components"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutStyle>
      {children}
    </LayoutStyle>
  )
}

const LayoutStyle = styled.div`
  margin: 0 auto;
  max-width: 650px;
`

export default Layout
