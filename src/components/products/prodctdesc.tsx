"use client";
import NiceSelect from "@/components/ui/nice-select";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Moreproducts from "./moreproducts";
import Features from "./features";
import ErithProducts from "./erithproducts";
import ServiceFour from "./downloads";

const results = [
  { id: "home", title: "Description" },
  { id: "profile", title: "Specifications" },
  { id: "contact", title: "Downloads" },
  { id: "features", title: "Features & Benefits" },
  { id: "insights", title: "Product Insights" },
];

const applicationProcess = [
  {
    step: 1,
    title: "Size Range",
    description: `NPS 2 to 24 / DN 60 to 600`,
    // linkText: "Application Form",
    // linkHref: "/university-application-form",
  },
  {
    step: 2,
    title: "Body Materials",
    description: `Ductile Iron, Carbon Steel (WCB) CF8 Stainless Steel, CF8M Stainless Steel, CF3M Stainless Steel`,
  },
  {
    step: 3,
    title: "Maximum Allowable Operating Pressure",
    description: `240psi (16bar)`,
  },
  {
    step: 4,
    title: "Stem Materials",
    description: `304 Stainless Steel`,
  },
  {
    step: 5,
    title: "Body Style",
    description: `Wafer, Two-Piece Bolted`,
  },
  {
    step: 6,
    title: "Gate Materials",
    description: `304, 316, 317 Stainless Steel, SAF 2507, SAF 2205,17-4PH, Hastelloy® C, Monel®`,
  },
  {
    step: 7,
    title: "Seat Material Temperature Range",
    description: `
<ul>
  <li>Buna-N: -34 to 194°F (-36 to 90°C)</li>
  <li>EPDM: -65 to 248°F (-54 to 120°C)</li>
  <li>Viton®: -15 to 392°F (-26 to 200°C)</li>
</ul>
`,
  },
  {
    step: 8,
    title: "Design Standard",
    description: `MSS SP81`,
  },
  {
    step: 9,
    title: "Packing Maximum Temperature",
    description: `
<ul>
  <li>PTFE/Buna-N: 194°F (90°C)</li>
  <li>PTFE/Viton®: 392°F (200°C)</li>
  <li>PTFE/EPDM: 248°F (120°C)</li>
</ul>
`,
  },
  {
    step: 10,
    title: "Testing Standard",
    description: `MSS SP151`,
  },
  {
    step: 11,
    title: "Liner Maximum Temperature",
    description: `176°F (80°C)`,
  },
  {
    step: 12,
    title: "Certifications",
    description: `ATEX, CRN, PED, PE(S)R, TR CU, UA TR`,
  },
  {
    step: 13,
    title: "Face to Face",
    description: `MSS SP81`,
  },
  {
    step: 14,
    title: "Actuator Options",
    description: `Handwheel, Bevel Gear, Pneumatic, Hydraulic, Electric`,
  },
];

// const tabContentData = [
//   {
//     id: "home",
//     imgSrc: "/assets/img/products/product2.png",
//     title: "Housing & Dining",
//   },
// ];

export default function ProductDesc() {
  function handleSearch(item: { value: string; label: string }) {
    console.log(item);
  }
  const [activeTab, setActiveTab] = useState("home");

  return (
    <section className="tp-campus-student-area white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* TABS */}
            <div
              className="tp-campus-student-list justify-content-start justify-content-md-start"
              style={{
                paddingLeft: 10,
                marginLeft: 10,
                marginBottom: 30,
                marginTop: 30,
              }}
            >
              <div className="align-items-start">
                <ul className="nav nav-tabs" style={{ paddingLeft: 0 }}>
                  {results.map((nav) => (
                    <li key={nav.title} className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === nav.id ? "active" : ""
                        }`}
                        onClick={() => setActiveTab(nav.id)}
                        style={{
                          fontSize: "15px",
                          color: activeTab === nav.id ? "#fff" : "#000",
                          padding: "8px 18px",
                          backgroundColor:
                            activeTab === nav.id ? "#1d3a72" : "#f5f5f5",
                          border:
                            activeTab === nav.id
                              ? "2px solid #1d3a72"
                              : "1px solid #ccc",
                          borderRadius: "10px", // 👈 decreased radius
                          transition: "all 0.2s ease",
                          marginRight: "10px",
                             
                        }}
                        type="button"
                      >
                        {nav.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              id="down"
              className="tp-campus-student-box pb-10 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="container">
                {/* DESCRIPTION ONLY */}
                {activeTab === "home" && (
                  <div
                    className="row align-items-center"
                    style={{ marginBottom: "40px" }}
                  >
                    <div className="col-lg-6 col-md-12">
                      <div className="tp-campus-student-heading">
                        <h5
                          style={{
                            color: "#1d3a72",
                            marginBottom: "30px",
                            fontSize: "38px",
                            lineHeight: "1.2",
                          }}
                        >
                          Corrosion-Resistant Materials for Versatile Industrial
                          Use
                        </h5>
                        <p style={{ fontSize: "28px", color: "#000" }}>
                          Engineered Durability for Corrosive Industrial
                          Applications
                        </p>
                        <p
                          style={{
                            fontSize: "15px",
                            color: "#000",
                            lineHeight: "1.2",
                          }}
                        >
                          The Bray Series 755 Bidirectional Knife Gate Valve is
                          engineered to excel in managing abrasive and corrosive
                          slurries across diverse applications, focusing on
                          performance and reliability. Its design and robust
                          construction set a new standard for efficiency and
                          durability in industrial environments.Featuring a
                          robust two-piece bolted body configuration, the Series
                          755 valve ensures structural integrity and simplifies
                          maintenance procedures, enhancing operational
                          efficiency. Similar to the Series 752, the valve
                          utilizes a steel-reinforced molded perimeter seat to
                          achieve zero-leakage bidirectional closure.With sizes
                          ranging from 2 to 24 (50 - 600 mm), the 755 Series
                          offers flexibility to address various application
                          demands. It effortlessly withstands high-pressure
                          environments with pressure rating up to 240 psi (16
                          bar).To meet specific application requirements, the
                          755 Series knife gate valve offers a variety of body
                          material options, including CF3M stainless steel, SAF
                          2205 Duplex, and SAF 2507 Duplex for use in corrosive
                          applications. Furthermore, the Series 755 knife gate
                          valve features a field-replaceable polyurethane bore
                          liner, enhancing performance and providing a
                          cost-effective solution for abrasive applications.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <div className="tp-campus-student-content">
                        <Image
                          src="/assets/img/products/product2.png"
                          alt="Product"
                          width={1201}
                          height={580}
                          style={{ height: "auto", width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* SPECIFICATIONS ONLY */}
                {activeTab === "profile" && (
                  <div
                    className="container"
                    style={{
                      paddingTop: "0",
                      paddingBottom: "30px", // 🔥 remove bottom space
                    }}
                  >
                    <h5
                      style={{
                        color: "#1d3a72",
                        marginTop: "0",
                        marginBottom: "30px", // 🔥 no gap below heading
                        lineHeight: "1.2",
                        fontSize: "38px",
                      }}
                    >
                      Specifications
                    </h5>

                    <div
                      className="row"
                      style={{
                        rowGap: "5px",
                        alignItems: "stretch",
                        marginTop: "0",
                        marginBottom: "0", // 🔥 remove row bottom gap
                        paddingTop: "0",
                        paddingBottom: "0",
                      }}
                    >
                      {applicationProcess.map((step, index) => (
                        <div
                          key={index}
                          className="col-lg-6 col-md-6 d-flex"
                          style={{
                            marginBottom: "0", // 🔥 no bottom gap per column
                            paddingTop: "0",
                            paddingBottom: "0",
                          }}
                        >
                          <div
                            className="tp-apply-process-box h-70"
                            style={{
                              padding: "4px 5px",
                              width: "100%",
                              marginTop: "0",
                              marginBottom: "0", // 🔥 ensure no box gap
                              borderTop: "none",
                            }}
                          >
                            <h4
                              style={{
                                marginTop: "0",
                                marginBottom: "2px",
                                fontSize: "15px",
                                color: "#000",
                                lineHeight: "1.3",
                              }}
                            >
                              {step.title}
                            </h4>

                            <p
                              style={{
                                marginTop: "0",
                                marginBottom: "0",
                                lineHeight: "1.4",
                                fontSize: "14px",
                              }}
                              dangerouslySetInnerHTML={{
                                __html: step.description,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SPECIFICATIONS ONLY */}
                {activeTab === "contact" && (
                  <div className="tp-leadership-select row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <NiceSelect
                        options={[
                          { value: "", label: "Select a Document Type" },
                          { value: "assistant", label: "All" },
                          { value: "principal", label: "Product Brochure" },
                          { value: "teacher", label: "Assistant Teacher" },
                        ]}
                        defaultCurrent={0}
                        onChange={(item) => handleSearch(item)}
                        name="LeaderShip"
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <NiceSelect
                        options={[
                          { value: "", label: "Select Language" },
                          { value: "assistant", label: "English" },
                          { value: "principal", label: "Arabic" },
                          { value: "teacher", label: "Spanish" },
                        ]}
                        defaultCurrent={0}
                        onChange={(item) => handleSearch(item)}
                        name="LeaderShip"
                      />
                    </div>
                    <ServiceFour />
                  </div>
                )}

                {activeTab === "features" && <div id="features"></div>}
                {activeTab === "features" && <Features />}

                {/* EVERYTHING BELOW REMAINS UNTOUCHED */}
                <Moreproducts />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ErithProducts />
    </section>
  );
}
