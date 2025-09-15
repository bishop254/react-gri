import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Button } from "primereact/button";
import { ScrollPanel } from "primereact/scrollpanel";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import Ecovadis from "./components/Ecovadis";

const principles = [
  {
    title: "Ecovadis Report",
    id: "mod",
  },
];

function App() {
  const [loadingType, setLoadingType] = useState(null);
  const [selected, setSelected] = useState(principles[0]);
  const [year, setYear] = useState(null);
  const [quarter, setQuarter] = useState("All");
  const [yearOptions, setYearOptions] = useState([]);
  const [quarterOptions, setQuarterOptions] = useState([
    { name: "All", label: "All" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showQuarterFilter, setShowQuarterFilter] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const sectionRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: Array.from({ length: 11 }, (_, i) => i * 0.1),
    };

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length) {
        const top = visible.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        )[0];
        const sectionId = top.target.getAttribute("data-id");
        if (sectionId) setSelected(sectionId);
      }
    }, options);

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      sectionRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  const generateReport = async () => {};

  return (
    <div className="brsr-report-container">
      <div className="sidebar">
        <h2 className="sidebar-title">Ecovadis Report Index</h2>
        <ScrollPanel className="sidebar-scroll">
          <ul className="principles-list">
            {principles.map((item) => (
              <li key={item.id}>
                {/* Main item */}
                <div
                  className={`principle-item ${
                    selected === item.id ? "selected" : ""
                  }`}
                  onClick={() => {
                    setSelected(item.id);
                    const el = document.getElementById(item.id);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item.title}
                </div>

                {/* Children */}
                {item.children && (
                  <ul style={{ marginLeft: "-1.3rem" }}>
                    {item.children.map((sub) => (
                      <li style={{ listStyle: "none" }} key={sub.targetId}>
                        <div
                          className={`principle-item ${
                            selected === sub.targetId ? "selected" : ""
                          }`}
                          style={{ fontSize: "0.8rem" }}
                          onClick={() => {
                            setSelected(sub.targetId);
                            const el = document.getElementById(sub.targetId);
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          {sub.title}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </ScrollPanel>
      </div>

      <div id="report-content" className="main-content scroll-sections">
        <div
          className="filter-section"
          style={{
            backgroundColor: "#f8f9fa",
            margin: "0 auto 3rem auto",
            borderRadius: "8px",
            flexShrink: 0,
            width: "1000px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <label style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                  Select Year:
                </label>
                <Dropdown
                  value={year}
                  options={yearOptions}
                  // onChange={(e) => handleYearChange(e.value)}
                  placeholder="Select Year"
                  style={{ width: "200px" }}
                  optionLabel="label"
                  optionValue="name"
                  showClear
                />
              </div>
              {showQuarterFilter && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <label style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                    Select Quarter:
                  </label>
                  <Dropdown
                    value={quarter}
                    options={quarterOptions}
                    // onChange={(e) => handleQuarterChange(e.value)}
                    placeholder="Select Quarter"
                    style={{ width: "200px" }}
                    optionLabel="label"
                    optionValue="name"
                  />
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {/* Generate Report Button - Only show when report is available (same as export buttons) */}
              {showReport && (
                <Button
                  label="Generate Report"
                  icon="pi pi-cog"
                  className="p-button-outlined p-button-success"
                  onClick={generateReport}
                  style={{ fontSize: "0.9rem", padding: "0.5rem 1rem" }}
                />
              )}

              {/* Export Buttons - Only show when report is available */}
              {/* {showReport && ( */}
              <>
                <Button
                  label="Export PDF"
                  icon="pi pi-file-pdf"
                  className="p-button-outlined p-button-danger"
                  // onClick={() => {
                  //   reactToPrintFn();
                  // }}
                  loading={isLoading}
                  style={{ fontSize: "0.9rem", padding: "0.5rem 1rem" }}
                />
                <Button
                  label="Export Word"
                  icon="pi pi-file-word"
                  className="p-button-outlined p-button-info"
                  loading={isLoading}
                  style={{ fontSize: "0.9rem", padding: "0.5rem 1rem" }}
                />
              </>
              {/* )} */}
            </div>
          </div>
        </div>

        <div id="mod" data-id="mod" ref={(el) => (sectionRefs.current[0] = el)}>
          <Ecovadis />
        </div>
      </div>
    </div>
  );
}

export default App;
