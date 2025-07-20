const GhgInventoryDesignAndMethodology = () => {
  const ghgSections = [
    {
      title: "Methodology",
      content: `The procedure used to quantify and report the GHG emissions for FY 2024 is in accordance with the GHG Protocol Corporate Accounting and Reporting Standard. This Standard was developed by the World Resource Institute and the World Business Council for Sustainable Development, and it provides a step-by-step guide for companies to use in quantifying and reporting their GHG emissions. The GHG Protocol is the most widely used standard among the governments and companies to understand, quantify, and manage their GHG emissions. The accounting and reporting of the GHG emissions of Rotary Group of Companies is based on the principles of the GHG Protocol.`,
    },
    {
      title: "Relevance",
      content: `Rotary Group of Companies ensures that the selected GHG inventory appropriately reflects the GHG emissions of the company which serves the decision-making needs of the stakeholders to the company. Calculation of Scope 1 and Scope 2 Emissions are selected for the GHG inventory.`,
    },
    {
      title: "Completeness",
      content: `Every effort has been made to gather primary activity data for each source using purchase and spend reports, ensuring accurate data compilation for calculating emissions, for the Greenhouse Gas report.`,
    },
    {
      title: "Consistency",
      content: `Rotary Group of Companies has applied the consistent accounting approach and calculating methodology within the defined inventory boundary in accordance with the GHG Protocol Corporate Standard.`,
    },
    {
      title: "Transparency",
      content: `Rotary Group of Companies addresses all relevant issues in a factual and coherent manner, based on a clear audit trail. Specific exclusions or inclusions are clearly identified and justified. Also the company has disclosed relevant assumptions and mentioned appropriate references to the methodologies and data sources used in GHG calculations.`,
    },
    {
      title: "Accuracy",
      content: `Rotary Group of Companies ensures that the quantification of GHG emissions is systematically carried out in accordance to the global standards accepted across the industry and avoids the uncertainties as far as practicable. The quantification methodology used to calculate emissions is based on activity data collected from the organisation or robust estimates using appropriate assumptions, multiplied by relevant and up-to-date emission factors. Calculations and the use of emission factors were all based on the standards set by the GHG Protocol.`,
    },
  ];

  const operationalSection = [
    {
      title: "Operational Boundaries",
      content: `The Operational Boundaries for emission inventory will include Scope 1 Emissions and Scope 2 Emissions, which will consider the following:`,
      list: [
        {
          label: "Scope 1 Emissions",
          detail:
            "Direct GHG Emissions from Company owned or controlled sources",
        },
        {
          label: "Scope 2 Emissions",
          detail: "Indirect GHG Emissions from purchased electricity or steam.",
        },
      ],
      footer: `With reference to the GHG Protocol Corporate Reporting Standard, it is compulsory to include Scope 1 and Scope 2 emissions. Scope 3 emissions are voluntary and will not be included for the reporting.`,
    },
  ];

  const emissionData = [
    {
      scope: "Scope 1",
      category: "Mobile Combustion",
      description: "Company-owned vehicles and Company-leased vehicles",
      sources: "Gasoline (litres), Diesel (litres), LPG (kg)",
      ghgs: "CO₂, CH₄, N₂O",
    },
    {
      scope: "Scope 1",
      category: "Stationary Combustion",
      description: "Use of fuel and gas in the facility",
      sources: "Gasoline (litres), Diesel (litres), LPG (kg)",
      ghgs: "CO₂, CH₄, N₂O",
    },
    {
      scope: "Scope 2",
      category: "Purchased Energy",
      description: "Purchased electricity for operations",
      sources: "Electricity (grid)",
      ghgs: "CO₂, CH₄, N₂O",
    },
  ];

  const emissionTableData = [
    {
      sn: 1,
      unit: "Rotary Engineering Pte Ltd",
      abbr: "REL",
      scopes: "Scope 1, Scope 2",
      source: "Combustion of Diesel, Gasoline, Purchased Electricity",
      activity: "Purchase Records",
    },
    {
      sn: 2,
      unit: "Rotary Electrical and Instrumentation Pte Ltd",
      abbr: "REI",
      scopes: "Scope 1",
      source: "Combustion of Diesel, Gasoline",
      activity: "Purchase Records",
    },
    {
      sn: 4,
      unit: "Rotary IMC Pte Ltd",
      abbr: "RIMC",
      scopes: "Scope 1",
      source: "Combustion of Diesel, Gasoline",
      activity: "Purchase Records",
    },
    {
      sn: 5,
      unit: "Rotary Thai Construction Pte Ltd",
      abbr: "RTC",
      scopes: "Scope 1",
      source: "Combustion of Diesel, Gasoline",
      activity: "Direct Measurement, Purchase Records",
    },
    {
      sn: 6,
      unit: "Supermec Pte Ltd",
      abbr: "Supermec",
      scopes: "Scope 1, Scope 2",
      source: "Combustion of Diesel, Gasoline, Purchased Electricity",
      activity: "Purchase Records",
    },
    {
      sn: 7,
      unit: "Rotary Engineering Pte Ltd - Qatar",
      abbr: "RELQ",
      scopes: "Scope 1, Scope 2",
      source: "Combustion of Diesel, Gasoline",
      activity: "Direct Measurement, Purchase Records",
    },
    {
      sn: 8,
      unit: "Rotary Engineering Fujairah FZE",
      abbr: "REF",
      scopes: "Scope 1",
      source: "Combustion of Diesel, Gasoline",
      activity: "Direct Measurement, Purchase Records",
    },
    {
      sn: 9,
      unit: "Rotary Electrical & Instrumentation (Thailand) Limited",
      abbr: "REIT",
      scopes: "Scope 1, Scope 2",
      source: "Combustion of Diesel, Gasoline, Purchased Electricity",
      activity: "Direct Measurement, Purchase Records",
    },
    {
      sn: 10,
      unit: "Thai Rotary Engineering Public Company Limited",
      abbr: "TREL",
      scopes: "Scope 1, Scope 2",
      source: "Combustion of Diesel, Gasoline, Purchased Electricity",
      activity: "Direct Measurement, Purchase Records",
    },
    {
      sn: 11,
      unit: "P.T. Rotary Engineering Indonesia",
      abbr: "PTREI",
      scopes: "Scope 1, Scope 2",
      source: "Combustion of Diesel, Gasoline, Purchased Electricity",
      activity: "Direct Measurement, Purchase Records",
    },
    {
      sn: 12,
      unit: "Rotary MEC (M) Sdn Bhd",
      abbr: "RMEC",
      scopes: "Scope 1, Scope 2",
      source: "Combustion of Diesel, Gasoline, Purchased Electricity",
      activity: "Purchase Records",
    },
    {
      sn: 13,
      unit: "Rotary Contracting WLL",
      abbr: "RCWLL",
      scopes: "Scope 1",
      source: "Combustion of Diesel, Gasoline",
      activity: "Direct Measurement, Purchase Records",
    },
    {
      sn: 14,
      unit: "Rotary Engineering Pte Ltd - Abu Dhabi",
      abbr: "RELA",
      scopes: "Scope 1, Scope 2",
      source: "Combustion of Diesel, Gasoline, Purchased Electricity",
      activity: "Direct Measurement, Purchase Records",
    },
  ];

  const emissionFactors = [
    {
      location: "Singapore",
      grid: "",
      Source: "",
    },
    {
      location: "Malaysia",
      grid: "",
      Source: "",
    },
    {
      location: "Indonesia",
      grid: "",
      Source: "",
    },
    {
      location: "Thailand",
      grid: "",
      Source: "",
    },
    {
      location: "Saudi",
      grid: "",
      Source: "",
    },
    {
      location: "Qatar",
      grid: "",
      Source: "",
    },
    {
      location: "Thailand",
      grid: "",
      Source: "",
    },
  ];

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
          id="section-ghg-inventory-design-and-methodology"
          style={{
            fontWeight: "bold",
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          4. GHG INVENTORY DESIGN AND METHODOLOGY
        </h3>

        <p
          class="section-marker"
          style={{
            color: "red",
            marginBottom: "1rem",
          }}
        >
          [Dates to change according to year of report]
        </p>

        {ghgSections.map((section, index) => (
          <div key={index}>
            <p
              className="section-marker"
              style={{
                textDecoration: "underline",
                margin: "0",
              }}
            >
              {section.title}
            </p>
            <p
              className="section-marker"
              style={{ marginBottom: "1rem", marginTop: "0" }}
            >
              {section.content}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p
          class="section-marker"
          id="section-ghg-inventory-design-and-methodology-organisational-boundaries"
          style={{
            marginBottom: "1rem",
          }}
        >
          4.1 ORGANISATIONAL BOUNDARIES
        </p>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
          }}
        >
          To account for the emissions from the Business Units, the operational
          control consolidation approach will be used with consideration that
          the Business units have full control over the operational day-to-day
          policies. These organizational boundaries were set with reference to
          the methodology described the GHG Protocol.
        </p>

        <p
          class="section-marker"
          style={{
            color: "red",
            marginBottom: "8rem",
          }}
        >
          [Table listing list of Group and Subsidiary Companies.]
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
          id="section-ghg-inventory-design-and-methodology-operational-boundaries"
          style={{
            marginBottom: "1rem",
          }}
        >
          4.2 OPERATIONAL BOUNDARIES
        </p>

        {operationalSection.map((section, index) => (
          <div key={index}>
            <p className="section-marker" style={{ margin: "0" }}>
              {section.content}
            </p>

            {section.list && (
              <ul>
                {section.list.map((item, i) => (
                  <li key={i}>
                    <strong>{item.label}:</strong> {item.detail}
                  </li>
                ))}
              </ul>
            )}

            {section.footer && (
              <p className="section-marker" style={{ marginBottom: "1rem" }}>
                {section.footer}
              </p>
            )}
          </div>
        ))}

        <div
          style={{
            marginBottom: "1rem",
          }}
        >
          <img
            style={{
              width: "100%",
            }}
            src="./rotary.png"
          />

          <p
            class="section-marker"
            style={{
              marginBottom: "1rem",
            }}
          >
            Figure 1: GHG Protocol Emission Scopes. Source: WRI/WBCSD Corporate
            Value Chain (Scope 3) Accounting and Reporting Standard (pdf) (5.9
            MB), page 5.
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p
          class="section-marker"
          id="section-ghg-inventory-design-and-methodology-ghg-inventory"
          style={{ marginBottom: "1rem" }}
        >
          4.3 GHG INVENTORY
        </p>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
          }}
        >
          With the established operational boundary, the GHG Inventory is
          identified in the following table below.
        </p>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
          }}
        >
          Both emissions scopes will be identified and quantified for Rotary
          Group of Companies, along with the details for the GHG emission
          sources as listed in Table 6 1 below.
        </p>

        <p
          class="section-marker"
          style={{
            textDecoration: "underline",
            marginBottom: "1rem",
          }}
        >
          Table 5 1: Details of GHG Emission Scopes Inclusions
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            marginBottom: "1rem",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr>
              {[
                "Scope",
                "Category",
                "Description",
                "Emission Sources",
                "Generated GHGs",
              ].map((header) => (
                <th
                  key={header}
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    fontWeight: "bold",
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {emissionData.map((item, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.scope}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.category}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.description}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.sources}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.ghgs}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p
          class="section-marker"
          style={{
            color: "red",
            marginBottom: "1rem",
          }}
        >
          [Above table listing scope of emissions, categories, description,
          emission sources, and generated GHGs]
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            marginBottom: "1rem",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr>
              {[
                "S/N",
                "Business Unit",
                "Abbreviation",
                "GHG Emission Scopes",
                "GHG Emissions Source / Activity Data",
                "Activity Data Source",
              ].map((header) => (
                <th
                  key={header}
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    fontWeight: "bold",
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {emissionTableData.map((item) => (
              <tr key={item.sn}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.sn}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.unit}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.abbr}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.scopes}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.source}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.activity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p
          class="section-marker"
          style={{
            color: "red",
            marginBottom: "1rem",
          }}
        >
          [Above table listing scope of emissions for each Subsidiary, Emission
          Scopes, emission sources, and activity data source]
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
          id="section-ghg-inventory-design-and-methodology-emission-factors"
          style={{ marginBottom: "1rem" }}
        >
          4.4 EMISSION FACTORS
        </p>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
          }}
        >
          The emission factors used for Scope 1 emissions are sourced from the
          GHG Protocol. For Scope 2 emissions, the following emission factors
          are used for the different countries.
        </p>

        <p
          class="section-marker"
          style={{
            textDecoration: "underline",
            marginBottom: "1rem",
          }}
        >
          Table 5 2: Emission Factors for Scope 2 Emissions
        </p>

        <p
          class="section-marker"
          style={{
            textDecoration: "underline",
            marginBottom: "1rem",
            color: "red",
          }}
        >
          [Table listing scope of emission factors for purchased electricity by
          country, and source of emission factors]
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            marginBottom: "1rem",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr>
              {["Location", "EF (Grid), Unit", "Source"].map((header) => (
                <th
                  key={header}
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    fontWeight: "bold",
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {emissionFactors.map((item, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.location}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.grid}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.scope}
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
        <p
          class="section-marker"
          id="section-ghg-inventory-design-and-methodology-emission-factors"
          style={{ marginBottom: "1rem" }}
        >
          4.5 EXCLUSIONS AND DATA GAPS
        </p>

        <p
          class="section-marker"
          style={{
            textDecoration: "underline",
            marginBottom: "8rem",
            color: "red",
          }}
        >
          [Editable section]
        </p>
      </div>
    </div>
  );
};

export default GhgInventoryDesignAndMethodology;
