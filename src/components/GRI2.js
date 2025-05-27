import React from "react";
import BoxTableComponent from "./boxTable";
import { BoldLettersOnly } from "./BoldLetters";

const GRI2 = () => {
  return (
    <div style={{ minHeight: "80vh", fontFamily: "Lato, sans-serif" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3
          class="section-marker"
          id="gri2-org-reporting"
          style={{ fontWeight: "bold" }}
        >
          The organization and its reporting practices
        </h3>
        <p
          class="section-marker"
          id="Organizational-details"
          style={{ fontWeight: "bold", color: "blue", margin: 0 }}
        >
          Organizational details
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 2-1" />
        </small>
        <p style={{ fontWeight: "normal", marginBottom: "1rem" }}>
          The organization shall:
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
                Particulars
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Response
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                report its legal name
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                report its nature of ownership and legal form
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  textDecoration: "underline",
                }}
              >
                report the location of its headquarters
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                report its countries of operation
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
          </tbody>
        </table>
        <p
          style={{
            fontStyle: "italic",
            fontSize: "0.85rem",
            marginTop: "4px",
          }}
        >
          Table 1: The following table outlines the missing submissions and
          entities that were expected to contribute to this report.
        </p>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p
          class="section-marker"
          id="gri2-disclosure-2-2"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 2-2 Entities included in the organization’s sustainability
          reporting
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 2-2, ESRS 1 5.1, ESRS 2, BP-1" />
        </small>
        <p style={{ fontWeight: "normal", marginBottom: "1rem" }}>
          The organization shall:
        </p>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
            marginBottom: "2rem",
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
                Particulars
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Response
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                List all the entities included in its sustainability reporting
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Frameworks considered for reporting
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
          </tbody>
        </table>

        <BoxTableComponent />
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p
          class="section-marker"
          id="gri2-disclosure-2-3"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Reporting period, frequency and contact point
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 2-3, ESRS 1 73" />
        </small>
        <p style={{ fontWeight: "normal", marginBottom: "1rem" }}>
          The organization shall:
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
                Particular
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Response
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Reporting period
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Frequency of reporting
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Financial reporting year
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                The report is published on
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                In case of any feedback or any queries,
                <br />
                stakeholders can contact :
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p
          class="section-marker"
          id="gri2-disclosure-2-4"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Restatements of information
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 2-3, ESRS 1 73" />
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
          class="section-marker"
          id="gri2-disclosure-2-5"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          External assurance
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 2-5" />
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
          class="section-marker"
          id="gri2-disclosure-2-6"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Activities and workers
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 2-6, ESRS 2, SBM-1 40, SBM-1_01, SBM-1_01, SBM-1_05, SBM-1_07, SBM-1_08, SBM-1_09, SBM-1_15, SBM-1_16, SBM-1_17, SBM-1_18, SBM-1_19, SBM-1_25, SBM-1_28" />
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
          class="section-marker"
          id="gri2-disclosure-2-7"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Workforce
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 2-7, ESRS 2 SBM-1 40, SBM-1_03, SBM-1_04, ESRS S1 S1-6 50, 51 to 52, S1-6_01 to S1-6_10, S1-6_13 to S1-6_20, S2-4_01 to S2-5_06, GRI 2-8, S1-7_01 to S1-7_10, S2-4_01 to S2-5_06" />
        </small>
        <p style={{ fontWeight: "normal", marginBottom: "1rem" }}>
          The organization shall:
        </p>
        <p style={{ fontWeight: "normal", marginBottom: "1rem" }}>
          Total number of employees gender-wise
        </p>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
            marginBottom: "2rem",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Employee Category
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Male
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Female
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Number of employees (head count / FTE)",
              "Permanent employees (head count / FTE)",
              "Temporary employees (head count / FTE)",
              "Non-guaranteed hours employees (head count / FTE)",
              "Full-time employees (head count / FTE)",
              "Part-time Employees (head count / FTE)",
            ].map((label, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}
          </tbody>
        </table>

        <p style={{ fontWeight: "normal", marginBottom: "1rem" }}>
          Total number of employees region-wise
        </p>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
            marginBottom: "2rem",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Employee Category
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Region 1
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Region 2
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Number of employees (head count / FTE)",
              "Permanent employees (head count / FTE)",
              "Temporary employees (head count / FTE)",
              "Non-guaranteed hours employees (head count / FTE)",
              "Full-time employees (head count / FTE)",
              "Part-time Employees (head count / FTE)",
            ].map((label, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}
          </tbody>
        </table>

        <BoxTableComponent />
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3
          class="section-marker"
          id="gri2-stakeholder-engagement"
          style={{ fontWeight: "bold" }}
        >
          Stakeholder engagement
        </h3>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 2-29, ESRS 2 SBM-2_01, SBM-2_02, SBM-2_03, SBM-2_04, SBM-2_05, SBM-2_06, S1-1_05, S1-2_02, S1-2_03, S1-2_06, S1-2_07, S1-2_10, S1-2_11, S1-2_12, S1-2_14, S2-1_03, S2-2_02, S2-2_03, S2-2_06, S2-2_07, S2-3_09, S3-1_04, S3-2_02, S3-2_03, S3-2_05, S3-2_06" />
        </small>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "none",
            borderBottom: "1px solid blue",
            marginBottom: "40px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "none",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "30%",
                  color: "blue",
                }}
              >
                Stakeholder
              </th>
              <th
                style={{
                  border: "none",
                  padding: "8px",
                  fontWeight: "bold",
                  color: "blue",
                }}
              >
                Process
              </th>
              <th
                style={{
                  border: "none",
                  padding: "8px",
                  fontWeight: "bold",
                  color: "blue",
                }}
              >
                Objective
              </th>
              <th
                style={{
                  border: "none",
                  padding: "8px",
                  fontWeight: "bold",
                  color: "blue",
                }}
              >
                Frequency
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "none", padding: "8px" }}>&nbsp;</td>
              <td style={{ border: "none", padding: "8px" }}>&nbsp;</td>
              <td style={{ border: "none", padding: "8px" }}>&nbsp;</td>
              <td style={{ border: "none", padding: "8px" }}>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GRI2;
