import React from "react"
import styled from "styled-components"
import Layout from "../layouts/Layout"
import Card from "../components/Card"
import pfp from "../images/gradient-image.svg"
import flexy from "../styles/mixins/flexy"
import GithubDark from "../images/social/github.svg"
import "../styles/index.css"
import "../styles/typography.css"
import InjectTheme from "../components/InjectTheme"
import GlobalStyle from "../styles/GlobalStyle"
import { lightTheme } from "../styles/themes"

const IndexPage = () => {
  return (
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
      <section>
        <h2 style={{
          margin: "0 1rem 1rem 1rem"
        }}>Projects</h2>
        <ProjectsSection>
          <Card>
            <ProjectCardHeader>
              <h3 className="t-no-margin">🥝 Kiwi</h3>
              <UL>
                <Tag>React</Tag>
                <Tag>Typescript</Tag>
              </UL>
            </ProjectCardHeader>
            <p>The web based mobile app for Apteryx.</p>
          </Card>
          <Card>
            <ProjectCardHeader>
              <h3 className="t-no-margin">🛒 Apteryx</h3>
              <UL>
                <Tag>Express</Tag>
                <Tag>Postgres</Tag>
                <Tag>GraphQL</Tag>
              </UL>
            </ProjectCardHeader>
            <p>The backend server for Apteryx, a grocery store inventory management tool. </p>
          </Card>
        </ProjectsSection>
      </section>
    </Layout>
  )
}

const ProjectsSection = styled.section`
  @media screen and (min-width: 540px) {
    flex-direction: row !important;
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ProjectCardHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
`

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

const UL = styled.ul`
  padding: 0;
  margin-top: 0.25rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.25rem;
`

const Tag = styled.li`
  background: #ebebeb;
  border-radius: 0.25rem;
  font-size: 0.85rem;
  padding: 0.25rem 0.5rem;
  list-style: none;
`

export default () => {
  return (
    <InjectTheme initialTheme={lightTheme}>
      <GlobalStyle/>
      <IndexPage/>
    </InjectTheme>
  )
}
