import { Link } from "gatsby";
import React from "react";
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockText from "./block-text";
import { format, distanceInWords, differenceInDays } from "date-fns";

import * as styles from "./project-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

function ProjectPreview(props) {
  return (
    <Link className={styles.root} to={`/project/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
      <div className="h-px bg-gray-200 mx-1"></div>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
      <div className="h-px bg-gray-200 mx-1 mt-10 mb-3"></div>
      <div className="flex justify-between">
        {/* <img
          className="w-100 h-100 object-cover rounded-full"
          src={imageUrlFor(buildImageObj(props.members[0].person.image))
            .width(30)
            .height(30)
            .fit("crop")
            .url()}
          alt=""
        /> */}
        <ul className="flex ml-3">
          {props.members.map(item => (
            <li key={item._key} className="">
              <div>
                <div className="relative bg-gray-100 rounded-full -ml-3 overflow-hidden border-solid">
                  {item.person && item.person.image && item.person.image.asset && (
                    <img
                      className="w-100 h-100 align-top object-cover"
                      src={imageUrlFor(buildImageObj(item.person.image))
                        .width(30)
                        .height(30)
                        .fit("crop")
                        .url()}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-gray-500 text-sm  my-auto">
          {differenceInDays(new Date(props.publishedAt), new Date()) > 3
            ? distanceInWords(new Date(props.publishedAt), new Date())
            : format(new Date(props.publishedAt), "MMMM Do YYYY")}
        </div>
      </div>
    </Link>
  );
}

export default ProjectPreview;
