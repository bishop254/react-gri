import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Button } from "primereact/button";
import { ScrollPanel } from "primereact/scrollpanel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import { saveAs } from "file-saver";

import GRI2 from "./components/GRI2";
import GRI3 from "./components/GRI3";

import { principles } from "./components/principles";
import Governance from "./components/Governance";
import Environment from "./components/Environment";
import Social from "./components/Social";

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

  const generateTocList = (items) => {
    return `<ol>${items
      .map((item) => {
        const childrenList = item.children
          ? `<ul>${item.children
              .map(
                (child) =>
                  `<li style="list-style: none; font-size: 0.9rem;">${child.title}</li>`
              )
              .join("")}</ul>`
          : "";
        return `<li><strong>${item.title}</strong>${childrenList}</li>`;
      })
      .join("")}</ol>`;
  };

  const exportWord = async () => {
    setLoadingType("word");

    try {
      const response = await fetch(
        "http://127.0.0.1:3001/report/download/word",
        {
          method: "POST",
          headers: {
            Accept:
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate Word document");
      }

      const blob = await response.blob();
      saveAs(blob, "GRI_Report.docx");
    } catch (error) {
      console.error(error);
      alert("Word export failed");
    } finally {
      setLoadingType(null);
    }
  };

  const exportPDF = async () => {
    setLoadingType("pdf");

    try {
      const content = document.getElementById("report-content");
      if (!content) throw new Error("Report content not found");

      const coverPage = `
        <table style="width: 100%; height: 100%; border: none; margin: -1cm; padding: 0;">
          <tr>
            <td style="border: none; margin: 0; padding: 0;">
              <img 
                src="${window.location.origin}/coverPage.jpg" 
                alt="Cover" 
                style="width: 22cm; height: 31cm; display: block; border: none; margin: 0; padding: 0;" 
              />
            </td>
          </tr>
        </table>
        <br style="page-break-before: always;">`;

      const tocHtml = generateTocList(principles);
      const tocPage = `
        <div style="padding: 40px;">
          <h2>Table of Contents</h2>
          ${tocHtml}
        </div>
        <br style="page-break-before: always;">`;

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
            ${coverPage}
            ${tocPage}
            ${content.innerHTML}
          </body>
        </html>
      `;

      const response = await fetch(
        "http://127.0.0.1:3001/report/download/pdf",
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
        <h2 className="sidebar-title">GRI Report Index</h2>
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
        <div id="governance">
          <Governance />
        </div>
        <div id="Environment">
          <Environment />
        </div>
        <div id="Social">
          <Social />
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
