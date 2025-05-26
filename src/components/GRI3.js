import React from "react";
import BoxTableComponent from "./boxTable";

const GRI3 = () => {
  return (
    <div style={{ minHeight: "80vh" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3 style={{ fontWeight: "bold" }} className="section-marker" id="gri3">
          GRI 3
        </h3>
        <h3
          style={{ fontWeight: "bold" }}
          className="section-marker"
          id="gri3-disclosures"
          data-title="2. Disclosures on material topics"
        >
          2. Disclosures on material topics
        </h3>
        <p
          className="section-marker"
          id="gri3-disclosure-3-1"
          data-title="Disclosure 3-1 Process to determine material topics"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 3-1 Process to determine material topics
        </p>

        <BoxTableComponent />
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p
          className="section-marker"
          id="gri3-disclosure-3-2"
          data-title="Disclosure 3-2 List of material topics"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 3-2 List of material topics
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "50%",
                }}
              >
                List of Material Topics
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Priority
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                &nbsp;
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                &nbsp;
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GRI3;
