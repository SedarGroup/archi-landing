import React from "react";
import Link from "next/link";
const ImgCard = () => {
    return (
        <div className="col-lg-4">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
                <div className="img">
                    <img src="/assets/img/blog/02.jpg" alt="" />
                </div>
                <div className="cont">
                    <div>
                        <div className="info">
                            <Link href="/blog-details">
                                <a className="date">
                                    <span>
                                        <i>06</i> August
                                    </span>
                                </a>
                            </Link>
                            <span>/</span>
                            <Link href="/blog-details">
                                <a className="tag">
                                    <span>WordPress</span>
                                </a>
                            </Link>
                        </div>
                        <h5>
                            <Link href="/blog-details">
                                How to use solid color combine with simple furnitures.
                            </Link>
                        </h5>
                        <div className="btn-more">
                            <Link href="/blog-details" className="simple-btn">
                                Plus ...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ImgCard;
