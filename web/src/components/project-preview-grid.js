import { Link } from "gatsby";
import React from "react";
import ProjectPreview from "./project-preview";

import * as styles from "./project-preview-grid.module.css";

function ProjectPreviewGrid(props) {
  return (
    <div className="mt-8 mr-0 mb-16">
      {props.title && (
        <h2 className="text-sm leading-tight font-semibold uppercase tracking-tighter m-7">
          {props.title}
        </h2>
      )}
      <ul className="m-0 p-0 list-none grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {props.nodes &&
          props.nodes.map(node => (
            <li
              className="shadow-lg hover:shadow-2xl hover:bg-gray-100 transition ease-in-out duration-700 rounded-md px-6 py-5"
              key={node.id}
            >
              <ProjectPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className="text-sm text-right leading-tight tracking-tighter mt-10 font-semibold uppercase hover:text-indigo-600">
          <Link to={props.browseMoreHref}>Browse All Projects</Link>
        </div>
      )}
    </div>
  );
}

ProjectPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default ProjectPreviewGrid;
