import React from "react";
import BoxTableComponent from "./boxTable";
import { BoldLettersOnly } from "./BoldLetters";

const GRI3 = () => {
  return (
    <div style={{ minHeight: "80vh" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h2 style={{ fontWeight: "bold" }} className="section-marker" id="gri3">
          Materiality Assessment
        </h2>
        <p
          className="section-marker"
          id="gri3-disclosure-3-1"
          data-title="Disclosure 3-1 Process to determine material topics"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Process to determine material topics
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 3-1, ESRS 2, BP-1_04, IRO-1_14" />
        </small>

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
          List of material topics
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 3-2, ESRS 2 BP-2_21, ESRS 2 BP-2_22, ESRS 2 SBM-3_01, SBM-3_04, SBM-3_07, SBM-3_11" />
        </small>

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
