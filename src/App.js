import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Button } from "primereact/button";
import { ScrollPanel } from "primereact/scrollpanel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import { saveAs } from "file-saver";

import GRI2 from "./components/GRI2";
import GRI3 from "./components/GRI3";
import GRI200 from "./components/GRI200";
import GRI300 from "./components/GRI300";
import GRI400 from "./components/GRI400";

const principles = [
  {
    title: "GRI 2",
    id: "gri2",
    children: [
      {
        title: "1. The organization and its reporting practices",
        targetId: "gri2-org-reporting",
      },
      {
        title: "Disclosure 2-1",
        targetId: "gri2-disclosure-2-1",
      },
      {
        title: "Disclosure 2-2",
        targetId: "gri2-disclosure-2-2",
      },
      {
        title: "Disclosure 2-3",
        targetId: "gri2-disclosure-2-3",
      },
      {
        title: "Disclosure 2-4",
        targetId: "gri2-disclosure-2-4",
      },
      {
        title: "Disclosure 2-5",
        targetId: "gri2-disclosure-2-5",
      },
      {
        title: "2. Activities and workers",
        targetId: "gri2-activities-workers",
      },
      {
        title: "Disclosure 2-6",
        targetId: "gri2-disclosure-2-6",
      },
      { title: "Disclosure 2-7", targetId: "gri2-disclosure-2-7" },
      {
        title: "Disclosure 2-8",
        targetId: "gri2-disclosure-2-8",
      },
      { title: "3. Governance", targetId: "gri2-governance" },
      {
        title: "Disclosure 2-9",
        targetId: "gri2-disclosure-2-9",
      },
      {
        title: "Disclosure 2-10",
        targetId: "gri2-disclosure-2-10",
      },
      {
        title: "Disclosure 2-11",
        targetId: "gri2-disclosure-2-11",
      },
      {
        title: "Disclosure 2-12",
        targetId: "gri2-disclosure-2-12",
      },
      {
        title: "Disclosure 2-13",
        targetId: "gri2-disclosure-2-13",
      },
      {
        title: "Disclosure 2-14",
        targetId: "gri2-disclosure-2-14",
      },
      {
        title: "Disclosure 2-15",
        targetId: "gri2-disclosure-2-15",
      },
      {
        title: "Disclosure 2-16",
        targetId: "gri2-disclosure-2-16",
      },
      {
        title: "Disclosure 2-17",
        targetId: "gri2-disclosure-2-17",
      },
      {
        title: "Disclosure 2-18",
        targetId: "gri2-disclosure-2-18",
      },
      {
        title: "Disclosure 2-19",
        targetId: "gri2-disclosure-2-19",
      },
      {
        title: "Disclosure 2-20",
        targetId: "gri2-disclosure-2-20",
      },
      {
        title: "Disclosure 2-21",
        targetId: "gri2-disclosure-2-21",
      },
      {
        title: "4. Strategy, policies and practices",
        targetId: "gri2-strategy-policies",
      },
      {
        title: "Disclosure 2-22",
        targetId: "gri2-disclosure-2-22",
      },
      {
        title: "Disclosure 2-23",
        targetId: "gri2-disclosure-2-23",
      },
      {
        title: "Disclosure 2-24",
        targetId: "gri2-disclosure-2-24",
      },
      {
        title: "Disclosure 2-25",
        targetId: "gri2-disclosure-2-25",
      },
      {
        title: "Disclosure 2-26",
        targetId: "gri2-disclosure-2-26",
      },
      {
        title: "Disclosure 2-27",
        targetId: "gri2-disclosure-2-27",
      },
      {
        title: "Disclosure 2-28",
        targetId: "gri2-disclosure-2-28",
      },
      {
        title: "5. Stakeholder engagement",
        targetId: "gri2-stakeholder-engagement",
      },
      {
        title: "Disclosure 2-29",
        targetId: "gri2-disclosure-2-29",
      },
      {
        title: "Disclosure 2-30",
        targetId: "gri2-disclosure-2-30",
      },
    ],
  },
  {
    title: "GRI 3",
    id: "gri3",
    children: [
      {
        title: "2. Disclosures on material topics",
        targetId: "gri3-disclosures",
      },
      {
        title: "Disclosure 3-1",
        targetId: "gri3-disclosure-3-1",
      },
      {
        title: "Disclosure 3-2",
        targetId: "gri3-disclosure-3-2",
      },
      {
        title: "Disclosure 3-3",
        targetId: "gri3-disclosure-3-3",
      },
    ],
  },
  {
    title: "GRI 200",
    id: "gri200",
    children: [
      { title: "GRI 201 Economic Performance", targetId: "gri201-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-201-3-3" },
      { title: "Disclosure 201-1", targetId: "disclosure-201-1" },
      { title: "Disclosure 201-2", targetId: "disclosure-201-2" },
      { title: "Disclosure 201-3", targetId: "disclosure-201-3" },
      { title: "Disclosure 201-4", targetId: "disclosure-201-4" },

      { title: "GRI 202 Market Presence", targetId: "gri202-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-202-3-3" },
      { title: "Disclosure 202-1", targetId: "disclosure-202-1" },
      { title: "Disclosure 202-2", targetId: "disclosure-202-2" },

      { title: "GRI 203 Indirect Economic Impact", targetId: "gri203-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-203-3-3" },
      { title: "Disclosure 203-1", targetId: "disclosure-203-1" },
      { title: "Disclosure 203-2", targetId: "disclosure-203-2" },

      { title: "GRI 204 Procurement Practices", targetId: "gri204-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-204-3-3" },
      { title: "Disclosure 204-1", targetId: "disclosure-204-1" },

      { title: "GRI 205 Anti-Corruption", targetId: "gri205-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-205-3-3" },
      { title: "Disclosure 205-1", targetId: "disclosure-205-1" },
      { title: "Disclosure 205-2", targetId: "disclosure-205-2" },
      { title: "Disclosure 205-3", targetId: "disclosure-205-3" },

      { title: "GRI 206 Anti-competitive Behavior", targetId: "gri206-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-206-3-3" },
      { title: "Disclosure 206-1", targetId: "disclosure-206-1" },

      { title: "GRI 207 Tax", targetId: "gri207-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-207-3-3" },
      { title: "Disclosure 207-1", targetId: "disclosure-207-1" },
      { title: "Disclosure 207-2", targetId: "disclosure-207-2" },
      { title: "Disclosure 207-3", targetId: "disclosure-207-3" },
      { title: "Disclosure 207-4", targetId: "disclosure-207-4" },
    ],
  },
  {
    title: "GRI 300",
    id: "gri300",
    children: [
      { title: "GRI 301 Materials", targetId: "gri301-materials" },
      { title: "Disclosure 3-3", targetId: "disclosure-301-3-3" },
      { title: "Disclosure 301-1", targetId: "gri301-1" },
      { title: "Disclosure 301-2", targetId: "gri301-2" },
      { title: "Disclosure 301-3", targetId: "gri301-3" },

      { title: "GRI 302 Energy", targetId: "gri302-energy" },
      { title: "Disclosure 3-3", targetId: "disclosure-302-3-3" },
      { title: "Disclosure 302-1", targetId: "gri302-1" },
      { title: "Disclosure 302-2", targetId: "gri302-2" },
      { title: "Disclosure 302-3", targetId: "gri302-3" },
      { title: "Disclosure 302-5", targetId: "gri302-5" },

      { title: "GRI 303 Water & effluents", targetId: "gri303-water" },
      { title: "Disclosure 3-3", targetId: "disclosure-303-3-3" },
      { title: "Disclosure 303-1", targetId: "gri303-1" },
      { title: "Disclosure 303-2", targetId: "gri303-2" },
      { title: "Disclosure 303-3", targetId: "gri303-3" },
      { title: "Disclosure 303-4", targetId: "gri303-4" },
      { title: "Disclosure 303-5", targetId: "gri303-5" },

      { title: "GRI 304 Biodiversity", targetId: "gri304-biodiversity" },
      { title: "Disclosure 3-3", targetId: "disclosure-304-3-3" },
      { title: "Disclosure 304-1", targetId: "gri304-1" },
      { title: "Disclosure 304-2", targetId: "gri304-2" },
      { title: "Disclosure 304-3", targetId: "gri304-3" },
      { title: "Disclosure 304-4", targetId: "gri304-4" },

      { title: "GRI 305 Emissions", targetId: "gri305-emissions" },
      { title: "Disclosure 3-3", targetId: "disclosure-305-3-3" },
      { title: "Disclosure 305-1", targetId: "gri305-1" },
      { title: "Disclosure 305-2", targetId: "gri305-2" },
      { title: "Disclosure 305-3", targetId: "gri305-3" },
      { title: "Disclosure 305-4", targetId: "gri305-4" },
      { title: "Disclosure 305-5", targetId: "gri305-5" },
      { title: "Disclosure 305-6", targetId: "gri305-6" },
      { title: "Disclosure 305-7", targetId: "gri305-7" },

      { title: "GRI 306 Waste", targetId: "gri306-waste" },
      { title: "Disclosure 3-3", targetId: "disclosure-306-3-3" },
      { title: "Disclosure 306-1", targetId: "gri306-1" },
      { title: "Disclosure 306-2", targetId: "gri306-2" },
      { title: "Disclosure 306-3", targetId: "gri306-3" },
      { title: "Disclosure 306-4", targetId: "gri306-4" },
      { title: "Disclosure 306-5", targetId: "gri306-5" },

      {
        title: "GRI 308 Supplier Environmental Assessment",
        targetId: "gri308-supplier",
      },
      { title: "Disclosure 3-3", targetId: "disclosure-308-3-3" },
      { title: "Disclosure 308-1", targetId: "gri308-1" },
      { title: "Disclosure 308-2", targetId: "gri308-2" },
    ],
  },
  {
    title: "GRI 400",
    id: "gri400",
    children: [
      { title: "GRI 401 Employment", targetId: "gri401-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-401-3-3" },
      { title: "Disclosure 401-1", targetId: "disclosure-401-1" },
      { title: "Disclosure 401-2", targetId: "disclosure-401-2" },
      { title: "Disclosure 401-3", targetId: "disclosure-401-3" },

      { title: "GRI 402 Labor Management", targetId: "gri402-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-402-3-3" },
      { title: "Disclosure 402-1", targetId: "disclosure-402-1" },

      {
        title: "GRI 403 Occupational Health and Safety",
        targetId: "gri403-title",
      },
      { title: "Disclosure 3-3", targetId: "disclosure-403-3-3" },
      { title: "Disclosure 403-1", targetId: "disclosure-403-1" },
      { title: "Disclosure 403-2", targetId: "disclosure-403-2" },
      { title: "Disclosure 403-3", targetId: "disclosure-403-3" },
      { title: "Disclosure 403-4", targetId: "disclosure-403-4" },
      { title: "Disclosure 403-5", targetId: "disclosure-403-5" },
      { title: "Disclosure 403-6", targetId: "disclosure-403-6" },
      { title: "Disclosure 403-7", targetId: "disclosure-403-7" },
      { title: "Disclosure 403-8", targetId: "disclosure-403-8" },
      { title: "Disclosure 403-9", targetId: "disclosure-403-9" },
      { title: "Disclosure 403-10", targetId: "disclosure-403-10" },

      { title: "GRI 404 Training and Education", targetId: "gri404-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-404-3-3" },
      { title: "Disclosure 404-1", targetId: "disclosure-404-1" },
      { title: "Disclosure 404-2", targetId: "disclosure-404-2" },
      { title: "Disclosure 404-3", targetId: "disclosure-404-3" },

      { title: "GRI 405 Diversity & Inclusion", targetId: "gri405-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-405-3-3" },
      { title: "Disclosure 405-1", targetId: "disclosure-405-1" },
      { title: "Disclosure 405-2", targetId: "disclosure-405-2" },

      { title: "GRI 406 Non-discrimination", targetId: "gri406-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-406-3-3" },
      { title: "Disclosure 406-1", targetId: "disclosure-406-1" },

      { title: "GRI 407 Freedom of Association", targetId: "gri407-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-407-3-3" },
      { title: "Disclosure 407-1", targetId: "disclosure-407-1" },

      { title: "GRI 408 Child Labor", targetId: "gri408-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-408-3-3" },
      { title: "Disclosure 408-1", targetId: "disclosure-408-1" },

      { title: "GRI 409 Forced or Compulsory Labor", targetId: "gri409-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-409-3-3" },
      { title: "Disclosure 409-1", targetId: "disclosure-409-1" },

      { title: "GRI 410 Security Practices", targetId: "gri410-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-410-3-3" },
      { title: "Disclosure 410-1", targetId: "disclosure-410-1" },

      {
        title: "GRI 411 Rights of Indigenous Peoples",
        targetId: "gri411-title",
      },
      { title: "Disclosure 3-3", targetId: "disclosure-411-3-3" },
      { title: "Disclosure 411-1", targetId: "disclosure-411-1" },

      { title: "GRI 413 Local Communities", targetId: "gri413-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-413-3-3" },
      { title: "Disclosure 413-1", targetId: "disclosure-413-1" },
      { title: "Disclosure 413-2", targetId: "disclosure-413-2" },

      { title: "GRI 414 Supplier Social Assessment", targetId: "gri414-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-414-3-3" },
      { title: "Disclosure 414-1", targetId: "disclosure-414-1" },
      { title: "Disclosure 414-2", targetId: "disclosure-414-2" },

      { title: "GRI 415 Public Policy", targetId: "gri415-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-415-3-3" },
      { title: "Disclosure 415-1", targetId: "disclosure-415-1" },

      { title: "GRI 416 Customer Health and Safety", targetId: "gri416-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-416-3-3" },
      { title: "Disclosure 416-1", targetId: "disclosure-416-1" },
      { title: "Disclosure 416-2", targetId: "disclosure-416-2" },

      { title: "GRI 417 Marketing and Labeling", targetId: "gri417-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-417-3-3" },
      { title: "Disclosure 417-1", targetId: "disclosure-417-1" },
      { title: "Disclosure 417-2", targetId: "disclosure-417-2" },
      { title: "Disclosure 417-3", targetId: "disclosure-417-3" },

      { title: "GRI 418 Customer Privacy", targetId: "gri418-title" },
      { title: "Disclosure 3-3", targetId: "disclosure-418-3-3" },
      { title: "Disclosure 418-1", targetId: "disclosure-418-1" },
    ],
  },
];

function App() {
  const [loadingType, setLoadingType] = useState(null);
  const [selected, setSelected] = useState(principles[0]);
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
        const title = top.target.getAttribute("data-title");
        if (title) setSelected(title);
      }
    }, options);

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      sectionRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  const exportWord = () => {
    setLoadingType("word");
    setTimeout(() => {
      try {
        const element = document.getElementById("report-content");
        const html = element.outerHTML;
        const css = `
        <style>
          table { width:100%; border-collapse:collapse; }
          th, td { border:1px solid #333; padding:6px; }
        </style>`;
        const fullDoc = `<!DOCTYPE html><html><head><meta charset='utf-8'/>${css}</head><body>${html}</body></html>`;
        const blob = new Blob([fullDoc], {
          type: "application/msword;charset=utf-8",
        });
        saveAs(blob, "GRI_Report.doc");
      } catch (e) {
        console.error(e);
        alert("Word export failed");
      } finally {
        setLoadingType(null);
      }
    }, 100);
  };

  const exportPDF = async () => {
    setLoadingType("pdf");

    try {
      const content = document.getElementById("report-content");
      if (!content) throw new Error("Report content not found");

      const html = `
        <html>
          <head>
            <style>
              body { font-family: Arial; padding: 40px; }
              .page-break { page-break-before: always; }
              table { width: 100%; border-collapse: collapse; margin-top: 10px; }
              th, td { border: 1px solid #333; padding: 6px; text-align: left; }
              h2 { color: #2c3e50; }
            </style>
          </head>
          <body>
            ${content.innerHTML}
          </body>
        </html>
      `;

      const response = await fetch(
        "http://localhost:3001/report/download/pdf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ html }),
        }
      );

      if (!response.ok) throw new Error("PDF generation failed");

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "GRI_Report.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("PDF export failed", err);
      alert("PDF export failed");
    } finally {
      setLoadingType(null);
    }
  };

  return (
    <div className="brsr-report-container">
      <div className="sidebar">
        <h2 className="sidebar-title">BRSR Report Index</h2>
        <ScrollPanel className="sidebar-scroll">
          <ul className="principles-list">
            {principles.map((item) => (
              <li key={item.title}>
                <div
                  className={`principle-item ${
                    selected === item.title ? "selected" : ""
                  }`}
                  onClick={() => {
                    setSelected(item.title);
                    const idx = principles.indexOf(item.title);
                    if (idx !== -1) {
                      sectionRefs.current[idx]?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  {item.title}
                </div>
                {item.children && (
                  <ul style={{ marginLeft: "-1.3rem" }}>
                    {item.children.map((sub) => (
                      <li style={{ listStyle: "none" }} key={sub.title}>
                        <div
                          className="principle-item"
                          style={{ fontSize: "0.8rem" }}
                          onClick={() => {
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
        <div id="gri2">
          <GRI2 />
        </div>
        <div id="gri3">
          <GRI3 />
        </div>
        <div id="gri200">
          <GRI200 />
        </div>
        <div id="gri300">
          <GRI300 />
        </div>
        <div id="gri400">
          <GRI400 />
        </div>

        <div className="export-buttons" style={{ marginTop: "2rem" }}>
          <Button
            label={loadingType === "word" ? "Exporting Word..." : "Export Word"}
            icon="pi pi-file-word"
            onClick={exportWord}
            loading={loadingType === "word"}
            severity="info"
          />
          <Button
            label={loadingType === "pdf" ? "Exporting PDF..." : "Export PDF"}
            icon="pi pi-file-pdf"
            onClick={exportPDF}
            loading={loadingType === "pdf"}
            severity="danger"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
