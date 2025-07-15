const ExecutiveSummary = () => {
  const subsidiaries = [
    {
      sn: 1,
      name: "Rotary Engineering Pte Ltd",
      abbreviation: "REL",
      location: "Singapore",
    },
    {
      sn: 2,
      name: "Rotary Electrical and Instrumentation Pte Ltd",
      abbreviation: "REI",
      location: "Singapore",
    },
    {
      sn: 3,
      name: "Rotary Mechanical and Construction Pte Ltd",
      abbreviation: "RMC",
      location: "Singapore",
    },
    {
      sn: 4,
      name: "Rotary IMC Pte Ltd",
      abbreviation: "RIMC",
      location: "Singapore",
    },
    {
      sn: 5,
      name: "Rotary Thai Construction Pte Ltd",
      abbreviation: "RTC",
      location: "Singapore",
    },
    {
      sn: 6,
      name: "Supermec Pte Ltd",
      abbreviation: "Supermec",
      location: "Singapore",
    },
    {
      sn: 7,
      name: "Rotary Engineering Pte Ltd - Qatar",
      abbreviation: "RELQ",
      location: "Qatar",
    },
    {
      sn: 8,
      name: "Rotary Engineering Fujairah FZE",
      abbreviation: "REF",
      location: "United Arab Emirates",
    },
    {
      sn: 9,
      name: "Rotary Electrical & Instrumentation (Thailand) Limited",
      abbreviation: "REIT",
      location: "Thailand",
    },
    {
      sn: 10,
      name: "Thai Rotary Engineering Public Company Limited",
      abbreviation: "TREL",
      location: "Thailand",
    },
    {
      sn: 11,
      name: "P.T. Rotary Engineering Indonesia",
      abbreviation: "PTREI",
      location: "Indonesia",
    },
    {
      sn: 12,
      name: "Rotary MEC (M) Sdn Bhd",
      abbreviation: "RMEC",
      location: "Malaysia",
    },
    {
      sn: 13,
      name: "Rotary Contracting WLL",
      abbreviation: "RCWLL",
      location: "Qatar",
    },
  ];

  const footprintData = [
    {
      label: "Base Year",
      value: "FY 2024–2025 (1 January 2024 to 31 December 2024)",
    },
    {
      label: "Approach to boundary identification",
      value: "Operation boundary",
    },
    { label: "Boundary of the footprint", value: "" },
    { label: "Gases Covered", value: "" },
    { label: "Standard Used", value: "The GHG Protocol Corporate Standard" },
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
          id="section-executive-summary"
          style={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          1. EXECUTIVE SUMMARY
        </h3>

        <p class="section-marker" style={{ marginBottom: "1rem" }}>
          Rotary Group of Companies is calculating and reporting on its carbon
          footprint as per the GHG Protocol Corporate Accounting Reporting
          Standard within its operational boundaries, covering emissions from
          CO2, CH4, N2O and refrigerant gases. The carbon footprint calculations
          cover the operation of Rotary Group of Companies, as listed in the
          table below.
        </p>

        <p
          class="section-marker"
          style={{
            color: "blue",
            marginBottom: "1rem",
            textDecoration: "underline",
          }}
        >
          Table 1 1: Rotary Group of Companies
        </p>

        <p
          class="section-marker"
          style={{
            color: "red",
            marginBottom: "1rem",
          }}
        >
          [Table listing list of Group and Subsidiary Companies and Location]
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
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                S/N
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Business Unit / Subsidiary
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Abbreviation
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
            {subsidiaries.map((item) => (
              <tr key={item.sn}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.sn}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.name}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.abbreviation}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p class="section-marker" style={{ marginBottom: "1rem" }}>
          This Report covers the period of 1 January 2025 to 31 December 2025.
          This Report for FY 2025 has been prepared with reference and in
          accordance with the Greenhouse Gas Protocol. The emitting activities
          covered in this Report include direct emissions resulting from Rotary
          Group of Companies owned or controlled equipment (Scope 1 emissions)
          and emissions from purchased electricity (Scope 2 emissions),
          respectively. Every effort has been made to ensure the accuracy of
          this Report.
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            marginBottom: "3rem",
            border: "1px solid black",
          }}
        >
          <tbody>
            {footprintData.map((row, idx) => (
              <tr key={idx}>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    fontWeight: "bold",
                  }}
                >
                  {row.label}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {row.value || ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
