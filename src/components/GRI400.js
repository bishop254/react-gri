import React from "react";
import BoxTableComponent from "./boxTable";

const GRI400 = () => {
  return (
    <div style={{ minHeight: "80vh" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3 id="gri400" style={{ fontWeight: "bold" }}>
          GRI 400
        </h3>
        <h3
          id="gri401-title"
          style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}
        >
          GRI 401 Employment
        </h3>

        <p
          id="disclosure-401-3-3"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 3-3 Management of material topics
        </p>

        <BoxTableComponent />

        <p
          id="disclosure-401-1"
          style={{ fontWeight: "bold", color: "blue", marginTop: "2rem" }}
        >
          Disclosure 401-1 New employee hires and employee turnover
        </p>

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

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p id="disclosure-401-2" style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 401-2 Benefits provided to full-time employees that are not
          provided to temporary or part-time employees
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
        <p id="disclosure-401-3" style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 401-3 Parental leave
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
              <th></th>
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
        <h3
          id="gri402-title"
          style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}
        >
          GRI 402 Labor Management
        </h3>

        <p
          id="disclosure-402-3-3"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 3-3 Management of material topics
        </p>

        <BoxTableComponent />

        <p
          id="disclosure-402-1"
          style={{ fontWeight: "bold", color: "blue", marginTop: "2rem" }}
        >
          Disclosure 402-1 Minimum notice periods regarding operational changes
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Minimum number of weeks’ notice typically provided to employees
                and their representatives prior to the implementation of
                significant operational changes that could substantially affect
                them.
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
          </tbody>
        </table>

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <h3
          id="gri403-title"
          style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}
        >
          GRI 403 Occupational Health and Safety
        </h3>

        <p
          id="disclosure-403-3-3"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 3-3 Management of material topics
        </p>

        <BoxTableComponent />

        <p
          id="disclosure-403-1"
          style={{ fontWeight: "bold", color: "blue", marginTop: "2rem" }}
        >
          Disclosure 403-1 Occupational health and safety management system
        </p>

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p id="disclosure-403-2" style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 403-2 Hazard identification, risk assessment, and incident
          investigation
        </p>

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p id="disclosure-403-3" style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 403-3 Occupational health services
        </p>

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p id="disclosure-403-4" style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 403-4 Worker participation, consultation, and communication
          on occupational health and safety
        </p>

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p id="disclosure-403-5" style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 403-5 Worker training on occupational health and safety
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p id="disclosure-403-6" style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 403-6 Promotion of worker health
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p id="disclosure-403-7" style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 403-7 Prevention and mitigation of occupational health and
          safety impacts directly linked by business relationships
        </p>

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p id="disclosure-403-8" style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 403-8 Workers covered by an occupational health and safety
          management system
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
                "X",
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

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p id="disclosure-403-9" style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 403-9 Work-related injuries
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

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p id="disclosure-403-10" style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 403-10 Work-related ill health
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
          id="gri404-title"
          style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}
        >
          GRI 404 Training and Education
        </h3>

        <p
          id="disclosure-404-3-3"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 3-3 Management of material topics
        </p>

        <BoxTableComponent />

        <p
          id="disclosure-404-1"
          style={{ fontWeight: "bold", color: "blue", marginTop: "2rem" }}
        >
          Disclosure 404-1 Average hours of training per year per employee
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p id="disclosure-404-2" style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 404-2 Programs for upgrading employee skills and transition
          assistance programs
        </p>

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p id="disclosure-404-3" style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 404-3 Percentage of employees receiving regular performance
          and career development reviews
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
                colSpan={3}
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
            </tr>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              ></th>
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
                  textAlign: "center",
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
                colSpan={3}
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
            </tr>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              ></th>
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
                  textAlign: "center",
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

        <BoxTableComponent />
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3
          id="gri405-title"
          style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}
        >
          GRI 405 Diversity & Inclusion
        </h3>

        <p
          id="disclosure-405-3-3"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 3-3 Management of material topics
        </p>

        <BoxTableComponent />

        <p
          id="disclosure-405-1"
          style={{ fontWeight: "bold", color: "blue", marginTop: "2rem" }}
        >
          Disclosure 401-1 New employee hires and employee turnover
        </p>

        <p style={{ fontWeight: "bold" }}>
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

        <p style={{ fontWeight: "bold" }}>
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

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p id="disclosure-405-2" style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 405-2 Ratio of basic salary and remuneration of women to
          men
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
        <h3
          id="gri406-title"
          style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}
        >
          GRI 406 Non-discrimination
        </h3>

        <p
          id="disclosure-406-3-3"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 3-3 Management of material topics
        </p>

        <BoxTableComponent />

        <p
          id="disclosure-406-1"
          style={{ fontWeight: "bold", color: "blue", marginTop: "2rem" }}
        >
          Disclosure 406-1 Incidents of discrimination and corrective actions
          taken
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
          id="gri407-title"
          style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}
        >
          GRI 407 Freedom of Association and Collective Bargaining
        </h3>

        <p
          id="disclosure-407-3-3"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 3-3 Management of material topics
        </p>

        <BoxTableComponent />

        <p
          id="disclosure-407-1"
          style={{ fontWeight: "bold", color: "blue", marginTop: "2rem" }}
        >
          Disclosure 407-1 Operations and suppliers in which the right to
          freedom of association and collective bargaining may be at risk
        </p>

        <BoxTableComponent />
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3
          id="gri408-title"
          style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}
        >
          GRI 408 Child Labor
        </h3>

        <p
          id="disclosure-408-3-3"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 3-3 Management of material topics
        </p>

        <BoxTableComponent />

        <p
          id="disclosure-408-1"
          style={{ fontWeight: "bold", color: "blue", marginTop: "2rem" }}
        >
          Disclosure 408-1 Operations and suppliers at significant risk for
          incidents of child labor
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
        <h3
          id="gri409-title"
          style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}
        >
          GRI 409 Forced or Compulsory Labor
        </h3>

        <p
          id="disclosure-409-3-3"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 3-3 Management of material topics
        </p>

        <BoxTableComponent />

        <p
          id="disclosure-409-1"
          style={{ fontWeight: "bold", color: "blue", marginTop: "2rem" }}
        >
          Disclosure 409-1 Operations and suppliers at significant risk for
          incidents of forced or compulsory labor
        </p>

        <BoxTableComponent />
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3
          id="gri410-title"
          style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}
        >
          GRI 410: Security Practices
        </h3>

        <p
          id="disclosure-410-3-3"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 3-3 Management of material topics
        </p>

        <BoxTableComponent />

        <p
          id="disclosure-410-1"
          style={{ fontWeight: "bold", color: "blue", marginTop: "2rem" }}
        >
          Disclosure 410-1 Security personnel trained in human rights policies
          or procedures
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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

        <BoxTableComponent />
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3
          id="gri411-title"
          style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}
        >
          GRI 411: Rights of Indigenous Peoples
        </h3>

        <p
          id="disclosure-411-3-3"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 3-3 Management of material topics
        </p>

        <BoxTableComponent />

        <p
          id="disclosure-411-1"
          style={{ fontWeight: "bold", color: "blue", marginTop: "2rem" }}
        >
          Disclosure 411-1 Incidents of violations involving rights of
          indigenous peoples
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
          id="gri413-title"
          style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}
        >
          GRI 413: Local Communities
        </h3>

        <p
          id="disclosure-413-3-3"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 3-3 Management of material topics
        </p>

        <BoxTableComponent />

        <p
          id="disclosure-413-1"
          style={{ fontWeight: "bold", color: "blue", marginTop: "2rem" }}
        >
          Disclosure 413-1 Operations with local community engagement, impact
          assessments, and development programs
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
                Percentage of operations with implemented local community
                engagement, impact assessments, and/or development programs
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
        <p id="disclosure-413-2" style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 413-2 Operations with significant actual and potential
          negative impacts on local communities
        </p>

        <BoxTableComponent />
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3
          id="gri414-title"
          style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}
        >
          GRI 414: Supplier Social Assessment
        </h3>

        <p
          id="disclosure-414-3-3"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 3-3 Management of material topics
        </p>

        <BoxTableComponent />

        <p
          id="disclosure-414-1"
          style={{ fontWeight: "bold", color: "blue", marginTop: "2rem" }}
        >
          Disclosure 414-1 New suppliers that were screened using social
          criteria
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
                Percentage of new suppliers that were screened using social
                criteria.
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
        <p id="disclosure-414-2" style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 414-2 Negative social impacts in the supply chain and
          actions taken
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
                Number of suppliers assessed for social impacts
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Number of suppliers identified as having significant actual and
                potential negative social impacts.
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Percentage of suppliers identified as having significant actual
                and potential negative social impacts with which improvements
                were agreed upon as a result of assessment
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Percentage of suppliers identified as having significant actual
                and potential negative social impacts with which relationships
                were terminated as a result of assessment, and why
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
          id="gri415-title"
          style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}
        >
          GRI 415: Public Policy
        </h3>

        <p
          id="disclosure-415-3-3"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 3-3 Management of material topics
        </p>

        <BoxTableComponent />

        <p
          id="disclosure-415-1"
          style={{ fontWeight: "bold", color: "blue", marginTop: "2rem" }}
        >
          Disclosure 415-1 Political contributions
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
                Total monetary value of financial and in-kind political
                contributions made directly and indirectly by the organization
                by country and recipient/beneficiary.
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
          id="gri416-title"
          style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}
        >
          GRI 416: Customer Health and Safety
        </h3>

        <p
          id="disclosure-416-3-3"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 3-3 Management of material topics
        </p>

        <BoxTableComponent />

        <p
          id="disclosure-416-1"
          style={{ fontWeight: "bold", color: "blue", marginTop: "2rem" }}
        >
          Disclosure 416-1 Assessment of the health and safety impacts of
          product and service categories
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
                Percentage of significant product and service categories for
                which health and safety impacts are assessed for improvement
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
        <p id="disclosure-416-2" style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 416-2 Incidents of non-compliance concerning the health and
          safety impacts of products and services
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
            <tr>
              <th
                colSpan={2}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Total number of incidents of non-compliance with regulations
                and/or voluntary codes concerning the health and safety impacts
                of products and services
              </th>
            </tr>
          </thead>
          <tbody>
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

        <BoxTableComponent />
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3
          id="gri417-title"
          style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}
        >
          GRI 417: Marketing and Labeling
        </h3>

        <p
          id="disclosure-417-3-3"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 3-3 Management of material topics
        </p>

        <BoxTableComponent />

        <p
          id="disclosure-417-1"
          style={{ fontWeight: "bold", color: "blue", marginTop: "2rem" }}
        >
          Disclosure 417-1 Requirements for product and service information and
          labeling
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
                Percentage of significant product or service categories covered
                by and assessed for compliance with such procedures
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
        <p id="disclosure-417-2" style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 417-2 Incidents of non-compliance concerning product and
          service information and labeling
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
                }}
              >
                Total number of incidents of non-compliance with regulations
                and/or voluntary codes concerning product and service
                information and labeling
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  border: "1px solid black",
                  width: "40%",
                  padding: "8px",
                }}
              >
                incidents of non-compliance with regulations resulting in a fine
                or penalty
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td
                style={{
                  border: "1px solid black",
                  width: "40%",
                  padding: "8px",
                }}
              >
                incidents of non-compliance with regulations resulting in a
                warning
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td
                style={{
                  border: "1px solid black",
                  width: "40%",
                  padding: "8px",
                }}
              >
                incidents of non-compliance with voluntary codes
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
        <p id="disclosure-417-3" style={{ fontWeight: "bold", color: "blue" }}>
          Disclosure 417-3 Incidents of non-compliance concerning marketing
          communications
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
            <tr>
              <th
                colSpan={2}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Total number of incidents of non-compliance with regulations
                and/or voluntary codes concerning marketing communications,
                including advertising, promotion, and sponsorship
              </th>
            </tr>
          </thead>
          <tbody>
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

        <BoxTableComponent />
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3
          id="gri418-title"
          style={{ fontWeight: "bold", color: "blue", textAlign: "center" }}
        >
          GRI 418: Customer Privacy
        </h3>

        <p
          id="disclosure-418-3-3"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Disclosure 3-3 Management of material topics
        </p>

        <BoxTableComponent />

        <p
          id="disclosure-418-1"
          style={{ fontWeight: "bold", color: "blue", marginTop: "2rem" }}
        >
          Disclosure 418-1 Substantiated complaints concerning breaches of
          customer privacy and losses of customer data
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid black",
            textAlign: "left",
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
            <tr>
              <th
                colSpan={2}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Total number of substantiated complaints received concerning
                breaches of customer privacy
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                complaints received from outside parties and substantiated by
                the organization
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                complaints from regulatory bodies
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Total number of identified leaks, thefts, or losses of customer
                data
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
          </tbody>
        </table>

        <BoxTableComponent />
      </div>
    </div>
  );
};

export default GRI400;
