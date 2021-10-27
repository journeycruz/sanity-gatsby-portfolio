import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import ProjectPreviewGrid from "../components/project-preview-grid";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers";

import { responsiveTitle1 } from "../components/typography.module.css";

export const query = graphql`
  query ArchivePageQuery {
    projects: allSanitySampleProject(
      limit: 100
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
          members {
            _key
            person {
              image {
                crop {
                  _key
                  _type
                  top
                  bottom
                  left
                  right
                }
                hotspot {
                  _key
                  _type
                  x
                  y
                  height
                  width
                }
                asset {
                  _id
                }
              }
              name
            }
            roles
          }
        }
      }
    }
  }
`;

const ArchivePage = props => {
  const { data, errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }
  const projectNodes =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs);
  return (
    <Layout>
      <SEO title="Archive" />
      <Container>
        <div className="mt-16">
          <h1 className={responsiveTitle1}>All Projects</h1>
        </div>
        <div className="h-px bg-gray-200 mb-10"></div>{" "}
        {projectNodes && projectNodes.length > 0 && <ProjectPreviewGrid nodes={projectNodes} />}
      </Container>
    </Layout>
  );
};

export default ArchivePage;
