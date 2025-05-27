import React from "react";
import BoxTableComponent from "./boxTable";
import { BoldLettersOnly } from "./BoldLetters";

const Social = () => {
  return (
    <div style={{ minHeight: "80vh" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h2
          style={{ fontWeight: "bold" }}
          className="section-marker"
          id="Social"
        >
          Social
        </h2>
        <p
          className="section-marker"
          id="Employment"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Employment
        </p>

        <small className="section-ref">
          <BoldLettersOnly text="GRI 401-1, S1-6_11, S1-6_12" />
        </small>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "center",
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        >
          <thead>
            <tr>
              <th
                rowSpan={2}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                401-1 New Employee hire
              </th>
              <th
                colSpan={3}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Male
              </th>
              <th
                colSpan={3}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Female
              </th>
            </tr>
            <tr>
              {[
                "Under 30 Years",
                "30-50 Years",
                "Above 50 Years",
                "Under 30 Years",
                "30-50 Years",
                "Above 50 Years",
              ].map((label, idx) => (
                <th
                  key={idx}
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    fontWeight: "bold",
                  }}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {["Permanent employees", "Temporary employees"].map((type, idx) => (
              <tr key={idx}>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {type}
                </td>
                {Array(6)
                  .fill("")
                  .map((_, i) => (
                    <td
                      key={i}
                      style={{ border: "1px solid black", padding: "8px" }}
                    ></td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <thead>
            <tr>
              <th
                rowSpan={2}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                401-1 Number of employees left the organization
              </th>
              <th
                colSpan={3}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Male
              </th>
              <th
                colSpan={3}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Female
              </th>
            </tr>
            <tr>
              {[
                "Under 30 Years",
                "30-50 Years",
                "Above 50 Years",
                "Under 30 Years",
                "30-50 Years",
                "Above 50 Years",
              ].map((label, idx) => (
                <th
                  key={idx}
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    fontWeight: "bold",
                  }}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {["Permanent employees", "Temporary employees"].map((type, idx) => (
              <tr key={idx}>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "left",
                  }}
                >
                  {type}
                </td>
                {Array(6)
                  .fill("")
                  .map((_, i) => (
                    <td
                      key={i}
                      style={{ border: "1px solid black", padding: "8px" }}
                    ></td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p
          className="section-marker"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Benefits provided to workforce
        </p>

        <small className="section-ref">
          <BoldLettersOnly text="S1-11_01 to S1-11_11, GRI 401-2" />
        </small>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        >
          <thead>
            <tr>
              <th
                rowSpan={2}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  verticalAlign: "middle",
                  width: "40%",
                }}
              >
                Number of employees receiving benefits
              </th>
              <th
                colSpan={2}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Full-time Employee
              </th>
            </tr>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Male
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Female
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Life insurance",
              "Health care",
              "Disability and invalidity coverage",
              "Parental leave",
              "Retirement provision",
              "Stock ownership",
              "Other",
            ].map((benefit, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {benefit}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}
          </tbody>
        </table>

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p
          className="section-marker"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Parental leave
        </p>

        <small className="section-ref">
          <BoldLettersOnly text="S1-15_01 to S1-15_03, GRI 401-3" />
        </small>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        >
          <thead>
            <tr>
              <th
                rowSpan={2}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "40%",
                }}
              >
                Number of employees
              </th>
              <th
                colSpan={2}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Employee Category
              </th>
            </tr>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Male
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Female
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Number of employees that were entitled to parental leave",
              "Number of employees that took parental leave",
              "Number of employees that returned to work in the reporting period after parental leave ended",
              "Total number of employees that returned to work after parental leave ended that were still employed 12 months after their return to work",
              "Return to work and retention rates of employees that took parental leave",
            ].map((label, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}
          </tbody>
        </table>

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p
          className="section-marker"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Occupational Health and Safety
        </p>

        <small className="section-ref">
          <BoldLettersOnly text="GRI 403-1, GRI 403-8, S1-14_01, S1-14_10, S1-14_11, S2-1_05, S2.SBM-3_04" />
        </small>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
                  width: "40%",
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
                Number
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Percentage
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Number of employees covered under OHS system", "", ""],
              ["Number of workers covered under OHS system", "", ""],
              [
                "Number of employees who are covered by such a system that has been internally audited",
                "",
                "",
              ],
              [
                "Number of workers who are covered by such a system that has been internally audited",
                "",
                "",
              ],
              [
                "Number of employees who are covered by such a system that has been audited or certified by an external party",
                "",
                "",
              ],
              [
                "Number of workers who are covered by such a system that has been audited or certified by an external party",
                "",
                "",
              ],
              [
                "Number of internal review/inspections carried out for compliance with occupational health and safety",
                "",
                "",
              ],
              [
                "Number of external review/inspections (third-party audits) carried out for compliance with occupational health and safety",
                "",
                "X",
              ],
            ].map(([particular, number, percent], idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {particular}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {number}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {percent}
                </td>
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
        <p class="section-marker" style={{ fontWeight: "bold", color: "blue" }}>
          Hazard identification, risk assessment, and incident investigation
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="S1-3_02, S1-3_09, GRI 403-2" />
        </small>

        <BoxTableComponent />
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p class="section-marker" style={{ fontWeight: "bold", color: "blue" }}>
          Occupational health services
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="S1-1_18, GRI 403-3, GRI 403-6" />
        </small>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
                  width: "40%",
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
                Data
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Number of health checkups carried out for workers",
              "Number of health checkup programs conducted for workers",
            ].map((text, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {text}
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
        <p class="section-marker" style={{ fontWeight: "bold", color: "blue" }}>
          Worker training
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 403-5" />
        </small>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
                  width: "40%",
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
              ></th>
            </tr>
          </thead>
          <tbody>
            {[
              "Number of trainings provided to workers on occupational health and safety",
              "Number of trainings provided to volunteers on occupational health and safety",
            ].map((label, idx) => (
              <tr key={idx}>
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
        <p class="section-marker" style={{ fontWeight: "bold", color: "blue" }}>
          Prevention and mitigation of occupational health and safety impacts
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="S2-4_01, GRI 403-7" />
        </small>

        <BoxTableComponent />
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p class="section-marker" style={{ fontWeight: "bold", color: "blue" }}>
          Work-related injuries
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="S1-4_01, S1-14_02, S1-14_03, S1-14_04, S1-14_05, S1-14_07, S1-14_09, S2-1_05, S2.SBM-3_04, GRI 403-9" />
        </small>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        >
          <thead>
            <tr>
              <th
                colSpan={2}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  backgroundColor: "#f2f2f2",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                For Full-time Employees
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "The number and rate of fatalities as a result of work-related injury",
              "The number and rate of high-consequence work-related injuries (excluding fatalities)",
              "The number and rate of recordable work-related injuries",
              "The main types of work-related injury",
              "The number of hours worked",
            ].map((item, idx) => (
              <tr key={`emp-${idx}`}>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    width: "40%",
                  }}
                >
                  {item}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}

            <tr>
              <th
                colSpan={2}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  backgroundColor: "#f2f2f2",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                For Workers
              </th>
            </tr>
            {[
              "The number and rate of fatalities as a result of work-related injury",
              "The number and rate of high-consequence work-related injuries (excluding fatalities)",
              "The number and rate of recordable work-related injuries",
              "The main types of work-related injury",
              "The number of hours worked",
            ].map((item, idx) => (
              <tr key={`wrk-${idx}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}
          </tbody>
        </table>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
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
                  width: "40%",
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
                Calculated values
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Rate of fatalities as a result of work-related injury",
              "Rate of recordable work-related injuries",
              "Rate of high-consequence work-related injuries",
            ].map((text, idx) => (
              <tr key={`summary-${idx}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {text}
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
        <p class="section-marker" style={{ fontWeight: "bold", color: "blue" }}>
          Work-related ill health
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="S1-4_01, S1-14_02, S1-14_03, S1-14_06, S1-14_08, S1-14_12, GRI 403-10" />
        </small>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        >
          <thead>
            <tr>
              <th
                colSpan={2}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  backgroundColor: "#f2f2f2",
                  textAlign: "left",
                }}
              >
                For Full-time Employees
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "The number of fatalities as a result of work-related ill health",
              "The number of cases of recordable work-related ill health",
              "The main types of work-related ill health",
            ].map((label, idx) => (
              <tr key={`emp-${idx}`}>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    width: "40%",
                  }}
                >
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}

            <tr>
              <th
                colSpan={2}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  backgroundColor: "#f2f2f2",
                  textAlign: "left",
                }}
              >
                For Workers
              </th>
            </tr>
            {[
              "The number of fatalities as a result of work-related ill health",
              "The number of cases of recordable work-related ill health",
              "The main types of work-related ill health",
            ].map((label, idx) => (
              <tr key={`wrk-${idx}`}>
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
        <h3
          class="section-marker"
          id="Training-and-Education"
          style={{ fontWeight: "bold" }}
        >
          Training and Education
        </h3>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 404-1, S1-13_03 to S1-13_06" />
        </small>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
                  width: "40%",
                }}
              >
                Average hours of training
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Male
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Female
              </th>
            </tr>
          </thead>
          <tbody>
            {["Permanent employees", "Temporary employees"].map((type, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {type}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
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
        <p class="section-marker" style={{ fontWeight: "bold", color: "blue" }}>
          Human capital development
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="S1-1_22, GRI 404-2" />
        </small>

        <BoxTableComponent />
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p class="section-marker" style={{ fontWeight: "bold", color: "blue" }}>
          Career development programs
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="S1-13_01, S1-13_02, S1-13_05, S1-13_06, GRI 404-3" />
        </small>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
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
                  width: "40%",
                }}
              >
                % of total employees who received a regular performance and
                career development review
              </th>

              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Male
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Female
              </th>
            </tr>
            <tr>
              <th
                colSpan={3}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                Permanent employees
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Senior Management",
              "Middle Management",
              "Entry-Level Employees",
            ].map((role, idx) => (
              <tr key={`perm-${idx}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {role}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}
          </tbody>
        </table>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
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
                  width: "40%",
                }}
              >
                % of total employees who received a regular performance and
                career development review
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Male
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Female
              </th>
            </tr>
            <tr>
              <th
                colSpan={3}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                Temporary Employees
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Senior Management",
              "Middle Management",
              "Entry-Level Employees",
            ].map((role, idx) => (
              <tr key={`temp-${idx}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {role}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
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
        <h3
          class="section-marker"
          id="Diversity-Inclusion"
          style={{ fontWeight: "bold" }}
        >
          Diversity & Inclusion
        </h3>
        <small className="section-ref">
          <BoldLettersOnly text="S2.SBM-3_01 to S2.SBM-3_09, GRI 405-1, ESRS 2 GOV-1_05, GOV-1_06, S1-6_01 to S1-6_03, S1-9_01 to S1-9_05, S1-12_01" />
        </small>

        <p style={{ fontWeight: "normal" }}>
          Percentage of individuals within the organization’s governance bodies
        </p>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            marginBottom: "2rem",
          }}
        >
          <thead>
            <tr>
              <th
                rowSpan={2}
                style={{ border: "1px solid black", padding: "8px" }}
              >
                Employee Category
              </th>
              <th
                colSpan={3}
                style={{ border: "1px solid black", padding: "8px" }}
              >
                Male
              </th>
              <th
                colSpan={3}
                style={{ border: "1px solid black", padding: "8px" }}
              >
                Female
              </th>
            </tr>
            <tr>
              {[
                "under 30 years old",
                "30-50 years old",
                "over 50 years old",
              ].map((label, idx) => (
                <th
                  key={`m-${idx}`}
                  style={{ border: "1px solid black", padding: "8px" }}
                >
                  {label}
                </th>
              ))}
              {[
                "under 30 years old",
                "30-50 years old",
                "over 50 years old",
              ].map((label, idx) => (
                <th
                  key={`f-${idx}`}
                  style={{ border: "1px solid black", padding: "8px" }}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              "Senior Management",
              "Middle Management",
              "Entry-level Employees",
            ].map((role, idx) => (
              <tr key={`gov-${idx}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {role}
                </td>
                {Array.from({ length: 6 }).map((_, i) => (
                  <td
                    key={i}
                    style={{ border: "1px solid black", padding: "8px" }}
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <p style={{ fontWeight: "normal" }}>
          Percentage of employees per employee category
        </p>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            marginBottom: "2rem",
          }}
        >
          <thead>
            <tr>
              <th
                rowSpan={2}
                style={{ border: "1px solid black", padding: "8px" }}
              >
                Employee Category
              </th>
              <th
                colSpan={3}
                style={{ border: "1px solid black", padding: "8px" }}
              >
                Male
              </th>
              <th
                colSpan={3}
                style={{ border: "1px solid black", padding: "8px" }}
              >
                Female
              </th>
            </tr>
            <tr>
              {[
                "under 30 years old",
                "30-50 years old",
                "over 50 years old",
              ].map((label, idx) => (
                <th
                  key={`em-${idx}`}
                  style={{ border: "1px solid black", padding: "8px" }}
                >
                  {label}
                </th>
              ))}
              {[
                "under 30 years old",
                "30-50 years old",
                "over 50 years old",
              ].map((label, idx) => (
                <th
                  key={`ef-${idx}`}
                  style={{ border: "1px solid black", padding: "8px" }}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {["Permanent Employees", "Temporary Employees", "Workers"].map(
              (category, idx) => (
                <tr key={`cat-${idx}`}>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {category}
                  </td>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <td
                      key={i}
                      style={{ border: "1px solid black", padding: "8px" }}
                    ></td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p class="section-marker" style={{ fontWeight: "bold", color: "blue" }}>
          Basic salary and remuneration
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="S1-16_01, S1-16_04, S1-16_05, GRI 405-2" />
        </small>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        >
          <thead>
            <tr>
              <th
                colSpan={3}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Ratio of the basic salary and remuneration of women to men
              </th>
            </tr>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "40%",
                }}
              >
                Employee Category
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Male
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Female
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Senior Management",
              "Middle Management",
              "Entry-level employees",
            ].map((category, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {category}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
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
        <p class="section-marker" style={{ fontWeight: "bold", color: "blue" }}>
          Non-discrimination
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 406-1, S1-17_01, S1-17_02, S1-17_13" />
        </small>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
                  width: "40%",
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
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Total number of incidents of discrimination during the reporting
                period.
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
        <h3
          class="section-marker"
          id="Human-Rights"
          style={{ fontWeight: "bold" }}
        >
          Human Rights
        </h3>

        <p style={{ fontWeight: "bold", color: "blue", margin: 0 }}>
          Freedom of Association and Collective Bargaining
        </p>

        <small className="section-ref">
          <BoldLettersOnly text="GRI 407-1" />
        </small>

        <BoxTableComponent />
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p class="section-marker" style={{ fontWeight: "bold", color: "blue" }}>
          Child Labor
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="S1.SBM-3_01 to S1.SBM-3_06, S1-1_06, S1-1_08, S1-1_10, S1-1_13, S2-2_01, GRI 408-1, S1.SBM-3_09, S1.SBM-3_10, S1-1_08, S2-1_07, S2-1_09" />
        </small>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
                  width: "40%",
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
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Number of incidences of child labor
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
        <p class="section-marker" style={{ fontWeight: "bold", color: "blue" }}>
          Forced or Compulsory Labor
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="S1.SBM-3_01 to S1.SBM-3_06, S1-1_06, S1-1_08, S1-1_10, S1-1_13, S2-2_01, S2-1_07, S2-1_09, GRI 409-1, S1.SBM-3_07, S1.SBM-3_08, S1-1_08" />
        </small>

        <BoxTableComponent />
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p class="section-marker" style={{ fontWeight: "bold", color: "blue" }}>
          Rights of Indigenous Peoples
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="S3-1_03, S3-1_07, S3-1_08, S3-2_04, S3-2_07, S3-2_01, GRI 411-1, S3-4_02, S3-4_06, S3-4_11, S3.MDR-A_01-12, S3-1_05" />
        </small>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
                  width: "40%",
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
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Total number of identified incidents of violations involving the
                rights of indigenous peoples
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
        <h3
          class="section-marker"
          id="Security-Practices"
          style={{ fontWeight: "bold" }}
        >
          Security Practices
        </h3>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 410-1" />
        </small>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
                  width: "40%",
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
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Percentage of security personnel who have received formal
                training in the organization’s human rights policies or specific
                procedures and their application to security.
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
          id="Local-Communities"
          style={{ fontWeight: "bold" }}
        >
          Local Communities
        </h3>
        <small className="section-ref">
          <BoldLettersOnly text="S3.SBM-3_01 to S3.SBM-3_08, S3-3_19, S3-4_08, S3-4_09, S3-4_14, S3-4_16, S3-5_01, S3-5_04, S3-5_05, S3-2_09, S3-3_16, S3-3_17, S3-4_01 to S3-4_19, S3-5_02, S3-5_03, S3-5_06, GRI 413-1, S3-3_11, S3-2_06, S3-4_17, GRI 413-2, ESRS 2, SBM-3_04, SBM-3_07, SBM-3_04" />
        </small>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
                  width: "40%",
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
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Percentage of security personnel who have received formal
                training in the organization’s human rights policies or specific
                procedures and their application to security.
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
          id="Impact-on-Customers"
          style={{ fontWeight: "bold" }}
        >
          Impact on Customers
        </h3>
        <small className="section-ref">
          <BoldLettersOnly text="S4-2_01 to S4-2_09, S4-3_10, S4-3_13, S4-4_01 to S4-4_18, S4-5_01 to S4-5_06, GRI 416-1, GRI 416-2, S4-4_11" />
        </small>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
            marginTop: "1rem",
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
                Percentage of significant product and service categories for
                which health and safety impacts are assessed for improvement
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
                Total number of incidents of non-compliance with regulations
                and/or voluntary codes concerning the health and safety impacts
                of products and services
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                incidents of non-compliance with regulations resulting in a fine
                or penalty
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                incidents of non-compliance with regulations resulting in a
                warning
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                incidents of non-compliance with voluntary codes
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
          id="Product-service-quality"
          style={{ fontWeight: "bold" }}
        >
          Product & service quality
        </h3>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 417-1, GRI 417-2, S4-4_11, GRI 417-3, S4-4_11, TR-AU-250a1" />
        </small>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            border: "1px solid black",
            marginTop: "1rem",
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
                Percentage of significant product or service categories covered
                by and assessed for compliance with such procedures
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
                Total number of incidents of non-compliance with regulations
                and/or voluntary codes concerning product and service
                information and labeling
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
            {[
              "incidents of non-compliance with regulations resulting in a fine or penalty",
              "incidents of non-compliance with regulations resulting in a warning",
              "incidents of non-compliance with voluntary codes",
            ].map((item, index) => (
              <tr key={`info-${index}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}
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
                Total number of incidents of non-compliance with regulations
                and/or voluntary codes concerning marketing communications,
                including advertising, promotion, and sponsorship
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
            {[
              "incidents of non-compliance with regulations resulting in a fine or penalty",
              "incidents of non-compliance with regulations resulting in a warning",
              "incidents of non-compliance with voluntary codes",
            ].map((item, index) => (
              <tr key={`marketing-${index}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}
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
                Metric
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
            {[
              "Percentage of vehicle models rated by NCAP with an overall 5-star safety rating, by region",
              "Number of safety-related defect complaints",
              "Percentage investigated",
              "Number of vehicles recalled",
            ].map((item, index) => (
              <tr key={`vehicle-${index}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item}
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
        <h3
          class="section-marker"
          id="Cybersecurity-and-data-privacy"
          style={{ fontWeight: "bold" }}
        >
          Cybersecurity and data privacy
        </h3>
        <small className="section-ref">
          <BoldLettersOnly text="S4-2_01 to S4-2_09, S4-3_10, S4-3_13, S4-4_01 to S4-4_18, S4-5_01 to S4-5_06, GRI 416-1, GRI 416-2, S4-4_11" />
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
            <tr style={{ fontWeight: "bold" }}>
              <td
                colSpan={2}
                style={{ border: "1px solid black", padding: "8px" }}
              >
                Total number of substantiated complaints received concerning
                breaches of customer privacy
              </td>
            </tr>
            {[
              "complaints received from outside parties and substantiated by the organization",
              "complaints from regulatory bodies",
              "Total number of identified leaks, thefts, or losses of customer data",
            ].map((item, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item}
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

export default Social;
