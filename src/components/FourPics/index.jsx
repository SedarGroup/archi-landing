import React from "react";

const FourPics = ({img1, img2, img3, img4}) => {
    return (<section className="projdtal">
        <div className="justified-gallery">
            <div className="row">
                <a href="#" className="col-lg-4 col-xl-3 col-md-12">
                    <img alt="" src={img1} />
                </a>
                <a href="#" className="col-lg-4 col-xl-3 col-md-6">
                    <img alt="" src={img2} />
                </a>
                <a href="#" className="col-lg-4 col-xl-3 col-md-6">
                    <img alt="" src={img3} />
                </a>
                <a href="#" className="col-lg-4 col-xl-3 col-md-12">
                    <img alt="" src={img4} />
                </a>
            </div>
        </div>
    </section>)
}
export default FourPics
