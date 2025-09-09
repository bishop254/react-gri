import React from "react";

const Module_8_13_Quan = () => {
  const tableData = [
    {
      ref: "8.2",
      indicator: "Total commodity volume handled (metric tons)",
      mt: "Standalone",
      dp: [
        { mt: "MT2535", point: "Name of the commodity", code: "DPAVM0264" },
        { point: "Total disclosed volume (metric tons)", code: "DPAVM0265" },
        {
          point: "Volume type (produced / sourced / sold / processed)",
          code: "DPAVM0266",
        },
        { point: "Produced volume (metric tons)", code: "DPAVM0267" },
        { point: "Sourced volume (metric tons)", code: "DPAVM0268" },
      ],
    },
    {
      ref: "8.10.1",
      indicator:
        "Total known or estimated deforestation and conversion footprint (hectares) during the reporting period",
      mt: "Standalone",
      dp: [
        { mt: "MT2536", point: "Commodity", code: "DPAVM0269" },
        {
          point:
            "Monitoring and estimating your deforestation and conversion footprint",
          code: "DPAVM0270",
        },
        {
          point: "% of disclosure volume monitored or estimated",
          code: "DPAVM0271",
        },
        {
          point: "Reporting of deforestation and conversion footprint",
          code: "DPAVM0272",
        },
        { point: "Year of cutoff date", code: "DPAVM0273" },
        {
          point:
            "Known or estimated deforestation and conversion footprint in the reporting period (hectares)",
          code: "DPAVM0274",
        },
        {
          point:
            "Known or estimated deforestation and conversion footprint in the reporting period (hectares)",
          code: "DPAVM0275",
        },
        {
          point:
            "Known or estimated deforestation and conversion footprint since the specified cutoff date (hectares)",
          code: "DPAVM0276",
        },
        {
          point:
            "Known or estimated deforestation and conversion footprint during the last five years (hectares)",
          code: "DPAVM0277",
        },
        {
          point:
            "Known or estimated deforestation and conversion footprint since other specified point (hectares)",
          code: "DPAVM0278",
        },
        {
          point:
            "Known or estimated deforestation and conversion footprint during the last five years (hectares)",
          code: "DPAVM0279",
        },
        {
          point:
            "Known or estimated deforestation and conversion footprint since other specified point (hectares)",
          code: "DPAVM0280",
        },
        {
          point:
            "Describe the methods and data sources used to monitor or estimate your deforestation and conversion footprint",
          code: "DPAVM0281",
        },
        {
          point:
            "Known or estimated deforestation and conversion footprint since other specified point (hectares)",
          code: "DPAVM0282",
        },
      ],
    },
    {
      ref: "9.2.1",
      indicator:
        "Percentage of hydropower sites/facilities/operations where each water aspect is regularly measured and monitored",
      mt: "Standalone",
      dp: [{ mt: "MT2537", point: "", code: "" }],
    },
    {
      ref: "10.3",
      indicator:
        "Total weight of plastic polymers sold during the reporting year (metric tons)",
      mt: "Standalone",
      dp: [
        {
          mt: "MT2538",
          point: "% Virgin fossil-based content",
          code: "DPAVM0283",
        },
        { point: "% Virgin renewable content", code: "DPAVM0284" },
        { point: "% Pre-consumer recycled content", code: "DPAVM0285" },
        { point: "% Post-consumer recycled content", code: "DPAVM0286" },
        {
          point: "% Other raw material content (if applicable)",
          code: "DPAVM0287",
        },
        {
          point: "Breakdown of raw material sources by supplier type",
          code: "DPAVM0288",
        },
        {
          point:
            "Explanation/notes on methodology and assumptions used for calculating raw material content",
          code: "DPAVM0289",
        },
      ],
    },
    {
      ref: "10.4",
      indicator:
        "Total weight of plastic durable goods and components produced, sold, and/or used during the reporting year (Metric tons)",
      mt: "Standalone",
      dp: [
        {
          mt: "MT2539",
          point: "Total weight during the reporting year (Metric tons)",
          code: "DPAVM0290",
        },
        { point: "% virgin fossil-based content", code: "DPAVM0291" },
        { point: "% virgin renewable content", code: "DPAVM0292" },
        { point: "% pre-consumer recycled content", code: "DPAVM0293" },
        { point: "% post-consumer recycled content", code: "DPAVM0294" },
        { point: "% other material content", code: "DPAVM0295" },
        { point: "Total recycled content (%)", code: "DPAVM0296" },
        {
          point: "Explanation of raw material content calculation",
          code: "DPAVM0297",
        },
      ],
    },
    {
      ref: "10.5",
      indicator:
        "Total weight of plastic packaging sold and/or used during the reporting year (Metric tons)",
      mt: "Standalone",
      dp: [
        {
          mt: "MT2540",
          point: "Total weight during the reporting year (Metric tons)",
          code: "DPAVM0298",
        },
        { point: "% virgin fossil-based content", code: "DPAVM0299" },
        { point: "% virgin renewable content", code: "DPAVM0300" },
        { point: "% post-consumer recycled content", code: "DPAVM0301" },
        { point: "% pre-consumer recycled content", code: "DPAVM0302" },
        { point: "Total raw material content reported (%)", code: "DPAVM0303" },
        {
          point:
            "Total electricity/heat/steam/cooling energy consumption (MWh)",
          code: "DPAVM0304",
        },
        {
          point: "Explanation of methodology and data sources",
          code: "DPAVM0305",
        },
      ],
    },
    {
      ref: "10.5.1",
      indicator: "Percentage of plastic packaging with circularity potential",
      mt: "Derived",
      dp: [
        { point: "% of plastic packaging that is reusable" },
        { point: "% of plastic packaging that is technically recyclable" },
        {
          point:
            "% of plastic packaging that is recyclable in practice at scale",
        },
        { point: "Total weight/volume of reusable plastic packaging" },
        { point: "Total weight/volume of recyclable plastic packaging" },
        { point: "Explanation of methodology used" },
      ],
    },
    {
      ref: "10.6",
      indicator:
        "Total weight of plastic waste generated during the reporting year (metric tons)",
      mt: "Standalone",
      dp: [
        {
          point:
            "Activity (type of plastic-related activity – production, commercialization, use, or processing)",
        },
        {
          point:
            "Total weight of waste generated during the reporting year (metric tons)",
        },
        {
          point:
            "End-of-life management pathways (categories selected based on waste hierarchy)",
        },
        { point: "% prepared for reuse" },
        { point: "% sent for recycling" },
        { point: "% composted (industrial/home)" },
        { point: "% sent to waste-to-energy facilities" },
        { point: "% incinerated without energy recovery" },
        { point: "% sent to landfill" },
        { point: "% mismanaged waste" },
        { point: "% leakage into the environment" },
        { point: "% other (specify)" },
        {
          point:
            "Explanation/notes on methodology, definitions, and assumptions",
        },
      ],
    },
  ];

  return (
    <div style={{ minHeight: "80vh" }}>
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <h3
          className="section-marker"
          id="mod-8-13-quan"
          style={{ fontWeight: "bold" }}
        >
          Module 8 to 13 Quantitative Indicators
        </h3>

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
              <th style={{ border: "1px solid black", padding: "8px" }}>
                CDP Ref. No.
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Quantitative indicators to be added in the platform
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>MT#</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Contributing Data points
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>DP#</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) =>
              item.dp.map((row, i) => (
                <tr key={`${index}-${i}`}>
                  {i === 0 && (
                    <>
                      <td
                        rowSpan={item.dp.length}
                        style={{ border: "1px solid black", padding: "8px" }}
                      >
                        {item.ref}
                      </td>
                      <td
                        rowSpan={item.dp.length}
                        style={{ border: "1px solid black", padding: "8px" }}
                      >
                        {item.indicator}
                      </td>
                      <td
                        rowSpan={item.dp.length}
                        style={{ border: "1px solid black", padding: "8px" }}
                      >
                        {item.mt}
                      </td>
                    </>
                  )}
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {row.point}
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {row.code || ""}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Module_8_13_Quan;
