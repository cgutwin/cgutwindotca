import React from "react"
import "../styles/index.css"
import "../styles/typography.css"
import RootLayout from "../layouts/RootLayout"
import Layout from "../layouts/Layout"
import GithubDark from "../images/social/github.svg"
import Card from "../components/Card"
import pfp from "../images/gradient-image.svg"
import ProjectCardsView from "../views/ProjectCardsView"
import styled from "styled-components"
import flexy from "../styles/mixins/flexy"

const IndexPage = () => (
  <RootLayout>
    <Layout>
      <LinksSection>
        <div style={{
          aspectRatio: "1 / 1",
          borderRadius: "0.5rem",
          padding: "0.33rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "24px"
        }}>
          <a href="https://github.com/cgutwin" target="_blank" rel="noreferrer noopener nofollow" style={{
            height: "100%"
          }}>
            <img src={GithubDark} style={{
              fill: "white",
              width: "100%",
              height: "100%"
            }}/>
          </a>
        </div>
      </LinksSection>
      <section style={{
        marginBottom: "2rem"
      }}>
        <Card>
          <HeaderStyle>
            <img
              alt="pfp"
              src={pfp}
              width="48px"
            />
            <div>
              <h1 className="t-no-margin">Chris Gutwin</h1>
              <small>Backend Web Development</small>
            </div>
          </HeaderStyle>
        </Card>
      </section>
      <main>
        <ProjectCardsView/>
      </main>
    </Layout>
  </RootLayout>
)


const LinksSection = styled.section`
  ${flexy({ justify: "end" })};
  padding: 0.5rem;
  margin-block: 1rem;
`

const HeaderStyle = styled.header`
  ${flexy({ align: "center" })};
  gap: 2rem;
  padding: 0 1rem;
`

export default IndexPage
