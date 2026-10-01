import React from "react";

const WorkHeader = ({ title, content, center, bgImage }) => {
  return (
    <header
      className="work-header bg-img valign"
      style={{
        backgroundImage: `url(${bgImage || "/assets/img/patern.png"})`,
        backgroundSize: bgImage ? "cover" : undefined,
        backgroundPosition: bgImage ? "center" : undefined,
        backgroundRepeat: bgImage ? "no-repeat" : undefined,
      }}
      data-overlay-dark={bgImage ? "5" : undefined}
    >
      <div className="container">
        <div className={`row ${center ? "justify-content-center" : ""}`}>
          <div className="col-lg-9">
            <div className={`cont ${center ? "text-center" : ""}`}>
              <h2>
                {typeof title == "object" ? (
                  <>
                    {title.first} <br /> {title.second}
                  </>
                ) : (
                  title
                )}
              </h2>

              <p>
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WorkHeader;
