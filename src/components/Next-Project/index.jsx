import React from "react";
import Split from "../Split";
import Link from "next/link";

const NextProject = ({backgroundImage, bold, text, href}) => {
  return (
    <section className="call-action nogif next">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content text-center">
              <Link href={`/project-details/${href}`}>
                <a>
                  <Split>
                    <h6
                      className="wow txt words chars splitting"
                      data-splitting
                    >
                      Prochain Projet
                    </h6>
                  </Split>

                  <Split>
                    <h2
                      className="wow txt words chars splitting"
                      data-splitting
                    >
                      <b> {bold} </b> {text}
                    </h2>
                  </Split>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="nxt-img bg-img"
       style={{backgroundImage:`url(${backgroundImage})`}}
      ></div>
    </section>
  );
};

export default NextProject;
