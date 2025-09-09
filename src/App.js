import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Button } from "primereact/button";
import { ScrollPanel } from "primereact/scrollpanel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import { saveAs } from "file-saver";

import Module_1_2_Perf from "./components/Module1_2/Module_1_2_Perf";
import Module_1_2_Qual from "./components/Module1_2/Module_1_2_Qual";
import Module_1_2_Quan from "./components/Module1_2/Module_1_2_Quan";
import Module_3_6_Perf from "./components/Module3_6/Module_3_6_Perf";
import Module_3_6_Qual from "./components/Module3_6/Module_3_6_Qual";
import Module_3_6_Quan from "./components/Module3_6/Module_3_6_Quan";
import Module_8_13_Quan from "./components/Module8_13/Module_8_13_Quan";
import Module_8_13_Qual from "./components/Module8_13/Module_8_13_Qual";
import Module_8_13_Perf from "./components/Module8_13/Module_8_13_Perf";

const principles = [
  {
    title: "Module 1 & 2",
    id: "mod-1-2",
    children: [
      {
        title: "Module 1 - Performance",
        targetId: "mod-1-perf",
      },
      {
        title: "Module 2 - Performance",
        targetId: "mod-2-perf",
      },
      {
        title: "Module 1 - Qualitative",
        targetId: "mod-1-qual",
      },
      {
        title: "Module 2 - Qualitative",
        targetId: "mod-2-qual",
      },
      {
        title: "Module 1 & 2 - Quantitative",
        targetId: "mod-1-2-quant",
      },
    ],
  },
  {
    title: "Module 3 - 6",
    id: "mod-3-6",
    children: [
      {
        title: "Disclosure of risks and opportunities",
        targetId: "mod-3-perf",
      },
      {
        title: "Governance",
        targetId: "mod-4-perf",
      },
      {
        title: "Business Strategy",
        targetId: "mod-5-perf",
      },
      {
        title: "Environmental Performance – Consolidation Approach",
        targetId: "mod-6-perf",
      },
      {
        title: "Module 3 - Qualitative",
        targetId: "mod-3-qual",
      },
      {
        title: "Module 4 - Qualitative",
        targetId: "mod-4-qual",
      },
      {
        title: "Module 5 - Qualitative",
        targetId: "mod-5-qual",
      },
      {
        title: "Module 6 - Qualitative",
        targetId: "mod-6-qual",
      },
      {
        title: "Module 3 to 6 - Quantitative",
        targetId: "mod-3-6-quan",
      },
    ],
  },
  {
    title: "Module 8 - 13",
    id: "mod-8-13",
    children: [
      {
        title: "Environmental Performance - Forests, plastic, water",
        targetId: "mod-8-perf",
      },
      {
        title: "Environmental Performance – Water security",
        targetId: "mod-9-perf",
      },
      {
        title: " Environmental Performance – Plastics",
        targetId: "mod-10-perf",
      },
      {
        title: "Module 8 - Qualitative",
        targetId: "mod-8-qual",
      },
      {
        title: "Module 9 - Qualitative",
        targetId: "mod-9-qual",
      },
      {
        title: "Module 10 - Qualitative",
        targetId: "mod-10-qual",
      },
      {
        title: "Module 8 to 13 - Quantitative",
        targetId: "mod-8-13-quan",
      },
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

  const exportWord = () => {
    setLoadingType("word");
    setTimeout(() => {
      try {
        const element = document.getElementById("report-content");
        const html = element?.outerHTML || "";

        const css = `
          <style>
            body { font-family: Arial; margin: 0; padding: 0; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #333; padding: 0px; text-align: left; }
            h1, h2 { color: #2c3e50; margin: 20px; }
          </style>`;

        const coverPage = `
          <img 
            src="${window.location.origin}/coverPage.jpg" 
            alt="Cover"
          />
          <br style="page-break-before: always;">`;

        const tocHtml = generateTocList(principles);
        const tocPage = `
          <div style="padding: 40px;">
            <h2>Table of Contents</h2>
            ${tocHtml}
          </div>
          <br style="page-break-before: always;">`;

        const fullDoc = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset='utf-8'/>
              ${css}
            </head>
            <body>
              ${coverPage}
              ${tocPage}
              <div style="padding: 40px;">
                ${html}
              </div>
            </body>
          </html>`;

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
        <h2 className="sidebar-title">CDP Report Index</h2>
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
        <div id="mod-1-2">
          <Module_1_2_Perf />
          <br />
          <Module_1_2_Qual />
          <br />
          <Module_1_2_Quan />
        </div>

        <div id="mod-3-6">
          <Module_3_6_Perf />
          <br />
          <Module_3_6_Qual />
          <br />
          <Module_3_6_Quan />
        </div>

        <div id="mod-8-13">
          <Module_8_13_Perf />
          <br />
          <Module_8_13_Qual />
          <br />
          <Module_8_13_Quan />
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
