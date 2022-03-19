import React from "react";

const FourPics = ({img1, img2, img3, img4}) => {
    return (<section className="projdtal">
        <div className="justified-gallery">
            <div className="row">
                    <img className="col-lg-4 col-xl-3 col-md-12" alt="" src={img1} />
                    <img className="col-lg-4 col-xl-3 col-md-6" alt="" src={img2} />
                    <img className="col-lg-4 col-xl-3 col-md-6" alt="" src={img3} />
                    <img className="col-lg-4 col-xl-3 col-md-12" alt="" src={img4} />
            </div>
        </div>
    </section>)
}
export default FourPics
