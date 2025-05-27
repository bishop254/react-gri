import React from "react";
import BoxTableComponent from "./boxTable";
import { BoldLettersOnly } from "./BoldLetters";

const Governance = () => {
  return (
    <div style={{ minHeight: "80vh" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h2 style={{ fontWeight: "bold" }} className="section-marker" id="gri3">
          Governance
        </h2>
        <p
          className="section-marker"
          id="Governance-structure-and-composition"
          data-title="Disclosure 3-1 Process to determine material topics"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Governance structure and composition
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 2-9, ESRS 2 GOV-1_01, ESRS 2 GOV-1_02, ESRS 2 GOV-1_03, ESRS 2 GOV-1_04, ESRS 2 GOV-1_05, ESRS 2 GOV-1_06, ESRS 2 GOV-1_07, ESRS 2 GOV-1_08, ESRS 2 GOV-1_16, ESRS 2 GOV-1_17, ESRS 2 G1-5_11, GRI 2-10, GRI 2-11" />
        </small>
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
                List of Committees{" "}
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                &nbsp;{" "}
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
                  width: "50%",
                }}
              >
                Particulars
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Response
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "executive and non-executive members",
              "Independence",
              "tenure of members on the governance body",
              "number of other significant positions and commitments held by each member, and the nature of the commitments;",
              "gender",
              "under-represented social groups;",
              "competencies relevant to the impacts of the organization;",
              "stakeholder representation.",
            ].map((label, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}
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
          className="section-marker"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Management of material topics
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="ESRS 2 GOV-1_10,ESRS 2 GOV-2_01, ESRS 2 GOV-2_02, ESRS 2 SBM-2_12, S4-2_09,G1.GOV-1_012-13 ESRS 2 GOV-1_11 ,GOV-1_12,ESRS 2 GOV-2_01,G1-3_03,2-14 ESRS 2 IRO-1_11, GRI 2-17, ESRS 2 GOV-1_15, GRI 2-18 ,GRI 2-12" />
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
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Conflicts of interest{" "}
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 2-15" />
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
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Remuneration
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 2-19, ESRS 2 GOV-3_01,GOV-3_02,GOV-3_03,GOV-3_04, E1.GOV-3_01,E1.GOV-3_03,GRI 2-20, ESRS 2 GOV-3_06" />
        </small>

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p
          className="section-marker"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Annual total compensation ratio{" "}
        </p>{" "}
        <small className="section-ref">
          <BoldLettersOnly text="GRI 2-21, S1-16_02, S1-16_03" />
        </small>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
            marginTop: "1rem",
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
                ratio of the annual total compensation for the organization’s
                highest-paid individual to the median annual total compensation
                for all employees
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
          </tbody>
        </table>
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
                percentage increase in annual total compensation for the
                organization’s highest-paid individual to the median percentage
                increase in annual total compensation for all employees
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
        <h3
          class="section-marker"
          id="Strategy-policies-and-practices"
          style={{ fontWeight: "bold" }}
        >
          Strategy, policies and practices
        </h3>
        <p
          class="section-marker"
          style={{ fontWeight: "bold", color: "blue", margin: 0 }}
        >
          Statement on sustainable development strategy{" "}
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="ESRS 2 BP-2_23, ESRS 2 SBM-1_23, GRI 2-22" />
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
          style={{ fontWeight: "bold", color: "blue", margin: 0 }}
        >
          Policy commitments{" "}
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="S1-1_01-S1-1_04, S1-1_07, S1-1_12, S1-1_14, S2-1_01, S2-1_08, S2-1_11, S3-1_02, S3-1_06, S3-1_09, S4-1_01, S4-1_02, S4-1_06, S4-1_09, G1-1_01, GRI 2-24, ESRS 2 GOV-2_02, S1-4_14, S2-4_13, S3-4_13, S4-4_13, G1-1_01, G1-1_10, GRI 2-23" />
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
          style={{ fontWeight: "bold", color: "blue", margin: 0 }}
        >
          Grievance Redressal{" "}
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="S1-1_06, S1-1_21, S1-3_01 to S1-3_09, S1-17_03, S2-3_01 to S2-3_06, S2-3_11, S2-3_12, S2-1_04, S2-4_07, S3-1_05, S3-3_10 to S3-3_21, S3-4_07, S4-3_01, S4-3_02, S4-3_03, S4-1_05, S4-3_05, S4-3_06, S4-3_09, S4-3_11, S4-3_12, S4-4_07, GRI 2-26, S1-3_07, S2-3_04, S3-3_13, S4-3_04, G1-1_02, G1-1_05, G1-1_13, G1-1_14, G1-3_01, GRI 2-25" />
        </small>

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p
          className="section-marker"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Compliance with laws and regulations
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="ESRS 2 SBM-3_08, S1-17_05, S1-17_07, S1-17_11, GRI 2-27" />
        </small>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
            marginTop: "1rem",
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
                the total number of significant instances of non-compliance with
                laws and regulations during the reporting period,
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Number of instances for which fines were incurred;
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Number of instances for which non-monetary sanctions were
                incurred;
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
          </tbody>
        </table>

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
                total number and the monetary value of fines for instances of
                noncompliance with laws and regulations that were paid during
                the reporting period
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Number of instances for fines for instances of non-compliance
                with laws and regulations that occurred in the current reporting
                period;
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Number of instances for fines for instances of non-compliance
                with laws and regulations that occurred in previous reporting
                periods;
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
          style={{ fontWeight: "bold", color: "blue", margin: 0 }}
        >
          Membership associations{" "}
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 2-28" />
        </small>

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p
          className="section-marker"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Collective bargaining agreements
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="TR-AU-310a, GRI 2-30, S1-8_01, S1-8_02, S1-8_03, S1-8_04, S1-8_08" />
        </small>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
            marginTop: "1rem",
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
                Percentage of total employees covered by collective bargaining
                agreements;
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Number of work stoppages
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Total days idle
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
          </tbody>
        </table>

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p
          className="section-marker"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Economic Performance
        </p>
        <h3
          class="section-marker"
          id="Economic-Performance"
          style={{ fontWeight: "bold" }}
        >
          Economic Performance
        </h3>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 201, G1-6_01 to G1-6_05, GRI 201-1, ESRS 2 SBM-1_06" />
        </small>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
            marginTop: "1rem",
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
                  width: "60%",
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
                FY20xx–20xx (INR Million)
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Economic Value Generated",
              "Net revenue",
              "Operating Cost",
              "Employee wages and benefits",
              "Spent on Employee benefit",
              "Payments to the providers of capital",
              "% of net profit contributed to the community",
              "The amount contributed to the Community",
              "Amount of Payments to the government in the form of Tax",
              "Economic value distributed",
              "Economic value retained",
            ].map((label, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Governance;
