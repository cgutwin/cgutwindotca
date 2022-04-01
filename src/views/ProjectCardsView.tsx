import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

interface MDXFrontmatter {
  title: string
  description: string
  tags: string
}

interface Node {
  id: string
  frontmatter: Partial<MDXFrontmatter>
}

type Nodes = Node[]

interface AllMDXData {
  allMdx: {
    nodes: Nodes
  }
}

const query = graphql`
    # noinspection GraphQLUnresolvedReference
    query QueryProjectsFrontmatter {
        allMdx {
            nodes {
                id
                frontmatter {
                    title
                    description
                    tags
                }
            }
        }
    }
`

function ProjectCardsView() {
  const data = useStaticQuery<AllMDXData>(query)

  return (
    <section>
      <h2 style={{ margin: "0 1rem 1rem"}}>Projects</h2>
      <ProjectCardsSection>
        {data.allMdx.nodes.map((node) => (
          <ProjectCard key={node.id}>
            <h3>{node.frontmatter.title}</h3>
            <p>{node.frontmatter.description}</p>
          </ProjectCard>
        ))}
      </ProjectCardsSection>
    </section>
  )
}

const ProjectCardsSection = styled.div`
  @media screen and (max-width: 540px) {
    flex-direction: column!important;
  }
  
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

const ProjectCard = styled.div`
  box-sizing: border-box;
  border: 1px solid #e6e6e6;
  border-radius: 1rem;
  padding: 1rem;
  width: 100%;
`

export default ProjectCardsView
