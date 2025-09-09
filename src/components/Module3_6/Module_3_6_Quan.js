import React from "react";

const Module_3_6_Quan = () => {
  const tableData = [
    {
      ref: "3.5.3",
      indicator: "Details of the tax system",
      mt: "Standalone",
      dp: [
        "Tax system – Name/description of the carbon or emissions tax scheme.",
        "Period start date – Date the reporting period for the tax begins (YYYY-MM-DD).",
        "Period end date – Date the reporting period for the tax ends (YYYY-MM-DD).",
        "% of total Scope 1 emissions covered by tax – Percentage value (%) showing how much of your Scope 1 emissions fall under this tax scheme.",
        "Total cost of tax paid – Monetary amount paid under the tax scheme during the period (specify currency).",
      ],
      dpRef: "",
    },
    {
      ref: "5.5.1",
      indicator:
        "Provide details of your organization’s investments in low-carbon R&D for cement production activities over the last three years.",
      mt: "Standalone",
      dp: [],
      dpRef: "",
    },
    {
      ref: "5.5.2",
      indicator:
        "Provide details of your organization’s investments in low-carbon R&D for capital goods products and services over the last three years.",
      mt: "Standalone",
      dp: [],
      dpRef: "",
    },
    {
      ref: "5.5.3",
      indicator:
        "Provide details of your organization’s investments in low-carbon R&D for chemical production activities over the last three years.",
      mt: "Standalone",
      dp: [],
      dpRef: "",
    },
    {
      ref: "5.5.4",
      indicator:
        "Provide details of your organization’s investments in low-carbon R&D for metals and mining production activities over the last three years.",
      mt: "Standalone",
      dp: [],
      dpRef: "",
    },
    {
      ref: "5.5.5",
      indicator:
        "Provide details of your organization’s investments in low-carbon R&D for steel production activities over the last three years.",
      mt: "Standalone",
      dp: [],
      dpRef: "",
    },
    {
      ref: "5.5.6",
      indicator:
        "Provide details of your organization’s investments in low-carbon R&D for real estate and construction activities over the last three years.",
      mt: "Standalone",
      dp: [],
      dpRef: "",
    },
    {
      ref: "5.5.7",
      indicator:
        "Organisation’s investments in low-carbon R&D for sector-specific activities over the last three years.",
      mt: "Standalone",
      dp: [
        "Technology area in which investments in low-carbon R&D for your sector activities over the last three years.",
        "Stage of development in the reporting year in which investments in low-carbon R&D for your sector activities.",
        "Average % of total R&D investment for low carbon R&D over the last 3 years.",
        "R&D investment figure in the reporting year for low carbon.",
        "Average % of total R&D investment for low carbon planned over the next 5 years.",
        "Explain how your R&D investments in this technology for low carbon technology area is aligned with your climate commitments/transition plan.",
      ],
      dpRef: "",
    },
  ];

  return (
    <div style={{ minHeight: "80vh" }}>
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <h3
          className="section-marker"
          id="mod-3-6-quan"
          style={{ fontWeight: "bold" }}
        >
          Quantitative indicators
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
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "10%",
                }}
              >
                CDP Ref. No.
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "30%",
                }}
              >
                Quantitative indicators to be added in the platform
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "10%",
                }}
              >
                MT#
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "40%",
                }}
              >
                Contributing Data points
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "10%",
                }}
              >
                DP#
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => {
              if (item.dp.length === 0) {
                // Row with no contributing data points
                return (
                  <tr key={index}>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {item.ref}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {item.indicator}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {item.mt}
                    </td>
                    <td
                      style={{ border: "1px solid black", padding: "8px" }}
                    ></td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {item.dpRef}
                    </td>
                  </tr>
                );
              } else {
                // Multiple rows for contributing data points
                return item.dp.map((point, i) => (
                  <tr key={`${index}-${i}`}>
                    {i === 0 && (
                      <>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                          rowSpan={item.dp.length}
                        >
                          {item.ref}
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                          rowSpan={item.dp.length}
                        >
                          {item.indicator}
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                          rowSpan={item.dp.length}
                        >
                          {item.mt}
                        </td>
                      </>
                    )}
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {point}
                    </td>
                    {i === 0 && (
                      <td
                        style={{ border: "1px solid black", padding: "8px" }}
                        rowSpan={item.dp.length}
                      >
                        {item.dpRef}
                      </td>
                    )}
                  </tr>
                ));
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Module_3_6_Quan;
