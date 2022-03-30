import React from "react"
import styled from "styled-components"

function Card({ children }: { children: React.ReactNode }) {
  return (
    <CardStyles>
      {children}
    </CardStyles>
  )
}

const CardStyles = styled.section`
  box-sizing: border-box;
  border: 1px solid #e6e6e6;
  border-radius: 1rem;
  padding: 1rem;
  width: 100%;
`

export default Card
