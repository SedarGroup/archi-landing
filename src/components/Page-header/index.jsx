import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const PageHeader = ({ title, fullPath, image, imgSrc }) => {
  const router = useRouter();
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{
        backgroundImage: `url(${!image ? imgSrc : image})`,
      }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h2>{title}</h2>
              <div className="path">
                {fullPath.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <Link href={item.url}>
                      <a
                        className={router.pathname == item.url ? "active" : ""}
                      >
                        {item.name}
                      </a>
                    </Link>
                    {index != fullPath.length - 1 ? <span>/</span> : ""}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
