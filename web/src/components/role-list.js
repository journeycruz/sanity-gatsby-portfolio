import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import { ucfirst } from "../lib/string-utils";

import * as styles from "./role-list.module.css";

function RoleList({ items, title }) {
  return (
    <div className={styles.root}>
      <h2 className={styles.headline}>{title}</h2>
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item._key} className={styles.listItem}>
            <div>
              <div className="relative w-12 h-12 bg-gray-100 rounded-full overflow-hidden border-solid">
                {" "}
                {item.person && item.person.image && item.person.image.asset && (
                  <img
                    className="w-100 h-100 align-top object-cover"
                    src={imageUrlFor(buildImageObj(item.person.image))
                      .width(100)
                      .height(100)
                      .fit("crop")
                      .url()}
                    alt=""
                  />
                )}
              </div>
            </div>
            <div>
              <div>
                <strong>{(item.person && item.person.name) || <em>Missing name</em>}</strong>
              </div>
              {item.roles && (
                <div>
                  {item.roles.map((role, idx) => {
                    switch (true) {
                      case idx === 0:
                        return <span key={role}>{ucfirst(role)}</span>;
                      case idx === item.roles.length - 1:
                        return <span key={role}> & {ucfirst(role)}</span>;
                      default:
                        return <span key={role}>, {ucfirst(role)}</span>;
                    }
                  })}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoleList;
