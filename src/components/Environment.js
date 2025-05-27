import React from "react";
import BoxTableComponent from "./boxTable";
import { BoldLettersOnly } from "./BoldLetters";

const Environment = () => {
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
          id="Environment"
        >
          Environment
        </h2>
        <h3
          className="section-marker"
          id="Materials"
          style={{ fontWeight: "bold" }}
        >
          Materials
        </h3>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 301-1, GRI 301-2, GRI 301-3, E5-4_01 to E5-4_08, E5-5_01 to E5-5_06, TR-AU-440a., TR-AU-440b" />
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
                  width: "30%",
                }}
              >
                Materials
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                non-renewable materials
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                renewable materials
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Weight /Volume of materials that are used to produce
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                &nbsp;
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                &nbsp;
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Weight /Volume of materials that are used to package
              </td>
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
                &nbsp;
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Percentage of recycled input materials used to manufacture the
                organization's primary products and services.
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                &nbsp;
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Minimum recyclability of vehicles sold
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
                  fontWeight: "bold",
                  width: "50%",
                }}
              >
                Product category
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Percentage of reclaimed products and their packaging materials
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

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3
          className="section-marker"
          id="Energy"
          style={{ fontWeight: "bold" }}
        >
          Energy
        </h3>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 302-1, E1-5_01, E1-5_02, E1-5_03, E1-5_05, E1-5_06, E1-5_07, E1-5_08, E1-5_10, E1-5_11, E1-5_12, E1-5_13, E1-5_14" />
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
                Unit of Measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Non-renewable
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Renewable
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Total fuel consumption
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Joules
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
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
                  width: "30%",
                }}
              >
                Particulars
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "30%",
                }}
              >
                Unit of Measurement
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
              "electricity consumption",
              "heating consumption",
              "cooling consumption",
              "steam consumption",
              "electricity sold",
              "Heating sold",
              "Cooling sold",
              "Steam sold",
              "Total energy consumption in organization",
            ].map((label, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label === "Total energy consumption in organization"
                    ? "joules or multiples."
                    : "Watt-hours or multiples"}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
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
          Energy consumption outside of the organization
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 302-1, E1-5_01, E1-5_02, E1-5_03, E1-5_05, E1-5_06, E1-5_07, E1-5_08, E1-5_10, E1-5_11, E1-5_12, E1-5_13, E1-5_14" />
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
                Unite of Measurement
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Energy consumption outside the organization
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Joules or multiples
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
                  fontWeight: "bold",
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
                Unite of Measurement
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Upstream categories",
              "Purchased goods and services",
              "Capital goods",
              "Fuel- and energy-related activities",
              "Upstream transportation and distribution",
              "Waste generated in operations",
              "Business travel",
              "Employee commuting",
              "Upstream leased assets",
              "Other upstream",
              "Downstream categories",
              "Downstream transportation and distribution",
              "Processing of sold products",
              "Use of sold products",
              "End-of-life treatment of sold products",
              "Downstream leased assets",
              "Franchises",
              "Investments",
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

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p
          className="section-marker"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Energy intensity
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 302-3, E1-5_18" />
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
                  width: "30%",
                }}
              >
                Particulars
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "30%",
                }}
              >
                Within the Organization
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Outside of organization
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Energy intensity ratio for the organization
              </td>
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

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p
          className="section-marker"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Reduction of energy consumption
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 302-4" />
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
                  width: "30%",
                }}
              >
                <a
                  href="#"
                  style={{ textDecoration: "underline", color: "black" }}
                >
                  Amount
                </a>
                of reductions in energy consumption (joules or multiples)
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Baseline year
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                FY 2023
              </th>
            </tr>
          </thead>
          <tbody>
            {["Fuel", "Electricity", "Heating", "Colling", "steam"].map(
              (item, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {item}
                  </td>
                  <td
                    style={{ border: "1px solid black", padding: "8px" }}
                  ></td>
                  <td
                    style={{ border: "1px solid black", padding: "8px" }}
                  ></td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p
          className="section-marker"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Reductions in energy requirements of products and services
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 302-5" />
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
                  width: "30%",
                }}
              >
                Particular
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "30%",
                }}
              >
                Baseline year
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                FY 2023
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Reductions in energy requirements of sold products and services
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
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
          id="Water-effluents"
          style={{ fontWeight: "bold" }}
        >
          Water & effluents
        </h3>

        <small className="section-ref">
          <BoldLettersOnly text="E2-3_09, E2-3_10, E2-3_11, E3-1_01 to E3-1_12, E3-2_01, GRI 303-1, ESRS 2 SBM-3_04, ESRS 2 SBM-3_07, E3.IRO-1_01, E3.IRO-1_02, E3.MDR-P_07-08E3., MDR-A_01-12, E3-2_02, E3-3_01 to E3-3_10, GRI 303-2, E2-3_05, E2-3_06, E2-3_07, E2-3_08, E2-4_03, E2-4_11, E2-4_12, E2-4_13, E2-4_14, E3-2_03, E3-5_01to E3-5_06" />
        </small>

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p
          className="section-marker"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Water withdrawal
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="E3-4_11" />
        </small>

        <BoxTableComponent />

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
                  width: "40%",
                }}
              >
                Water withdrawal [GRI 303-3]
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                ALL AREAS
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                AREAS WITH WATER STRESS
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Surface water (total)",
              "Freshwater (≤1,000 mg/L Total Dissolved Solids)",
              "Other water (>1,000 mg/L Total Dissolved Solids)",
              "Groundwater (total)",
              "Freshwater (≤1,000 mg/L Total Dissolved Solids)",
              "Other water (>1,000 mg/L Total Dissolved Solids)",
              "Seawater (total)",
              "Freshwater (≤1,000 mg/L Total Dissolved Solids)",
              "Other water (>1,000 mg/L Total Dissolved Solids)",
              "Produced water (total)",
              "Freshwater (≤1,000 mg/L Total Dissolved Solids)",
              "Other water (>1,000 mg/L Total Dissolved Solids)",
              "Produced water (total)",
              "Freshwater (≤1,000 mg/L Total Dissolved Solids)",
              "Other water (>1,000 mg/L Total Dissolved Solids)",
            ].map((label, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  ML
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  ML
                </td>
              </tr>
            ))}

            <tr>
              <td
                colSpan={3}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Total third-party water withdrawal by withdrawal source
              </td>
            </tr>

            {["Surface water", "Groundwater", "Seawater", "Produced water"].map(
              (label, index) => (
                <tr key={`third-${index}`}>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {label}
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    ML
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    ML
                  </td>
                </tr>
              )
            )}

            <tr>
              <td
                colSpan={3}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Total water withdrawal
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Surface water (total) + groundwater (total) + seawater (total) +
                produced water (total) + third-party water (total)
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>ML</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>ML</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p
          className="section-marker"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Water discharge
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 303-4, E3-4_12" />
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
                }}
              >
                Water discharge [GRI 303-4]
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                ALL AREAS
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                AREAS WITH WATER STRESS
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Surface water",
              "Groundwater",
              "Seawater",
              "Third-party water (total)",
              "Third-party water sent for use to other organizations",
            ].map((label, index) => (
              <tr key={`destination-${index}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  ML
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>X</td>
              </tr>
            ))}

            <tr>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Total water discharge
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Surface water + groundwater + seawater + third-party water
                (total)
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>ML</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>ML</td>
            </tr>

            <tr>
              <td
                colSpan={3}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Water discharge by freshwater and other water
              </td>
            </tr>
            {[
              "Freshwater (≤1,000 mg/L Total Dissolved Solids)",
              "Other water (>1,000 mg/L Total Dissolved Solids)",
            ].map((label, index) => (
              <tr key={`fresh-${index}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  ML
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>X</td>
              </tr>
            ))}

            <tr>
              <td
                colSpan={3}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Water discharge by level of treatment Note that this is
                recommended, but not required
              </td>
            </tr>
            {[
              "No treatment",
              "Treatment level [Provide the title for treatment level]",
              "Treatment level [Provide the title for treatment level]",
              "Treatment level [Provide the title for treatment level]",
            ].map((label, index) => (
              <tr key={`treatment-${index}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  ML
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>X</td>
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
          Water consumption
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="E3-4_01 to E3-4_10" />
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
                }}
              >
                Water consumption [GRI 303-5]
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                ALL AREAS
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                AREAS WITH WATER STRESS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Total water consumption
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>ML</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>ML</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Change in water storage, if water storage has been identified as
                having a significant water-related impact
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>ML</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>-</td>
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
                }}
              >
                FACILITIES IN AREAS WITH WATER STRESS
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                FACILITY A
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                FACILITY B
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                [FACILITY X]
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={4}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Water withdrawal (clause 2.2.1)
              </td>
            </tr>
            {[
              "Surface water",
              "Groundwater",
              "Seawater",
              "Produced water",
              "Third-party water",
            ].map((label, index) => (
              <tr key={`withdrawal-${index}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  ML
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  ML
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  ML
                </td>
              </tr>
            ))}
            <tr>
              <td
                colSpan={4}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Water consumption (clause 2.5.1)
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Total water consumption
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>ML</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>ML</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>ML</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p
          className="section-marker"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Biodiversity
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 304-1, GRI 304-2, GRI 304-3, GRI 304-4, E4-1_13 to E4-1_15, SBM-4_06, SBM-4_07" />
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
                Remarks
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Owned
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Leased
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Managed
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Geographic location
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Subsurface and underground land that may be owned
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Position in relation to the protected area or the high
                biodiversity value area outside protected areas
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                In the area, adjacent to, or containing portions of the
                protected area or biodiversity value area outside protected area
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Type of operation (office, manufacturing or production, or
                extractive)
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                List all (if appropriate)
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Size of operational site in km2 (or another unit, if
                appropriate)
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Biodiversity value characterized by the attribute of the
                protected area or area of high biodiversity value outside
                protected areas
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Terrestrial, freshwater or maritime ecosystem
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Biodiversity value characterized by listing of protected status
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Such as IUCN Protected Area Management Categories, Ramsar
                Convention, national legislation
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
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
                Size
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Habitats protected
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Habitats restored
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
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
                }}
              >
                Level of extinction list
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Total number of IUCN Red List species and national conservation
                list species
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Critically endangered",
              "Endangered",
              "Vulnerable",
              "Near threatened",
              "Least concern",
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
        <h3
          className="section-marker"
          id="Emissions"
          style={{ fontWeight: "bold" }}
        >
          Emissions
        </h3>
        <small className="section-ref">
          <BoldLettersOnly text="E1-7_01 to E1_27, E2.IRO-1_03, E2.MDR-P_07-08, E2.MDR-A_01-12, E2-2_01, E2.MDR-A_13-14, E2.MDR-T_01-13, GRI 305-1, E1-4_19, E1-6_1 to E1-6_35, E1-4_19, E1-6_1 to E1-6_35, GRI 305-3, E1-4_19, E1-6_1 to E1-6_35" />
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
                }}
              >
                Quantitative Data
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Baseline year
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                FY 2023
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Stationary Combustion Emission",
              "Mobile Combustion Emission",
              "Fugitive Emissions",
              "Process Emissions",
            ].map((label, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  GHG emissions in metric tons of CO2 equivalent.
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
                }}
              >
                Quantitative Data
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Baseline year
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                FY 2023
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Energy Purchased from Third party sources
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                GHG emissions in metric tons of CO2 equivalent.
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
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
                  width: "35%",
                }}
              >
                Quantitative Data
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Base line year
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                FY 2023
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Energy Purchased from Third party sources",
              "Category 1 - Purchased goods and services",
              "Category 2 - Capital goods",
              "Category 3 - Fuel- and energy-related activities",
              "Category 4 - Upstream transportation and distribution",
              "Category 5 - Waste generated in operations",
              "Category 6 - Business travel",
              "Category 7 - Employee commuting",
              "Category 8 - Upstream leased assets",
              "Category 9 - Downstream transportation and distribution",
              "Category 10 - Processing of sold products",
              "Category 11 - Use of sold products",
              "Category 12 - End-of-life treatment of sold products",
              "Category 13 - Downstream leased assets",
              "Category 14 - Franchises",
              "Category 15 - Investments",
            ].map((label, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  GHG emissions in metric tons of CO2 equivalent.
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
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
          GHG emissions intensity
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 305-4" />
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
                  width: "30%",
                }}
              >
                Quantitative Data
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "30%",
                }}
              >
                Unit of measurement
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
                GHG emissions intensity ratio for the organization
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                [Organization-specific metric (the denominator) chosen to
                calculate the ratio]
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Total Emission Intensity for Scope 1: Direct Emissions
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                (in tCO2e/organization specific metrics)
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Total Emission Intensity for Scope 2: Indirect Emissions
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                (in tCO2e/organization specific metrics)
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Total Emission Intensity for Scope 3: Other Indirect Emissions
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                (in tCO2e/organization specific metrics)
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p
          className="section-marker"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Reduction of GHG emissions
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 305-5, E1-3_03, E1-4_03, E1-4_06, E1-4_09, E1-4_12, E1-4_15, E1-4_25, E1-7_02, TR-AU-410a" />
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
                  width: "30%",
                }}
              >
                Quantitative Data
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "30%",
                }}
              >
                Unit of measurement
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
              "GHG emissions reduced as a direct result of reduction initiatives",
              "GHG emissions reduced in Scope 1 emissions",
              "GHG emissions reduced in Scope 2 emissions",
              "GHG emissions reduced in Scope 3 emissions",
            ].map((label, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  GHG emissions in metric tons of CO2 equivalent.
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
              "Sales-weighted average passenger fleet",
              " fuel economy, by region",
              "Number of zero emission vehicles (ZEV)",
              "Hybrid vehicles",
              "Plug-in hybrid vehicles sold",
              "Discussion of strategy for managing fleet fuel economy and emissions risks and opportunities",
            ].map((metric, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {metric}
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
          class="section-marker"
          style={{ fontWeight: "bold", color: "blue", margin: 0 }}
        >
          Carbon pricing
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="E1-8_01 to E1-8_13" />
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
          Emissions of ozone-depleting substances (ODS)
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 305-6, E2-5_01 to E2-5_13" />
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
                }}
              >
                Quantitative Data
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Data Input
              </th>
            </tr>
          </thead>
          <tbody>
            {["Production of ODS", "Import of ODS", "Export of ODS"].map(
              (label, idx) => (
                <tr key={idx}>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {label}
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    metric tons of CFC-11 (trichlorofluoromethane) equivalent
                  </td>
                  <td
                    style={{ border: "1px solid black", padding: "8px" }}
                  ></td>
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
        <p
          class="section-marker"
          style={{ fontWeight: "bold", color: "blue", margin: 0 }}
        >
          Nitrogen oxides (NOx), sulfur oxides (SOx), and other significant air
          emissions
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="E2-4_01, E2-4_02, E2-4_09, E2-4_08, E2-4_10, GRI 305-7" />
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
                }}
              >
                Quantitative data
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Data Input
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "NOx",
              "SOx",
              "Persistent organic pollutants (POP)",
              "Volatile organic compounds (VOC)",
              "Hazardous air pollutants (HAP)",
              "Particulate matter (PM)",
              "Other standard categories of air emissions identified in relevant regulations",
            ].map((label, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  kilograms or multiples
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
          class="section-marker"
          style={{ fontWeight: "bold", color: "blue", margin: 0 }}
        >
          Impact, risk and opportunity management
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="E2-6_01 to E2-6_11" />
        </small>

        <BoxTableComponent />
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3 class="section-marker" id="Waste" style={{ fontWeight: "bold" }}>
          Waste
        </h3>

        <small className="section-ref">
          <BoldLettersOnly text="GRI 306, E5.IRO-1_01, E5.MDR, E5-1_01 to E5-1_04, E5-3_01 to E5-3_13, E5-6_01 to E5-6_06, GRI 306-1, ESRS 2 SBM-3_01, SBM-3_05, SBM-3_07, E5.IRO-1_01, E5.IRO-1_02, E5-4_01, GRI 306-2, E2-4_05, E2-4_06, E2-4_07, E5-2_01 to E5-2_10, E5-5_17" />
        </small>

        <BoxTableComponent />
      </div>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p
          className="section-marker"
          style={{ fontWeight: "bold", color: "blue" }}
        >
          Waste generated
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 306-3, E5-5_07, E5-5_12, E5-5_13, E5-5_14, E5-5_17" />
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
                }}
              >
                Quantitative Data
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of Measurement
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
                Total weight of waste generated
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Metric tons
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
                }}
              >
                Waste category
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of Measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Total weight
              </th>
            </tr>
          </thead>
          <tbody>
            {["Hazardous", "Non-hazardous"].map((label, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Metric tons
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
                }}
              >
                Sector-specific waste
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of Measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Total weight
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2].map((_, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Metric tons
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
                }}
              >
                Material-specific waste
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of Measurement
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Total weight
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2].map((_, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Metric tons
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
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
          Waste diverted from disposal
        </p>
        <small className="section-ref">
          <BoldLettersOnly text="GRI 306-4, E5-5_08, E5-5_12, E5-5_13, E5-5_14, E5-5_17" />
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
                }}
              >
                Qualitative data
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Unit of Measurement
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
                Total weight of waste diverted from disposal
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Metric tons
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
                  width: "30%",
                }}
              >
                Total weight of waste diverted from disposal
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  width: "30%",
                }}
              >
                Unit of Measurement
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
              <td
                colSpan={3}
                style={{ border: "1px solid black", padding: "8px" }}
              >
                <strong>Hazardous waste</strong>
              </td>
            </tr>
            {[
              "Preparation for reuse",
              "Recycling",
              "Other recovery operations",
              "Onsite",
              "Offsite",
            ].map((label, index) => (
              <tr key={`hazard-${index}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Metric tons
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}
            <tr>
              <td
                colSpan={3}
                style={{ border: "1px solid black", padding: "8px" }}
              >
                <strong>Non-hazardous waste</strong>
              </td>
            </tr>
            {[
              "Preparation for reuse",
              "Recycling",
              "Other recovery operations",
              "Onsite",
              "Offsite",
            ].map((label, index) => (
              <tr key={`nonhaz-${index}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Metric tons
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

export default Environment;
