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
                                {/* {item.tableData?.[rowIdx]?.[colIdx] || "\u00A0"} */}
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
                {/* {item.response} */}
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

const Module_3_6_Perf = () => {
  const tableDataModuleThree = [
    {
      slNo: "3.1",
      question:
        "Have you identified any environmental risks which have had a substantive effect on your organization in the reporting year, or are anticipated to have a substantive effect on your organization in the future? ",
      guidance:
        "It is crucial for investors and data users to understand your organization's risk exposure, especially regarding any environmental risks across your value chain which are anticipated to have substantive effects on your organization. This includes both risks which have already had an effect within the reporting year and risks which may have an effect in the future. If no environmental risks with substantive effects have been identified as part of your assessment, it is equally crucial for data users to understand how and why you have concluded that such risks are not anticipated to affect your organization.",
      tableColumns: [
        "Environmental issue",
        "Environmental risks identified",
        "Primary reason why your organization does not consider itself to have environmental risks in your direct operations and/or upstream/downstream value chain",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP145_18",
    },
    {
      slNo: "3.1.1",
      question:
        "Provide details of the environmental risks identified which have had a substantive effect on your organization in the reporting year, or are anticipated to have a substantive effect on your organization in the future.",
      guidance:
        "Your response to this question provides data users with an overview of the environmental risks affecting your organization now and in the future. Information on the current and anticipated financial effects of these risks, and your response strategy to manage and mitigate them, are critical elements for guiding investments as well as implementing corporate actions to improve business resilience and environmental stewardship.",
      tableColumns: [
        "Environmental issue the risk relates to",
        "Risk identifier",
        "Commodity",
        "Risk type and primary environmental risk driver",
        "Value chain stage where the risk occurs",
        "Risk type mapped to traditional financial services industry risk classification",
        "Country/area where the risk occurs",
        "River basin where the risk occurs",
        "Mining project ID",
        "Organization-specific description of risk",
        "% of portfolio value vulnerable to this risk",
        "Primary financial effect of the risk",
        "Time horizon over which the risk is anticipated to have a substantive effect on the organization",
        "Likelihood of the risk having an effect within the anticipated time horizon",
        "Magnitude",
        "Effect of the risk on the financial position, financial performance and cash flows of the organization in the reporting year",
        "Anticipated effect of the risk on the financial position, financial performance and cash flows of the organization in the selected future time horizons",
        "Are you able to quantify the financial effect of the risk?",
        "Financial effect figure in the reporting year (currency)",
        "Anticipated financial effect figure in the short-term – minimum (currency)",
        "Anticipated financial effect figure in the short-term – maximum (currency)",
        "Anticipated financial effect figure in the medium-term – minimum (currency)",
        "Anticipated financial effect figure in the medium-term – maximum (currency)",
        "Anticipated financial effect figure in the long-term – minimum (currency)",
        "Anticipated financial effect figure in the long-term – maximum (currency)",
        "Explanation of financial effect figure",
        "Primary response to risk",
        "Cost of response to risk",
        "Explanation of cost calculation",
        "Description of response",
      ],
      tableRows: 2,
      response: "SDP145_19",
    },
    {
      slNo: "3.1.2",
      question:
        "Provide the amount and proportion of your financial metrics from the reporting year that are vulnerable to the substantive effects of environmental risks.",
      guidance:
        "This question provides investors and data users with more transparency over the vulnerability of an organization to the substantive effects of environmental risks. Quantifying vulnerability can provide an understanding of the degree to which the organization stands to be affected by their anticipated risks. This can inform how and where the organization responds to environmental risk within their financial planning and strategy.",
      tableColumns: [
        "Environmental issue",
        "Financial metric",
        "Amount of financial metric vulnerable to transition risks for this environmental issue (unit currency as selected in 1.2)",
        "% of total financial metric vulnerable to transition risks for this environmental issue",
        "Amount of financial metric vulnerable to physical risks for this environmental issue (unit currency as selected in 1.2)",
        "% of total financial metric vulnerable to physical risks for this environmental issue",
        "Amount of CAPEX in the reporting year deployed towards risks related to this environmental issue",
        "Explanation of financial figures",
      ],
      tableRows: 2,
      response: "SDP145_20",
    },
    {
      slNo: "3.2",
      question:
        "Within each river basin, how many facilities are exposed to substantive effects of water-related risks, and what percentage of your total number of facilities does this represent?",
      guidance:
        "Information on river basins provides a deeper understanding of the potential significance of the water risk exposure associated with each basin, which may be driven by the organization’s dependencies and impacts. Knowing the number of facilities at risk for each basin and the potential impact of this risk exposure helps organizations with decision making based on basin-level issues. It allows financial planning at that level to take account of water issues and provides a powerful indicator to support river basin action and investment.",
      tableColumns: [
        "Country/Area & River basin",
        "Value chain stages where facilities at risk have been identified in this river basin",
        "Number of facilities within direct operations exposed to water-related risk in this river basin",
        "% of your organization’s total facilities within direct operations exposed to water-related risk in this river basin",
        "Number of facilities within downstream value chain exposed to water-related risk in this river basin",
        "Number of facilities in upstream value chain exposed to water-related risk in this river basin",
        "Production value for the metals and mining activities associated with these facilities (currency)",
        "% organization’s annual electricity generation that could be affected by these facilities",
        "% organization’s global oil and gas production volume that could be affected by these facilities",
        "% organization’s total global revenue that could be affected",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP145_21",
    },
    {
      slNo: "3.3",
      question:
        "In the reporting year, was your organization subject to any fines, enforcement orders, and/or other penalties for water-related regulatory violations?",
      guidance:
        "Knowledge of compliance related fines and other non-financial penalties across your organization demonstrates an awareness by your organization of its impact on the local operating environment as well as the potential financial implications of its water management. This information helps investors and other data users to gain some insight into the effectiveness of your control procedures at a corporate level.",
      tableColumns: [
        "Water-related regulatory violations",
        "Fines, enforcement orders, and/or other penalties*",
        "Comment",
      ],
      tableRows: 2,
      response: "SDP145_22",
    },
    {
      slNo: "3.3.1",
      question:
        "Provide the total number and financial value of all water-related fines.",
      guidance:
        "Providing aggregated information, for absolute numbers and the tracking of numbers of compliance-related fines, is evidence that your organization is monitoring its local operating environments and keeping track at corporate level.",
      tableColumns: [
        "Total number of fines",
        "Total value of fines",
        "% of total facilities/operations associated",
        "Number of fines compared to previous year",
        "Comment",
      ],
      tableRows: 2,
      response: "SDP145_23",
    },
    {
      slNo: "3.3.2",
      question:
        "Provide details for all significant fines, enforcement orders, and/or penalties for water-related regulatory violations in the reporting year, and your plans for resolving them",
      guidance:
        "Providing these details of fines and other non-financial penalties, such as location and your plans for resolving them, demonstrates to CDP data users that your organization is keeping track at the corporate level and also that it has an awareness of impacts in their local operating environment.",
      tableColumns: [
        "Type of penalty",
        "Financial impact",
        "Country/Area & River basin",
        "Type of incident",
        "Description of penalty, incident, regulatory violation, significance, and resolution",
      ],
      tableRows: 2,
      response: "SDP145_24",
    },
    {
      slNo: "3.4",
      question:
        "In the reporting year, was your organization subject to any fines, enforcement orders, and/or other penalties for violation of biodiversity-related regulation?",
      guidance:
        "Knowledge of compliance related to fines and other non-financial penalties across your organization demonstrates an awareness of your organization’s impact on the local environment, as well as the potential financial implications of its biodiversity management. This information provides insights to investors and other data users about the effectiveness of your control procedures at a corporate level.",
      tableColumns: [
        "Any penalties for violation of biodiversity-related regulation?",
        "Comment",
      ],
      tableRows: 2,
      response: "SDP145_26",
    },
    {
      slNo: "3.4.1",
      question:
        "Provide details for all significant fines, enforcement orders and/or other penalties for biodiversity-related regulatory violations in the reporting year, and your plans for resolving them.",
      guidance:
        "Providing details of significant fines and other non-financial penalties, such as location and your plans for resolving them, demonstrates to CDP data users that your organization is keeping track of these events at the corporate level and has awareness of unplanned impacts on biodiversity caused by its operations.",
      tableColumns: [
        "Mining project ID",
        "Type of penalty",
        "Financial value of penalty",
        "Type of incident",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP145_27",
    },
    {
      slNo: "3.5",
      question:
        "Are any of your operations or activities regulated by a carbon pricing system (i.e. ETS, Cap & Trade or Carbon Tax)?",
      guidance:
        "Companies are requested to report whether they are subject to, or potentially subject to, mandatory carbon pricing systems. This question has evolved to include whether companies are currently regulated by a carbon pricing system – including carbon markets or taxation – or whether they expect to be regulated in the future. Companies responding ”Yes” will be further prompted to identify the systems in which they participate and to provide additional details about their exposure to these systems. This information allows investors to consistently track and analyze corporate expectations and the associated costs of carbon pricing regulations, and forces unregulated companies to consider potential future exposure.",
      tableColumns: [],
      tableRows: 0,
      response: "SDP124_50",
    },
    {
      slNo: "3.5.1",
      question:
        "Select the carbon pricing regulations(s) which impact your operations.",
      guidance:
        "As the number of jurisdictions with carbon pricing policies has doubled over the last decade, data users are interested in understanding how organizations are affected by these schemes. This question contextualizes the regulatory landscapes in which organizations operate and the potential for future regulation which may impact an organization’s operations",
      tableColumns: [],
      tableRows: 0,
      response: "",
    },
    {
      slNo: "3.5.2",
      question:
        "Provide details of each Emissions Trading Scheme (ETS) your organization is regulated by",
      guidance:
        "As the number of jurisdictions with carbon pricing policies has doubled over the last decade, data users are interested in understanding how organizations are affected by these schemes. This question contextualizes the regulatory landscapes in which organizations operate and the potential for future regulation which may impact an organization’s operations",
      tableColumns: [
        "System name",
        "% of Scope 1 emissions covered by the ETS",
        "% of Scope 2 emissions covered by the ETS",
        "Period start date",
        "Period end date",
        "Allowances allocated",
        "Allowances purchased",
        "Verified Scope 1 emissions in metric tons CO2e",
        "Verified Scope 2 emissions in metric tons CO2e",
        "Details of ownership",
        "Comment",
      ],
      tableRows: 2,
      response: "SDP145_25",
    },
    {
      slNo: "3.5.3",
      question:
        "Complete the following table for each of the tax systems you are regulated by.",
      guidance:
        "This question allows data users to track and analyze in a detailed and consistent manner the organizations’ participation in carbon tax systems, as well as what costs they currently bear.",
      tableColumns: [
        "Tax system",
        "Period start date",
        "Period end date",
        "% of total Scope 1 emissions covered by tax",
        "Total cost of tax paid",
        "Comment",
      ],
      tableRows: 2,
      response: "",
    },
    {
      slNo: "3.5.4",
      question:
        "What is your strategy for complying with the systems you are regulated by or anticipate being regulated by?",
      guidance:
        "This question provides data users with insight into an organization’s long-term compliance and regulatory risk management strategy for the carbon pricing systems they are regulated by or anticipate being regulated by.",
      tableColumns: [],
      tableRows: 0,
      response: "SDP145_29",
    },
    {
      slNo: "3.6",
      question:
        "Have you identified any environmental opportunities which have had a substantive effect on your organization in the reporting year, or are anticipated to have a substantive effect on your organization in the future?",
      guidance:
        "It is crucial for investors and data users to know whether your organization has identified any environmental opportunities within your direct operations or across your value chain with the potential to have substantive effects on your organization. This includes both opportunities which have already had an effect in the reporting year, as well as opportunities which may have an effect in the future. If no environmental opportunities with substantive effects have been identified as part of your assessment, it is equally crucial for data users to understand how and why your organization has concluded that you are not presented with any opportunities.",
      tableColumns: [
        "Environmental issue",
        "Environmental opportunities identified",
        "Primary reason why your organization does not consider itself to have environmental opportunities",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP145_30",
    },
    {
      slNo: "3.6.1",
      question:
        "Provide details of the environmental opportunities identified which have had a substantive effect on your organization in the reporting year, or are anticipated to have a substantive effect on your organization in the future.",
      guidance:
        "Your response to this question provides data users with an overview of the environmental opportunities which have had a substantive effect on your organization in the reporting year or are estimated to have a substantive effect in the future. Information on the current and estimated potential scale of these opportunities, as well as your response strategy to seize these opportunities, enable data users to see how your organization is implementing corporate actions to improve business resilience and environmental stewardship.",
      tableColumns: [
        "Environmental issue the opportunity relates to",
        "Opportunity identifier",
        "Commodity",
        "Opportunity type and primary environmental opportunity driver",
        "Value chain stage where the opportunity occurs",
        "Country/area where the opportunity occurs",
        "River basin where the opportunity occurs",
        "Mining project ID",
        "Organization specific description",
        "Primary financial effect of the opportunity",
        "Time horizon over which the opportunity is anticipated to have a substantive effect on the organization",
        "Likelihood of the opportunity having an effect within the anticipated time horizon",
        "Magnitude",
        "Effect of the opportunity on the financial position, financial performance and cash flows of the organization in the reporting period",
        "Anticipated effect of the opportunity on the financial position, financial performance and cash flows of the organization in the selected future time horizons",
        "Are you able to quantify the financial effects of the opportunity?",
        "Financial effect figure in the reporting year (currency)",
        "Anticipated financial effect figure in the short-term - minimum (currency)",
        "Anticipated financial effect figure in the medium-term - minimum (currency)",
        "Anticipated financial effect figure in the medium-term - maximum (currency)",
        "Anticipated financial effect figure in the long-term - minimum (currency)",
        "Anticipated financial effect figure in the long-term – maximum (currency)",
        "Explanation of financial effect figures",
        "Cost to realize opportunity",
        "Explanation of cost calculation",
        "Strategy to realize opportunity",
      ],
      tableRows: 2,
      response: "SDP145_31",
    },
    {
      slNo: "3.6.2",
      question:
        "Provide the amount and proportion of your financial metrics in the reporting year that are aligned with the substantive effects of environmental opportunities.",
      guidance:
        "This question provides investors and data users with a more complete picture of alignment of finance the substantive effects of environmental opportunities. The proportion of individual financial metrics that are aligned with opportunities can inform strategy to addressing each environmental issue due to each metric’s implications and distinctive role within an organization's financial accounting and strategy.",
      tableColumns: [
        "Environmental issue",
        "Financial metric",
        "Amount of financial metric aligned with opportunities for this environmental issue (unit currency as selected in 1.2)",
        "% of total financial metric aligned with opportunities for this environmental issue",
        "Explanation of financial figures",
      ],
      tableRows: 2,
      response: "SDP145_32",
    },
  ];

  const tableDataModuleFour = [
    {
      slNo: "4.1",
      question:
        "Does your organization have a board of directors or an equivalent governing body?",
      guidance:
        "This question provides context to data users on board composition and diversity, which have been found to correlate with performance on environmental issues.",
      tableColumns: [
        "Board of directors or equivalent governing body",
        "Frequency with which the board or equivalent meets",
        "Types of directors your board or equivalent is comprised of",
        "Board diversity and inclusion policy",
        "Briefly describe what the policy covers",
        "Attach the policy (optional)",
      ],
      tableRows: 2,
      tableData: [
        ["SDP127_1", "SDP127_1", "", "", "", ""],
        ["", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "4.1.1",
      question:
        "Is there board-level oversight of environmental issues within your organization?",
      guidance:
        "To address environmental challenges, it is essential that organizations incorporate environmental issues into their governance procedures. This question provides data users with an indication of your level of commitment to addressing environmental issues in your organization.",
      tableColumns: [
        "Environmental issue",
        "Board-level oversight of this environmental issue",
        "Primary reason for no board level oversight of this environmental issue",
        "Explain why your organization does not have board-level oversight of this environmental issue",
      ],
      tableRows: 2,
      tableData: [
        ["SDP127_2", "", "", ""],
        ["", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "4.1.2",
      question:
        "Identify the positions (do not include any names) of the individuals or committees on the board with accountability for environmental issues and provide details of the board’s oversight of environmental issues.",
      guidance:
        "By disclosing information on governance mechanisms and board-level accountability relating to environmental issues, organizations demonstrate the degree of strategic significance attached to environmental issues by the organization. This question provides an indication of your level of commitment to highlighting the importance of environmental issues at the highest level of your organizational structure.",
      tableColumns: [
        "Environmental issue",
        "Positions of individuals or committees with accountability for this environmental issue",
        "Positions’ accountability for this environmental issue is outlined in policies applicable to the board",
        "Policies which outline the positions’ accountability for this environmental issue",
        "Frequency with which this environmental issue is a scheduled agenda item",
        "Governance mechanisms into which this environmental issue is integrated",
        "Scope of board-level oversight",
        "Please explain",
      ],
      tableRows: 2,
      tableData: [
        ["SDP127_2", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "4.2",
      question:
        "Does your organization’s board have competency on environmental issues?",
      guidance:
        "Transitioning a business for success in a sustainable future requires environmental competency within its decision-making bodies. This capability at board-level and commitment to maintaining high levels of competency signals an organization’s commitment to understanding and responding to environmental dependencies, impacts, risks, and opportunities.",
      tableColumns: [
        "Environmental issue",
        "Board-level competency on this environmental issue",
        "Mechanisms to maintain an environmentally competent board",
        "Environmental expertise of the board member",
        "Primary reason for no board-level competency on this environmental issue",
        "Explain why your organization does not have a board with competence on this environmental issue",
      ],
      tableRows: 2,
      tableData: [
        ["SDP127_7", "", "", "", "", ""],
        ["", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "4.3",
      question:
        "Is there management-level responsibility for environmental issues within your organization?",
      guidance:
        "While it is most important for a member of the board to have accountability over environmental issues, assigning management-level responsibility indicates that the organization is committed to implementing its environmental policy.",
      tableColumns: [
        "Environmental issue",
        "Management-level responsibility for this environmental issue",
        "Primary reason for no management-level responsibility for environmental issues",
        "Explain why your organization does not have management-level responsibility for environmental issues",
      ],
      tableRows: 2,
      response: "SDP135_13",
    },
    {
      slNo: "4.3.1",
      question:
        "Provide the highest senior management-level positions or committees with responsibility for environmental issues (do not include the names of individuals).",
      guidance:
        "While it is most important for a member of the board to have accountability over environmental issues, assigning management-level responsibility indicates that the organization is committed to implementing its environmental policy.",
      tableColumns: [
        "Environmental issue",
        "Position of individual or committee with responsibility",
        "Environmental responsibilities of this position",
        "Coverage of responsibilities",
        "Reporting line",
        "Frequency of reporting to the board on environmental issues",
        "Please explain",
      ],
      tableRows: 2,
      tableData: [
        ["", "SDP128_41", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "4.4",
      question:
        "Does your organization have management-level competency on environmental issues?",
      guidance:
        "Transitioning a business for success in a sustainable future requires environmental competency within its decision-making bodies. This capability at management-level for organizations without a board signals an organization’s commitment to understanding and responding to environmental dependencies, impacts, risks, and opportunities.",
      tableColumns: [
        "Environmental issues",
        "Management level competency on this environmental issue",
        "Mechanisms to maintain management level competency on this environmental issue",
        "Environmental expertise of the individual at management level",
        "Primary reason for no management level competency on environmental issues",
        "Explain why your organization does not have management level competency on this environmental issue",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP135_14",
          "SDP135_15",
          "SDP135_16",
          "SDP135_17",
          "SDP135_18",
          "SDP135_19",
        ],
        ["", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "4.5",
      question:
        "Do you provide monetary incentives for the management of environmental issues, including the attainment of targets?",
      guidance:
        "Employee incentives linked to sustainability performance send a clear signal about the role that employees are expected to play in achieving the organization’s environmental commitments and targets. Data users aim to understand the degree to which organizations encourage their employees to address environmental issues, as well as the mechanisms by which certain behaviors are incentivized in the organization’s decision making and business culture.",
      tableColumns: [
        "Environmental issue",
        "Provision of monetary incentives related to this environmental issue",
        "% of total C-suite and board-level monetary incentives linked to the management of this environmental issue",
        "Please explain",
      ],
      tableRows: 2,
      tableData: [
        ["", "SDP135_20", "SDP135_21", ""],
        ["", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "4.5.1",
      question:
        "Provide further details on the monetary incentives provided for the management of environmental issues (do not include the names of individuals).",
      guidance:
        "Employee incentives linked to sustainability performance send a clear signal about the role that employees are expected to play in achieving the organization’s environmental commitments and targets. Data users aim to understand the degree to which organizations encourage their employees to address environmental issues, as well as the mechanisms by which certain behaviors are incentivized in the organization’s decision making and business culture. Providing insight into these incentives and the specific performance metrics used to address environmental issues informs data users how these incentives are aligned with the identification, assessment, and management of the organization’s environmental dependencies, impacts, risks, and opportunities.",
      tableColumns: [
        "Environmental issue",
        "Position entitled to monetary incentive",
        "Incentives",
        "Performance metrics",
        "Incentive plan the incentives are linked to",
        "Further details of incentives",
        "How the position’s incentives contribute to the achievement of your environmental commitments and/or climate transition plan",
      ],
      tableRows: 2,
      tableData: [
        [
          "",
          "SDP135_22",
          "SDP135_23",
          "SDP135_24",
          "SDP135_25",
          "SDP135_26",
          "SDP135_27",
        ],
        ["", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "4.6",
      question:
        "Does your organization have an environmental policy that addresses environmental issues?",
      guidance:
        "An environmental policy is a key governance tool which serves as a foundation to drive action while ensuring accountability. Setting a corporate environmental policy for environmental issues indicates that the organization understands their importance and recognizes its responsibility in taking environmental action. Therefore, data users wish to know that organizations have articulated and documented a policy that acknowledges the organization’s dependencies, impacts, risks, and opportunities associated with environmental issues, and have clear intentions and direction for action. For accountability to the organization’s stakeholders, the policy should be publicly available.",
      tableColumns: [
        "Does your organization have any environmental policies?",
        "Primary reason for not having an environmental policy",
        "Explain why you do not have an environmental policy",
      ],
      tableRows: 2,
      tableData: [
        ["SDP121_11", "", ""],
        ["", "", ""],
      ],
      response: "SDP121_11",
    },
    {
      slNo: "4.6.1",
      question: "Provide details of your environmental policies.",
      guidance:
        "An environmental policy is a key governance tool which serves as a foundation to drive environmental action while ensuring accountability. This question informs data users about the organization’s commitments regarding environmental issues by providing an insight into its level of awareness of those issues and demonstrating the robustness of actions outlined in the policy.",
      tableColumns: [
        "Environmental issues covered",
        "Level of coverage",
        "Value chain stages covered",
        "Explain the coverage",
        "Environmental policy content",
        "Indicate whether your environmental policy is in line with global environmental treaties or policy goals",
        "Public availability",
        "Attach the policy",
      ],
      tableRows: 2,
      tableData: [
        ["SDP135_28", "SDP135_29", "SDP135_30", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "4.7",
      question:
        "Does the policy framework for the portfolio activities of your organization include environmental requirements that clients/investees need to meet, and/or exclusion policies?",
      guidance:
        "Considering environmental issues in an organization’s policy framework is an important element of business strategy and a signal of how deeply environmental issues are embedded in an organization’s processes. For these reasons, data users are interested in understanding whether organizations in the financial services sector have integrated environmental requirements for clients/investees, and whether financial institutions have implemented any environmental exclusion policies.",
      tableColumns: [
        "Portfolio",
        "Policy framework for portfolio activities include environmental requirements for clients/investees, and/or exclusion policies",
        "Primary reason for not including both policies with environmental client/investee requirements and environmental exclusion policies in your policy framework for portfolio activities",
        "Explain why the policy framework for your portfolio activities does not include both policies with environmental client/investee requirements and environmental exclusion policies",
      ],
      tableRows: 2,
      tableData: [
        ["SDP135_34", "SDP135_33", "SDP135_38", "SDP135_35"],
        ["", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "4.7.1",
      question:
        "Provide details of the policies which include environmental requirements that clients/investees need to meet.",
      guidance:
        "To help manage environmental risks, organizations should integrate environmental issues into existing policy frameworks. These policies may apply across the organization and may be based on sectors, geographies, business lines, asset classes or other. Although the wave of environmental policies and regulations is growing, their implementation varies across organizations. This question helps data users understand which corporate policies integrate environmental issues, and what proportion of a financial services company’s portfolio is covered by the policy.",
      tableColumns: [
        "Portfolio",
        "Environmental issues covered",
        "Type of policy",
        "Public availability",
        "Total gross Scope 1 emissions (metric tons CO2e)",
        "Value chain stages of client/investee covered by policy",
        "Industry sectors covered by the policy",
        "Commodities covered by the policy",
        "Commodity value chain stage covered by the policy",
        "% of portfolio covered by the policy in relation to total portfolio value",
        "Basis of exceptions to policy",
        "Explain how criteria coverage and/or exceptions have been determined",
        "Requirements for clients/investees",
        "Measurement of proportion of clients/investees compliant with the policy",
        "% of clients/investees compliant with the policy",
        "% of portfolio value that is compliant with the policy",
        "Target year for 100% compliance",
        "Explain why your organization does not measure the % of clients/investees compliant with the policy",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP135_39",
          "SDP135_40",
          "SDP135_42",
          "",
          "MT161",
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
      slNo: "4.7.2",
      question:
        "Provide details of your exclusion policies related to industries, activities and/or locations exposed or contributing to environmental risks.",
      guidance:
        "Exclusion policies are an element of financial sector companies’ negative screening processes to reduce portfolio exposure to environmentally vulnerable projects and/or investments, and to implement environmental commitments. Data users are interested in understanding the types of environmental policy exclusions and the effect that these exclusions have had or will have on the organizations’ exposure.",
      tableColumns: [
        "Portfolio",
        "Type of exclusion policy",
        "Fossil fuel value chain",
        "Year of exclusion implementation",
        "Phaseout pathway",
        "Year of complete phaseout",
        "Country/area the exclusion policy applies to",
        "Description",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP135_45",
          "SDP135_44",
          "SDP135_46",
          "SDP135_47",
          "SDP135_48",
          "SDP135_47",
          "",
          "",
        ],
        ["", "", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "4.8",
      question:
        "Does your organization include covenants in financing agreements to reflect and enforce your environmental policies?",
      guidance:
        "Banks can influence their clients through requirements within the terms of financing agreements and with the option of a default being triggered should there be a failure to comply. Data users are interested in whether banks are using this method to promote action on environmental performance because there are potential benefits for the bank including a perceived improvement in credit profile and access to alternative pools of capital.",
      tableColumns: [
        "Covenants included in financing agreements to reflect and enforce policies",
        "Primary reason for not including covenants in financing agreements",
        "Explain why your organization does not include covenants in financing agreements",
      ],
      tableRows: 2,
      tableData: [
        ["SDP135_49", "SDP135_50", "SDP135_51"],
        ["", "", ""],
      ],
      response: "",
    },
    {
      slNo: "4.8.1",
      question:
        "Provide details of the covenants included in your organization’s financing agreements to reflect and enforce your environmental policies.",
      guidance:
        "Banks can influence their clients through requirements within the terms of financing agreements and with the option of a default being triggered should there be a failure to comply. Data users are interested in whether banks are using this to enforce their environmental policies and promote action on environmental performance, including a perceived improvement in credit profile and access to alternative pools of capital.",
      tableColumns: [
        "Environmental issue",
        "Types of covenants used",
        "Asset class/product types covered by covenants",
        "Criteria for how covenants are applied",
        "% of clients covered by covenants",
        "% of portfolio covered in relation to total portfolio value",
        "Provide details on which environmental policies your covenants enforce, and how",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP135_52",
          "SDP135_53",
          "SDP135_54",
          "SDP135_55",
          "SDP135_56",
          "",
          "SDP135_57",
        ],
        ["", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "4.9",
      question:
        "Does your organization offer its employees a pension scheme that incorporates environmental criteria in its holdings?",
      guidance:
        "Consideration of environmental factors in pension scheme holdings contributes to the financing of a sustainable economy and demonstrates that organizations consider such risks and opportunities in their assessment of pension plan options. This question allows data users to understand how the organization is contributing to sustainable investing.",
      tableColumns: [
        "Environmental issue",
        "Pension scheme incorporates environmental criteria in its holdings",
        "Describe how funds within the pension scheme are selected and how your organization ensures that environmental criteria are incorporated",
        "Explain why your organization does not incorporate criteria for this environmental issue into the pension scheme holdings",
      ],
      tableRows: 2,
      tableData: [
        ["", "SDP135_58", "SDP135_59", "SDP135_60"],
        ["", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "4.10",
      question:
        "Are you a signatory or member of any environmental collaborative frameworks or initiatives?",
      guidance:
        "By becoming a signatory of environmental collaborative industry initiatives, organizations contribute to the development of environmental disclosure frameworks, metrics, and goals that will help transition into a more sustainable economy. Supporting environmental industry initiatives sends a signal to investors about the organization’s commitment to taking steps to align its business with this transition. Endorsing widely known public initiatives reflects good practice and meets data users’ demand for environmental action, as organizations have the opportunity to benchmark themselves against their peers.",
      tableColumns: [
        "Are you a signatory or member of any environmental collaborative frameworks or initiatives?",
        "Collaborative framework or initiative",
        "Describe your organization’s role within each framework or initiative",
      ],
      tableRows: 2,
      tableData: [
        ["SDP135_61", "SDP135_62", "SDP135_63"],
        ["", "", ""],
      ],
      response: "",
    },
    {
      slNo: "4.11",
      question:
        "In the reporting year, did your organization engage in activities that could directly or indirectly influence policy, law, or regulation that may (positively or negatively) impact the environment?",
      guidance:
        "Data users wish to understand how an organization’s policy engagement on environmental issues relates to other stances taken. It is important that organizations maintain a consistent approach to environmental issues – for instance, engaging in activities whose purpose is to discredit environmental science, while also collaborating with other groups to advance solutions for environmental issues sends conflicting messages to data users about that organization’s priorities and stance. This question provides data users with insights into the different external engagement activities of organizations and enables organizations to disclose the processes they use to ensure that their position on environmental issues is compatible with the positive contributions in which they partake, as well as with global environmental treaties or goals.",
      tableColumns: [
        "External engagement activities that could directly or indirectly influence policy, law, or regulation that may impact the environment",
        "Indicate whether your organization has a public commitment or position statement to conduct your engagement activities in line with global environmental treaties or policy goals",
        "Global environmental treaties or policy goals in line with public commitment or position statement",
        "Attach commitment or position statement",
        "Indicate whether your organization is registered on a transparency register",
        "Types of transparency register your organization is registered on",
        "Disclose the transparency registers on which your organization is registered & the relevant ID numbers for your organization",
        "Describe the process your organization has in place to ensure that your external engagement activities are consistent with your environmental commitments and/or transition plan",
        "Primary reason for not engaging in activities that could directly or indirectly influence policy, law, or regulation that may impact the environment",
        "Explain why your organization does not engage in activities that could directly or indirectly influence policy, law, or regulation that may impact the environment",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP135_64",
          "SDP135_65",
          "SDP135_66",
          "SDP135_67",
          "SDP135_68",
          "SDP135_69",
          "SDP135_70",
          "SDP135_71",
          "SDP135_72",
          "SDP135_73",
        ],
        ["", "", "", "", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "4.11.1",
      question:
        "On what policies, laws, or regulations that may (positively or negatively) impact the environment has your organization been engaging directly with policy makers in the reporting year?",
      guidance:
        "Data users wish to understand how an organization’s policy engagement on environmental issues relate to other stances taken. This question provides increased transparency regarding an organization’s direct engagement with policy makers, and whether the engagement is aligned with global environmental treaties or goals.",
      tableColumns: [
        "Specify the policy, law, or regulation on which your organization is engaging with policy makers",
        "Environmental issues the policy, law, or regulation relates to",
        "Focus area of policy, law, or regulation that may impact the environment",
        "Geographic coverage of policy, law, or regulation",
        "Country/area/region the policy, law, or regulation applies to",
        "Your organization’s position on the policy, law, or regulation",
        "Details of any exceptions and your organization’s proposed alternative approach to the policy, law, or regulation",
        "Type of direct engagement with policy makers on this policy, law, or regulation",
        "Type of direct engagement with policy makers on this policy, law, or regulation",
        "Explain the relevance of this policy, law, or regulation to the achievement of your environmental commitments and/or transition plan, how this has informed your engagement, and how you measure the success of your engagement",
        "Indicate if you have evaluated whether your organization’s engagement on this policy, law, or regulation is aligned with global environmental treaties or policy goals",
        "Global environmental treaties or policy goals aligned with your organization’s engagement on this policy, law or regulation",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP135_74",
          "SDP135_75",
          "SDP135_76",
          "SDP135_77",
          "SDP135_78",
          "SDP135_79",
          "SDP135_80",
          "SDP135_81",
          "SDP135_83",
          "SDP135_84",
          "SDP135_85",
          "SDP135_86",
        ],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "4.11.2",
      question:
        "Provide details of your indirect engagement on policy, law, or regulation that may (positively or negatively) impact the environment through trade associations or other intermediary organizations or individuals in the reporting year.",
      guidance:
        "Organizations have many potential avenues for engagement activities. Trade associations are a tool through which organizations can shape policy and interact with legislators and industry peers. Engaging with, or providing support to, other intermediary organizations or individuals can play an important role in the development and adoption of environmental policy. As such, data users expect organizations to be transparent about the full range of their engagement and funding activities as well as their relationship and responsibilities with intermediary organizations that are likely to take a position on legislation or that could influence policy, law, or regulation that may impact the environment.",
      tableColumns: [
        "Type of indirect engagement",
        "Type of organization or individual",
        "State the organization or position of individual",
        "Trade association",
        "Environmental issues relevant to the policies, laws, or regulations on which the organization or individual has taken a position",
        "Indicate whether your organization’s position is consistent with the organization or individual you engage with",
        "Indicate whether your organization attempted to influence the organization or individual’s position in the reporting year",
        "Describe how your organization’s position is consistent with or differs from the organization or individual’s position, and any actions taken to influence their position",
        "Funding figure your organization provided to this organization or individual in the reporting year (currency)",
        "Describe the aim of this funding and how it could influence policy, law or regulation that may impact the environment",
        "Indicate if you have evaluated whether your organization’s engagement is aligned with global environmental treaties or policy goals",
        "Global environmental treaties or policy goals aligned with your organization’s engagement on policy, law or regulation",
      ],
      tableRows: 2,
      tableData: [
        ["SDP135_87", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "4.12",
      question:
        "Have you published information about your organization’s response to environmental issues for this reporting year in places other than your CDP response?",
      guidance:
        "The integration of information on environmental issues into mainstream financial reporting is a regulatory requirement in some jurisdictions and is a TCFD recommendation. Data users wish to understand whether an organization includes or plans to include environmental information in their mainstream reports to facilitate their understanding of the organization’s response to environmental dependencies, impacts, risks, and opportunities.",
      tableColumns: [],
      tableRows: 0,
      response: "SDP135_88",
    },
    {
      slNo: "4.12.1",
      question:
        "Provide details on the information published about your organization’s response to environmental issues for this reporting year in places other than your CDP response. Please attach the publication.",
      guidance:
        "For transparency in corporate environmental reporting, organizations are encouraged to integrate non-financial metrics and data into mainstream financial reports. Data users seek to understand where and how organizations communicate their environmental strategies, their emissions figures, and their dependencies, impacts, risks, and opportunities, as well as whether these communications are in line with environmental disclosure standards or frameworks.",
      tableColumns: [
        "Publication",
        "Standard or framework the report is in line with",
        "Environmental issues covered in publication",
        "Status of the publication",
        "Content elements",
        "Page/section reference",
        "Attach the relevant publication",
        "Comment",
      ],
      tableRows: 2,
      tableData: [
        ["SDP135_89", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
      ],
      response: "",
    },
  ];

  const tableDataModuleFive = [
    {
      slNo: "5.1",
      question:
        "Does your organization use scenario analysis to identify environmental outcomes?",
      guidance:
        "Scenario analysis is considered a valuable tool to inform an organization’s business strategy as part of transitioning to a sustainable economy. This question establishes whether your organization uses scenario analysis to identify environment-related outcomes, which is a recommended practice for businesses preparing for possible futures.",
      tableColumns: [
        "Environmental issue",
        "Use of scenario analysis",
        "Frequency of analysis",
        "Primary reason why your organization has not used scenario analysis",
        "Explain why your organization has not used scenario analysis",
      ],
      tableRows: 2,
      tableData: [
        ["SDP123_60", "SDP123_61", "SDP123_62", "SDP123_63", "SDP123_64"],
        ["", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.1.1",
      question:
        "Provide details of the scenarios used in your organization’s scenario analysis.",
      guidance:
        "Scenario analysis is considered a valuable tool to inform an organization’s business strategy as part of transitioning to a sustainable economy. Your response to this question provides data users with an indication of the extent to which your organization is considering a range of possible and probable futures when considering environmental challenges and opportunities in your business strategy.",
      tableColumns: [
        "Environmental issue this scenario has been used to analyze",
        "Scenario used",
        "SSP used SSPs used in conjunction with scenario",
        "Approach to scenario",
        "Scenario coverage",
        "Risk types considered in scenario",
        "Temperature alignment of scenario",
        "Reference year",
        "Timeframes covered",
        "Driving forces in scenario",
        "Assumptions, uncertainties and constraints in scenario",
        "Rationale for choice of scenario",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP123_64",
          "SDP123_65",
          "SDP123_66",
          "SDP123_67",
          "SDP123_69",
          "SDP123_70",
          "SDP123_71",
          "SDP123_72",
          "SDP123_73",
          "SDP123_74",
          "SDP123_75",
          "SDP123_76",
        ],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.1.2",
      question:
        "Provide details of the outcomes of your organization’s scenario analysis.",
      guidance:
        "Data users are interested to know how the outcomes of your scenario analysis have influenced your corporate business strategy and financial planning, as well as the identification, assessment, and management of risks and opportunities. They are also looking to understand how resilient your strategy and business model are in your reported scenarios.",
      tableColumns: [
        "Environmental issue",
        "Business processes influenced by your analysis of the reported scenarios",
        "Coverage of analysis",
        "Summarize the outcomes of the scenario analysis and any implications for other environmental issues",
      ],
      tableRows: 2,
      tableData: [
        ["SDP123_78", "SDP123_79", "SDP123_80", "SDP123_81"],
        ["", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.2",
      question:
        "Does your organization’s strategy include a climate transition plan?",
      guidance:
        "Developing a climate transition plan provides certainty to data users that an organization is aligning to the long-term, global climate goals and that its business model will continue to be relevant in a net-zero carbon economy. Collecting feedback on the climate transition plan allows shareholders to review and raise resolutions related to progress. This question provides transparency regarding an organization’s transition plans and associated feedback mechanisms.",
      tableColumns: [
        "Transition plan",
        "Temperature alignment of transition plan",
        "Publicly available climate transition plan",
        "Plan explicitly commits to cease all spending on, and revenue generation from, activities that contribute to fossil fuel expansion",
        "Description of activities included in commitment and implementation of commitment",
        "Explain why your organization does not explicitly commit to cease all spending on and revenue generation from activities that contribute to fossil fuel expansion",
        "Mechanism by which feedback is collected from shareholders on your climate transition plan",
        "Description of feedback mechanism",
        "Frequency of feedback collection",
        "Description of key assumptions and dependencies on which the transition plan relies",
        "Description of progress against transition plan disclosed in current or previous reporting period",
        "Attach any relevant documents which detail your climate transition plan (optional)",
        "Other environmental issues that your climate transition plan considers",
        "Explain how the other environmental issues are considered in your climate transition plan",
        "Primary reason for not having a climate transition plan that aligns with a 1.5°C world",
        "Explain why your organization does not have a climate transition plan that aligns with a 1.5°C world",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP124_1",
          "SDP124_1",
          "",
          "SDP124_5",
          "SDP124_6",
          "SDP124_3",
          "",
          "",
          "SDP124_7",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.3",
      question:
        "Have environmental risks and opportunities affected your strategy and/or financial planning?",
      guidance:
        "This question allows organizations to indicate whether they have considered and acted upon their substantive environmental risks and opportunities at a strategic level for the business, rather than solely at the operational level.",
      tableColumns: [
        "Environmental risks and/or opportunities have affected your strategy and/or financial planning",
        "Business areas where environmental risks and/or opportunities have affected your strategy",
        "Primary reason why environmental risks and/or opportunities have not affected your strategy and/or financial planning",
        "Explain why environmental risks and/or opportunities have not affected your strategy and/or financial planning",
      ],
      tableRows: 2,
      tableData: [
        ["SDP123_89", "SDP123_15", "SDP99_8", "SDP123_92"],
        ["", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.3.1",
      question:
        "Describe where and how environmental risks and opportunities have affected your strategy.",
      guidance:
        "Through this question, data users seek to understand where the identified environmental risks and opportunities have affected your organization’s strategy. Your response to this question may be used to inform expectations about the future performance of your organization and how resilient your strategy is to environmental risks and opportunities.",
      tableColumns: [
        "Business area",
        "Effect type",
        "Environmental issues relevant to the risks and/or opportunities that have affected your strategy in this area",
        "Describe how environmental risks and/or opportunities have affected your strategy in this area",
      ],
      tableRows: 2,
      tableData: [
        ["SDP123_94", "SDP123_95", "SDP123_93", "SDP123_96"],
        ["", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.3.2",
      question:
        "Describe where and how environmental risks and opportunities have affected your financial planning.",
      guidance:
        "Environmental issues can affect aspects of an organization’s financial position and performance, both now and in the future. Through this question, data users seek to understand where the identified environmental risks and opportunities have affected your financial position, and how this has been incorporated and addressed in your financial planning process.",
      tableColumns: [
        "Financial planning elements that have been affected",
        "Effect type",
        "Environmental issues relevant to the risks and/or opportunities that have affected these financial planning elements",
        "Describe how environmental risks and/or opportunities have affected these financial planning elements",
      ],
      tableRows: 2,
      tableData: [
        ["", "", "SDP123_97", ""],
        ["", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.4",
      question:
        "In your organization’s financial accounting, do you identify spending/revenue that is aligned with your organization’s climate transition?",
      guidance:
        "Organizations need to be aware of whether their spending and revenue is supporting their climate transition. Basing such an assessment on activities, projects, or assets defined as sustainable by a sustainable finance taxonomy can inform progress being made on their commitment to mitigate and adapt to climate change and enhance its credibility.",
      tableColumns: [
        "Identification of spending/revenue that is aligned with your organization’s climate transition",
        "Methodology or framework used to assess alignment with your organization’s climate transition",
        "Indicate the level at which you identify the alignment of your spending/revenue with a sustainable finance taxonomy",
      ],
      tableRows: 2,
      tableData: [
        ["SDP123_98", "SDP123_99", "SDP123_100"],
        ["", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.4.1",
      question:
        "Quantify the amount and percentage share of your spending/revenue that is aligned with your organization’s climate transition.",
      guidance:
        "This question allows organizations to demonstrate the extent to which their spending and revenue is compatible with their climate transition, by assessing their alignment against a sustainable finance taxonomy and/or any other methodology. Such reporting is aimed at eliminating greenwashing in the organization’s financial planning in relation to its climate transition.",
      tableColumns: [
        "Methodology or framework used to assess alignment",
        "Taxonomy under which information is being reported",
        "Objective under which alignment is being reported",
        "Indicate whether you are reporting eligibility information for the selected objective",
        "Financial metric",
        "Amount of selected financial metric that is aligned in the reporting year (currency)",
        "Percentage share of selected financial metric aligned in the reporting year (%)",
        "Percentage share of selected financial metric planned to align in 2025 (%)",
        "Percentage share of selected financial metric planned to align in 2030 (%)",
        "Percentage share of financial metric that is taxonomy-eligible in the reporting year (%)",
        "Percentage share of financial metric that is taxonomy non-eligible in the reporting year (%)",
        "Details of the methodology or framework used to assess alignment with your organization’s climate transition",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP123_101",
          "SDP123_102",
          "SDP123_103",
          "SDP123_104",
          "SDP123_105",
          "SDP123_106",
          "SDP123_107",
          "SDP123_108",
          "SDP123_109",
          "SDP123_110",
          "SDP123_111",
          "",
        ],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.4.2",
      question:
        "Quantify the percentage share of your spending/revenue that was associated with eligible and aligned activities under the sustainable finance taxonomy in the reporting year.",
      guidance:
        "This question allows organizations to provide evidence of the extent to which their spending and revenue is directed at/derived from activities defined as sustainable by a sustainable finance taxonomy. Such evidence is crucial to enhance transparency of the accounting practices used by organizations in their climate-related financial reporting.",
      tableColumns: [
        "Economic activity",
        "Taxonomy under which information is being reported",
        "Taxonomy alignment",
        "Financial metrics",
        "Types of substantial contribution",
        "Taxonomy-aligned turnover from this activity in the reporting year (currency)",
        "Taxonomy-aligned turnover from this activity as % of total turnover in the reporting year",
        "Taxonomy-aligned turnover from this activity that substantially contributed to climate change mitigation as a % of total turnover in the reporting year",
        "Taxonomy-eligible but not aligned turnover from this activity in the reporting year (currency)",
        "Taxonomy-eligible but not aligned turnover from this activity as % of total turnover in the reporting year",
        "Taxonomy-eligible, alignment not assessed turnover from this activity as % of total turnover in reporting year",
        "Taxonomy-aligned CAPEX from this activity in the reporting year (currency)",
        "Taxonomy-aligned CAPEX from this activity as % of total CAPEX in the reporting year",
        "Taxonomy aligned CAPEX from this activity that substantially contributed to climate change mitigation as a % of total CAPEX in the reporting year",
        "Taxonomy aligned CAPEX from this activity that substantially contributed to climate change adaptation as a % of total CAPEX in the reporting year",
        "Taxonomy-eligible but not aligned CAPEX associated with this activity in the reporting year (currency)",
        "Taxonomy-eligible but not aligned CAPEX associated with this activity as % of total CAPEX in the reporting year",
        "Taxonomy-eligible, alignment not assessed CAPEX associated with this activity as % of total CAPEX in the reporting year",
        "Taxonomy-aligned OPEX from this activity in the reporting year (currency)",
        "Taxonomy aligned OPEX from this activity as % of total OPEX in the reporting year",
        "Taxonomy-aligned OPEX from this activity that substantially contributed to climate change mitigation as a % of total OPEX in the reporting year",
        "Taxonomy-aligned OPEX from this activity that substantially contributed to climate change adaptation as a % of total OPEX in the reporting year",
        "Taxonomy-eligible but not aligned OPEX associated with this activity in the reporting year (currency)",
        "Taxonomy-eligible but not aligned OPEX associated with this activity as % total OPEX in the reporting year",
        "Taxonomy-eligible, alignment not assessed OPEX with this activity as % of total OPEX in the reporting year",
        "Calculation methodology and supporting information",
        "Substantial contribution criteria met",
        "Details of substantial contribution criteria analysis",
        "Do no significant harm requirements met",
        "Details of do no significant harm analysis",
        "Minimum safeguards compliance requirements met",
        "Attach any supporting evidence",
      ],
      tableRows: 2,
      tableData: [
        [
          "",
          "SDP124_64",
          "SDP124_65",
          "SDP124_66",
          "SDP124_67",
          "SDP124_68",
          "SDP124_69",
          "SDP124_70",
          "SDP124_71",
          "SDP124_72",
          "SDP124_72",
          "SDP124_73",
          "SDP124_74",
          "SDP124_75",
          "SDP124_76",
          "SDP124_77",
          "SDP124_78",
          "SDP124_78",
          "SDP124_79",
          "SDP124_80",
          "SDP124_81",
          "SDP124_82",
          "SDP124_83",
          "SDP124_84",
          "",
          "SDP124_85",
          "SDP124_86",
          "SDP124_87",
          "SDP124_88",
          "",
          "SDP124_91",
          "SDP124_94",
        ],
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
      slNo: "5.4.3",
      question:
        "Provide any additional contextual and/or verification/assurance information relevant to your organization’s taxonomy alignment.",
      guidance:
        "This question helps data users interpret the information organizations provide on the alignment of their spending/revenue with a sustainable finance taxonomy. Assurance and verification provides confidence in the accuracy of data reported.",
      tableColumns: [
        "Details of minimum safeguards analysis",
        "Additional contextual information relevant to your taxonomy alignment",
        "Indicate whether you will be providing verification/assurance information relevant to your taxonomy alignment in question 13.1",
        "Please explain why you will not be providing verification/assurance information relevant to your taxonomy alignment in question 13.1",
      ],
      tableRows: 2,
      tableData: [
        ["SDP124_95", "SDP124_96", "SDP124_97", "SDP124_97"],
        ["", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.5",
      question:
        "Does your organization invest in research and development (R&D) of low-carbon products or services related to your sector activities?",
      guidance:
        "Investment in R&D of new low-carbon technologies is needed to mitigate transition risk. According to the TCFD recommendations, the level of investment provides an indication of how exposed future earning capacity is to climate risks.",
      tableColumns: ["Investment in low-carbon R&D", "Comment"],
      tableRows: 2,
      tableData: [
        ["", ""],
        ["", ""],
      ],
      response: "",
    },
    {
      slNo: "5.5.1",
      question:
        "Provide details of your organization’s investments in low-carbon R&D for cement production activities over the last three years.",
      guidance: "",
      tableColumns: [],
      tableRows: 0,
      response: "",
    },
    {
      slNo: "5.5.2",
      question:
        "Provide details of your organization’s investments in low-carbon R&D for capital goods products and services over the last three years.",
      guidance: "",
      tableColumns: [],
      tableRows: 0,
      response: "",
    },
    {
      slNo: "5.5.3",
      question:
        "Provide details of your organization’s investments in low-carbon R&D for chemical production activities over the last three years.",
      guidance: "",
      tableColumns: [],
      tableRows: 0,
      response: "",
    },
    {
      slNo: "5.5.4",
      question:
        "Provide details of your organization’s investments in low-carbon R&D for metals and mining production activities over the last three years.",
      guidance: "",
      tableColumns: [],
      tableRows: 0,
      response: "",
    },
    {
      slNo: "5.5.5",
      question:
        "Provide details of your organization’s investments in low-carbon R&D for steel production activities over the last three years.",
      guidance: "",
      tableColumns: [],
      tableRows: 0,
      response: "",
    },
    {
      slNo: "5.5.6",
      question:
        "Provide details of your organization’s investments in low-carbon R&D for real estate and construction activities over the last three years.",
      guidance: "",
      tableColumns: [],
      tableRows: 0,
      response: "",
    },
    {
      slNo: "5.5.7",
      question:
        "Provide details of your organization's investments in low-carbon R&D for your sector activities over the last three years.",
      guidance:
        "Actions being taken by high intensity sectors are key in the transition to a low-carbon economy. Specifically, the level of investments in low-carbon R&D provides an indication of the level to which future earning capacity of core business might be affected, and the extent to which future resilience to climate-related issues can be incorporated in businesses.",
      tableColumns: [
        "Technology area",
        "Stage of development in the reporting year",
        "Average % of total R&D investment over the last 3 years",
        "R&D investment figure in the reporting year (unit currency as selected in 1.2) (optional)",
        "Average % of total R&D investment planned over the next 5 years",
        "Explain how your R&D investment in this technology area is aligned with your climate commitments and/or climate transition plan",
      ],
      tableRows: 2,
      tableData: [
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.5.8",
      question:
        "Provide details of your organization’s investments in low-carbon R&D for transport-related activities over the last three years.",
      guidance:
        "Actions being taken by high intensity sectors are key in the transition to a low-carbon economy. Specifically, the level of investments in low-carbon R&D provides an indication of the level to which future earning capacity of core business might be affected, and the extent to which future resilience to climate-related issues can be incorporated in businesses.",
      tableColumns: [
        "Activity",
        "Technology area",
        "Stage of development in the reporting year",
        "Average % of total R&D investment over the last 3 years",
        "R&D investment figure in the reporting year (unit currency as selected in 1.2) (optional)",
        "Average % of total R&D investment planned over the next 5 years",
        "Explain how your R&D investment in this technology area is aligned with your climate commitments and/or climate transition plan",
      ],
      tableRows: 2,
      tableData: [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.6",
      question:
        "Break down, by fossil fuel expansion activity, your organization’s CAPEX in the reporting year and CAPEX planned over the next 5 years.",
      guidance:
        "This question captures data on current and future CAPEX on exploration or new development activities for these fossil fuels. Data users wish to understand whether organizations are investing in the exploration/expansion of new fossil fuel resources. Under the IEA NZE scenario, the key policy assumptions state that no new oil and gas field exploration should occur after 2021 and no new coal mines or coal mine extensions should be approved for development after 2021.",
      tableColumns: [
        "Expansion activity",
        "CAPEX in the reporting year for this expansion activity (unit currency as selected in 1.2)",
        "CAPEX in the reporting year for this expansion activity as % of total CAPEX in the reporting year",
        "CAPEX planned over the next 5 years for this expansion activity as % of total CAPEX planned over the next 5 years",
        "Explain your CAPEX calculations, including any assumptions",
      ],
      tableRows: 2,
      tableData: [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.7",
      question:
        "Break down, by source, your organization’s CAPEX in the reporting year and CAPEX planned over the next 5 years.",
      guidance:
        "Understanding an electric utility’s planned CAPEX for power generation in the reporting year and over the next 5 years informs the vulnerability of the organization to emerging climate related risks and opportunities and the flexibility to continue the current technology portfolio at lower financial returns in a transition period to low-carbon technologies.",
      tableColumns: [
        "Primary power generation source",
        "CAPEX in the reporting year for power generation from this source (unit currency as selected in 1.2)",
        "CAPEX in the reporting year for power generation from this source as % of total CAPEX for power generation in the reporting year",
        "CAPEX planned over the next 5 years for power generation from this source as % of total CAPEX planned for power generation over the next 5 years",
        "Most recent year in which a new power plant using this source was approved for development*",
        "Explain your CAPEX calculations, including any assumptions",
      ],
      tableRows: 2,
      tableData: [
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.7.1",
      question:
        "Break down your total planned CAPEX in your current CAPEX plan for products and services (e.g. smart grids, digitalization, etc.).",
      guidance:
        "The advancement of decentralized power production and new technologies underpins the potential of the electric utilities sector to undergo a transition to low-carbon energy sources. The level of investment in emerging products and services provides an indication of the level to which future earning capacity of core business might be impacted.",
      tableColumns: [
        "Products and services",
        "Description of product/service",
        "CAPEX planned for product/service",
        "Percentage of total CAPEX planned for products and services",
        "End year of CAPEX plan",
      ],
      tableRows: 2,
      tableData: [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.8",
      question:
        "Disclose the breakeven price (US$/BOE) required for cash neutrality during the reporting year, i.e. where cash flow from operations covers CAPEX and dividends paid / share buybacks.",
      guidance:
        "The intention of this question is to provide investors with the average breakeven cost(s) of your current production. This is useful to investors as it provides a measure to compare cash provided by operating activities after deduction of capital expenditures and dividends paid/share buybacks across periods on a consistent basis.",
      tableColumns: [],
      tableRows: 0,
      response: "",
    },
    {
      slNo: "5.9",
      question:
        "What is the trend in your organization’s water-related capital expenditure (CAPEX) and operating expenditure (OPEX) for the reporting year, and the anticipated trend for the next reporting year?",
      guidance:
        "Within a company, this information raises the strategic understanding of the value of water for the business (beyond the price paid for it). Signalling the direction of travel of capital expenditure and operating expenditure to CDP data users helps them understand their potential exposure. The question asks for a reporting of trends and not absolute values. It identifies changes in water-related investment and operational costs. The information provided here should align with the information provided on risk response strategies and business opportunities (reported in 3.1 and 3.6).",
      tableColumns: [
        "Water-related CAPEX (+/- % change)",
        "Anticipated forward trend for CAPEX (+/- % change)",
        "Water-related OPEX (+/- % change)",
        "Anticipated forward trend for OPEX (+/- % change)",
        "Please explain",
      ],
      tableRows: 2,
      tableData: [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.10",
      question:
        "Does your organization use an internal price on environmental externalities?",
      guidance:
        "Internal pricing of environmental externalities (i.e., a carbon price or water price) has emerged as a multifaceted tool that supports organizations in assessing environmental risks and opportunities. Data users are keen to understand how organizations attribute a monetary value to these risks and translate them into a uniform metric. Applying an internal price to these externalities can help an organization to understand opportunities for efficiencies and prepare for potential future price changes.",
      tableColumns: [
        "Use of internal pricing of environmental externalities",
        "Environmental externality priced",
        "Primary reason for not pricing environmental externalities",
        "Explain why your organization does not price environmental externalities",
        "Other environmental externalities priced",
        "Further details of other environmental externalities priced",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP123_112",
          "SDP123_113",
          "SDP123_114",
          "SDP123_115",
          "SDP123_116",
          "SDP123_117",
        ],
        ["", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.10.1",
      question:
        "Provide details of your organization’s internal price on carbon.",
      guidance:
        "An internal price on an environmental externality (e.g., a carbon price) can be used as a tool to manage environmental risks and opportunities within an organization’s operations, value chain, and investments. As part of their assessment of an organization’s resilience, it is useful for data users to know how organizations are using an internal price on carbon. This information allows data users to assess how effectively an organization implements its internal carbon price to achieve its environmental objectives.",
      tableColumns: [
        "Type of pricing scheme",
        "Objectives for implementing internal price",
        "Factors considered when determining the price",
        "Calculation methodology and assumptions made in determining the price",
        "Scopes covered",
        "Pricing approach used – spatial variance",
        "Indicate how and why the price is differentiated",
        "Pricing approach used – temporal variance",
        "Indicate how you expect the price to change over time",
        "Minimum actual price used (currency per metric ton CO2e)",
        "Maximum actual price used (currency per metric ton CO2e)",
        "Business decision making processes the internal price is applied to",
        "Internal price is mandatory within business decision-making processes",
        "% total emissions in the reporting year in selected scopes this internal price covers",
        "Pricing approach is monitored and evaluated to achieve objectives",
        "Details of how the pricing approach is monitored and evaluated to achieve your objectives",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP124_51",
          "SDP126_9",
          "SDP123_118",
          "SDP123_119",
          "SDP123_121",
          "SDP123_122",
          "SDP123_123",
          "SDP123_124",
          "SDP123_125",
          "SDP123_126",
          "SDP123_127",
          "SDP123_128",
          "SDP123_129",
          "SDP123_130",
          "SDP123_131",
          "",
        ],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.10.2",
      question:
        "Provide details of your organization’s internal price on water.",
      guidance:
        "The true value of water is not accounted for in today’s markets in many parts of the world, while the costs of treatment and delivery, as well as opportunity costs and environmental and social costs, are not well captured. As water becomes increasingly scarce and contested, businesses could see prices increase. Applying an internal price on water that more accurately reflects the costs of the organization’s water provision can help it understand opportunities for efficiencies and prepare for potential future price changes. As part of their assessment of an organization’s resilience, it is useful for data users to know if organizations are using an internal price on water. This information allows data users to assess how effectively an organization implements its internal water price to achieve its environmental",
      tableColumns: [
        "Type of pricing scheme",
        "Objectives for implementing internal price",
        "Factors beyond current market price are considered in the price",
        "Factors considered when determining the price",
        "Calculation methodology and assumptions made in determining the price",
        "Stages of the value chain covered",
        "Pricing approach used – spatial variance",
        "Indicate how and why the price is differentiated",
        "Pricing approach used – temporal variance",
        "Indicate how you expect the price to change over time",
        "Minimum actual price used (currency per cubic meter)",
        "Maximum actual price used (currency per cubic meter)",
        "Business decision-making processes the internal water price is applied to",
        "Internal price is mandatory within business decision-making processes",
        "Pricing approach is monitored and evaluated to achieve objectives",
        "Details of how the pricing approach is monitored and evaluated to achieve your objectives",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP123_132",
          "SDP123_133",
          "SDP123_134",
          "SDP123_135",
          "SDP123_136",
          "SDP123_137",
          "SDP123_138",
          "SDP123_139",
          "SDP123_140",
          "SDP123_141",
          "SDP123_142",
          "SDP123_143",
          "SDP123_144",
          "SDP123_145",
          "SDP123_146",
          "SDP123_147",
        ],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.11",
      question: "Do you engage with your value chain on environmental issues?",
      guidance:
        "Engaging with value chain stakeholders is essential for organizations to drive progress on environmental issues associated with their operations. There are multiple drivers, benefits, and ranges of engagement relating to each environmental issue, from environmental requirements for suppliers to innovative partnerships for environmental stewardship with product users. If you are not engaging with your value chain on environmental issues, data users wish to know why you are not engaging in any way and what your plans are to do so in the future.",
      tableColumns: [
        "Value chain stakeholder",
        "Engaging with this stakeholder on environmental issues",
        "Environmental issues covered",
        "Primary reason for not engaging with this stakeholder on environmental issues",
        "Explain why you do not engage with this stakeholder on environmental issues",
      ],
      tableRows: 2,
      tableData: [
        ["SDP155_27", "SDP155_28", "SDP155_29", "SDP155_30", "SDP155_31"],
        ["", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.11.1",
      question:
        "Does your organization assess and classify suppliers according to their dependencies and/or impacts on the environment?",
      guidance:
        "The assessment of an organization’s supplier dependencies and impacts on the environment allows for action to be informed and targeted to where the effect of environmental dependencies and impacts is greatest. This question allows data users to understand whether an organization is aware of where environmental dependencies and/or impacts exist in its upstream value chain.",
      tableColumns: [
        "Environmental issue covered",
        "Assessment of supplier dependencies and/or impacts on the environment",
        "Criteria for assessing supplier dependencies and/or impacts on the environment",
        "% Tier 1 suppliers assessed",
        "Define a threshold for classifying suppliers as having substantive dependencies and/or impacts on the environment",
        "% Tier 1 suppliers meeting the threshold for substantive dependencies and/or impacts on the environment",
        "Number of Tier 1 suppliers meeting the thresholds for substantive dependencies and/or impacts on the environment",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP155_33",
          "SDP155_34",
          "SDP155_35",
          "SDP155_36",
          "SDP155_37",
          "SDP155_38",
          "SDP155_39",
        ],
        ["", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.11.2",
      question:
        "Does your organization prioritize which suppliers to engage with on environmental issues?",
      guidance:
        "This question allows data users to understand whether an organization prioritizes specific suppliers for engagement on environmental issues and, if so, the criteria employed in this prioritization to ensure that engagement achieves the greatest benefits.",
      tableColumns: [
        "Environmental issue covered",
        "Supplier engagement prioritization on this environmental issue",
        "Criteria informing which suppliers are prioritized for engagement on this environmental issue",
        "Primary reason for no supplier prioritization on this environmental issue",
        "Please explain",
      ],
      tableRows: 2,
      tableData: [
        ["SDP155_40", "SDP155_41", "SDP155_42", "SDP155_43", "SDP155_44"],
        ["", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.11.3",
      question:
        "Provide details of your environmental engagement strategy with your clients.",
      guidance:
        "This question provides data users with more transparency regarding an organization’s client engagement processes. Data users are interested in understanding how financial services companies are working with their clients to drive environmental action, such as whether organizations encourage their corporate clients to set science-based targets.",
      tableColumns: [
        "Type of clients",
        "Environmental issues covered by the engagement strategy",
        "Type and details of engagement",
        "% of client-associated scope 3 emissions as reported in question 12.1.1",
        "% of portfolio covered in relation to total portfolio value",
        "Explain the rationale for the coverage of your engagement",
        "Describe how you communicate your engagement strategy to your clients and/or to the public",
        "Attach your engagement strategy",
        "Staff in your organization carrying out the engagement",
        "Roles of individuals at the portfolio organizations you seek to engage with",
        "Effect of engagement, including measures of success",
        "Escalation process for engagement when dialogue is failing",
        "Describe your escalation process",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP155_45",
          "SDP155_46",
          "SDP155_47",
          "SDP155_48",
          "SDP155_49",
          "SDP155_50",
          "SDP155_51",
          "SDP155_52",
          "SDP155_53",
          "SDP155_54",
          "SDP155_55",
          "SDP155_56",
          "SDP155_57",
        ],
        ["", "", "", "", "", "", "", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.11.4",
      question:
        "Provide details of your environmental engagement strategy with your investees.",
      guidance:
        "This question provides data users with more transparency regarding investee engagement processes. Data users are interested in understanding how financial services companies are working with their investees to drive environmental action, such as whether organizations encourage their investees to set science-based targets.",
      tableColumns: [
        "Environmental issues covered by the engagement strategy",
        "Type and details of engagement",
        "% of scope 3 investees associated emissions as reported in 12.1.1/12.1.3",
        "% of investing (Asset managers) portfolio covered in relation to total portfolio value",
        "% of investing (Asset owners) portfolio covered in relation to total portfolio value",
        "Explain the rationale for the coverage of your engagement",
        "Describe how you communicate your engagement strategy to your investees and/or to the public",
        "Attach your engagement strategy",
        "Staff in your organization carrying out the engagement",
        "Roles of individuals at the portfolio organizations you seek to engage with",
        "Effect of engagement, including measures of success",
        "Escalation process for engagement when dialogue is failing",
        "Describe your escalation process",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP155_58",
          "SDP155_59",
          "SDP155_59",
          "SDP155_60",
          "SDP155_61",
          "SDP155_62",
          "SDP155_63",
          "SDP155_64",
          "SDP155_65",
          "SDP155_68",
          "SDP155_67",
          "SDP155_70",
          "",
        ],
        ["", "", "", "", "", "", "", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.11.5",
      question:
        "Do your suppliers have to meet environmental requirements as part of your organization’s purchasing process?",
      guidance:
        "Setting environmental requirements for suppliers is a manifestation of strategic commitment to environmental action that not only enhances organizations’ awareness of environmental concerns but also serves as a powerful catalyst for driving transformative action throughout the upstream value chain. By setting stringent environmental requirements for suppliers, organizations assert their dedication to proactive change, fostering a culture of responsibility that resonates throughout value chains and industries, and paves the way for a more sustainable future.",
      tableColumns: [
        "Environmental issue",
        "Suppliers have to meet specific environmental requirements related to this environmental issue as part of the purchasing process",
        "Policy in place for addressing supplier non-compliance",
        "Comment",
      ],
      tableRows: 2,
      tableData: [
        ["SDP155_71", "SDP155_72", "SDP155_73", ""],
        ["", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.11.6",
      question:
        "Provide details of the environmental requirements that suppliers have to meet as part of your organization’s purchasing process, and the compliance measures in place.",
      guidance:
        "Identifying key actions in the upstream value chain and fostering engagement through environmental requirements enables organizations to proactively mitigate risks. This question allows organizations to demonstrate the robustness of environmental requirements for their suppliers by highlighting the targeted environmental actions, the organizations’ engagement range, and non-compliance responses.",
      tableColumns: [
        "Environmental issue",
        "Environmental requirement",
        "Mechanisms for monitoring compliance with this environmental requirement",
        "% tier 1 suppliers by procurement spend required to comply with this environmental requirement",
        "% tier 1 suppliers by procurement spend in compliance with this environmental requirement",
        "% tier 1 suppliers with substantive environmental dependencies and/or impacts related to this environmental issue required to comply with this environmental requirement",
        "% tier 1 suppliers with substantive environmental dependencies and/or impacts related to this environmental issue that are in compliance with this environmental requirement",
        "% tier 1 supplier related scope 3 emissions attributable to the suppliers required to comply with this environmental requirement",
        "% tier 1 supplier related scope 3 emissions attributable to the suppliers in compliance with this environmental requirement",
        "Response to supplier non compliance with this environmental requirement",
        "% of non compliant suppliers engaged",
        "Procedures to engage non compliant suppliers",
        "Comment",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP155_75",
          "SDP155_76",
          "SDP155_77",
          "SDP155_78",
          "SDP155_79",
          "SDP155_80",
          "SDP155_81",
          "SDP155_82",
          "SDP155_83",
          "SDP155_84",
          "SDP155_85",
          "SDP155_86",
          "",
        ],
        ["", "", "", "", "", "", "", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.11.7",
      question:
        "Provide further details of your organization’s supplier engagement on environmental issues.",
      guidance:
        "Proactive supplier engagement on environmental initiatives showcases an organization’s commitment to driving environmental action. This question facilitates data users’ evaluation of an organization’s sustainability efforts in their value chain, by revealing how comprehensive their understanding is of environmental issues throughout their upstream value chain. This comprehensive awareness allows organizations to manage environmental issues holistically, benefiting from a more thorough understanding of dependencies, impacts, risks, and opportunities within their upstream value chain.",
      tableColumns: [
        "Environmental issue covered",
        "Commodity",
        "Action driven by supplier engagement",
        "Type and details of engagement",
        "Upstream value chain coverage",
        "% of tier 1 suppliers by procurement spend covered by engagement",
        "% of tier 1 supplier related scope 3 emissions covered by engagement",
        "% tier 1 suppliers with substantive impacts and/or dependencies related to this environmental issue covered by engagement",
        "Number of tier 2+ suppliers engaged",
        "Describe the engagement and explain the effect of your engagement on the selected environmental action",
        "Engagement is helping your tier 1 suppliers meet an environmental requirement related to this environmental issue",
        "Engagement is helping your tier 1 suppliers engage with their own suppliers on the selected action",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP155_87",
          "SDP155_88",
          "SDP155_89",
          "SDP155_90",
          "SDP155_92",
          "SDP155_95",
          "SDP155_96",
          "",
          "SDP155_97",
          "",
          "",
          "",
        ],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.11.8",
      question:
        "Provide details of any environmental smallholder engagement activity.",
      guidance:
        "Identified risks may offer an opportunity for an organization to engage with local stakeholders to drive local economic development and/or environmental action. In many countries/areas, organizations are called to work with smallholders to source raw materials sustainably. This question captures data on the extent of an organization’s engagement with smallholders. This information allows data users to assess corporate action towards sustainable value chains.",
      tableColumns: [
        "Commodity",
        "Type and details of smallholder engagement approach",
        "Number of smallholders engaged",
        "Effect of engagement and measures of success",
      ],
      tableRows: 2,
      tableData: [
        ["SDP155_99", "SDP155_100", "SDP155_101", "SDP155_102"],
        ["", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.11.9",
      question:
        "Provide details of any environmental engagement activity with other stakeholders in the value chain.",
      guidance:
        "This question provides data users with transparency regarding organizations' engagement processes with other value chain stakeholders. As several environmental dependencies, impacts, risks, and opportunities can occur outside direct operations, data users are interested in understanding how organizations are working with other stakeholders in their value chain to drive environmental action.",
      tableColumns: [
        "Environmental issue",
        "Type of stakeholder",
        "Type and details of engagement",
        "% of stakeholder type engaged",
        "% stakeholder associated scope 3 emissions",
        "Rationale for engaging these stakeholders and scope of engagement",
        "Effect of engagement and measures of success",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP155_103",
          "SDP155_104",
          "SDP155_105",
          "SDP155_106",
          "SDP155_107",
          "SDP155_108",
          "SDP155_109",
        ],
        ["", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.12",
      question:
        "Indicate any mutually beneficial environmental initiatives you could collaborate on with specific CDP Supply Chain members.",
      guidance:
        "Addressing environmental issues effectively oftentimes requires collective action. Through this question, your organization can propose ways it can work together with its requesting Supply Chain members to reduce environmental risks and/or to realize opportunities that would benefit both your organization and your customers. It can also be used to strengthen communication between you and your customers and help drive innovative new partnerships.",
      tableColumns: [
        "Requesting member",
        "Environmental issues the initiative relates to",
        "Commodities the initiative relates to [F only]",
        "Initiative category and type",
        "Details of initiative",
        "Expected benefits",
        "Estimated timeframe for realization of benefits",
        "Are you able to estimate the lifetime CO2e and/or water savings of this initiative?",
        "Estimated lifetime CO2e savings",
        "Estimated lifetime water savings (megaliters)",
        "Please explain",
      ],
      tableRows: 2,
      tableData: [
        [
          "",
          "SDP155_111",
          "SDP155_112",
          "SDP155_113",
          "SDP155_114",
          "SDP155_115",
          "SDP155_116",
          "SDP155_117",
          "SDP155_118",
          "",
          "",
        ],
        ["", "", "", "", "", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.13",
      question:
        "Has your organization already implemented any mutually beneficial environmental initiatives due to CDP Supply Chain member engagement?",
      guidance:
        "Effectively addressing environmental issues oftentimes requires collective action. This question allows organizations to indicate their commitment to collaborative environmental action through the implementation of initiatives.",
      tableColumns: [
        "Environmental initiatives implemented due to CDP Supply Chain member engagement",
        "Primary reason for not implementing environmental initiatives",
        "Explain why your organization has not implemented any environmental initiatives",
      ],
      tableRows: 2,
      tableData: [
        ["SDP155_123", "SDP155_122", ""],
        ["", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.13.1",
      question:
        "Specify the CDP Supply Chain members that have prompted your implementation of mutually beneficial environmental initiatives and provide information on the initiatives.",
      guidance:
        "Addressing environmental issues effectively oftentimes requires collective action. This question presents an opportunity to demonstrate the types of initiatives that you have implemented due to CDP Supply Chain member engagement and to detail how they have progressed and any mutual benefits that have been seen so far.",
      tableColumns: [
        "Requesting member",
        "Environmental issues the initiative relates to",
        "Commodities the initiative relates to [F only]",
        "Initiative ID",
        "Initiative category and type",
        "Details of initiative",
        "Benefits achieved",
        "Are you able to provide figures for emissions savings or water savings in the reporting year?",
        "Estimated savings in the reporting year in metric tons of CO2e",
        "Estimated water savings in the reporting year in megaliters",
        "Please explain how success for this initiative is measured",
        "Would you be happy for CDP Supply Chain members to highlight this work in their external communication?",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP121_53",
          "SDP121_54",
          "SDP121_55",
          "SDP121_56",
          "SDP121_57",
          "SDP121_58",
          "SDP121_59",
          "SDP121_60",
          "SDP121_61",
          "SDP121_62",
          "SDP121_63",
          "SDP121_64",
        ],
        ["", "", "", "", "", "", "", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.14",
      question:
        "Do your external asset managers have to meet environmental requirements as part of your organization’s selection process and engagement?",
      guidance:
        "For asset owners and asset managers working with external funds (third parties), the external asset managers have a significant effect on investment strategies and objectives. Including environmental requirements into the selection of and engagement with external asset managers ensures that these investment strategies and objectives are aligned with the organization’s business strategy.",
      tableColumns: [
        "External asset managers have to meet specific environmental requirements as part of the selection process and engagement",
        "Policy in place for addressing external asset manager non compliance",
        "Primary reason for not including environmental requirements in selection process and engagement with external asset managers",
        "Explain why environmental requirements are not included in selection process and engagement with external asset managers",
      ],
      tableRows: 2,
      tableData: [
        ["SDP121_65", "SDP121_66", "SDP121_67", "SDP121_68"],
        ["", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.14.1",
      question:
        "Provide details of the environmental requirements that external asset managers have to meet as part of your organization’s selection process and engagement.",
      guidance:
        "For asset owners and managers working with external funds (third parties), the external asset managers have a significant effect on investment strategies and objectives. Including environmental requirements into the selection of and engagement with external asset managers ensures that these investment strategies and objectives are aligned with the organization’s business strategy.",
      tableColumns: [
        "Environmental issues covered by the requirement",
        "Coverage",
        "Environmental requirement that external asset managers have to meet",
        "Mechanisms used to include environmental requirement in external asset manager selection",
        "Response to external asset manager non compliance with environmental requirement",
        "% of non compliant external asset managers engaged",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP121_69",
          "SDP121_70",
          "SDP121_71",
          "SDP121_72",
          "SDP121_73",
          "SDP121_74",
        ],
        ["", "", "", "", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.15",
      question:
        "Does your organization exercise voting rights as a shareholder on environmental issues?",
      guidance:
        "Active ownership is a key tool for positively affecting the real economy because divestment alone leaves investors without a voice to promote sustainable practices. Alongside their investee engagement activities, investors can influence their investee companies on environmental issues by exercising their voting rights. Data users are interested in understanding how aligned shareholders’ voting decisions across the investment portfolio are with the overall environmental strategy and how they support environmental shareholder resolutions.",
      tableColumns: [
        "Exercise voting rights as a shareholder on environmental issues",
        "Primary reason for not exercising voting rights as a shareholder on environmental issues",
        "Explain why you do not exercise voting rights on environmental issues",
      ],
      tableRows: 2,
      tableData: [
        ["SDP121_75", "SDP121_76", "SDP121_77"],
        ["", "", ""],
      ],
      response: "",
    },
    {
      slNo: "5.15.1",
      question:
        "Provide details of your shareholder voting record on environmental issues.",
      guidance:
        "Active ownership is a key tool for positively affecting the real economy because divestment alone leaves investors without a voice to promote sustainable practices. Alongside their investee engagement activities, investors can influence their investee companies on environmental issues, by exercising their voting rights. Data users are interested in understanding how aligned shareholders’ voting decisions across the investment portfolio are with the overall environmental strategy and how they support environmental shareholder resolutions.",
      tableColumns: [
        "Method used to exercise your voting rights as a shareholder",
        "How do you ensure your shareholder voting rights are exercised in line with your overall strategy or transition plan?",
        "% of voting rights exercised",
        "% of voting which is publicly available",
        "Environmental issues covered in shareholder voting",
        "Global environmental commitments that your shareholder voting is aligned with",
        "Issues supported in shareholder resolutions",
      ],
      tableRows: 2,
      tableData: [
        [
          "SDP121_78",
          "SDP121_79",
          "SDP121_80",
          "SDP121_81",
          "SDP121_82",
          "SDP121_83",
          "SDP121_84",
        ],
        ["", "", "", "", "", "", ""],
      ],
      response: "",
    },
  ];

  const tableDataModuleSix = [
    {
      slNo: "6.1",
      question:
        "Provide details on your chosen consolidation approach for the calculation of environmental performance data.",
      guidance:
        "The consolidation approach is the method by which environmental impacts (e.g., GHG emissions, water withdrawals etc.) have been attributed to your organization. This context will help data users interpret how the environmental impacts relate to your business operations.",
      tableColumns: [
        "Environmental issue",
        "Consolidation approach used",
        "Provide the rationale for the choice of consolidation approach",
      ],
      tableRows: 2,
      tableData: [
        ["SDP121_86", "SDP121_85", "SDP121_87"],
        ["", "", ""],
      ],
      response: "",
    },
  ];

  return (
    <div style={{ minHeight: "80vh" }}>
      <TableRenderer
        id="mod-3-perf"
        title="Section: Disclosure of risks and opportunities"
        tableData={tableDataModuleThree}
      />

      <br />

      <TableRenderer
        id="mod-4-perf"
        title="Section: Governance"
        tableData={tableDataModuleFour}
      />

      <br />

      <TableRenderer
        id="mod-5-perf"
        title="Section: Business Strategy"
        tableData={tableDataModuleFive}
      />

      <br />

      <TableRenderer
        id="mod-6-perf"
        title="Section: Environmental Performance – Consolidation Approach"
        tableData={tableDataModuleSix}
      />
    </div>
  );
};

export default Module_3_6_Perf;
