import React from "react";

const Module_1_2_Quan = () => {
  const tableData = [
    {
      ref: "2.6",
      indicator:
        "By river basin, what number of active and inactive tailings dams are within your control?",
      markedRed: true,
      mt: "Ensuring the best management of tailings dams is a critical water-related issue for organizations in the Metals & Mining and Coal sectors. Operational requirements and local factors such as climate or landscape determine the dams’ type and design and subsequently the risk level for this task. Active and inactive tailings dams pose different risks, therefore requiring different management procedures. These questions will demonstrate to data users that organizations understand these issues, are assessing the risks associated, and are taking action to prevent them. Disclosure on the locations and state of the tailings dams will allow data users to relate this information to other responses in the CDP questionnaire that include country/area/region and basin specific information in Module 9",
    },
  ];

  return (
    <div style={{ minHeight: "80vh" }}>
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <h3
          className="section-marker"
          id="mod-1-2-quant"
          style={{ fontWeight: "bold" }}
        >
          Quantitative
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
                  fontWeight: "bold",
                  width: "20%",
                }}
              >
                CDP Ref. No.
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Quantitative indicators to be added in the platform
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                MT#
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {item.ref}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      padding: "8px",
                      color: item.markedRed ? "red" : "black",
                    }}
                  >
                    {item.indicator}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      padding: "8px",
                    }}
                  >
                    {item.mt}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Module_1_2_Quan;
