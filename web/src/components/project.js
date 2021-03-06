import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import { Link } from "gatsby";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import BlockContent from "./block-content";
import Container from "./container";
import RoleList from "./role-list";

import * as styles from "./project.module.css";

function Project(props) {
  const {
    _rawBody,
    title,
    categories,
    mainImage,
    members,
    publishedAt,
    relatedProjects,
    github,
    website
  } = props;
  return (
    <article className="pt-16">
      {/* {props.mainImage && mainImage.asset && (
        <div className="grid max-w-3xl mx-auto pt-16">
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )} */}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM DD, YYYY")}
              </div>
            )}
            <h3>Links</h3>
            <div className="space"></div>
            <Link to={github} target="_blank" className="hover:text-teal">
              <button className="bg-black text-white px-auto py-4 mx-auto rounded-lg w-full">
                <span className="mr-2 inline-flex transform translate-y-0.5">
                  <AiFillGithub />
                </span>
                GitHub Repo
              </button>
            </Link>
            <div className="space"></div>
            <Link to={website} target="_blank" className="hover:text-teal">
              <button className="bg-purple-500 text-white px-auto py-4 mx-auto rounded-lg w-full">
                <span className="mr-2 inline-flex transform translate-y-0.5">
                  <AiOutlineLink />
                </span>
                Visit Site
              </button>
            </Link>
            {members && members.length > 0 && <RoleList items={members} title="Project members" />}
            {categories && categories.length > 0 && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {relatedProjects && relatedProjects.length > 0 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Related projects</h3>
                <ul>
                  {relatedProjects.map(project => (
                    <li key={`related_${project._id}`}>
                      {project.slug ? (
                        <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default Project;
