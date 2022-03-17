import React from "react";
import Link from "next/link";
const ImgCard = ({ children }) => {
    return (
        <div className="col-lg-4">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
                <div className="img">
                    <img src="/assets/img/blog/02.jpg" alt="" />
                </div>
                <div className="cont">
                    {children}
                    <div className="btn-more">
                        <Link href="/quote" className="btn-curve btn-color">
                            <button className="btn-curve btn-color mt-5 nav-link">
                                <span>Demander un devis</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ImgCard;
