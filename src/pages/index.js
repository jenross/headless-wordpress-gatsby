import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Home() {
  const data = useStaticQuery(graphql`
    {
      allWordpressPage {
        edges {
          node {
            title
            content
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allWordpressPage.edges.map(page => (
        <>
          <div key={page.node.id}>
            <h1>{page.node.title}</h1>
          </div>
          <div dangerouslySetInnerHTML={{ __html: page.node.content }} />
        </>
      ))}
    </div>
  )
}
