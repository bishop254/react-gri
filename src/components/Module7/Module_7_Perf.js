import React from "react";

const TableRenderer = ({ id, title, tableData }) => (
  <div style={{ maxWidth: "1000px", margin: "auto" }}>
    <h3 className="section-marker" id={id} style={{ fontWeight: "bold" }}>
      {title}
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
              width: "10%",
            }}
          >
            Sl No
          </th>
          <th
            style={{
              border: "1px solid black",
              padding: "8px",
              fontWeight: "bold",
            }}
          >
            Question
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <React.Fragment key={index}>
            {/* Question row */}
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {item.slNo}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  color: item.markedRed ? "red" : "black",
                }}
              >
                {item.question}
              </td>
            </tr>

            {/* Guidance row */}
            <tr>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontStyle: "italic",
                }}
              >
                Guidance
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {item.guidance}
              </td>
            </tr>

            {/* Sub-table row */}
            {item.tableColumns && item.tableColumns.length > 0 && (
              <tr>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  &nbsp;
                </td>
                <td
                  colSpan={2}
                  style={{ border: "1px solid black", padding: "0" }}
                >
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      textAlign: "left",
                    }}
                  >
                    <thead>
                      <tr>
                        {item.tableColumns.map((col, colIdx) => (
                          <th
                            key={colIdx}
                            style={{
                              border: "1px solid black",
                              padding: "2px",
                            }}
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: item.tableRows }).map(
                        (_, rowIdx) => (
                          <tr key={rowIdx}>
                            {item.tableColumns.map((_, colIdx) => (
                              <td
                                key={colIdx}
                                style={{
                                  border: "1px solid black",
                                  padding: "8px",
                                }}
                              >
                                {item.tableData?.[rowIdx]?.[colIdx] || "\u00A0"}
                              </td>
                            ))}
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </td>
              </tr>
            )}

            {/* Response row */}
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Response
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {item.response}
              </td>
            </tr>

            <tr>
              <td
                colSpan={2}
                style={{ border: "1px solid black", padding: "8px" }}
              >
                &nbsp;
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  </div>
);

const Module_7_Perf = () => {
  const tableDataModuleSeven = [
    {
      slNo: "7.1",
      question: "Is this your first year of reporting emissions data to CDP?",
      guidance:
        "Data users wish to understand year-on-year changes in emissions and this question allows organizations to indicate if they have previously reported emissions data to CDP. It drives follow-up questions on the details of changes to corporate structure, emissions accounting boundary or methodology, or reporting year.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP121_17",
    },
    {
      slNo: "7.1.1",
      question:
        "Has your organization undergone any structural changes in the reporting year, or are any previous structural changes being accounted for in this disclosure of emissions data?",
      guidance:
        "Structural changes such as acquisitions, divestments, and mergers may have a significant impact on base year emissions due to the transfer of ownership or control of emitting activities from one organization to another. While a single structural change might not have a significant impact, the cumulative effect of a number of minor structural changes can result in a significant impact. This question provides data users with important context to any changes in emissions that may trigger base year emissions recalculation.",
      tableColumns: [
        "Has there been a structural change?",
        "Name of organisations acquired, divested from or merged with",
        "Details of structural changes (including completion dates)",
      ],
      tableRows: 1,
      tableData: [["SDP121_52", "", ""]],
      response: "",
    },
    {
      slNo: "7.1.2",
      question:
        "Has your emissions accounting methodology, boundary, and/or reporting year definition changed in the reporting year?",
      guidance:
        "Changes in emissions calculation methodology, reporting boundary approach, and/or reporting year could result in a significant impact on the base year emissions and compromise the consistency and relevance of a company’s GHG emissions inventory. This question provides data users with important context to any changes in emissions that may trigger base year emissions recalculation.",
      tableColumns: [
        "Change in methodology, boundary and/or reporting year definition?",
        "Details of methodology, boundary and/or reporting year definition changes",
      ],
      tableRows: 1,
      tableData: [["SDP121_52", ""]],
      response: "",
    },
    {
      slNo: "7.1.3",
      question:
        "If you have provided yes to the previous question please respond to this question: Have your organization’s base year emissions and past years’ emissions been recalculated as a result of any changes or errors reported in 7.1.1 and/or 7.1.2?",
      guidance:
        "Significant changes (structural, methodological, boundary etc.) can alter a company’s emissions profile, making meaningful historical comparisons difficult. To maintain consistency over time, base year emissions must be retroactively recalculated to reflect changes in the company that would otherwise compromise the consistency and relevance of a company’s GHG emissions inventory. This question allows data users to understand whether the company has recalculated their base year emissions as a result of the changes or errors disclosed in 7.1.1 and 7.1.2.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP121_51",
    },
    {
      slNo: "7.2",
      question:
        "Select the name of the standard, protocol, or methodology you have used to collect activity data and calculate emissions.",
      guidance:
        "CDP data users need to understand what methods have been used to calculate emissions.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP121_18",
    },
    {
      slNo: "7.3",
      question:
        "Describe your organization’s approach to reporting Scope 2 emissions.",
      guidance:
        "The purpose of this question is to allow companies to disclose their approach to calculating their Scope 2 emissions. This is particularly relevant when considering market-based Scope 2 emissions, as it is important to differentiate between companies that have not reported a market-based figure as they do not have operations where there are those contractual instruments, and those companies that do have operations where there are contractual instruments but have chosen not to disclose a market-based figure. CDP asks this question to enable accurate comparability across companies.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP121_19",
    },
    {
      slNo: "7.4",
      question:
        "Are there any sources (e.g. facilities, specific GHGs, activities, geographies, etc.) of Scope 1, Scope 2 or Scope 3 emissions that are within your selected reporting boundary which are not included in your disclosure?",
      guidance:
        "In some cases it can be difficult to gather data for all sources. Circumstances where this might be the case include sources in countries/areas or small facilities where data acquisition is difficult or unreliable. Structural changes to the organization including mergers, acquisitions and divestments can also be reasons where emissions data are not included in your disclosure. This question enables companies to report where these sources are not included in the disclosure and thus provides data users transparency into reported emissions inventories.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP121_20",
    },
    {
      slNo: "7.4.1",
      question:
        "Provide details of the sources of Scope 1, Scope 2, or Scope 3 emissions that are within your selected reporting boundary which are not included in your disclosure.",
      guidance:
        "In some cases it can be difficult to gather data for all sources. Circumstances where this might be the case include sources in countries/areas or small facilities where data acquisition is difficult or unreliable. Structural changes to the organization including mergers, acquisitions and divestments can also be reasons where emissions data are not included in your disclosure. This question enables companies to report where these sources are not included in the disclosure and thus provides data users transparency into reported emissions inventories.",
      tableColumns: [
        "Source of excluded emissions",
        "Scope(s) or Scope 3 category(ies)",
        "Relevance of Scope 1 emissions from this source",
        "Relevance of location based Scope 2 emissions from this source",
        "Relevance of market-based Scope 2 emissions from this source",
        "Relevance of Scope 3 emissions from this source",
      ],
      tableRows: 1,
      tableData: [["SDP121_21", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.5",
      question: "Provide your base year and base year emissions.",
      guidance:
        "A meaningful and consistent comparison of emissions over time requires that organizations set a performance datum with which to compare current emissions.",
      tableColumns: [
        "Scope",
        "Base year end",
        "Base year emissions (metric tons CO2e)",
        "Methodological details",
      ],
      tableRows: 8,
      tableData: [
        ["Scope 1", "SDP121_22", "MT162", ""],
        ["Scope 2 (location based)", "SDP121_22", "MT2066", ""],
        [
          "Scope 3 category 1 Purchased goods and services",
          "SDP121_22",
          "MT170",
          "",
        ],
        ["Scope 3 category 2 Capital goods", "SDP121_22", "MT171", ""],
        [
          "Scope 3 category 3: Fuel and energy related activities (not included in Scope 1 or 2)",
          "SDP121_22",
          "MT172",
          "",
        ],
        [
          "Scope 3 category 4: Upstream transportation and distribution",
          "SDP121_22",
          "MT173",
          "",
        ],
        [
          "Scope 3 category 5: Waste generated in operation",
          "SDP121_22",
          "MT174",
          "",
        ],
        ["Scope 3 category 6: Business travel", "SDP121_22", "MT175", ""],
        ["Scope 3 category 7: Employee commuting", "SDP121_22", "MT176", ""],
      ],
      response: "",
    },
    {
      slNo: "7.6",
      question:
        "What were your organization’s gross global Scope 1 emissions in metric tons CO2e?",
      guidance:
        "Reporting emissions is a prerequisite to understanding and reducing negative environmental impacts. This question aims to ensure organizations are measuring their carbon footprints from direct emissions.",
      tableColumns: [
        "Year",
        "Gross global Scope 1 emissions (metric tons CO2e)",
        "End date",
        "Methodological details",
      ],
      tableRows: 1,
      tableData: [["SDP121_22", "MT162", "", ""]],
      response: "",
    },
    {
      slNo: "7.7",
      question:
        "What were your organization’s gross global Scope 2 emissions in metric tons CO2e?",
      guidance:
        "Reporting emissions is a pre-requisite to understanding and reducing negative environmental impacts. This question ensures organizations are measuring emissions from purchased or acquired electricity, steam, heat, and cooling.",
      tableColumns: [
        "Year",
        "Gross global Scope 2, location based emissions (metric tons CO2e)",
        "Gross global Scope 2, market based emissions (metric tons CO2e)",
        "End date",
        "Methodological value",
      ],
      tableRows: 1,
      tableData: [["SDP121_22", "MT2066", "MT1839", "", ""]],
      response: "",
    },
    {
      slNo: "7.8",
      question:
        "Account for your organization’s gross global Scope 3 emissions, disclosing and explaining any exclusions.",
      guidance:
        "For most organizations, the majority of emissions occur in stages of the value chain beyond their direct operations. This question allows data users to gauge the thoroughness of organizations’ accounting processes and to understand how organizations are analyzing their emissions footprints.",
      tableColumns: [
        "Scope 3 category",
        "Evaluation status",
        "Emission in reporting year (metric tons CO2e)",
        "Emission calculation methodology",
        "Percentage of emission calculated using data obtained from suppliers or value chain partners",
      ],
      tableRows: 1,
      tableData: [["", "", "MT164", "SDP121_18", ""]],
      response: "",
    },
    {
      slNo: "7.8.1",
      question:
        "Disclose or restate your Scope 3 emissions data for previous years.",
      guidance:
        "A prerequisite for a meaningful emissions data comparison is a consistent data set over time. This question enables companies to restate Scope 3 emissions data previously supplied to CDP, for example to ensure that their historical data reflects their current organizational boundary. It also enables first-time responders to provide Scope 3 emissions data for the five years prior to the reporting year.",
      tableColumns: [
        "Year",
        "End date",
        "Scope 3: Purchased goods and services (metric tons CO2e)",
        "Scope 3: Capital goods (metric tons CO2e)",
        "Scope 3: Fuel and energy related activities (not included in Scopes 1 or 2) (metric tons CO2e)",
        "Scope 3: Upstream transportation and distribution (metric tons CO2e)",
      ],
      tableRows: 1,
      tableData: [["SDP121_23", "", "MT170", "MT171", "MT172", "MT173"]],
      response: "",
    },
    {
      slNo: "7.9",
      question:
        "Indicate the verification/assurance status that applies to your reported emissions.",
      guidance:
        "CDP supports verification and assurance as good practice in environmental reporting. This question gives data users further confidence in the accuracy of the data reported.",
      tableColumns: ["Scope", "Verification/Assurance data"],
      tableRows: 1,
      tableData: [["SDP121_24", "SDP121_24"]],
      response: "",
    },
    {
      slNo: "7.9.1",
      question:
        "Provide further details of the verification/assurance undertaken for your Scope 1 emissions, and attach the relevant statements.",
      guidance:
        "CDP supports verification and assurance as good practice in environmental reporting. This question gives data users further confidence in the accuracy of the data reported.",
      tableColumns: [
        "Verification or assurance cycle in place",
        "Status in the current reporting year",
        "Type of verification or assurance",
        "Attach the statement",
        "Page/section reference",
        "Relevant standard",
        "Proportion of reported emissions verified (%)",
      ],
      tableRows: 1,
      tableData: [["SDP121_25", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.9.2",
      question:
        "Provide further details of the verification/assurance undertaken for your Scope 2 emissions and attach the relevant statements.",
      guidance:
        "CDP supports verification and assurance as good practice in environmental reporting. This question gives data users further confidence in the accuracy of the data reported.",
      tableColumns: [
        "Scope 2 approach",
        "Verification or assurance cycle in place",
        "Status in the current reporting year",
        "Type of verification or assurance",
        "Attach the statement",
        "Page/section reference",
        "Relevant standard",
        "Proportion of reported emissions verified (%)",
      ],
      tableRows: 1,
      tableData: [["SDP121_26", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.9.3",
      question:
        "Provide further details of the verification/assurance undertaken for your Scope 3 emissions and attach the relevant statements.",
      guidance:
        "CDP supports verification and assurance as good practice in environmental reporting. This question gives data users further confidence in the accuracy of the data reported.",
      tableColumns: [
        "Scope 3 category",
        "Verification or assurance cycle in place",
        "Status in the current reporting year",
        "Type of verification or assurance",
        "Attach the statement",
        "Page/section reference",
        "Relevant standard",
        "Proportion of reported emissions verified (%)",
      ],
      tableRows: 1,
      tableData: [["SDP121_27", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.10",
      question:
        "How do your gross global emissions (Scope 1 and 2 combined) for the reporting year compare to those of the previous reporting year?",
      guidance:
        "Investors and data users are interested in understanding whether companies are successfully reducing their emissions year over year.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP121_28",
    },
    {
      slNo: "7.10.1",
      question:
        "Identify the reasons for any change in your gross global emissions (Scope 1 and 2 combined), and for each of them specify how your emissions compare to the previous year.",
      guidance:
        "When investigating how year-on-year gross global emissions (Scope 1 + 2 combined) have changed, CDP and its investors are interested in changes at a granular level; thus allowing CDP’s data users to gain an insight into factors than have contributed to these changes.",
      tableColumns: [
        "Reason",
        "Change in emissions (metric tons CO2e)",
        "Direction of change in emissions",
        "Emissions value (percentage)",
        "Please explain calculation",
      ],
      tableRows: 1,
      tableData: [["SDP121_29", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.10.2",
      question:
        "Are your emissions performance calculations in 7.10 and 7.10.1 based on a location-based Scope 2 emissions figure or a market-based Scope 2 emissions figure?",
      guidance:
        "This question provides more transparency on how your organization’s emissions performance figures are derived.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP121_30",
    },
    {
      slNo: "7.11",
      question:
        "How do your total Scope 3 emissions for the reporting year compare to those of the previous reporting year?",
      guidance:
        "Indirect emissions in the value chain are key for this sector. Data users are therefore interested in understanding whether companies are successfully reducing their Scope 3 emissions year on year.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP121_31",
    },
    {
      slNo: "7.11.1",
      question:
        "For each Scope 3 category calculated in 7.8, specify how your emissions compare to the previous year and identify the reason for any change.",
      guidance:
        "This question asks how emissions from specific Scope 3 categories have changed. This level of granularity allows data users to gain insight into the factors that have contributed to these changes.",
      tableColumns: [
        "Scope 3 category",
        "Direction of change",
        "Primary reason for change",
        "Change in emissions in this category (metric tons CO2e)",
        "% change in emissions in this category",
        "Please explain",
      ],
      tableRows: 1,
      tableData: [["SDP121_32", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.12",
      question:
        "Are carbon dioxide emissions from biogenic carbon relevant to your organization?",
      guidance:
        "The GHG Protocol’s Corporate Accounting and Reporting Standard outlines that carbon dioxide emissions from biogenic carbon shall be reported separately from the Scopes.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP121_33",
    },
    {
      slNo: "7.12.1",
      question:
        "Provide the emissions from biogenic carbon relevant to your organization in metric tons CO2.",
      guidance:
        "This question provides data users insight into the CO2 emissions from biogenic carbon. Reporting these emissions separately aligns with best practice environmental reporting and the GHG Protocol’s Corporate Accounting and Reporting Standard.",
      tableColumns: [
        "CO2 emissions from biogenic carbon (metric tons CO2)",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT1823", ""]],
      response: "",
    },
    {
      slNo: "7.13",
      question:
        "Is biogenic carbon pertaining to your direct operations relevant to your current CDP climate change disclosure?",
      guidance:
        "According to the GHG Protocol Agricultural Guidance, except for land use change (LUC) that results in a reduction of carbon stock, all other CO2 fluxes to/from biologically based carbon pools that are owned or controlled by you should be reported separately from the Scopes in a special “Biogenic Carbon” category. Thus, this question gathers information on biogenic carbon that is not included in your Scope 1 and Scope 2 figures. This information provides context to data users on the extent of your biogenic carbon fluxes and on the neutrality of your CO2 emissions. Note that this question asks about any CO2 fluxes that have not resulted in a reduction of carbon stock, as well as any CO2 emissions from biofuel/biomass combustion in, but not limited to, machinery and vehicles (e.g. land/processing/manufacturing machinery, transportation vehicles).",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP121_34",
    },
    {
      slNo: "7.13.1",
      question:
        "Account for biogenic carbon data pertaining to your direct operations and identify any exclusions.",
      guidance:
        "This question gathers data on biogenic carbon that is not included in your Scope 1 and Scope 2 figures. This information provides context to data users on the extent of your biogenic carbon fluxes and on the neutrality of your CO2 emissions.",
      tableColumns: [
        "Type of change",
        "Emissions (metric tons CO2)",
        "Methodology",
        "Please explain",
      ],
      tableRows: 1,
      tableData: [["SDP121_35", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.14",
      question:
        "Do you calculate greenhouse gas emissions for each agricultural commodity reported as significant to your business?",
      guidance:
        "Agricultural commodities that are significant to your business in terms of revenue could be closely associated with large CO2 emissions and signal dependency on natural capital and its associated ecosystem services under threat by climate change. This question enables data users to gauge how prepared your organization is to respond to risks related to your reliance on agricultural commodities by assessing whether you collect and/or calculate greenhouse gas (GHG) emissions data on these commodities. This information also provides further context to data users about the magnitude of the climate-related risks associated with your business where these commodities are not produced/sourced sustainably or managed carefully.",
      tableColumns: [
        "Agricultural commodities",
        "GHG emissions calculated for this commodity",
        "Reporting emissions by",
        "Emissions (metric tons CO2e)",
        "Denominator: unit of production",
        "Change from last reporting year",
      ],
      tableRows: 8,
      tableData: [
        ["Cattle products", "", "", "MT2482", "", ""],
        ["Cocoa", "", "", "MT2483", "", ""],
        ["Coffee", "", "", "MT2484", "", ""],
        ["Dairy and egg products", "", "", "MT2485", "", ""],
        ["Sea food and aquaculture", "", "", "MT2486", "", ""],
        ["Fruit", "", "", "MT2487", "", ""],
        ["Maize/ Corn", "", "", "MT2488", "", ""],
        ["Nuts", "", "", "MT2489", "", ""],
        ["Other Grain", "", "", "MT2490", "", ""],
      ],
      response: "",
    },
    {
      slNo: "7.15",
      question:
        "Does your organization break down its Scope 1 emissions by greenhouse gas type?",
      guidance:
        "For many sectors and business activities, greenhouse gases other than carbon dioxide are significant and relevant. Since these gases are often only reported in CO2-equivalents (CO2e), their contribution to overall emissions is sometimes masked. CDP therefore requests companies to break down their gross Scope 1 emissions by GHG type.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP121_37",
    },
    {
      slNo: "7.15.1",
      question:
        "Break down your total gross global Scope 1 emissions by greenhouse gas type and provide the source of each used global warming potential (GWP).",
      guidance:
        "For many sectors and business activities, greenhouse gases other than carbon dioxide are significant and relevant. Since these gases are often only reported in CO2-equivalents (CO2e), their contribution to overall emissions is sometimes masked. CDP therefore requests companies to break down their gross Scope 1 emissions by GHG type.",
      tableColumns: [
        "Greenhouse gas",
        "Scope 1 emissions (metric tons of CO2e)",
        "GWP Reference",
      ],
      tableRows: 1,
      tableData: [["MT2491", "", ""]],
      response: "",
    },
    {
      slNo: "7.15.2",
      question:
        "Break down your total gross global Scope 1 emissions from coal mining activities in the reporting year by greenhouse gas type.",
      guidance:
        "Coal sector organizations face significant exposure to transitions around global GHG emissions either directly through the companies’ own energy use for production or indirectly through combustion of fossil fuels. Organizations with coal mining activities are therefore requested to provide gross emissions for their emission sources by greenhouse gas type so that users of the information can account for the GHG emissions from the various emission sources including fugitive, combustion, and other emission sources.",
      tableColumns: [
        "Emissions sources",
        "Gross Scope 1 CO2 emissions (metric tons CO2)",
        "Gross Scope 1 methane emissions (metric tons CH4)",
        "Total gross Scope 1 GHG emissions (metric tons CO2e)",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2492", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.15.3",
      question:
        "Break down your total gross global Scope 1 emissions from electric utilities value chain activities by greenhouse gas type.",
      guidance:
        "Electric utilities face significant exposure from the transition to a zero-carbon economy through their global greenhouse gas emissions, either directly through electric utility companies’ own energy use for production, or indirectly through combustion of fossil fuels. Electricity production is responsible for approximately 25% of the world’s GHG production. Electric utilities are therefore requested to provide gross emissions for their emission sources by greenhouse gas from sources including fugitive, combustion and other emission sources.",
      tableColumns: [
        "Emissions sources",
        "Gross Scope 1 CO2 emissions (metric tons CO2)",
        "Gross Scope 1 methane emissions (metric tons CH4)",
        "Gross Scope 1 SF6 emissions (metric tons SF6)",
        "Total gross Scope 1 emissions (metric tons CO2e)",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2493", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.15.4",
      question:
        "Break down your total gross global Scope 1 emissions from oil and gas value chain production activities by greenhouse gas type.",
      guidance:
        "Reporting gross global Scope 1 emissions by emission category allows for a more in-depth understanding of business risks, such as exposure to future regulation. The emissions categories are broken down to provide data users with a relevant and complete understanding of your organization’s oil and gas production activities and how these contribute to your emissions profile.",
      tableColumns: [
        "Emissions category",
        "Value chain",
        "Product",
        "Gross Scope 1 CO2 emissions (metric tons CO2)",
        "Gross Scope 1 methane emissions (metric tons CH4)",
        "Total gross Scope 1 emissions (metric tons CO2e)",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2494", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.16",
      question:
        "Break down your total gross global Scope 1 and 2 emissions by country/area.",
      guidance:
        "By breaking down emissions to country/area level, information and data can be made available to help guide the development of emissions-related legislation.",
      tableColumns: [
        "Country/ area",
        "Scope 1 emissions (metric tons CO2e)",
        "Scope 2, location based (metric tons CO2e)",
        "Scope 2 market based (metric tons CO2e)",
      ],
      tableRows: 1,
      tableData: [["", "MT161", "MT1838", "MT1839"]],
      response: "",
    },
    {
      slNo: "7.17",
      question:
        "Indicate which gross global Scope 1 emissions breakdowns you are able to provide.",
      guidance:
        "By requesting companies to break down emissions by business division, facility, and activity, CDP grants data users and investors transparency into the sources of a company's Scope 1 emissions.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP121_38",
    },
    {
      slNo: "7.17.1",
      question:
        "If you have provided yes to the previous question please respond to this question: Break down your total gross global Scope 1 emissions by business division.",
      guidance:
        "This question can give an indication of the relative GHG performance of your company’s divisions. When reported over time, your company and CDP’s data users will be able to review improvements or declines in division performance.",
      tableColumns: [
        "Business division",
        "Scope 1 emissions (metric tons CO2e)",
      ],
      tableRows: 1,
      tableData: [["", "MT161"]],
      response: "",
    },
    {
      slNo: "7.17.2",
      question:
        "Break down your total gross global Scope 1 emissions by business facility.",
      guidance:
        "Providing facility-level emission figures may give data users insight into your organization’s current/potential exposure to regulation in this area. Reporting at this level can provide a useful indicator for making comparisons between facilities.",
      tableColumns: [
        "Facility",
        "Scope 1 emissions (metric tons CO2e)",
        "Latitude",
        "Longitude",
      ],
      tableRows: 1,
      tableData: [["", "MT161", "", ""]],
      response: "",
    },
    {
      slNo: "7.17.3",
      question:
        "If you have provided yes to the previous question please respond to this question: Break down your total gross global Scope 1 emissions by business activity.",
      guidance:
        "Reporting emissions by activity allows a more in-depth understanding of business risks related to future regulation and climate-related issues, and allows organizations to identify potential opportunities to reduce emissions associated with operational activities.",
      tableColumns: ["Activity", "Scope 1 emissions (metric tons CO2e)"],
      tableRows: 1,
      tableData: [["", "MT161"]],
      response: "",
    },
    {
      slNo: "7.18",
      question:
        "Do you include emissions pertaining to your business activity(ies) in your direct operations as part of your global gross Scope 1 figure?",
      guidance:
        "This question gathers data on whether an emissions figure has been calculated for activities pertaining this sector, taking place within your organizational boundary, and is being reported as part of your gross Scope 1. This informs data users on whether your Scope 1 figure is representative of your business’ activities and their associated climate-related impacts",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP121_39",
    },
    {
      slNo: "7.18.1",
      question:
        "Select the form(s) in which you are reporting your agricultural/forestry emissions.",
      guidance:
        "This question provides you the option to breakdown CO2e emissions associated with agricultural/forestry activities in your land in further categories, as advised by the GHG Protocol",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "",
    },
    {
      slNo: "7.18.2",
      question:
        "Report the Scope 1 emissions pertaining to your business activity(ies) and explain any exclusions. If applicable, disaggregate your agricultural/forestry by GHG emissions category.",
      guidance:
        "This question gathers information on Scope 1 data pertaining your relevant business activities and gives organizations an opportunity to provide further emissions breakdowns, as advised by the GHG Protocol.",
      tableColumns: [
        "Activity",
        "Emissions Category",
        "Emissions (metric tons CO2e)",
        "Methodology",
        "Please explain",
      ],
      tableRows: 1,
      tableData: [["SDP121_40", "", "MT164", "", ""]],
      response: "",
    },
    {
      slNo: "7.18.3",
      question:
        "If you have provided yes to the previous question please respond to this question: Why do you not include greenhouse gas emissions pertaining your business activity(ies) in your direct operations as part of your global gross Scope 1 figure? Describe any plans to do so in the future.",
      guidance:
        "This question aims to identify the main reason for why you have not included emissions pertaining to relevant business activities taking place within your organizational boundary, as part of your gross Scope 1 figure. This informs data users on whether your Scope 1 figure is representative of your business’ activities and their associated climate-related impacts and indicates if have any plans to do so in the next two years.",
      tableColumns: ["Primary reason", "Please explain"],
      tableRows: 1,
      tableData: [["SDP121_41", ""]],
      response: "",
    },
    {
      slNo: "7.19",
      question:
        "Break down your organization’s total gross global Scope 1 emissions by sector production activity in metric tons CO2e.",
      guidance:
        "Reporting emissions by activity allows a more in-depth understanding of business risks related to future regulation and climate-related issues, and allows organizations to identify potential opportunities to reduce emissions associated with operational activities.",
      tableColumns: [
        "Sector production activity",
        "Gross Scope 1 emissions, metric tons CO2e",
        "Net Scope 1 emissions, metric tons CO2e",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["", "MT161", "", ""]],
      response: "MT2495",
    },
    {
      slNo: "7.20",
      question:
        "Indicate which gross global Scope 2 emissions breakdowns you are able to provide.",
      guidance:
        "By requesting companies to break down emissions by business division, facility, and activity, CDP grants data users and investors transparency into the sources of a company's Scope 2 emissions.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP121_42",
    },
    {
      slNo: "7.20.1",
      question:
        "If you have provided yes to the previous question please respond to this question: Break down your total gross global Scope 2 emissions by business division.",
      guidance:
        "This question can give an indication of the relative GHG performance of your company’s divisions. When reported over time, your company and CDP’s data users will be able to review improvements or declines in division performance.",
      tableColumns: [
        "Business division",
        "Scope 2, location-based (metric tons CO2e)",
        "Scope 2, market-based (metric tons CO2e)",
      ],
      tableRows: 1,
      tableData: [["SDP184_34", "MT1838", "MT1839"]],
      response: "",
    },
    {
      slNo: "7.20.2",
      question:
        "Break down your total gross global Scope 2 emissions by business facility.",
      guidance:
        "Providing facility-level emission figures may give data users insight into your organization’s current/potential exposure to regulation in this area. Reporting at this level can provide a useful indicator for making comparisons between facilities.",
      tableColumns: [
        "Facility",
        "Scope 2, location-based (metric tons CO2e)",
        "Scope 2, market-based (metric tons CO2e)",
      ],
      tableRows: 1,
      tableData: [["SDP184_35", "MT1838", "MT1839"]],
      response: "",
    },
    {
      slNo: "7.20.3",
      question:
        "If you have provided yes to the previous question please respond to this question: Break down your total gross global Scope 2 emissions by business activity.",
      guidance: "",
      tableColumns: [
        "Activity",
        "Scope 2, location-based (metric tons CO2e)",
        "Scope 2, market-based (metric tons CO2e)",
      ],
      tableRows: 1,
      tableData: [["SDP184_36", "MT1838", "MT1839"]],
      response: "",
    },
    {
      slNo: "7.21",
      question:
        "Break down your organization’s total gross global Scope 2 emissions by sector production activity in metric tons CO2e.",
      guidance:
        "Reporting emissions by activity allows a more in-depth understanding of business risks related to future regulation and climate-related issues, and allows organizations to identify potential opportunities to reduce emissions associated with operational activities.",
      tableColumns: [
        "Sector production activity",
        "Scope 2, location based, metric tons CO2e",
        "Scope 2, market-based (if applicable), metric tons CO2e",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["SDP184_37", "MT1838", "MT1839", ""]],
      response: "",
    },
    {
      slNo: "7.22",
      question:
        "Break down your gross Scope 1 and Scope 2 emissions between your consolidated accounting group and other entities included in your response.",
      guidance:
        "Awareness of emissions associated with the consolidated accounting group enables the organization to target actions to reduce emissions. The breakdown also provides data users with the opportunity to better understand the emissions sources and therefore risks and opportunities throughout the business.",
      tableColumns: [
        "Group of entities",
        "Scope 1 emissions (metric tons CO2e)",
        "Scope 2, location based emissions (metric tons CO2e)",
        "Scope 2 market based emissions (metric tons CO2e)",
        "Please explain",
      ],
      tableRows: 2,
      tableData: [
        ["Consolidated accounting group", "MT164", "MT1838", "MT1839", ""],
        ["All other entities", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "7.23",
      question:
        "Is your organization able to break down your emissions data for any of the subsidiaries included in your CDP response?",
      guidance:
        "Awareness of subsidiary-level emission figures enables a parent company to better target action to reduce emissions. The breakdown also provides investors and other data users with the opportunity of better understanding the emissions sources and therefore the risks and opportunities throughout the business.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP121_43",
    },
    {
      slNo: "7.23.1",
      question:
        "If you have provided yes to the previous question please respond to this question: Break down your gross Scope 1 and Scope 2 emissions by subsidiary.",
      guidance:
        "Awareness of subsidiary-level emissions enables a parent organization to target actions to reduce emissions. The breakdown also provides data users with the opportunity to better understand the emissions sources and therefore risks and opportunities throughout the business.",
      tableColumns: [
        "Subsidiary name",
        "Primary activity",
        "Select the unique identifiers you are able to provide for this subsidiary",
        "ISIN code – bond",
        "ISIN code – equity",
        "CUSIP number",
        "Ticker symbol",
        "SEDOL code",
        "LEI number",
        "D-U-N-S number",
        "Other unique identifier",
        "Scope 1 emissions (metric tons CO2e)",
        "Scope 2, location based emissions (metric tons CO2e)",
        "Scope 2, market based emissions (metric tons CO2e)",
        "Comment",
      ],
      tableRows: 1,
      tableData: [
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "MT161",
          "MT1838",
          "MT1839",
          "",
        ],
      ],
      response: "",
    },
    {
      slNo: "7.24",
      question:
        "Report your methane emissions as percentages of natural gas and hydrocarbon production or throughput.",
      guidance:
        "Emissions of methane, the main component of natural gas, represent a loss of resources that directly impact topline revenue for oil and gas organizations. Data users need rigorous, accurate, and comparable information to assess organizations’ emissions of methane. By reporting emissions as a percentage of production or throughput, the resulting data becomes comparable between companies, regardless of size, and over time, as a given company’s operations evolve.",
      tableColumns: [
        "Oil and gas business division",
        "Estimated total methane emitted expressed as % of natural gas production or throughput at given division",
        "Estimated total methane emitted expressed as % of total hydrocarbon production or throughput at given division",
        "Indicate whether your methane emissions figure is based on observational data",
        "Details of methodology",
      ],
      tableRows: 1,
      tableData: [["MT2545", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.25",
      question:
        "Disclose the percentage of your organization’s Scope 3, Category 1 emissions by purchased chemical feedstock.",
      guidance:
        "Accounting for Scope 3, Category 1 emissions from purchased feedstock can help to identify the value chain components with greatest emission reduction potential, improve GHG performance of suppliers, and inform the development of sector-specific guidance for the chemical industry.",
      tableColumns: [
        "Purchased feedstock",
        "Percentage of Scope 3, Category 1 tCO2e from purchased feedstock",
        "Explain calculation methodology",
      ],
      tableRows: 1,
      tableData: [["MT2546", "", ""]],
      response: "",
    },
    {
      slNo: "7.25.1",
      question: "Disclose sales of products that are greenhouse gases.",
      guidance:
        "Reporting sales of products that are greenhouse gases allows a more in-depth understanding of your Scope 3 emissions and business risks associated with potential future climate-related regulation.",
      tableColumns: ["Output product", "Sales, metric tons", "Comment"],
      tableRows: 1,
      tableData: [["MT2547", "", ""]],
      response: "",
    },
    {
      slNo: "7.26",
      question:
        "Allocate your emissions to your customers listed below according to the goods or services you have sold them in this reporting period.",
      guidance:
        "This information provides clarity to requesting Supply Chain members on the emissions associated with goods and products sold to them over the reporting year. This supports transparency in emissions allocations, verification of these emissions allocations and methodologies used. This question also provides transparency regarding how data was acquired and used to derive emissions values allocated to requesting Supply Chain members.",
      tableColumns: [
        "Requesting member",
        "Scope of emission",
        "Scope 3 category (ies)",
        "Allocation level",
        "Allocation level detail",
        "Allocation method",
        "Unit for market value or quatity of goods/services supplied",
        "Market value or quantity of goods/ services supplied to the request member",
        "Emissions in metric tonnes of CO2e",
        "Uncertainty",
        "Major sources of emissions",
        "Allocation verified by a third party?",
        "Please explain how you have identified the GHG source, including major limitatiotions to this process and assumptions made",
        "Where published informationhas been used please provide a reference",
        "Actions",
      ],
      tableRows: 1,
      tableData: [["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.27",
      question:
        "What are the challenges in allocating emissions to different customers, and what would help you to overcome these challenges?",
      guidance:
        "The purpose of this question is to provide your customers with insights about the challenges in assigning specific emissions to them from your products or services. In certain cases, it might be that specific solutions can be found between you and your customer to overcome those challenges.",
      tableColumns: [
        "Allocation challenges",
        "Please eplain what would help you overcome these challenges",
        "Actions",
      ],
      tableRows: 3,
      tableData: [
        [
          "Raw materials are supplied from various location and through multiple transport modes making it difficult to track the Scope 3 emissions of each raw material.",
          "Centralized Logistic services with integrated tracking will support.",
          "SDP121_44",
        ],
        [
          "Calculating carbon intensity till the base product (SFG level) will be possible. When it comes to FG level, again complexity increases due to verities of products and process. Also process level data integrity to be improved to have more accurate emission related data.",
          "",
          "SDP121_44",
        ],
        [
          "Emission factors varies between the locations.",
          "Localizing raw materials.",
          "SDP121_44",
        ],
      ],
      response: "",
    },
    {
      slNo: "7.28",
      question:
        "Do you plan to develop your capabilities to allocate emissions to your customers in the future?",
      guidance:
        "This question aims to provide your customers with insights and transparency into how you aim to develop your capabilities to allocate emissions to them, and thus allow them to gain a greater understanding of the emissions and/or energy intensity of the goods/services that you provide to them.",
      tableColumns: [
        "Do you plan to develop your capabilites to allocate emissions to your customer in future?",
        "Describe how you plan to develop your capabilities",
        "Primary reason for no plans to develop your capabilities to allocate emissions to your customers",
        "Explain why you do not plan to develop capabilities to allocate emissions to your customers",
      ],
      tableRows: 1,
      tableData: [
        [
          "Yes",
          "We are planning to account product life cycle in terms of carbon footprint of all our products considering Scope 1,2&3 which will help in allocating our total emissions as per the customers.",
          "SDP121_45",
          "",
        ],
      ],
      response: "",
    },
    {
      slNo: "7.29",
      question:
        "What percentage of your total operational spend in the reporting year was on energy?",
      guidance:
        "The aim of this question is to identify the degree to which your organization’s activities are sensitive to energy costs and energy supply.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "MT2548",
    },
    {
      slNo: "7.30",
      question:
        "Select which energy-related activities your organization has undertaken.",
      guidance:
        "This question provides data users with information on the organization’s consumption of energy forms relating to Scope 1 and Scope 2 emissions, and transparency on the generation of energy.",
      tableColumns: [
        "Activity",
        "Indicate whether your organization undertook this energy related activity in the reporting year",
      ],
      tableRows: 1,
      tableData: [["SDP121_46", ""]],
      response: "",
    },
    {
      slNo: "7.30.1",
      question:
        "If you have provided yes to the previous question please respond to this question: Report your organization’s energy consumption totals (excluding feedstocks) in MWh.",
      guidance:
        "Given the importance of energy consumption in emissions accounting, this question attempts to provide transparency to data users on the consumption of energy by the organization. The question provides the opportunity for organizations to disclose their total energy consumption and distinguish renewable and non-renewable forms of energy.",
      tableColumns: [
        "Activity",
        "Heating value",
        "MWh from renewable sources",
        "MWh from non renewable sources",
        "Total (renewable + non-renewable) MWh",
      ],
      tableRows: 1,
      tableData: [["MT2497", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.30.2",
      question:
        "Report your organization’s energy consumption totals (excluding feedstocks) for cement production activities in MWh.",
      guidance:
        "Question 7.30 has been modified and represented here for the cement sector. This is to enable consistency of reporting across organizations with varying coverage over activities that may be separate from the cement sector or independent of the production activities defining the cement sector. Cement is also one of the most energy intensive sectors of industry, so it is important to represent the sector separately from outside activities.",
      tableColumns: ["Activity", "Heating value", "Total MWh"],
      tableRows: 1,
      tableData: [["MT2498", "", ""]],
      response: "",
    },
    {
      slNo: "7.30.3",
      question:
        "Report your organization’s energy consumption totals (excluding feedstocks) for chemical production activities in MWh.",
      guidance:
        "Question 7.30.1 has been modified and represented here for the chemicals sector. This is to enable consistency of reporting across organizations with varying coverage over activities that may be separate from the chemicals sector or independent of the production activities defining the chemicals sector. Chemicals is also one of the largest energy users of industry, so it is important to represent the sector separately from outside activities.",
      tableColumns: [
        "Activity",
        "Heating value",
        "MWh consumed from renewable sources inside chemical sector boundary",
        "MWh consumed from non renewable sources inside chemical sector boundary (excluding recovered waste heat/gases)",
        "MWh consumed from waste heat/gases recovered from processes using fuel feedstocks inside chemical sector boundary",
        "Total MWh (renewable + non-renewable + MWh from recovered waste heat/gases) consumed inside chemical sector boundary",
      ],
      tableRows: 1,
      tableData: [["MT2499", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.30.4",
      question:
        "Report your organization’s energy consumption totals (excluding feedstocks) for metals and mining production activities in MWh.",
      guidance:
        "Question 7.30.1 has been modified and represented here for the metals and mining sector. This is to enable consistency of reporting across organizations with varying coverage over activities that may be separate from the metals and mining sector or independent of the production activities defining the metals and mining sector. Metals and mining activities can also be particularly energy intensive, so it is important to represent the sector separately from outside activities.",
      tableColumns: ["Activity", "Heating value", "Total MWh"],
      tableRows: 1,
      tableData: [["MT2500", "", ""]],
      response: "",
    },
    {
      slNo: "7.30.5",
      question:
        "Report your organization’s energy consumption totals (excluding feedstocks) for steel production activities in MWh.",
      guidance:
        "Question 7.30.1 has been modified and represented here for the steel sector. This is to enable consistency of reporting across organizations with varying coverage over activities that may be separate from the steel sector or independent of the production activities defining the steel sector. Steel is also one of the most energy intensive sectors of industry, so it is important to represent the sector separately from outside activities.",
      tableColumns: [
        "Activity",
        "Heating value",
        "MWh consumed from renewable sources inside steel sector boundary",
        "MWh consumed from non renewable sources inside steel sector boundary (excluding recovered waste heat/gases)",
        "MWh consumed from waste heat/gases recovered from processes using fuel feedstocks inside steel sector boundary",
        "Total MWh (renewable + non-renewable + MWh from recovered waste heat/gases) consumed inside steel sector boundary",
      ],
      tableRows: 1,
      tableData: [["MT2501", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.30.6",
      question:
        "If you have provided yes to the previous question please respond to this question: Select the applications of your organization’s consumption of fuel.",
      guidance:
        "Scope 1 greenhouse gas emissions are directly associated with the consumption of fuel. This question provides data users with more transparency regarding the application of an organization’s fuel consumption for the generation of secondary energy carriers.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "",
    },
    {
      slNo: "7.30.7",
      question:
        "If you have provided yes to the previous question please respond to this question: State how much fuel in MWh your organization has consumed (excluding feedstocks) by fuel type.",
      guidance:
        "Scope 1 greenhouse gas emissions are directly associated with the consumption of fuel for energy purposes. This question provides data users with more transparency regarding the type of fuel an organization has consumed. Total consumption of fuels and their consumption for different energy applications also provides insight on the way in which fuels are used by the organization, which can allow for a fairer and more consistent understanding of corporate energy and emissions from data users.",
      tableColumns: [
        "Fuels (excluding feedstocks )",
        "Heating value",
        "Total fuel MWh consumed by the organization",
        "MWh fuel consumed for self generation of electricity",
        "MWh fuel consumed for self generation of heat",
        "MWh fuel consumed for self generation of steam",
        "MWh fuel consumed for self generation of cooling",
        "MWh fuel consumed for self- cogeneration or self trigeneration",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2502", "", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.30.8",
      question:
        "State how much fuel in MWh your organization has consumed (excluding feedstocks) by fuel for cement production activities.",
      guidance:
        "Question 7.30.7 has been modified and represented here for the cement sector. This is to enable consistency of reporting across organizations with varying coverage over activities that may be separate from the cement sector or independent of the production activities defining the cement sector. Cement is also a highly energy intensive sector of industry, so it is important to represent the sector separately from outside activities.",
      tableColumns: [
        "Fuels (excluding feedstocks)",
        "Heating value",
        "Total MWh fuel consumed for cement production activities",
        "MWh fuel consumed at the kiln",
        "MWh fuel consumed for the generation of heat that is not used in the kiln",
        "MWh fuel consumed for the self generation of electricity",
        "MWh fuel consumed for self cogeneration or self trigeneration",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2504", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.30.9",
      question:
        "If you have provided yes to the previous question please respond to this question: Provide details on the electricity, heat, steam, and cooling your organization has generated and consumed in the reporting year.",
      guidance:
        "Many organizations generate their own electricity, steam, heat, and/or cooling. Bringing the generation of these secondary energy carriers inside the organizational boundary has the effect of reducing an organization’s Scope 2 emissions while increasing Scope 1 emissions. Because the scale of self-generation can be highly variable, this can create additional uncertainty for data users when comparing Scope 1 and 2 emissions across company samples or portfolios. CDP aims to alleviate this distorting factor by bringing transparency on the extent of self-generation by organizations.",
      tableColumns: [
        "Energy Carrier",
        "Total Gross generation (MWh)",
        "Generation that is consumed by the organization (MWh)",
        "Gross generation from renewable sources (MWh)",
        "Generation from renewable sources that is consumed by the organization (MWh)",
      ],
      tableRows: 1,
      tableData: [["SDP89_14", "MT200", "", "MT2134", ""]],
      response: "",
    },
    {
      slNo: "7.30.10",
      question:
        "Provide details on the electricity and heat your organization has generated and consumed for cement production activities.",
      guidance:
        "Question 7.30.9 has been modified and represented here for the cement sector. This enables consistency of reporting across organizations with varying coverage over activities that may be separate from the cement sector or independent of the production activities defining the cement sector.",
      tableColumns: [
        "Energy carrier",
        "Total gross generation inside the cement sector boundary",
        "Generation that is consumed inside the cement sector boundary",
      ],
      tableRows: 1,
      tableData: [["MT2503", "", ""]],
      response: "",
    },
    {
      slNo: "7.30.11",
      question:
        "Provide details on electricity, heat, steam, and cooling your organization has generated and consumed for chemical production activities.",
      guidance:
        "Question 7.30.9 has been modified and represented here for the chemicals sector. This enables consistency of reporting across organizations with varying coverage over activities that may be separate from the chemicals sector or independent of the production activities defining the chemicals sector.",
      tableColumns: [
        "Energy Carrier",
        "Total gross generation inside chemicals sector boundary (MWh)",
        "Generation that is consumed inside chemicals sector boundary (MWh)",
        "Generation from renewable sources inside chemical sector boundary (MWh)",
        "Generation from waste heat/gases recovered from processes using fuel feedstocks inside chemical sector boundary (MWh)",
      ],
      tableRows: 1,
      tableData: [["MT2505", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.30.12",
      question:
        "Provide details on the electricity, heat, steam, and cooling your organization has generated and consumed for metals and mining production activities.",
      guidance:
        "Question 7.30.9 has been modified and represented here for the metals and mining sector. This enables consistency of reporting across organizations with varying coverage over activities that may be separate from the metals and mining sector or independent of the production activities defining the metals and mining sector.",
      tableColumns: [
        "Energy Carrier",
        "Total gross generation inside metals and mining sector boundary",
        "Generation that is consumed inside metals and mining sector boundary",
      ],
      tableRows: 1,
      tableData: [["MT2506", "", ""]],
      response: "",
    },
    {
      slNo: "7.30.13",
      question:
        "Provide details on the electricity, heat, and steam your organization has generated and consumed for steel production activities.",
      guidance:
        "Question 7.30.9 has been modified and represented here for the steel sector. This enables consistency of reporting across organizations with varying coverage over activities that may be separate from the steel sector or independent of the production activities defining the steel sector.",
      tableColumns: [
        "Energy Carrier",
        "Total gross generation inside steel sector boundary (MWh)",
        "Generation that is consumed by the organization inside steel sector boundary (MWh)",
        "Generation from renewable sources inside steel sector boundary (MWh)",
        "Generation from waste heat/gases recovered from processes using fuel feedstocks inside steel sector boundary (MWh)",
      ],
      tableRows: 1,
      tableData: [["MT2507", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.30.14",
      question:
        "If you have provided yes to the previous question please respond to this question: Provide details on the electricity, heat, steam, and/or cooling amounts that were accounted for at a zero or near-zero emission factor in the market-based Scope 2 figure reported in 7.7.",
      guidance:
        "This question provides data users with more transparency regarding organizations’ active sourcing of low-carbon energy",
      tableColumns: [
        "Country/area",
        "Sourcing method",
        "Energy carrier",
        "Low-carbon technology type",
        "Low-carbon energy consumed via selected sourcing method in the reporting year (MWh)",
        "Tracking instrument used",
        "Country/area of origin (generation) of the low-carbon energy or energy attribute",
        "Are you able to report the commissioning or re-powering year of the energy generation facility?",
        "Commissioning year of the energy generation facility (e.g. date of first commercial operation or repowering)",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["", "", "", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.30.15",
      question:
        "Provide details on the average emission factor used for all transport movements per mode that directly source energy from the grid.",
      guidance:
        "Some alternatives to fossil-fuel based technologies use electrical energy sourced from the grid. The degree to which this replacement has climate benefits depends on the average grid emission factor used for the movements of these electric vehicles.",
      tableColumns: [
        "Category",
        "Emission factor unit",
        "Average emission factor: unit value",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2508", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.30.16",
      question:
        "Provide a breakdown by country/area of your electricity/heat/steam/cooling consumption in the reporting year.",
      guidance:
        "Breaking down energy consumption to the country/area level is useful to data users, as this is often the level at which energy-related legislation is introduced. Data from this question can help guide the development of energy related legislation.",
      tableColumns: [
        "Country/area",
        "Consumption of purchased electricity (MWh)",
        "Consumption of self generated electricity (MWh)",
        "Is some or all of this electricity consumption excluded from your RE100 commitment?",
        "Consumption of purchased heat, steam, and cooling (MWh)",
        "Consumption of self generated heat, steam, and cooling (MWh)",
        "Total electricity/heat/steam/cooling energy consumption (MWh) [Auto-calculated]",
        "Provide details of the electricity consumption excluded",
      ],
      tableRows: 1,
      tableData: [["MT2142", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.30.17",
      question:
        "Provide details of your organization’s renewable electricity purchases in the reporting year by country/area.",
      guidance:
        "Renewable energy is critical to the transition to a low carbon economy. In this question, organizations can demonstrate progress towards their RE100 commitment by reporting the details of their renewable electricity purchasing by country/area.",
      tableColumns: [
        "Country/area of consumption of purchased renewable electricity",
        "Sourcing method",
        "Renewable electricity technology type",
        "Renewable electricity consumed via selected sourcing method in the reporting year (MWh)",
        "Tracking instrument used",
        "Country/area of origin (generation) of purchased renewable electricity",
        "Are you able to report the commissioning or re-powering year of the energy generation facility?",
        "Commissioning year of the energy generation facility (e.g. date of first commercial operation or repowering)",
        "Vintage of the renewable energy/attribute (i.e. year of generation)",
        "Supply arrangement start year",
        "Ecolabel associated with purchased renewable electricity",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2534", "", "", "", "", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.30.18",
      question:
        "Provide details of your organization’s low-carbon heat, steam, and cooling purchases in the reporting year by country/area.",
      guidance:
        "Providing details of low-carbon heat, steam and cooling purchases by country/area provides data users with a more complete picture of an organization’s low carbon and renewable energy consumption.",
      tableColumns: [
        "Sourcing method",
        "Country/area of consumption of low-carbon heat, steam or cooling",
        "Energy carrier",
        "Low-carbon technology type",
        "Low-carbon heat, steam, or cooling consumed (MWh)",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2533", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.30.19",
      question:
        "Provide details of your organization’s renewable electricity generation by country/area in the reporting year.",
      guidance:
        "Renewable energy is critical to the transition to a low-carbon economy. In this question, companies can demonstrate progress towards their RE100 commitment by reporting the details of their renewable electricity generation by country/area.",
      tableColumns: [
        "Country/area of generation",
        "Renewable electricity technology type",
        "Facility capacity (MW)",
        "Total renewable electricity generated by this facility in the reporting year (MWh)",
        "Renewable electricity consumed by your organization from this facility in the reporting year (MWh)",
        "Energy attribute certificates issued for this generation",
        "Type of energy attribute certificate",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2532", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.30.20",
      question:
        "Describe how your organization’s renewable electricity sourcing strategy directly or indirectly contributes to bringing new capacity into the grid in the countries/areas in which you operate.",
      guidance:
        "Renewable electricity sourcing mechanisms differ in the impact they have on the grid in the market where the electricity is consumed. This question informs data users about the contribution that RE100 members’ sourcing strategies make to driving new renewable electricity capacity.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "",
    },
    {
      slNo: "7.30.21",
      question:
        "In the reporting year, has your organization faced barriers or challenges to sourcing renewable electricity?",
      guidance:
        "Insight into the challenges organizations face in meeting their RE100 targets is one of RE100’s tools to advocate policy change to make renewable electricity more accessible.",
      tableColumns: [
        "Challenges to sourcing renewable electricity",
        "Challenges faced by your organization which were not country/area-specific*",
      ],
      tableRows: 1,
      tableData: [["SDP121_47", ""]],
      response: "",
    },
    {
      slNo: "7.30.22",
      question:
        "Provide details of the country/area-specific challenges to sourcing renewable electricity faced by your organization in the reporting year.",
      guidance:
        "Transparency of the challenges that organizations have faced in meeting their RE100 targets is crucial to show policy makers that there is unmet demand from companies, which can be used as a driver of change to progress the renewable energy ambition.",
      tableColumns: [
        "Country/area",
        "Reasons why it was challenging to source renewable electricity within selected country/area",
        "Provide additional details of the barriers faced within this country/area",
      ],
      tableRows: 1,
      tableData: [["SDP121_48", "", ""]],
      response: "",
    },
    {
      slNo: "7.31",
      question:
        "Does your organization consume fuels as feedstocks for chemical production activities?",
      guidance:
        "Consumption of energy as feedstock is unique to chemical sector. A large share of fuels used by the sector is not combusted but is consumed as raw material. The information requested in this and the following question provides transparency on the level of fuel feedstocks consumed by your organization.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP121_49",
    },
    {
      slNo: "7.31.1",
      question:
        "Disclose details on your organization’s consumption of feedstocks for chemical production activities.",
      guidance:
        "A significant proportion of fuels used in the chemicals industry are consumed as feedstocks. The information requested in this question provides transparency on the level of fuel feedstocks consumed by your organization, as well as on their inherent carbon dioxide emission factor. This can be useful for quality checking of your emissions disclosure in question 7.19.",
      tableColumns: [
        "Fuels used as feedstocks",
        "Total consumption",
        "Total consumption unit",
        "Inherent carbon dioxide emission factor of feedstock, metric tons CO2 per consumption unit",
        "Heating value of feedstock, MWh per consumption unit",
        "Heating value",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2531", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.31.3",
      question:
        "State the percentage, by mass, of primary resource from which your chemical feedstocks derive.",
      guidance:
        "Increasing the share of alternative, low-carbon feedstocks is one of the key levers of decarbonization for the sector, so the share of biomass/waste in an organization’s total chemical feedstock should be increasing year on year",
      tableColumns: [
        "Feedstock source",
        "Percentage of total chemical feedstock (%)",
        "Direction of change in percentage of total chemical feedstock from previous year",
      ],
      tableRows: 1,
      tableData: [["MT2509", "", ""]],
      response: "",
    },
    {
      slNo: "7.32",
      question:
        "Disclose details on your organization’s consumption of feedstocks for steel production activities.",
      guidance:
        "The steel sector is largely dependent on carbon-based feedstocks, which act as chemical agents in the reduction of iron ore. It is also common for steel companies to consume coal as a feedstock in the production of coke. These feedstocks are consumed in large quantities and represent a significant depletion of natural resources. Furthermore, they are the source of by product gasses, which are subsequently combusted, releasing greenhouse gas emissions. As such, data users are interested in the specification of carbon and energy content of these feedstocks, their consumption, and the consumption of non-carbon based reducing agents.",
      tableColumns: [
        "Feedstocks",
        "Total consumption",
        "Total consumption unit",
        "Dry or wet basis?",
        "Inherent carbon dioxide emission factor of feedstock, metric tons CO2 per consumption unit",
        "Heating value of feedstock, MWh per consumption unit",
        "Heating value",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2549", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.33",
      question:
        "Does your electric utility organization have a transmission and distribution business?",
      guidance:
        "Transmission and distribution companies play an important role in enabling the transition to low-carbon electricity systems. Transmission and distribution systems also have significant energy losses. Therefore, data users are interested in what transmission and distribution companies are doing to reduce their own carbon footprint (energy losses) and the carbon footprint of the grids they operate (grid decarbonization).",
      tableColumns: [
        "Country/area/region",
        "Voltage level",
        "Annual load (GWh)",
        "Annual energy losses (% of annual load)",
        "Scope where emissions from energy losses are accounted for",
        "Emissions from energy losses (metric tons CO2e)",
        "Length of network (km)",
        "Number of connections",
        "Area covered (km2)",
        "Comment",
      ],
      tableRows: 1,
      tableData: [
        [
          "SDP121_50",
          "SDP121_51",
          "SDP121_51",
          "SDP121_51",
          "SDP121_51",
          "SDP121_51",
          "SDP121_51",
          "SDP121_51",
          "SDP121_51",
          "",
        ],
      ],
      response: "",
    },
    {
      slNo: "7.34",
      question:
        "Does your organization measure the efficiency of any of its products or services?",
      guidance:
        "Energy efficiency will be key to achieving the International Energy Agency’s below 2-degree scenario as global energy demand grows. Since this sector produces the technology that will allow end-markets to achieve their own efficiency goals, data users are interested in whether companies are measuring and improving the efficiency of their products and services.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "",
    },
    {
      slNo: "7.34.1",
      question:
        "Provide details of the metrics used to measure the efficiency of your organization's products or services.",
      guidance:
        "In line with the TCFD recommendations, the efficiency levels achieved by organizations in this sector provide investors with an indication of the vulnerability of the product portfolio to transition risk and thus the earning capacity of the organization. This question provides data users with information on the metrics companies are using to measure the efficiency of their products and services, including the proportion of the total product range measured.",
      tableColumns: [
        "Category of product or service",
        "Product or service (optional)",
        "% of revenue from this product or service in the reporting year",
        "Efficiency figure in the reporting year",
        "Metric numerator",
        "Metric denominator",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2530", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.35",
      question:
        "Provide any efficiency metrics that are appropriate for your organization’s transport products and/or services.",
      guidance:
        "Efficiency metrics are the primary way through which transport sector companies can measure the energy efficiency of their vehicles across modes of transportation. Various primary metrics exist as standards for different modes of transport, and sector experts and relevant data users will be able to use this information to compare the company’s overall efficiency.",
      tableColumns: [
        "Activity",
        "Metric figure",
        "Metric numerator",
        "Metric denominator",
        "Metric numerator: Unit total",
        "Metric denominator: Unit total",
        "% change from last year",
        "Please explain",
      ],
      tableRows: 1,
      tableData: [["SDP126_100", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.36",
      question:
        "Provide any efficiency metrics that are appropriate for your organization’s transport products and/or services.",
      guidance:
        "Efficiency metrics are the primary way through which transport sector companies can measure the energy efficiency of their vehicles across modes of transportation. Various primary metrics exist as standards for different modes of transport, and sector experts and relevant data users will be able to use this information to compare the company’s overall efficiency.",
      tableColumns: [
        "Activity",
        "Metric figure",
        "Metric numerator",
        "Metric denominator",
        "Metric numerator: Unit total",
        "Metric denominator: Unit total",
        "% change from last year",
        "Please explain",
      ],
      tableRows: 1,
      tableData: [["SDP126_101", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.37",
      question:
        "Disclose coal reserves and production by coal type attributable to your organization in the reporting year.",
      guidance:
        "Fossil fuels are the largest source of global emissions and coal is the most carbon intensive fossil fuel. It is therefore important to have transparency about the production and reserves of coal attributable to organizations. The split between thermal coal and metallurgical coal is also important. Thermal coal has higher transition risk because consumers can substitute it with other sources of energy.",
      tableColumns: [
        "Coal type",
        "Proven reserves (million metric tons)",
        "Probable reserves (million metric tons)",
        "Production (million metric tons)",
        "Energy content of production (GJ per metric ton)",
        "Heating value",
        "Emission factor of production (metric tons CO2e per metric ton)",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2510", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.37.1",
      question:
        "Disclose coal resources by coal type attributable to your organization in the reporting year.",
      guidance:
        "The transition to a low-carbon economy may affect the value of resources or long-lived assets. Providing insight into potential future emissions can help to inform investors about the potential impacts of regulatory measures and demand changes on earning capacity. The following questions enable investors to understand an organizations exposure to coal resources.",
      tableColumns: [
        "Coal type",
        "Measured resources (million metric tons)",
        "Indicated resources (million metric tons)",
        "Inferred resources (million metric tons)",
        "Total resources (million metric tons)",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2511", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.38",
      question:
        "Disclose your net liquid and gas hydrocarbon production (total of subsidiaries and equity-accounted entities).",
      guidance:
        "Investors and other data users are interested in information relating to the production of different hydrocarbon categories due to the differing environmental impacts associated with each.",
      tableColumns: ["Hydrocarbon category", "In-year net production"],
      tableRows: 1,
      tableData: [["MT2550", ""]],
      response: "",
    },
    {
      slNo: "7.38.1",
      question:
        "Explain which listing requirements or other methodologies you use to report reserves data. If your organization cannot provide data due to legal restrictions on reporting reserves figures in certain countries/areas, please explain this.",
      guidance:
        "This question identifies any limitations on the comparability of data that may be due to different methodologies being used.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP126_102",
    },
    {
      slNo: "7.38.2",
      question:
        "Disclose your estimated total net reserves and resource base (million boe), including the total associated with subsidiaries and equity-accounted entities.",
      guidance:
        "The transition to a low-carbon economy may affect the value of resources or long-lived assets. Robust data on proved, probable and total resource base is valuable information for data users and investors. Providing insight into organization’s reserves and resource base can help to inform investors about the potential impacts of regulatory measures and demand changes on earning capacity.",
      tableColumns: [
        "Estimated total net proved + probable reserves (2P) (million BOE)",
        "Estimated total net proved + probable + possible reserves (3P) (million BOE)",
        "Estimated net total resource base (million BOE)",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2512", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.38.3",
      question:
        "Provide an indicative percentage split for 2P, 3P reserves, and total resource base by hydrocarbon categories.",
      guidance:
        "A breakdown of reserves and resource base by hydrocarbon category provides insight into potential future emissions. With better insight on future project inventories, split by hydrocarbon category, data users and investors will be in a better position to assess organizations’ readiness for a low-carbon transition.",
      tableColumns: [
        "Hydrocarbon category",
        "Net proved + probable reserves (2P) (%)",
        "Net proved + probable + possible reserves (3P) (%)",
        "Net total resource base (%)",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2513", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.38.4",
      question:
        "Provide an indicative percentage split for production, 1P, 2P, 3P reserves, and total resource base by development types.",
      guidance:
        "The transition to a low-carbon economy may affect the value of reserves or long-lived assets. A breakdown of reserves and resource base by development type provides insight into potential future emissions. This insight can help to inform investors about the potential impacts of regulatory measures and demand changes on earning capacity. Information regarding the breakdown of conventional and unconventional hydrocarbons of the total resource base is valuable to investors.",
      tableColumns: [
        "Development type",
        "In-year net production (%)",
        "Net proved reserves (1P) (%)",
        "Net proved + probable reserves (2P) (%)",
        "Net proved + probable + possible reserves (3P) (%)",
        "Net total resource base (%)",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2529", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.39",
      question: "Provide details on your organization’s chemical products.",
      guidance:
        "Unlike most other high-impact sectors identified by CDP, the chemicals sector is heterogeneous and highly diverse in structure, and can even be characterized as a group of disparate subsectors. It is, therefore, problematic to consider sector-wide intensities. However, it is useful to identify the most important chemical production processes from an environmental or transition risk perspective and shed light on the presence and impact of them within and between organizations.",
      tableColumns: [
        "Output product",
        "Production (metric tons)",
        "Capacity (metric tons)",
        "Direct emissions intensity (metric tons CO2e per metric ton of product)",
        "Electricity intensity (MWh per metric ton of product)",
        "Steam intensity (MWh per metric ton of product)",
        "Steam/ heat recovered (MWh per metric ton of product)",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2528", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.40",
      question:
        "Break down the coal production attributed to your organization in the reporting year by grade.",
      guidance:
        "Investors and data users are interested in information relating to the production of different coal grades due to the environmental impacts associated with each.",
      tableColumns: ["Coal grade", "Production (%)", "Comment"],
      tableRows: 1,
      tableData: [["MT2527", "", ""]],
      response: "",
    },
    {
      slNo: "7.40.1",
      question:
        "Break down the coal production attributed to your organization in the reporting year by mine type.",
      guidance:
        "There is a significantly greater energy requirement and fugitive emissions associated with coal production from underground mines. Furthermore, it is necessary to know this split in order to turn the activity emissions split into factors.",
      tableColumns: ["Coal mine type", "Production (%)"],
      tableRows: 1,
      tableData: [["MT2514", ""]],
      response: "",
    },
    {
      slNo: "7.41",
      question:
        "Report your organization’s steel-related consumption, production and capacity figures by steel plant.",
      guidance:
        "The steel sector is structured around primary and secondary production of steel. Each production route has very different implications from the perspective of raw material and energy needs, greenhouse gas emissions, and technological and market risks and opportunities. It is therefore important for organizations to provide transparency on their operational structure. The most commonly used steel furnace in the primary route is the basic oxygen furnace, while the electric arc furnace is the most common steel furnace used in secondary production. Because the relative proportion of scrap and new iron charged to each steel furnace can vary, it is important to know the mix of metallic feedstocks consumed by steel furnace, as well as the steel furnace production output.",
      tableColumns: [
        "Steel plant",
        "Metal scrap consumption (metric tons)",
        "Blast furnace iron consumption (metric tons)",
        "Direct reduced iron consumption (metric tons)",
        "Crude steel production (metric tons)",
        "Crude steel capacity (metric tons)",
      ],
      tableRows: 1,
      tableData: [["MT2514", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.41.1",
      question:
        "Report your organization’s steel-related production outputs and capacities by product.",
      guidance:
        "Given the wide range of different structures and configurations of steel processes covered by organizations, it is important to provide transparency on the output of key products within the sector. This contributes significantly to the understanding of emissions and emissions intensity by allowing data users and investors to know the reach of an organization’s activities and understand that organizations have various levels of coverage within the sector or within a given process route.",
      tableColumns: [
        "Product",
        "Production (metric tons)",
        "Capacity (metric tons)",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2515", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.42",
      question:
        "Provide details on the commodities relevant to the mining production activities of your organization.",
      guidance:
        "Unlike most other high-impact sectors identified by CDP, the metals and mining sector is heterogeneous and highly diverse in structure, and can even be characterized as a group of disparate subsectors. It is, therefore, problematic to consider sector-wide intensities. However, it is useful to identify metals and mining commodities individually and shed light on the presence and impact of them within and between organizations.",
      tableColumns: [
        "Output product",
        "Capacity, metric tons",
        "Production, metric tons",
        "Production, copper equivalent units (metric tons)",
        "Scope 1 emissions",
        "Scope 2 emissions",
        "Scope 2 emissions approach",
        "Pricing methodology for copper-equivalent figure",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2526", "", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.42.1",
      question:
        "Provide details on the commodities relevant to the metals production activities of your organization.",
      guidance:
        "Unlike most other high-impact sectors identified by CDP, the metals and mining sector is heterogeneous and highly diverse in structure, and can even be characterized as a group of disparate sub-sectors. It is, therefore, problematic to consider sector-wide intensities. However, it is useful to identify metals and mining commodities individually and shed light on the presence and impact of them within and between organizations.",
      tableColumns: [
        "Output product",
        "Capacity (metric tons)",
        "Production (metric tons)",
        "Annual production in copper-equivalent units (thousand tons)",
        "Scope 1 emissions (metric tons CO2e)",
        "Scope 2 emissions (metric tons CO2e)",
        "Scope 2 emissions approach",
        "Pricing methodology for copper equivalent figure",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2525", "", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.43",
      question:
        "Disclose your total refinery throughput capacity in the reporting year in thousand barrels per day.",
      guidance:
        "Investors and other data users are interested in understanding the total refinery throughput as it is important for investment analysis, in addition it can provide context for the organizations emissions for the reporting year",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "",
    },
    {
      slNo: "7.43.1",
      question:
        "Disclose feedstocks processed in the reporting year in million barrels per year.",
      guidance:
        "There is a significant environmental impact due to the energy intensive nature and emissions output associated with the processing of feedstocks. Understanding the throughput of feedstocks processed in the reporting year is important for investment analysis.",
      tableColumns: ["Feedstock", "Throughput (Million barrels)", "Comment"],
      tableRows: 1,
      tableData: [["MT2524", "", ""]],
      response: "",
    },
    {
      slNo: "7.43.2",
      question:
        "Are you able to break down your refinery products and net production?",
      guidance:
        "It is important to take account of refinery net production and product slate in order better understand the sources of Scope 3 category 11 “use of sold product” emissions from organizations. It is also useful to investors for broadly indicating the spread of the organization across the various petroleum product markets.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "",
    },
    {
      slNo: "7.43.3",
      question:
        "Disclose your refinery products and net production in the reporting year in million barrels per year.",
      guidance:
        "It is important to take account of refinery net production and product slate in order better understand the sources of Scope 3 category 11 “use of sold product” emissions from organizations. It is also useful to investors for broadly indicating the spread of the organization across the various petroleum product markets.",
      tableColumns: [
        "Product produced",
        "Refinery net production (Million barrels) *not including products used/consumed on site",
      ],
      tableRows: 1,
      tableData: [["MT2523", ""]],
      response: "",
    },
    {
      slNo: "7.43.4",
      question:
        "Please disclose your petrochemicals production in the reporting year in thousand metric tons.",
      guidance:
        "Petrochemicals is an important part of the oil and gas value chain but not practiced by all integrated oil and gas companies or independent refiners. It is therefore necessary to take account of these activities separately. To help data users understand the coverage of activities employed by oil and gas companies, it is important for organizations to provide transparency on petrochemicals production activities, as these have environmental impacts and are exposed to transition risks.",
      tableColumns: [
        "Product",
        "Production, Thousand metric tons",
        "Capacity, Thousand metric tons",
      ],
      tableRows: 1,
      tableData: [["MT2522", "", ""]],
      response: "",
    },
    {
      slNo: "7.44",
      question:
        "Explain which listing requirements or other methodologies you have used to provide reserves data in 7.37. If your organization cannot provide data due to legal restrictions on reporting reserves figures in certain countries/areas, please explain this.",
      guidance:
        "The intention of this question is to highlight any limitations on the comparability of data that may be due to different methodologies being used.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "",
    },
    {
      slNo: "7.45",
      question:
        "Describe your gross global combined Scope 1 and 2 emissions for the reporting year in metric tons CO2e per unit currency total revenue and provide any additional intensity metrics that are appropriate to your business operations.",
      guidance:
        "Intensity measures describe an organization’s CO2e emissions in the context of another business metric. In this way, the emissions are normalized to account for growth and other factors. Many organizations and investors have historically tracked environmental performance with intensity ratios.",
      tableColumns: [
        "Intensity figure",
        "Metric Numerator (Gross global combined Scope 1 and 2 emissions, metric tons CO2e)",
        "Metric denominator",
        "Metric denominator: Unit total",
        "Scope 2 figure used",
        "% change from previous year",
        "Direction of change",
        "Reasons for change",
        "Please explain",
      ],
      tableRows: 1,
      tableData: [["MT2516", "", "", "", "MT1838", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.46",
      question:
        "For your electric utility activities, provide a breakdown of your Scope 1 emissions and emissions intensity relating to your total power plant capacity, and generation during the reporting year by source.",
      guidance:
        "This question provides data users with more transparency regarding organizations’ active sourcing of low-carbon energy.",
      tableColumns: [
        "Power generation technology",
        "Absolute Scope 1 emissions (metric tons CO2e)",
        "Emissions intensity based on gross or net electricity generation",
        "Scope 1 emissions intensity (Gross generation)",
        "Scope 1 emissions intensity (Net generation)",
      ],
      tableRows: 1,
      tableData: [["MT2517", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.47",
      question:
        "State your organization’s Scope 1 and Scope 2 emissions intensities related to cement production activities.",
      guidance:
        "For high impact homogenous sectors, it is common to express emissions per unit of physical output. Emissions intensity provides the means to indicatively compare emissions between companies and better understand the importance and spread of emissions across the sector.",
      tableColumns: [
        "Output product",
        "Gross Scope 1 emissions intensity, metric tons CO2e per metric ton",
        "Net Scope 1 emissions intensity, metric tons CO2e per metric ton",
        "Scope 2, location-based emissions intensity, metric tons CO2e per metric ton",
      ],
      tableRows: 1,
      tableData: [["MT2518", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.48",
      question:
        "Provide the intensity figures for Scope 1 emissions (metric tons CO2e) per unit of hydrocarbon category.",
      guidance:
        "Intensity measures describe an organization’s CO2e emissions in the context of another business metric. In this way, the emissions are normalized to account for growth. Data users and investors often track environmental performance with intensity ratios.",
      tableColumns: [
        "Unit of hydrocarbon category (denominator)",
        "Metric tons CO2e from hydrocarbon category per unit specified",
        "% change from previous year",
        "Direction of change",
        "Reason for change",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2519", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.49",
      question:
        "State your organization’s emissions and energy intensities by steel production process route.",
      guidance:
        "For high impact homogenous sectors, it is common to express emissions per unit of physical output. In the case of steel, energy intensity is also an important metric measured by the industry. Steel is produced via different routes, each of which plays a key role in the sustainability of steel supply to the economy. However, because typical intensities vary between routes, disclosing a single company-wide intensity could be misleading, because it masks the relative contribution from each route. Data users are therefore interested in average intensities per process route. The aim is to account for emissions concentration across sector and organization by acknowledging different process routes within the sector.",
      tableColumns: [
        "Process route",
        "Emissions intensity figure, metric tons CO2e per metric ton of crude steel production",
        "Energy intensity figure, GJ (LHV) per metric ton of crude steel production",
        "Methodology applied",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["MT2521", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.50",
      question:
        "Provide primary intensity metrics that are appropriate to your indirect emissions in Scope 3 Category 11: Use of sold products from transport.",
      guidance:
        "Intensity metrics can help investors and data users compare the performance of your products with others with a similar purpose, as well as with policy and market trends.",
      tableColumns: [
        "Activity",
        "Emissions intensity figure",
        "Metric numerator (Scope 3 emissions: use of sold products) in Metric tons CO2e",
        "Metric denominator",
        "Metric denominator: Unit total",
        "% change from previous year",
        "Vehicle unit sales in reporting year",
        "Vehicle lifetime in years",
        "Annual distance in km or miles (unit specified by column 4)",
        "Load factor",
        "Please explain the changes, and relevant standards/methodologies used",
      ],
      tableRows: 1,
      tableData: [["MT2520", "", "", "", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.51",
      question:
        "What are your primary intensity (activity-based) metrics that are appropriate to your emissions from transport activities in Scope 1, 2, and 3?",
      guidance:
        "The metrics requested in this question allow measuring carbon efficiency of transportation directly, independent of size or distance. This makes comparison between organizations and different transport modes possible. Information collected in this question will enable your organization, as well as investors and data users, to compare your emissions’ intensity over time and provide a more accurate measure of any improvements you are making.",
      tableColumns: [
        "Activity",
        "Scopes used for calculation of intensities",
        "Intensity figure",
        "Metric numerator: emissions in metric tons CO2e",
        "Metric denominator: unit",
        "Metric denominator: unit total",
        "% change from previous year",
        "Please explain any exclusions in your coverage of transport emissions in selected category, and reasons for change in emissions intensity.",
      ],
      tableRows: 1,
      tableData: [["SDP126_103", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.52",
      question:
        "Provide any additional climate-related metrics relevant to your business.",
      guidance:
        "CDP data users seek to understand in which areas, beyond GHG emissions, companies are trying to reduce their environmental impacts.",
      tableColumns: [
        "Description",
        "Metric value",
        "Metric numerator",
        "Metric denominator (intensity metric only)",
        "% change from previous year",
        "Direction of change",
        "Please explain",
      ],
      tableRows: 1,
      tableData: [
        [
          "other, please specify",
          "",
          "5001 Trees",
          "5001 T Co2 Emission",
          "",
          "",
          "",
        ],
      ],
      response: "SDP126_104",
    },
    {
      slNo: "7.53",
      question:
        "Did you have an emissions target that was active in the reporting year?",
      guidance:
        "Target setting provides direction and structure to environmental strategy. CDP data users want to understand companies' commitments to reducing emissions and whether the organization has a goal towards which they are harmonizing and focusing emissions-related efforts.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "",
    },
    {
      slNo: "7.53.1",
      question:
        "Provide details of your absolute emissions targets and progress made against those targets.",
      guidance:
        "Target setting plays a vital role in environmental action through its role in the successful execution of corporate strategies, as well as in the effective management of dependencies, impacts, risks, and opportunities. The question encourages organizations to set and make progress towards timebound, tracked, quantitative targets, informed by the guidance of leading initiatives and frameworks, such as the Science Based Targets initiative where available.",
      tableColumns: [
        "Target reference number",
        "Is this a science-based target?",
        "Science Based Targets initiative official validation letter",
        "Target ambition",
        "Date target was set",
        "Target coverage",
        "Target coverage",
        "Scopes",
        "Scope 2 accounting method",
        "Scope 3 categories",
        "End date of base year",
        "Base year Scope 1 emissions covered by target (metric tons CO2e)",
        "Base year Scope 2 emissions covered by target (metric tons CO2e)",
        "Base year Scope 3, Category […] emissions covered by target (metric tons CO2e) [One column for each Scope 3 category]",
        "Base year total Scope 3 emissions covered by target (metric tons CO2e)",
        "Total base year emissions covered by target in all selected Scopes (metric tons CO2e)",
        "Base year Scope 1 emissions covered by target as % of total base year emissions in Scope 1",
        "Base year Scope 2 emissions covered by target as % of total base year emissions in Scope 2",
        "Base year Scope 3, Category […] emissions covered by target as % of total base year emissions in Scope 3, Category […] (metric tons CO2e) [One column for each Scope 3 category]",
        "Base year total Scope 3 emissions covered by target as % of total base year emissions in Scope",
        "End date of target",
        "Targeted reduction from base year (%)",
        "Total emissions at end date of target covered by target in all selected Scopes (metric tons CO2e) [auto-calculated]",
        "Scope 1 emissions in reporting year covered by target (metric tons CO2e)",
        "Scope 2 emissions in reporting year covered by target (metric tons CO2e)",
        "Scope 3, Category […] emissions in reporting year covered by target (metric tons CO2e) [One column for each Scope 3 category]",
        "Total Scope 3 emissions in reporting year covered by target (metric tons CO2e) [auto-calculated]",
        "Total emissions in reporting year covered by target in all selected scopes (metric tons CO2e) [auto-calculated]",
        "Land-related emissions covered by target",
        "Target status in reporting year",
        "Explain the reasons for the revision, replacement, or retirement of the target",
        "Explain target coverage and identify any exclusions",
        "Target objective",
        "Plan for achieving target, and progress made to the end of the reporting year",
        "Target derived using a sectoral decarbonization approach",
        "List the emissions reduction initiatives which contribute most to achieving this target",
      ],
      tableRows: 0,
      tableData: [],
      response: "",
    },
    {
      slNo: "7.53.2",
      question:
        "Provide details of your emissions intensity targets and progress made against those targets.",
      guidance:
        "Target setting plays a vital role in environmental action through its role the successful execution of corporate strategies, as well as in the effective management of dependencies, impacts, risks, and opportunities. The question encourages organizations to set and make progress towards timebound, tracked, quantitative targets informed by the guidance of leading initiatives and frameworks, such as the Science Based Targets initiative where available.",
      tableColumns: [
        "Target reference number",
        "Is this a science based target?",
        "Science Based Targets initiative official validation letter",
        "Target ambition",
        "Date target was set",
        "Target coverage",
        "Greenhouse gases covered by target",
        "Scopes",
        "Scope 2 accounting method",
        "Scope 3 categories",
        "Intensity metric",
        "End date of base year",
        "Intensity figure in base year for Scope 1",
        "Intensity figure in base year for Scope 2",
        "Intensity figure in base year for Scope 3, Category […] [One column for each Scope 3 category]",
        "Intensity figure in base year for total Scope 3 [auto-calculated]",
        "Intensity figure in base year for all selected Scopes [auto-calculated]",
        "% of total base year emissions in Scope 1 covered by this Scope 1 intensity figure",
        "% of total base year emissions in Scope 2 covered by this Scope 2 intensity figure",
        "% of total base year emissions in Scope 3, Category […] covered by this Scope 3, Category […] intensity figure [One column for each Scope 3 category]",
        "% of total base year emissions in Scope 3 (in all Scope 3 categories) covered by this total Scope 3 intensity figure",
        "% of total base year emissions in all selected Scopes covered by this intensity figure",
        "End date of target",
        "Targeted reduction from base year (%)",
        "Intensity figure at end date of target for all selected Scopes [auto-calculated]",
        "% change anticipated in absolute Scope 1+2 emissions",
        "% change anticipated in absolute Scope 3 emissions",
        "Intensity figure in reporting year for Scope 1",
        "Intensity figure in reporting year for Scope 2",
        "Intensity figure in reporting year for total Scope 3 [auto-calculated]",
        "Intensity figure in reporting year for all selected Scopes [auto-calculated]",
        "Land-related emissions covered by target",
        "% of target achieved relative to base year [auto calculated]",
        "Target status in reporting year",
        "Explain the reasons for the revision, replacement, or retirement of the target",
        "Explain target coverage and identify any exclusions",
        "Target objective",
        "Plan for achieving target, and progress made to the end of the reporting year",
        "Target derived using a sectoral decarbonization approach",
        "List the emissions reduction initiatives which contributed most to achieving this target",
      ],
      tableRows: 1,
      tableData: [
        [
          "SDP125_15",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      ],
      response: "",
    },
    {
      slNo: "7.53.3",
      question:
        "If you have provided yes to the previous question please respond to this question: Explain why you did not have an emissions target, and forecast how your emissions will change over the next five years.",
      guidance:
        "As setting a target is a pre-requisite for leadership in environmental practice, data users need to understand why companies do not have active targets guiding environmental strategy.",
      tableColumns: ["Primary reason", "Five-year forecast", "Please explain"],
      tableRows: 1,
      tableData: [["SDP125_16", "", ""]],
      response: "",
    },
    {
      slNo: "7.53.4",
      question:
        "Provide details of the climate-related targets for your portfolio.",
      guidance:
        "Achieving net zero by 2050 will require a major redirection of capital into sustainable solutions and low-carbon technologies, which only the financial services sector can provide. This profound influence on the wider economy means financial institutions’ climate-related impact occurs mostly in their portfolios, rather than through their direct operations. Thus, setting targets and reporting on progress at a portfolio level is considered best practice for financial institutions and can help them align their financing, investment and insurance underwriting to a 1.5ºC world.",
      tableColumns: [
        "Target reference number",
        "Target type",
        "Taxonomy or framework used to define “green finance”",
        "Methodology used when setting the target",
        "Date target was set",
        "Target is set and progress against it is tracked at",
        "Sector",
        "Portfolios covered by the target",
        "Portfolio",
        "Asset classes covered by the target",
        "Sectors covered by the target",
        "Target type: Absolute or intensity",
        "Emissions scopes of portfolio companies covered by the target",
        "% of portfolio emissions covered by the target",
        "% of asset class emissions covered by the target",
        "Metric (or target numerator if intensity)",
        "Target denominator",
        "% of portfolio covered in relation to total portfolio value",
        "Total value of assets covered by the target",
        "% of asset class covered by the target, based on the total value of this asset class",
        "Frequency of target reviews",
        "End date of base year",
        "Figure in base year",
        "We have an interim target",
        "End of interim target year",
        "Figure in interim target year",
        "End date of target",
        "Figure in target year",
        "Figure in reporting year",
        "% of target achieved relative to base year [auto-calculated]",
        "Target status in reporting year",
        "Aggregation weighting used",
        "% of the temperature score calculated in the reporting year based on company targets",
        "Is this a science-based target?",
        "Target ambition",
        "Provide details of your target and metrics",
        "Please explain target coverage and identify any exclusions",
        "Target objective",
      ],
      tableRows: 1,
      tableData: [
        [
          "SDP125_16",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      ],
      response: "",
    },
    {
      slNo: "7.54",
      question:
        "Did you have any other climate-related targets that were active in the reporting year?",
      guidance:
        "Target setting plays a vital role in environmental action through its role in the successful execution of corporate strategies, as well as in the effective management of dependencies, impacts, risks, and opportunities. Emissions reduction targets are not the only type of relevant targets that organizations use to drive change, as other target types can be an important element of organizations’ strategies to reduce their emissions. This question increases transparency of corporate environmental commitments relevant to different organizations.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP125_17",
    },
    {
      slNo: "7.54.1",
      question:
        "If you have provided yes to the previous question please respond to this question: Provide details of your targets to increase or maintain low-carbon energy consumption or production.",
      guidance:
        "Target setting plays a vital role in environmental action through its role in the successful execution of corporate strategies, as well as in the effective management of dependencies, impacts, risks, and opportunities. Targets related to increasing or maintaining low-carbon energy consumption or production can be an important element of organizations’ strategies to reduce their emissions.",
      tableColumns: [
        "Target reference number",
        "Date target was set",
        "Target coverage",
        "Target type: energy carrier",
        "Target type: activity",
        "Target type: energy source",
        "End date of base year",
        "Consumption or production of selected energy carrier in base year (MWh)",
        "% share of low-carbon or renewable energy in base year",
        "End date of target",
        "% share of low-carbon or renewable energy at end date of target",
        "% share of low-carbon or renewable energy in reporting year",
        "% of target achieved relative to base year [auto-calculated]",
        "Target status in reporting year",
        "Explain the reasons for the revision, replacement, or retirement of the target",
        "Is this target part of an emissions target?",
        "Is this target part of an overarching initiative?",
        "Science Based Targets initiative official validation letter",
        "Explain target coverage and identify any exclusions",
        "Target objective",
        "Plan for achieving target, and progress made to the end of the reporting year",
        "Plan for achieving target, and progress made to the end of the reporting year",
      ],
      tableRows: 0,
      tableData: [],
      response: "",
    },
    {
      slNo: "7.54.2",
      question:
        "Provide details of any other climate-related targets, including methane reduction targets.",
      guidance:
        "Target setting plays a vital role in environmental action through its role in the successful execution of corporate strategies, as well as in the effective management of dependencies, impacts, risks, and opportunities. Emissions reduction targets are not the only type of relevant targets that organizations use to drive change.Other climate-related targets can be an important element of organizations’ strategy to reduce their emissions. This question increases transparency of corporate environmental commitments.",
      tableColumns: [
        "Target reference number",
        "Date target was set",
        "Target coverage",
        "Target type: absolute or intensity",
        "Target type: category & metric (target numerator if reporting an intensity target)",
        "Target denominator (intensity targets only)",
        "End date of base year",
        "Figure or percentage in base year",
        "End date of target",
        "Figure or percentage at end of date of target",
        "Figure or percentage in reporting year",
        "% of target achieved relative to base year [auto calculated]",
        "Target status in reporting year",
        "Explain the reasons for the revision, replacement, or retirement of the target",
        "Is this target part of an emissions target?",
        "Is this target part of an overarching initiative?",
        "Science Based Targets initiative official validation letter",
        "Please explain target coverage and identify any exclusions",
        "Target objective",
        "Plan for achieving target, and progress made to the end of the reporting year",
        "List the actions which contributed most to achieving this target",
      ],
      tableRows: 1,
      tableData: [
        [
          "SDP125_18",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      ],
      response: "",
    },
    {
      slNo: "7.54.3",
      question:
        "If you have provided yes to the previous question please respond to this question: Provide details of your net-zero target(s).",
      guidance:
        "Reaching net-zero emissions at the global level is a central goal of the climate action movement. Corporate net-zero targets are a powerful opportunity for organizations to reduce their emissions along a 1.5C aligned pathway and counterbalance any residual emissions at target year with permanent carbon removals (i.e. neutralization). By setting net-zero targets, companies can also accelerate climate action outside their value chains and contribute to reaching the global net-zero goal. This question provides data users with transparency on your organization’s commitment to achieving net-zero emissions.",
      tableColumns: [
        "Target reference number",
        "Date target was set",
        "Target coverage",
        "Targets linked to this net zero target",
        "End date of target for achieving net zero",
        "Is this a science based target?",
        "Science Based Targets initiative official validation letter",
        "Scopes",
        "Greenhouse gases covered by target",
        "Explain target coverage and identify any exclusions",
        "Target objective",
        "Do you intend to neutralize any residual emissions with permanent carbon removals at the end of the target ?",
        "Do you plan to mitigate emissions beyond your value chain?",
        "Do you intend to purchase and cancel carbon credits for neutralization and/or beyond value chain mitigation?",
        "Planned milestones and/or near term investments for neutralization at the end of the target",
        "Describe the actions to mitigate emissions beyond your value chain",
        "Target status in reporting year",
        "Explain the reasons for the revision, retirement, or replacement of the target",
        "Process for reviewing target",
      ],
      tableRows: 1,
      tableData: [
        [
          "SDP125_23",
          "",
          "",
          "SDP125_24, SDP125_25",
          "",
          "SDP125_26",
          "",
          "SDP126_105",
          "SDP126_106",
          "SDP126_107",
          "SDP126_108",
          "SDP126_109",
          "SDP126_110",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      ],
      response: "",
    },
    {
      slNo: "7.54.4",
      question:
        "Indicate which targets reported in 7.53.1/2 incorporate methane emissions, or if you do not have a methane-specific emissions reduction target for your oil and gas activities, please explain why not and forecast how your methane emissions will change over the next five years.",
      guidance:
        "Methane emissions from the oil and gas sector are increasingly viewed as a financial, regulatory, and reputational issue for companies. Investors are therefore interested in increasing the transparency of methane reduction efforts. This can be achieved by organizations reporting the methane targets they have in place and how they forecast that their methane emissions will change.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP126_161",
    },
    {
      slNo: "7.54.5",
      question:
        "Indicate which targets reported in 7.53.1/2 incorporate methane emissions, or if you do not have a methane-specific emissions reduction target for your coal mining activities, please explain why not and forecast how your methane emissions will change over the next five years.",
      guidance:
        "Methane emissions from the coal sector are increasingly viewed as a financial, regulatory, and reputational issue for companies. Investors are therefore interested in increasing the transparency of methane reduction efforts which can be achieved by organizations reporting the methane targets they have in place and how they forecast that their methane emissions will change.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "",
    },
    {
      slNo: "7.55",
      question:
        "Did you have emissions reduction initiatives that were active within the reporting year? Note that this can include those in the planning and/or implementation phases.",
      guidance:
        "The answer to this question enables CDP data users to understand your organization’s commitment to reducing emissions beyond business-as-usual scenario (beyond standard maintenance/replacement activities).",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP126_158",
    },
    {
      slNo: "7.55.1",
      question:
        "If you have provided yes to the previous question please respond to this question: Identify the total number of initiatives at each stage of development, and for those in the implementation stages, the estimated CO2e savings.",
      guidance:
        "This question demonstrates to CDP data users your organization’s progress towards reducing emissions through implementing emissions reduction initiatives.",
      tableColumns: [
        "Stage of development",
        "Number of initiatives",
        "Total estimated annual CO2e savings in metric tons CO2e",
      ],
      tableRows: 1,
      tableData: [["SDP126_109", "", ""]],
      response: "",
    },
    {
      slNo: "7.55.2",
      question:
        "If you have provided yes to the previous question please respond to this question: Provide details on the initiatives implemented in the reporting year in the table below.",
      guidance:
        "CDP data users are interested in understanding how you are making progress towards your emissions reduction targets, as well as other emissions-reducing actions undertaken in the reporting year.",
      tableColumns: [
        "Initiative category & Initiative type",
        "Estimated annual CO2e savings (metric tons CO2e)",
        "Scope(s) or Scope 3 category(ies) where emissions savings occur",
        "Voluntary/ Mandatory",
        "Annual monetary savings (unit currency – as specified in 1.2)",
        "Investment required (unit currency – as specified in 1.2)",
        "Payback period",
        "Estimated lifetime of the initiative",
        "Comment",
      ],
      tableRows: 1,
      tableData: [["SDP126_110", "", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.55.3",
      question:
        "If you have provided yes to the previous question please respond to this question: What methods do you use to drive investment in emissions reduction activities?",
      guidance:
        "This question provides data users with more transparency into your organization’s approach to realizing emissions reductions and progress towards targets.",
      tableColumns: ["Method", "Comment"],
      tableRows: 0,
      tableData: [],
      response: "",
    },
    {
      slNo: "7.55.4",
      question:
        "Why did you not have any emissions reduction initiatives active during the reporting year?",
      guidance:
        "Emissions reduction initiatives are crucial to meeting emissions targets and reducing negative environmental impacts. CDP data users need to know why you do not engage in the best practice of actively reducing your emissions.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP126_111",
    },
    {
      slNo: "7.56",
      question:
        "Describe any planned climate-related projects within your public authority for which you hope to attract financing.",
      guidance:
        "Data users are interested in learning about your organization’s plans for climate resilient, sustainable, and equitable infrastructure projects. Your response to this question will allow CDP data users to see, in one place, details of resilient infrastructure projects for which you are seeking funding and/or financing to enhance partnership and resource allocation, and connect eligible projects to technical assistance, where possible.",
      tableColumns: [
        "Project area",
        "Project title",
        "Stage of project development",
        "Status of financing",
        "Identified financing model",
        "Project description, and URL link, if applicable",
        "Attach project proposal, if applicable",
        "Total cost of project",
        "Total investment cost needed, if relevant",
      ],
      tableRows: 1,
      tableData: [["SDP126_112", "", "", "", "", "", "", "", ""]],
      response: "",
    },
    {
      slNo: "7.57",
      question:
        "Describe your organization’s efforts to reduce methane emissions from your activities.",
      guidance:
        "Methane emissions represent significant direct emissions from oil and gas activities. Disclosing relevant information relating to your organization’s efforts to reduce methane emissions from your oil and gas activities can reduce the financial and reputational risk facing investors. Investors and other data users are interested in learning about methane reduction projects and collaborative initiatives.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP126_113",
    },
    {
      slNo: "7.58",
      question:
        "Describe your organization’s efforts to reduce methane emissions from your activities.",
      guidance:
        "Disclosing relevant information on your organization’s efforts to reduce methane emissions relating to your activities can reduce the financial and reputational risk facing companies and investors. Investors and other data users are interested in learning about methane reduction targets, projects and collaborative initiatives that companies have in place.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP126_156",
    },
    {
      slNo: "7.59",
      question:
        "Describe your organization’s efforts to reduce methane emissions from your activities.",
      guidance:
        "Disclosing relevant information relating to your organization’s efforts to reduce methane emissions from your coal mining activities can reduce the financial and reputational risk facing investors. Significant uncertainty exists in quantifying coal organization's contributions to methane emissions and their efforts to reduce methane emissions, with investors and data users interested in learning about methane reduction projects and collaborative initiatives.",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
      response: "SDP126_157",
    },
    {
      slNo: "7.6O",
      question:
        "Does your organization conduct leak detection and repair (LDAR) or use other methods to find and fix fugitive methane emissions from coal mining activities?",
      guidance:
        "Investors are interested in how organizations approach methane leak detection and repair (LDAR), or other methane leak detection methods, in order to gauge how effectively methane emissions are being reduced.",
      response: "SDP126_114",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.60.1",
      question:
        "Describe the protocol through which methane leak detection and repair or other methane leak detection methods are conducted for your coal mining activities, including predominant frequency of inspections, estimates of assets covered, and methodologies employed",
      guidance:
        "Investors are interested in how organizations approach methane leak detection and repair (LDAR), or other methane leak detection methods, in order to gauge how effectively methane emissions are being reduced. This question provides information to data users with further information on the methods used to detect methane leaks.",
      response: "SDP126_115",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.60.2",
      question:
        "Explain why not and whether you plan to conduct methane leak detection and repair or adopt other methods to find and fix fugitive methane emissions from your coal mining activities.",
      guidance:
        "For many reasons, organizations with coal production activities may not have a program in place to reduce methane emissions using LDAR. This question is developed to provide investors with information on why organizations with coal activities do not have an LDAR program in place.",
      response: "SDP126_116",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.61",
      question:
        "Does your organization conduct leak detection and repair (LDAR) or use other methods to find and fix fugitive methane emissions from oil and gas production activities?",
      guidance:
        "Investors are interested to understand how companies approach methane leak detection and repair (LDAR) or other methane leak detection methods, in order to gauge how effectively methane emissions are being reduced.",
      response: "SDP126_117",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.61.1",
      question:
        "Describe the protocol through which methane leak detection and repair or other leak detection methods, are conducted for oil and gas production activities, including predominant frequency of inspections, estimates of assets covered, and methodologies employed.",
      guidance:
        "Investors are interested to understand how companies approach methane leak detection and repair (LDAR) or other methane leak detection methods, in order to gauge how effectively methane emissions are being reduced.",
      response: "SDP126_118",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.61.2",
      question:
        "Explain why you do not conduct LDAR or use other methods to find and fix fugitive methane emissions, and whether you have a plan to do so from your oil and gas production activities.",
      guidance:
        "It may be the case that an organization with oil and gas production activities does not have a program in place to reduce methane emissions using LDAR. This question is developed to provide investors with information on why organizations with oil and gas activities do not have an LDAR program in place.",
      response: "SDP126_119",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.62",
      question:
        "If flaring is relevant to your oil and gas production activities, describe your organization’s efforts to reduce flaring, including any flaring reduction targets.",
      guidance:
        "Flaring of gas contributes to climate change and impacts the environment through emissions of CO2 and other pollutants while wasting a valuable energy resource, hence investors are interested in learning about organization’s efforts to reduce flaring.",
      response: "SDP126_120",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.63",
      question:
        "If flaring is relevant to your coal mining operations, describe your organization’s efforts to reduce flaring, including any flaring reduction targets.",
      guidance:
        "Flaring of gas contributes to climate change and impacts the environment through emissions of CO2 and other pollutants while wasting a valuable energy resource, hence investors are interested in learning about organizations’ efforts to reduce flaring.",
      response: "SDP126_121",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.64",
      question:
        "Disclose your organization’s best available techniques as a percentage of Portland cement clinker production capacity",
      guidance:
        "The purpose of this question is to achieve a reasonable indication of the level of adoption of Best Available Techniques (BAT) in the sector. CDP recognizes that this should not be taken as a proxy for overall efficiency and productivity in an organization. Nonetheless, this information is useful in understanding the general adoption status of BAT in the organization and across the sector.",
      tableColumns: ["Technique", "Total production capacity coverage (%)"],
      tableRows: 1,
      tableData: [],
      response: "SDP126_122",
    },
    {
      slNo: "7.65",
      question:
        "Disclose your organization’s best available techniques as a percentage of total plant capacity. Please mention Technique/Process , % of total plant capacity and  Primary reason for not having technique",
      guidance:
        "The purpose of this question is to achieve a reasonable indication of the level of adoption of Best Available Techniques (BAT) in the sector. CDP recognizes that this should not be taken as a proxy for overall efficiency and productivity in an organization. Furthermore, the adoption of some technologies is dependent on various site or market conditions, which is why we provide the opportunity for explanation. Nonetheless, this information is useful in understanding the general landscape and adoption status of BAT in the organization and across the sector, and the reasons behind their limitations.",
      response: "SDP126_123",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.66",
      question: "Is your organization involved in the sequestration of CO2?",
      guidance:
        "Carbon capture and storage/utilization (CCS/U) is often presented as one of the key technologies in tackling climate change, to the point where in the majority of climate models, CCS/U is critical to meeting decarbonization goals set by the Paris Agreement to limit global warming to well below 2 degrees by 2100.",
      response: "SDP126_153",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.66.1",
      question:
        "Provide, in metric tons CO2, gross masses of CO2 transferred in and out of the reporting organization (as defined by the consolidation basis).",
      guidance:
        "CCS/U is beginning to be demonstrated across the world on a variety of sources and scales. Investors and data users are interested in CO2 transfers in and out of the organization to make useful comparisons of CCS/U projects.",
      response: "SDP126_154",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.66.2",
      question:
        "Provide gross masses of CO2 injected and stored for the purposes of CCS during the reporting year according to the injection and storage pathway.",
      guidance:
        "There is an increasing investor recognition that CCS/U is one of the very few ways of reducing emissions in energy-intensive industries. Understanding the quantity of CO2 injected by pathway and the expected percentage of this that is intended for long term storage provides investors with insight into the emission reduction potential of organizations CCS/U projects.",
      response: "SDP126_155",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.66.3",
      question:
        "Provide clarification on any other relevant information pertaining to your activities related to transfer and sequestration of CO2.",
      guidance:
        "Investors are looking to invest in a range of companies that have developed and utilized innovative and commercially viable CCS/U technologies. This question is designed to capture additional relevant information relating to the transfer and sequestration of CO2. It requests information on the consolidation basis used to report transfers and sequestration of CO2 emissions, who owns the transferred emissions and the risk management processes in place.",
      response: "SDP126_124",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.67",
      question:
        "Do you implement agriculture or forest management practices on your own land with a climate change mitigation and/or adaptation benefit?",
      guidance:
        "This question gathers information on any management practices implemented in your farm or production unit with climate change benefits. This information is important for data users because it demonstrates that your organization is acting on either preventing, reducing, controlling, and/or adapting to the effects of climate change.",
      response: "SDP126_125",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.67.1",
      question:
        "Specify the agricultural or forest management practice(s) implemented on your own land with climate change mitigation and/or adaptation benefits and provide a corresponding emissions figure, if known.",
      guidance:
        "This question elicits specific and detailed information about the land management practices adopted by your organization. This information provides data users with an indication of how committed you are to mitigating and adapting to the effects of climate change. Demonstrating an understanding of climate-related benefits related to agricultural/forestry practices is best practice in this sector.",
      response: "SDP126_126",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.68",
      question:
        "If you have provided yes to the previous question please respond to this question: Do you encourage your suppliers to undertake any agricultural or forest management practices with climate change mitigation and/or adaptation benefits?",
      guidance:
        "This question gathers information on whether you encourage your suppliers to undertake any management practice with climate change benefits. This demonstrates to data users that your organization is acting on either preventing, reducing, controlling, and/or adapting to the effects of climate change in its supply chain. By encouraging your suppliers to adopt such management practices on their land, you promote awareness of sustainable production practices and ultimately contribute to reducing climate-related risks in your supply chain.",
      response: "SDP126_127",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.68.1",
      question:
        "If you have provided yes to the previous question please respond to this question: Specify which agricultural or forest management practices with climate change mitigation and/or adaptation benefits you encourage your suppliers to undertake and describe your role in the implementation of each practice",
      guidance:
        "This question gathers information on which management practice with climate change benefits you encourage your suppliers to undertake and your role on the implementation. This demonstrates to data users that your organization is acting on either preventing, reducing, controlling, and/or adapting to the effects of climate change in its supply chain. By encouraging your suppliers to adopt such management practices on their land, you promote awareness of sustainable production practices and ultimately contribute to reducing climate related risks in your supply chain.",
      response: "SDP126_128",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.68.2",
      question:
        "If you have provided yes to the previous question please respond to this question: Do you collect information from your suppliers about the outcomes of any implemented agricultural/forest management practices you have encouraged?",
      guidance:
        "This demonstrates to data users that your organization is committed to working towards reducing the impacts of climate change by not only encouraging its suppliers to adopt practices with climate change benefits but also by assessing these benefits after the practices are implemented. Data users are interested to know whether your organization assesses the impact of its actions to address climate-related risks.",
      response: "SDP126_129",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.68.3",
      question:
        "If you have provided yes to the previous question please respond to this question: Why do you not encourage your suppliers to undertake any agricultural/forest management practices with climate change mitigation and/or adaptation benefits",
      guidance:
        "Data users wish to know the main reason why you do not encourage your suppliers to undertake any management practices with climate change benefits and any plans you might have to engage with your suppliers regarding managing practices in the next two years.",
      response: "SDP126_130",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.69",
      question:
        "Do you know if any of the management practices implemented on your own land disclosed in 7.67.1 have other impacts besides climate change mitigation/adaptation?",
      guidance:
        "Organizations are encouraged to move towards a more holistic approach regarding their land management actions. This is important due to the complex interrelationships between climate change, deforestation, and water security issues. An understanding of the implications of your management practices on other environmental aspects demonstrates a mature environmental stewardship approach to investors and other data users.",
      response: "",
      tableColumns: ["SDP126_131"],
      tableRows: 1,
      tableData: [],
    },
    {
      slNo: "7.69.1",
      question:
        "Provide details on those management practices that have other impacts besides climate change mitigation/adaptation and on your management response. Please mention the following:  Management practice reference number, Overall effect, Which of the following has been impacted?, Description of impact, Have you implemented any response to these impacts?, Description of the response.",
      guidance:
        "This question gathers data on impacts - other climate-related - of management practices implemented in your land. Organizations are encouraged to move towards a more holistic approach regarding their land management actions. This is important due to the complex interrelationships between climate change, deforestation, and water security issues. An understanding of the implications of your management practices on other environmental aspects demonstrates a mature environmental stewardship approach to investors and other data users.",
      response: "SDP126_132",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.7O",
      question:
        "If you have provided yes to the previous question please respond to this question: Do you know if any of the management practices mentioned in 7.68.1 that were implemented by your suppliers have other impacts besides climate change mitigation/adaptation?",
      guidance:
        "Organizations are encouraged to adopt, as well as to promote among their suppliers, a holistic approach regarding land management actions. This is important due to the complex interrelationships between climate change, deforestation, and water security issues. Knowledge of the implications of management practices adopted across the whole value chain that impacts other environmental aspects demonstrates a mature environmental stewardship approach to investors and other data users",
      response: "SDP126_133",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.70.1",
      question:
        "If you have provided yes to the previous question please respond to this question: Provide details of those management practices implemented by your suppliers that have other impacts besides climate change mitigation/adaptation.",
      guidance:
        "This question gathers data on impacts - other climate-related - of management practices implemented by your suppliers. Organizations are encouraged to move towards a more holistic approach regarding their land management actions. This is important due to the complex interrelationships between climate change, deforestation, and water security issues. An understanding of the implications of management practices on other environmental aspects demonstrates a mature environmental stewardship approach to investors and other data users.",
      tableColumns: [
        "Management practice reference number",
        "Overall effect",
        "Which of the following has been impacted?",
        "Description of impacts",
        "Has any response to these impacts been implemented?",
        "Description of the response (s)",
      ],
      tableRows: 1,
      response: "SDP126_134",
      tableData: [],
    },
    {
      slNo: "7.71",
      question:
        "Does your organization assess the life cycle emissions of any of its products or services?",
      guidance:
        "Stakeholders are increasingly requesting companies to measure and disclose their product- and service-related emissions. Emissions are linked to every stage of the product or service life cycle - from raw material acquisition to end-of-life treatment. Understanding and measuring emissions across the life cycle can help companies focus emissions reduction efforts on the most energy intensive operations across the whole life cycle, rather than just in the production process.",
      response: "",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.71.1",
      question:
        "Provide details of how your organization assesses the life cycle emissions of its products or services.",
      guidance:
        "To acquire an overall understanding of the total carbon impact of a product or service, it is necessary to assess emissions from the production process and use phase, but also emissions associated with the acquisition and disposal of the materials that make up the product. This question provides data users with information on your organization’s approach to assessing product life cycle emissions, including the life cycle stages covered and the methodologies used.",
      tableColumns: [
        "Products/services assessed",
        "Life cycle stage(s) most commonly covered",
        "Methodologies/standards/tools applied",
        "Comment",
      ],
      tableRows: 1,
      response: "",
      tableData: [],
    },
    {
      slNo: "7.72",
      question:
        "Does your organization assess the life cycle emissions of new construction or major renovation projects?",
      guidance:
        "GHG emissions or energy consumption are linked to every stage of the life cycle of buildings – starting from extraction or manufacturing of materials and their transportation, through construction, use phase and to final demolition of buildings. Understanding and consistent measurement of life cycle emissions of built projects is important for identifying the best opportunities for reducing lifetime emissions and target setting.",
      tableColumns: ["Assessment of life cycle emissions", "Comment"],
      tableRows: 1,
      response: "",
      tableData: [],
    },
    {
      slNo: "7.72.1",
      question:
        "Provide details of how your organization assesses the life cycle emissions of new construction or major renovation projects.",
      guidance:
        "To acquire an overall understanding of a built project’s total carbon impact, it is necessary to assess both the anticipated operational emissions and the embodied emissions. Low-carbon design practices, especially those targeting embodied carbon, are most efficient as well as most cost-effective in the early phases of a project. This question provides data users with information on how early in a project you normally assess carbon emissions, as well as life cycle stages and methodologies most commonly applied.",
      tableColumns: [
        "Projects assessed",
        "Earliest project phase that most commonly includes an assessment",
        "Life cycle stage(s) most commonly covered",
        "Methodologies/standards/tools applied",
        "Comment",
      ],
      tableRows: 1,
      response: "",
      tableData: [],
    },
    {
      slNo: "7.72.2",
      question:
        "Can you provide embodied carbon emissions data for any of your organization’s new construction or major renovation projects completed in the last three years?",
      guidance:
        "Consideration of embodied carbon at the initial design and construction stages is necessary in order to achieve the required GHG reductions. The relative significance of embodied carbon is increasing, due to the decarbonization of the grid and increased operational efficiency of buildings. This and the follow-up question provide investors and other data users with information on the embodied carbon of buildings that your organization completed in the last three years or the reasons you are not able to calculate or disclose this data.",
      response: "SDP126_135",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.72.3",
      question:
        "Provide details of the embodied carbon emissions of new construction or major renovation projects completed in the last three years. Please provide the following information: Year of completion, Property sector, Type of project, Project name/ID (optional), Life cycle stage(s) covered, Normalization factor (denominator), Denominator unit, Embodied carbon (kg/CO2e per the denominator unit), % of new construction/major renovation projects in the last three years covered by this metric (by floor area), and Methodologies/standards/ tools applied.",
      guidance:
        "Consideration of embodied carbon at the initial design and construction stages is necessary in order to achieve the required GHG reductions. The relative significance of embodied carbon is increasing, due to the decarbonization of the grid and increased operational efficiency of buildings. This question provides investors and data users with information on the embodied carbon of buildings that you completed in the last three years or the reasons you are not able to calculate or disclose these data.",
      response: "SDP126_136",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.73",
      question:
        "Are you providing product level data for your organization’s goods or services?",
      guidance:
        "CDP Supply Chain members are interested in the granularity of data that their suppliers can provide regarding the emissions intensities, lifecycle emissions, and emissions reduction initiatives. This type of data can allow all parties involved to observe product/service resource intensities, track changes in this Supply Chain-specific data, and progress being made via initiatives.",
      response: "SDP126_137",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.73.1",
      question:
        "If you have provided yes to the previous question please respond to this question: Give the overall percentage of total emissions, for all Scopes, that are covered by these products.",
      guidance:
        "This question aims to assess the GHG relevance of the products you are disclosing information on.",
      response: "SDP126_138",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.73.2",
      question:
        "If you have provided yes to the previous question please respond to this question: Complete the following table for the goods/services for which you want to provide data.",
      guidance:
        "CDP Supply Chain members are interested in the emissions intensities associated with the goods/services they are purchasing. This question allows your organization to provide these details, while outlining the methodologies used by your organization to estimate these for your goods/services.",
      tableColumns: [
        "Requesting member",
        "Name of good/service",
        "Description of good/service",
        "Type of product",
        "Unique product identifier",
        "Total emissions in kg CO2e per unit",
        "± % change from previous figure supplied",
        "Date of previous figure supplied",
        "Explanation of change",
        "Methods used to estimate lifecycle emissions",
      ],
      tableRows: 1,
      response: "SDP126_139",
      tableData: [],
    },
    {
      slNo: "7.73.3",
      question:
        "If you have provided yes to the previous question please respond to this question: Complete the following table with data for lifecycle stages of your goods and/or services.",
      guidance:
        "CDP Supply Chain members are interested in the lifecycle emissions of the goods/services they are purchasing. This question allows your organization to provide these details, while outlining the lifecycle stages considered by your organization for these goods/services.",
      tableColumns: [
        "Requesting member",
        "Name of good/service",
        "Scope",
        "Lifecycle stage",
        "Emissions at the lifecycle stage in kg CO2e per unit",
        "Lifecycle stage under your ownership or control",
        "Type of data used",
        "Data quality",
        "If applicable, describe the verification/assurance of the product emissions data",
      ],
      tableRows: 1,
      response: "",
      tableData: [],
    },
    {
      slNo: "7.73.4",
      question:
        "If you have provided yes to the previous question please respond to this question: Please detail emissions reduction initiatives completed or planned for this product. What is the Name of good/service, Initiative ID, Description of initiative, Completed or planned status, and Emissions reductions in kg CO2e per unit?",
      guidance:
        "CDP supply chain members are interested in emissions reduction initiatives completed or planned for the goods/services they are purchasing. This question allows your organization to provide these details, while outlining the emissions reductions achieved or projected.",
      tableColumns: [
        "Name of good/service",
        "Initiative ID",
        "Description of initiative",
        "Completed or planned",
        "Emissions reductions in kg CO2e per unit",
      ],
      tableRows: 1,
      response: "SDP126_140",
      tableData: [],
    },
    {
      slNo: "7.73.5",
      question:
        "If you have provided yes to the previous question please respond to this question: Have any of the initiatives described in 7.73.4 been driven by requesting CDP Supply Chain members?",
      guidance:
        "Data users are interested in understanding the extent to which the initiatives you engage in (as disclosed in 7.73.4), have been driven by your requesting Supply Chain member. This can help provide an insight to the extent that organizations engage to improve resource efficiency and reduce their impact on the resource intensity of goods/services provided.",
      response: "SDP126_141",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.73.6",
      question:
        "Explain which initiatives have been driven by requesting members. Explain which initiatives have been driven by requesting members. Which are the Requesting member, Name of good/service, and Initiative ID?",
      guidance:
        "Data users are interested in understanding the extent to which the initiatives you engage in (as disclosed in 7.73.4), have been driven by your requesting Supply Chain member. This can help provide an insight to the extent that organizations engage to improve resource efficiency and reduce their impact on the resource intensity of goods/services provided.",
      response: "SDP126_142",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.74",
      question:
        "Do you classify any of your existing goods and/or services as low-carbon products?",
      guidance:
        "This question provides valuable information to investors who are seeking to increase their investment in companies providing low-carbon goods and services.",
      response: "SDP126_143",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.74.1",
      question:
        "If you have provided yes to the previous question please respond to this question:  Provide details of your products and/or services that you classify as low-carbon products. Can you please provide the Level of aggregation, Taxonomy used to classify product(s) or service(s) as low-carbon, Type of product(s) or service(s), Description of product(s) or service(s), Have you estimated the avoided emissions of this low-carbon product(s) or service(s), Methodology used to calculate avoided emissions, Life cycle stage(s) covered for the low-carbon product(s) or services(s), Functional unit used, Reference product/service or baseline scenario used, Life cycle stage(s) covered for the reference product/service or baseline scenario, Estimated avoided emissions (metric tons CO2e per functional unit) compared to reference product/service or baseline scenario, Explain your calculation of avoided emissions, including any assumptions, and the Revenue generated from low-carbon product(s) or service(s) as % of total revenue in the reporting year?",
      guidance:
        "This question provides valuable information to investors who are seeking to increase their investment in companies providing low-carbon goods and services.",
      response: "SDP126_144",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.75",
      question:
        "Provide tracking metrics for the implementation of low-carbon transport technology over the reporting year. What are the key activities, associated metrics, technologies used, metric figures, metric units, and explanations for each of the initiatives?",
      guidance:
        "This question seeks to understand how low-carbon transport technologies are being implemented by analyzing the level of proliferation and market penetration of alternative drive train and engine technologies. This is mostly relevant for LDV and HDV, for which alternative technologies are available or being piloted. This is also relevant for aviation, rail and marine companies who can use this as a more open-ended question to indicate what they are doing in the low-carbon technology field.",
      response: "SDP126_145",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.76",
      question: "Does your organization manage net zero carbon buildings?",
      guidance:
        "In line with the TCFD recommendations, regulatory measures such as a transition to low carbon properties may affect the financial viability of existing properties. Understanding the percentage of net zero carbon buildings provides investors with an indication of the potential impact of regulatory measures on your portfolio/ buildings you deliver.",
      response: "SDP126_146",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.76.1",
      question:
        "Provide details of the net zero carbon buildings under your organization’s management in the reporting year",
      guidance:
        "In line with the TCFD’s recommendations, regulatory measures such as a transition to low carbon properties may affect the financial viability of existing properties. Understanding the percentage of net zero carbon buildings provides investors with an indication of the potential impact of regulatory measures on your portfolio. It is acknowledged that certification schemes for net zero carbon buildings are not yet widely available, but where they are, they provide additional credibility to self-evaluated and reported statements regarding net zero carbon",
      response: "SDP126_147",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.77",
      question:
        "Did your organization complete new construction or major renovations projects designed as net zero carbon in the last three years?",
      guidance:
        "In line with TCFD recommendations, regulatory measures such as a transition to low-carbon properties may affect the financial viability of existing properties. Understanding the percentage of net zero carbon buildings provides investors with an indication of the potential impact of regulatory measures on buildings you deliver.",
      response: "SDP126_148",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.77.1",
      question:
        "Provide details of new construction or major renovations projects completed in the last 3 years that were designed as net zero carbon. For the specified property sector, what is the definition of net-zero carbon being applied, what percentage of buildings completed in the last three years are considered net-zero carbon, have any of these buildings been certified, and if so, what percentage of them have been certified, what certification schemes were used, and what further comments can be provided?",
      guidance:
        "Understanding the percentage of your organizations’ new construction or major renovations projects that were designed as net zero carbon provides investors with an indication of the potential impact of regulatory measures on your business. It is acknowledged that certification schemes for net zero carbon buildings are not yet widely available, but where they are, they provide additional credibility to self-evaluated and reported statements regarding net zero carbon.",
      response: "SDP126_149",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.78",
      question:
        "Explain your organization’s plan to manage, develop or construct net zero carbon buildings, or explain why you do not plan to do so.",
      guidance:
        "This question helps CDP data users to understand the anticipated pace and extent of the transition to net zero carbon buildings and barriers that organizations are experiencing in delivering and operating them.",
      response: "SDP126_150",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.79",
      question:
        "Has your organization retired any project-based carbon credits within the reporting year?",
      guidance:
        "Carbon credits are used by organizations for the purposes of compliance or as voluntary carbon offsets and can support the transition to a low carbon future. Information about carbon credits helps data users understand the extent to which companies are meeting their climate commitments through emission reductions or offsets.",
      response: "SDP126_151",
      tableColumns: [],
      tableRows: 0,
      tableData: [],
    },
    {
      slNo: "7.79.1",
      question:
        "If you have provided yes to the previous question please respond to this question: Provide details of the project-based carbon credits retired by your organization in the reporting year.",
      guidance:
        "Carbon credits can be originated from a variety of projects and are verified to a number of standards. Data users are interested in learning about the quality of projects, scope of project types, the objectives of organizations who have canceled carbon credits and the extent to which the credits are used to achieve these objectives.",
      tableColumns: [
        "Project type",
        "Type of mitigation activity",
        "Project description",
        "Credits retired by your organization from this project in the reporting year (metric tons CO2e)",
        "Purpose of retirement",
        "Are you able to report the vintage of the credits at retirement?",
        "Vintage of credits at retirement",
        "Were these credits issued to or purchased by your organization?",
        "Carbon crediting program by which the credits were issued",
        "Methods the program uses to assess additionality for this project",
        "Approaches by which the selected program requires this project to address reversal risk",
        "Potential sources of leakage the selected program requires this project to have assessed",
        "Provide details of other issues the selected program requires projects to address",
        "Please explain",
      ],
      tableRows: 1,
      response: "SDP126_152",
      tableData: [],
    },
  ];

  return (
    <div style={{ minHeight: "80vh" }}>
      <TableRenderer
        id="mod-7-perf"
        title="Section: Environmental Performance - Climate Change"
        tableData={tableDataModuleSeven}
      />
    </div>
  );
};

export default Module_7_Perf;
