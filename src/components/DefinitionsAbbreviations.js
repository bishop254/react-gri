const DefinitionsAbbreviations = () => {
  const abbreviations = [
    { abbreviation: "BU", definition: "Business Unit" },
    { abbreviation: "CO2", definition: "Carbon Dioxide" },
    { abbreviation: "CO2 eq", definition: "Carbon Dioxide equivalent" },
    { abbreviation: "CH4", definition: "Methane" },
    {
      abbreviation: "DEFRA",
      definition: "Department for Environment, Food and Rural Affairs (UK)",
    },
    {
      abbreviation: "EPC",
      definition: "Engineering, Procurement, Construction",
    },
    { abbreviation: "GHG", definition: "Greenhouse Gas" },
    { abbreviation: "GJ", definition: "Gigajoule" },
    { abbreviation: "KWh", definition: "Kilowatt Hour" },
    { abbreviation: "LPG", definition: "Liquified Petroleum Gas" },
    { abbreviation: "N2O", definition: "Nitrous Oxide" },
    { abbreviation: "REL", definition: "Rotary Engineering Pte Ltd" },
    {
      abbreviation: "RELA",
      definition: "Rotary Engineering Pte Ltd – Abu Dhabi",
    },
    {
      abbreviation: "REI",
      definition: "Rotary Electrical and Instrumentation",
    },
    { abbreviation: "RCWLL", definition: "Rotary Contracting WLL" },
    { abbreviation: "RMC", definition: "Rotary Mechanical and Construction" },
    { abbreviation: "RIMC", definition: "Rotary IMC Pte Ltd" },
    { abbreviation: "RTC", definition: "Rotary Thai Construction Pte Ltd" },
    { abbreviation: "SUPERMEC", definition: "Supermec Pte Ltd" },
    { abbreviation: "RELQ", definition: "Rotary Engineering Qatar" },
    { abbreviation: "REF", definition: "Rotary Engineering Fujairah FZE" },
    {
      abbreviation: "REIT",
      definition: "Rotary Electrical & Instrumentation (Thailand) Limited",
    },
    {
      abbreviation: "TREL",
      definition: "Thai Rotary Engineering Public Company Limited",
    },
    { abbreviation: "PTREI", definition: "P.T. Rotary Engineering Indonesia" },
    { abbreviation: "RMEC", definition: "Rotary MEC (M) Sdn Bhd" },
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
          id="section-definitions-abbreviation"
          style={{
            fontWeight: "bold",
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          2. DEFINITIONS AND ABBREVIATIONS
        </h3>

        <p
          class="section-marker"
          style={{
            color: "red",
            marginBottom: "1rem",
          }}
        >
          [Table listing list of abbreviations / definitions used in the report]
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
                Definition
              </th>
            </tr>
          </thead>
          <tbody>
            {abbreviations.map((item, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.abbreviation}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.definition}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DefinitionsAbbreviations;
