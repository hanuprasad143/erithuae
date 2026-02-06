"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import thumb_2 from "@/assets/img/shop/shop-thumb-2.png";
// import thumb_3 from "@/assets/img/shop/shop-thumb-3.png";
import product2 from "@/assets/img/products/product2.png";
import product6 from "@/assets/img/products/product6.png";
import { NextArrowFour, PrevArrowFour } from "../svg";

const images = [product2, product6];

export default function BreadcrumbTwo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="tp-shop-banner p-relative pt-0 pb-40"
      style={{ height: "400px" }}
    >
      <div
        className="tp-breadcrumb__bg"
        style={{ backgroundColor: "#f3f4f8" }}
      ></div>

      <div className="tp-shop-banner-space p-relative fix">
        <div className="container">
          <div className="row">
            {/* TEXT (static) */}
            <div className="col-lg-5">
              <div className="tp-shop-banner-content">
                <h4
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    marginTop: "10px",
                    paddingTop: "30px",
                  }}
                >
                  Bidirectional Knife Gate Valve
                </h4>

                <h3
                  style={{
                    color: "#fecb00",
                    fontSize: "58px",
                    fontWeight: "bold",
                  }}
                  className="tp-shop-banner-title"
                >
                  Series 755
                </h3>

                <p style={{ color: "#000", fontSize: "18px" }}>
                  Durable Bidirectional Valve with Field-Replaceable Liner for
                  Abrasive Industrial Applications
                </p>

                <div className="tp-header-btn d-none d-md-block">
                  <Link
                    href="/contact"
                    style={{
                      backgroundColor: "#1d3a72",
                      color: "#fff",
                      padding: "8px 18px",
                      borderRadius: "10px",
                      textDecoration: "none",
                      fontWeight: "600",
                      display: "inline-block",
                      marginTop: "30px",
                      // marginBottom: "80px",
                    }}
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>

            {/* IMAGE (changes only) */}
            <div className="col-lg-7">
              <div className="tp-shop-banner-thumb">
                <Image
                  src={images[currentIndex]}
                  alt="shop-banner-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ARROWS */}
      <div
        className="tp-campus-life-arrow"
        style={{
          position: "absolute",
          left: "230px",
          bottom: "60px",
          display: "flex",
          gap: "0px",
          zIndex: 5,
        }}
      >
        <div className="tp-campus-prev pointer" onClick={handlePrev}>
          <span>
            <PrevArrowFour />
          </span>
        </div>

        <div className="tp-campus-next pointer" onClick={handleNext}>
          <span>
            <NextArrowFour />
          </span>
        </div>
      </div>
    </section>
  );
}
