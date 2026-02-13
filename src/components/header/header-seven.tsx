import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchSvg } from "../svg";
import NavMenus from "./navbar/nav-menus";
// import logo from "@/assets/img/logo/erith-white.png";
import HeaderTopArea from "./header-top/header-top-area";
import logo_black from "@/assets/img/logo/erith_global.png";
import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import SearchButton from "./button/search-button";
import OffcanvasButton from "./button/offcanvas-btn";

// ✅ Added transparent prop since Layout passes it
type HeaderSevenProps = {
  inner?: boolean;
  transparent?: boolean;
};

// ✅ Renamed to match your import in Layout.tsx
export default function HeaderSeven({ inner, transparent }: HeaderSevenProps) {
  return (
    <>
      <header
        className={`header-area p-relative ${
          transparent ? "tp-header-white" : "tp-header-white"
        }`}
      >
        {/* header top start */}
        <HeaderTopArea />
        {/* header top end */}

        <HeaderStickyWrapper>
          <div className="container">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-header-logo-1 tp-header-logo">
                  <Link href="/">
                    <Image
                      className="logo-1"
                      src={logo_black}
                      alt="logo"
                      priority
                    />
                    <Image
                      className="logo-2"
                      src={logo_black}
                      alt="logo"
                      priority
                    />
                  </Link>
                  {inner && <span style={{ display: "none" }}></span>}
                </div>
              </div>

              {/* Navigation */}
              <div className="col-xxl-8 col-xl-7 d-none d-xl-block">
                <div className="main-menu" style={{ marginLeft: "-20px" }}>
                  <NavMenus />
                </div>
              </div>

              {/* Right-side actions */}
              <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-contact d-flex align-items-center justify-content-end">
                  {/* Search */}
                  <div className="mr-3">
                    <SearchButton icon={<SearchSvg />} />
                  </div>

                  {/* Button */}
                  <div className="tp-header-btn d-none d-md-block ml-25">
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
                            fontSize: "12px",
                      }}
                    >
                      Request a Quote
                    </Link>
                  </div>

                  {/* Mobile Menu */}
                  <div className="tp-header-bar d-xl-none ml-30">
                    <OffcanvasButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeaderStickyWrapper>
      </header>

      <div id="offcanvas-sidebar" />
    </>
  );
}
