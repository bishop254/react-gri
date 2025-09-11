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

const Module_8_13_Perf = () => {
  const tableDataModuleEight = [
    {
      slNo: "8.1",
      question:
        "Are there any exclusions from your disclosure of forests-related data?",
      guidance:
        "CDP seeks to share comprehensive and representative data to ensure data users’ confidence in the information reported. As such, if organizations need to exclude parts of their direct operations and/or upstream value chain from their disclosure of forests-related data, data users must be informed of the exclusions as this may affect their analysis.",
      tableColumns: ["Commodity", "Exclusion from disclosure"],
      tableRows: 2,
      response: "SDP235_1",
    },
    {
      slNo: "8.1.1",
      question:
        "If you have provided yes to your previous question, then please respond to: Provide details on these exclusions.",
      guidance:
        "An organization’s disclosure must be comprehensive and representative to ensure data users’ confidence in the information reported. As such, organizations are encouraged to report on all exclusions of forests-related data from their direct operations and/or upstream value chain. This question helps data users contextualize responses to subsequent commodity-related questions.",
      tableColumns: [
        "Commodity",
        "Exclusion",
        "Description of exclusion",
        "Value chain stage",
        "Reason for exclusion",
        "Primary reason why data is not available",
        "Completion date of acquisition/merger",
        "Data incorporated next year",
        "Providing excluded commodity volume?",
        "Volume excluded (metric tons)",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP235_2",
    },
    {
      slNo: "8.2",
      question: "Provide a breakdown of your disclosure volume per commodity.",
      guidance:
        "Transparency on the commodity volumes included in an organization’s disclosure is key to data users’ understanding of environmental performance. This question requests the breakdown of the volume that is being disclosed according to produced and sourced volumes.",
      tableColumns: [
        "Commodity",
        "Disclosure volume (metric tons)",
        "Volume type",
        "Produced volume (metric tons)",
        "Sourced volume (metric tons)",
      ],
      tableRows: 2,
      response: "MT2535",
    },
    {
      slNo: "8.2.1",
      question:
        "Provide details on any soy embedded in animal products sourced by your organization.",
      guidance:
        "Organizations sourcing animal products should disclose awareness of embedded soy exposure, origins, and deforestation-free status. This provides transparency on embedded soy in value chains.",
      tableColumns: [
        "Commodity",
        "Disclosure of embedded soy",
        "Description of embedded soy use",
        "Volume calculation methodology",
        "Embedded soy disclosure volume (metric tons)",
        "% of sourced volume that is embedded soy",
      ],
      tableRows: 2,
      response: "SDP235_3",
    },
    {
      slNo: "8.3",
      question:
        "Describe your organization’s approach to report details on the land you own, manage and/or control that is used to produce your disclosed commodities.",
      guidance:
        "This question gathers information on land used to produce commodities. Demonstrates market power and potential influence over land use, linked to deforestation or conversion of ecosystems.",
      tableColumns: [
        "Commodity",
        "Type of control",
        "Country/area",
        "Administrative division",
        "States/jurisdictions",
        "Land type",
        "Area (hectares)",
        "Can provide volume?",
        "Volume produced (metric tons)",
        "% area third-party certified",
        "Certification scheme",
        "Production facility names/locations (optional)",
      ],
      tableRows: 2,
      response: "SDP235_4",
    },
    {
      slNo: "8.4",
      question:
        "Indicate if any of the land you own, manage and/or control was not used to produce your disclosed commodities in the reporting year.",
      guidance:
        "The disclosure of land holdings is critical for understanding risks and opportunities related to deforestation and ecosystem conversion.",
      tableColumns: [],
      tableRows: 0,
      response: "SDP235_5",
    },
    {
      slNo: "8.4.1",
      question:
        "If some land is not used for production, provide details of the sources of Scope 1, Scope 2, or Scope 3 emissions within your boundary not included in your disclosure.",
      guidance:
        "Organizations should disclose land not used for commodities, giving insight into stewardship and potential expansion challenges.",
      tableColumns: [
        "Country/area",
        "Type of control",
        "Land type",
        "Area (hectares)",
        "% covered by natural ecosystems",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP235_6",
    },
    {
      slNo: "8.5",
      question: "Provide details on the origins of your sourced volumes.",
      guidance:
        "Provides more clarity about exposure to deforestation and conversion risks through country, source, and supplier data.",
      tableColumns: [
        "Commodity",
        "Country/area of origin",
        "Administrative division",
        "States/jurisdictions",
        "Source",
        "Supplier production/processing sites",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP235_7",
    },
    {
      slNo: "8.6",
      question:
        "Does your organization produce or source palm oil derived biofuel?",
      guidance:
        "Allows data users to understand the relevancy of palm oil derived biofuels to your organization.",
      tableColumns: [],
      tableRows: 0,
      response: "SDP235_8",
    },
    {
      slNo: "8.6.1",
      question:
        "Provide details of how your organization produces or sources palm oil derived biofuel.",
      guidance:
        "Provides transparency on palm oil derived biofuel in terms of associated volume and origin.",
      tableColumns: [
        "Volume type",
        "Palm oil derived biofuel volume",
        "Metric",
        "Country/area of origin",
        "Administrative division",
        "% of disclosure volume",
        "Biofuel sourced from smallholders",
        "Comment",
      ],
      tableRows: 2,
      response: "SDP235_9",
    },
    {
      slNo: "8.7",
      question:
        "Did your organization have a no-deforestation or no-conversion target, or any other targets for sustainable production/sourcing of disclosed commodities?",
      guidance:
        "Establishes whether organizations have sustainability targets for eliminating deforestation and conversion of ecosystems.",
      tableColumns: [
        "Commodity",
        "Active no-deforestation target",
        "Target coverage",
        "Reason for not having target",
        "Explanation",
        "Other active targets",
        "Reason for no other targets",
        "Explanation",
      ],
      tableRows: 2,
      response: "SDP235_10 and SDP235_11",
    },
    {
      slNo: "8.7.1",
      question:
        "Provide details on your no-deforestation or no-conversion target active during the reporting year.",
      guidance:
        "Discloses ambition, cutoff dates, and rationale of targets for tracking progress towards sustainability.",
      tableColumns: [
        "Commodity",
        "Target",
        "Definition of no-deforestation/no-conversion",
        "Cutoff date",
        "Geographic scope",
        "Rationale",
        "Target date",
      ],
      tableRows: 2,
      response: "SDP236_01",
    },
    {
      slNo: "8.7.2",
      question:
        "Provide details of other targets related to your commodities, including any contributing to your no-deforestation or no-conversion target.",
      guidance:
        "Captures metrics, progress, and exclusions of other related sustainability targets.",
      tableColumns: [
        "Commodity",
        "Target reference number",
        "Contributes to no-deforestation?",
        "Target coverage",
        "Commodity volume covered (metric tons)",
        "Target category/metric",
        "Traceability point",
        "Certification scheme",
        "Date set",
        "Base year end",
        "Base year figure",
        "Target end year",
        "Target year figure",
        "Reporting year figure",
        "Status",
        "% achieved",
        "Treaties/frameworks aligned",
        "Exclusions",
        "Plan for achieving",
        "Actions contributing",
        "Further details",
      ],
      tableRows: 2,
      response: "SDP236_02",
    },
    {
      slNo: "8.8",
      question:
        "Indicate if your organization has a traceability system to determine origins of sourced volumes.",
      guidance:
        "Robust traceability systems allow organizations to ascertain production and processing origins are free from deforestation and conversion.",
      tableColumns: [
        "Commodity",
        "Traceability system",
        "Methods/tools used",
        "Description",
        "Reason no system",
        "Explanation",
      ],
      tableRows: 2,
      response: "SDP236_03",
    },
    {
      slNo: "8.8.1",
      question:
        "Provide details of the point to which your organization can trace its sourced volumes.",
      guidance:
        "Discloses extent of traceability by production unit, sourcing area, country, or other points.",
      tableColumns: [
        "Commodity",
        "% traceable to production unit",
        "% traceable to sourcing area",
        "% traceable to country",
        "% traceable to other point",
        "% unknown origin",
        "Proportion of emissions verified (%)",
        "% sourced volume reported",
      ],
      tableRows: 2,
      response: "SDP236_04",
    },
    {
      slNo: "8.9",
      question:
        "Provide details of your organization's assessment of the deforestation-free (DF) or deforestation- and conversion-free (DCF) status of disclosed commodities.",
      guidance:
        "Discloses proportion of volumes determined DF or DCF via certification or monitoring.",
      tableColumns: [
        "Commodity",
        "DF/DCF assessed?",
        "% determined DF/DCF",
        "% via certification",
        "% via production unit monitoring",
        "% via sourcing area monitoring",
        "Certified under scheme not providing DF/DCF?",
        "Reason not assessed",
        "Explanation",
      ],
      tableRows: 2,
      response: "SDP236_05",
    },
    {
      slNo: "8.9.1",
      question:
        "Provide details of third-party certification schemes used to determine DF/DCF status since cutoff date.",
      guidance:
        "Certification schemes providing assurance of DF/DCF ensure no deforestation or conversion occurred.",
      tableColumns: [
        "Commodity",
        "Certification scheme",
        "% volume DF/DCF via certification",
        "Comment",
        "Documentation",
      ],
      tableRows: 2,
      response: "SDP236_06",
    },
    {
      slNo: "8.9.2",
      question:
        "Provide details of certification schemes not providing full DF/DCF assurance.",
      guidance:
        "Covers third-party certification used in combination with additional controls.",
      tableColumns: [
        "Commodity",
        "Certification scheme",
        "% volume certified",
        "Additional control methods",
        "Comment",
        "Documentation",
      ],
      tableRows: 2,
      response: "SDP236_07",
    },
    {
      slNo: "8.9.3",
      question:
        "Provide details of production unit monitoring used to determine DF/DCF status.",
      guidance: "Covers monitoring approaches and verification of DF/DCF.",
      tableColumns: [
        "Commodity",
        "% volume DF/DCF",
        "Monitoring approach",
        "Description",
        "Status verified",
        "Type of verification",
        "% volume verified",
        "Verification process",
        "Attachment",
      ],
      tableRows: 2,
      response: "SDP236_08",
    },
    {
      slNo: "8.9.4",
      question:
        "Provide details of sourcing area monitoring used to determine DF/DCF status.",
      guidance:
        "Details monitoring of sourcing areas for deforestation or conversion risks.",
      tableColumns: [
        "Commodity",
        "% volume DF/DCF via sourcing monitoring",
        "Monitoring approach",
        "Description",
        "Countries of origin",
        "Sourcing areas",
        "Verified?",
        "Type of verification",
        "% verified",
        "Verification process",
        "Verification attachment",
        "Risk classification",
        "Risk classification attachment",
      ],
      tableRows: 2,
      response: "SDP236_09",
    },
    {
      slNo: "8.10",
      question:
        "Indicate whether you have monitored or estimated the deforestation/conversion footprint for disclosed commodities.",
      guidance:
        "Monitoring and estimating helps understand the scale of impacts of commodities on ecosystems.",
      tableColumns: [
        "Commodity",
        "Monitoring or estimating?",
        "Reason not monitored",
        "Explanation",
      ],
      tableRows: 2,
      response: "SDP236_10",
    },
    {
      slNo: "8.10.1",
      question:
        "Provide details on the monitoring or estimating of deforestation/conversion footprint.",
      guidance:
        "Demonstrates transparency on footprint data, methods, and cut-off years.",
      tableColumns: [
        "Commodity",
        "% monitored/estimated",
        "Reporting footprint",
        "Cutoff year",
        "Deforestation footprint in reporting period (ha)",
        "Deforestation footprint since cutoff (ha)",
        "Deforestation footprint last 5 years (ha)",
        "Other specified period footprint (ha)",
        "Methods and data sources",
      ],
      tableRows: 2,
      response: "MT2536",
    },
    {
      slNo: "8.11",
      question:
        "For volumes not assessed DF/DCF, indicate if you have taken actions in the reporting year to increase production/sourcing of DCF volumes.",
      guidance:
        "Discloses organizational actions for increasing sustainable production/sourcing.",
      tableColumns: ["Commodity", "Actions taken"],
      tableRows: 2,
      response: "SDP236_11",
    },
    {
      slNo: "8.11.1",
      question:
        "Provide details of actions taken to assess/increase DCF volumes.",
      guidance:
        "Details actions, coverage, barriers, and contributions to achieving DCF.",
      tableColumns: [
        "Commodity",
        "Action type",
        "% covered by action",
        "Barriers",
        "Measures",
        "Details",
      ],
      tableRows: 2,
      response: "SDP236_12",
    },
    {
      slNo: "8.12",
      question:
        "Indicate if certification details are available for commodity volumes sold to CDP Supply Chain members.",
      guidance:
        "Provides transparency on certified volume data and reasons if unavailable.",
      tableColumns: [
        "Commodity",
        "Certification scheme",
        "Certification details available?",
        "Reason not available",
        "Explanation",
        "Reason certification not adopted",
        "Explanation",
      ],
      tableRows: 2,
      response: "SDP236_13",
    },
    {
      slNo: "8.12.1",
      question:
        "Provide details of certified volumes sold to CDP Supply Chain members.",
      guidance: "Covers percentage of certified volume, scheme, and form sold.",
      tableColumns: [
        "Requesting member",
        "Commodity",
        "Form",
        "Total volume",
        "Metric",
        "Certification scheme",
        "% certified",
        "Comment",
      ],
      tableRows: 2,
      response: "SDP236_14",
    },
    {
      slNo: "8.13",
      question:
        "Does your organization calculate the GHG emission reductions and/or removals from land use management and land use change?",
      guidance:
        "Understanding GHG reductions/removals informs mitigation strategies and target progress.",
      tableColumns: [
        "Commodity",
        "GHG reductions/removals calculated?",
        "Reason not calculated",
        "Explanation",
      ],
      tableRows: 2,
      response: "SDP236_15",
    },
    {
      slNo: "8.13.1",
      question:
        "Provide details of actions that resulted in reduced GHG emissions/removals.",
      guidance:
        "Provides transparency on actions, scope, and accounting standards used.",
      tableColumns: [
        "Commodity",
        "Actions",
        "CO2e reductions/removals (tCO2e)",
        "Base year",
        "Accounting boundary",
        "Scope",
        "Methodology/standards",
        "Explanation",
      ],
      tableRows: 2,
      response: "SDP237_01",
    },
    {
      slNo: "8.14",
      question:
        "Indicate if you assess your own or suppliers’ compliance with forest regulations and/or mandatory standards.",
      guidance:
        "Covers assessment of legal compliance with laws, including Brazil’s Forest Code if relevant.",
      tableColumns: [
        "Compliance assessed?",
        "Legislation aspects",
        "Procedures",
        "Brazilian Forest Code data?",
        "Explanation",
      ],
      tableRows: 2,
      response: "SDP237_02",
    },
    {
      slNo: "8.15",
      question:
        "Do you engage in landscape (including jurisdictional) initiatives to progress shared sustainable land use goals?",
      guidance:
        "Collaborative initiatives are best practice to drive conservation/restoration and sustainability.",
      tableColumns: ["Engagement?", "Reason not engaging", "Explanation"],
      tableRows: 2,
      response: "SDP237_03",
    },
    {
      slNo: "8.15.1",
      question:
        "Indicate criteria considered when prioritizing landscapes/jurisdictions for engagement.",
      guidance:
        "Defines priority landscapes/jurisdictions based on risks, opportunities, and enabling conditions.",
      tableColumns: [],
      tableRows: 0,
      response: "SDP237_04",
    },
    {
      slNo: "8.15.2",
      question:
        "Provide details of your engagement with landscape/jurisdictional initiatives.",
      guidance:
        "Covers initiative details, type of engagement, investment, partners, goals, and monitoring.",
      tableColumns: [
        "Landscape ID",
        "Initiative",
        "Country",
        "Landscape area",
        "Area covered",
        "Type of engagement",
        "Engagement years",
        "Investment",
        "Goals supported",
        "Actions",
        "Partners",
        "Description",
        "Monitoring framework",
        "Achievements",
        "Claims",
        "Further details",
      ],
      tableRows: 2,
      response: "SDP237_05",
    },
    {
      slNo: "8.15.3",
      question:
        "This question only appears if you select “Yes, we engage in landscape/ jurisdictional initiatives” in response to column “Do you engage in landscape/jurisdictional initiatives” of 8.15. For each of your disclosed commodities, provide details on the disclosure volume from each of the landscapes/jurisdictions you engage in.",
      guidance:
        "Disclosing your produced or sourced volumes from each landscape/jurisdiction demonstrates whether collaborative engagement contributes to your own strategy for increasing sustainable production/sourcing. It also helps data users to understand how your engagement in landscape/jurisdictional initiatives relate to your sourcing of commodities.",
      tableColumns: [
        "Landscape/jurisdiction ID",
        "Does any of your produced and/or sourced commodity volume originate from this landscape/jurisdiction",
        "Commodity",
        "% of disclosure volume from this landscape/jurisdiction",
      ],
      tableRows: 2,
      response: "SDP237_06",
    },
    {
      slNo: "8.16",
      question:
        "Do you participate in any other external activities to support the implementation of policies and commitments related to deforestation, ecosystem conversion, or human rights issues in commodity value chains?",
      guidance:
        "Beyond landscape and jurisdictional approaches, involvement in other external activities brings together actors in a sector to establish shared objectives, develop plans, and take action to overcome challenges that can help the organization improve its production/sourcing practices and address broader issues in sectors or production landscapes. There may also be opportunities for driving innovation in the market and finding solutions to the challenges associated with the production and sourcing of sustainable raw materials.",
      tableColumns: [],
      tableRows: 0,
      response: "SDP237_07",
    },
    {
      slNo: "8.16.1",
      question:
        "This question only appears if you select “Yes” to 8.16. Provide details of the external activities to support the implementation of your policies and commitments related to deforestation, ecosystem conversion, or human rights issues in commodity value chains",
      guidance:
        "Beyond landscape and jurisdictional approaches, involvement in other external activities brings together actors in a sector to establish shared objectives, develop plans, and take action to overcome challenges that can help the organization improve its production/sourcing practices and address broader issues in sectors or production landscapes. There may also be opportunities for driving innovation in the market and finding solutions to the challenges associated with the production and sourcing of sustainable raw materials.",
      tableColumns: [
        "Commodity",
        "Activities",
        "Subnational area",
        "Provide further details of the activity",
      ],
      tableRows: 2,
      response: "SDP237_08",
    },
    {
      slNo: "8.17",
      question:
        "Is your organization supporting or implementing project(s) focused on ecosystem restoration and long-term protection?",
      guidance:
        "This question gathers data on the projects your organization has supported or implemented, or plan to implement in two years, that are related to ecosystem restoration, reforestation and/or protection of forests and other ecosystems. This information demonstrates to investors and other data users that your organization is committed and proactive towards forests stewardship",
      tableColumns: [],
      tableRows: 0,
      response: "SDP237_09",
    },
    {
      slNo: "8.17.1",
      question:
        "This question only appears if you select ‘Yes’ in response to 8.17. Provide details on your project(s), including the extent, duration, and monitoring frequency. Please specify any measured outcome(s).",
      guidance:
        "This question gathers data on the projects your organization has supported or implemented, that are related to ecosystem restoration, reforestation and/or conservation of forests and other ecosystems. This information demonstrates to CDP’s investors and other data users that your organization is strongly committed and proactive towards sustainable forests stewardship.",
      tableColumns: [
        "Project reference",
        "Project type",
        "Expected benefits of project",
        "Is this project originating any carbon credits?",
        "Description of project",
        "Where is the project taking place in relation to your value chain?",
        "Start year",
        "Target year",
        "Project area to date (Hectares)",
        "Project area in the target year (Hectares)",
        "Country/Area",
        "Latitude",
        "Longitude",
        "Monitoring frequency",
        "Total investment over the project period (currency)",
        "For which of your expected benefits are you monitoring progress?",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP237_10",
    },
  ];

  const tableDataModuleNine = [
    {
      slNo: "9.1",
      question:
        "Are there any exclusions from your disclosure of water-related data?",
      guidance:
        "CDP seeks to share comprehensive and representative water data. If organizations do need to exclude areas of their business from their disclosure, data users must be informed of the exclusions as this may affect their analysis.",
      tableColumns: [],
      tableRows: 0,
      response: "SDP87_23",
    },
    {
      slNo: "9.1.1",
      question:
        "This question only appears if you select “Yes” in response to 9.1. Provide details on these exclusions.",
      guidance:
        "An organization’s disclosure must be comprehensive and representative to ensure data user confidence in the information reported. As such, organizations are encouraged to report on any exclusions to their disclosure including any geographies, facilities, and other water aspects",
      tableColumns: [
        "Exclusion",
        "Description of exclusion",
        "Reason for exclusion",
        "Primary reason why data is not available",
        "Completion date of acquisition or merger",
        "Data from the merger/acquisition will be incorporated in the next reporting year",
        "Percentage of water volume the exclusion represents",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP87_24",
    },
    {
      slNo: "9.2",
      question:
        "Across all your operations, what proportion of the following water aspects are regularly measured and monitored?",
      guidance:
        "This question allows your company to indicate to investors, customers, and other data users the extent to which it monitors different aspects of its water use. Comprehensive water accounting is a first step in understanding the importance of water to your business and any potential water-related impacts to your business. This data may also be relevant to a company’s regulatory compliance.",
      tableColumns: [
        "Water aspect",
        "% of sites/facilities/operations",
        "Frequency of measurement",
        "Method of measurement",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP87_25",
    },
    {
      slNo: "9.2.1",
      question:
        "This question only appears if you have any hydropower operations disclosed in 1.16.1 . For your hydropower operations, what proportion of the following water aspects are regularly measured and monitored?",
      guidance:
        "Dam operation implies an alteration of the natural river flow and sediment movement.  Changes to river hydrology may affect instream and streamside habitats and affect local biodiversity. Ensuring appropriate environmental flows and sediment loadings helps to maintain water ecosystems and their basic functions.  Sediments can collect behind a dam because the dam itself is a physical barrier. Eventually they can reduce the operative capacity of dams. When sediments collect, ecosystems upstream and downstream can be affected.  CDP acknowledges that there is no universally accepted methodology for establishing  environmental flows. In their simplest form, they can include low- and high- water regimes, and in their most complex, they may consider biodiversity and socioeconomic factors. Environmental flows may be established in national, regional or local legislation and there may be a legal requirement for hydropower operations to maintain those flows. In many countries/areas, however, they are not legally established and organizations looking to maintain environmental flows would need to rely on available literature or data.  This question allows organizations to demonstrate their leadership in evaluating the environmental impacts of their operations, especially where legal and regulatory frameworks in this area are weak.",
      tableColumns: [
        "Water aspect",
        "% of sites/facilities/operations measured and monitored",
        "Please explain",
      ],
      tableRows: 2,
      response: "MT2537",
    },
    {
      slNo: "9.2.2",
      question:
        "What are the total volumes of water withdrawn, discharged, and consumed across all your operations, how do they compare to the previous reporting year, and how are they forecasted to change?",
      guidance:
        "This question incentivizes companies to have a complete view of their water balance at the corporate level and to assess anticipated forward trends in water demand, encouraging a transition towards business models which do not pose threats to rivers, lakes, aquifers, and streams. Total volumes can indicate the organization’s relative significance as a user of water and provide a baseline figure for other calculations. Along with trend data, these volumes can also suggest the level of risk posed by future disruptions to water supplies or increases in the cost of water. Water consumption measures water that is no longer available for use by the ecosystem or local community in the reporting period. Reporting the volume of water consumption contributes to an organization’s understanding of the overall scale of its impact due to water withdrawal on downstream water availability.",
      tableColumns: [
        "Water aspect",
        "Volume (megaliters /year)",
        "Comparison with previous reporting year",
        "Primary reason for comparison with previous reporting year",
        "Five-year forecast",
        "Primary reason for forecast",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP93_17",
    },
    {
      slNo: "9.2.3",
      question:
        "In your oil & gas sector operations, what are the total volumes of water withdrawn, discharged, and consumed (by business division), how do they compare to the previous reporting year, and how are they forecasted to change?",
      guidance:
        "This question incentivizes companies to have a complete view of their water balance at the business division level and to assess anticipated forward trends in water demand, encouraging a transition towards business models which do not pose threats to rivers, lakes, aquifers, and streams. Volumes of water withdrawals, discharges, and consumption typically differ significantly between business divisions. Detailing the water balance at this scale provides data users with an understanding of the key phases that determine the organization’s water balance and allow a better interpretation of answers provided in other sections of the questionnaire.",
      tableColumns: [
        "Water aspect by business division",
        "Volume (megaliters /year)",
        "Comparison with previous reporting year",
        "Primary reason for comparison with previous reporting year",
        "Five-year forecast",
        "Primary reason for forecast",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP93_18",
    },
    {
      slNo: "9.2.4",
      question:
        "Indicate whether water is withdrawn from areas with water stress, provide the volume, how it compares with the previous reporting year, and how it is forecasted to change.",
      guidance:
        "Since water is a shared resource, and water-related impacts are localized, organizations are increasingly encouraged to prioritize action in areas with water stress and to understand and respond to local contexts. This question on water from stressed areas supports a trend towards metrics for corporate water reporting and target setting informed by local context, and in addition, the TCFD recommends disclosure of reliance on water from areas of water stress. This question also incentivizes organizations to assess anticipated forward trends in withdrawals from water stressed areas, encouraging a transition towards business models which do not pose threats to rivers, lakes, aquifers, and streams. The data requested assists the assessment of your organization’s dependence on potentially contested sources (regardless of whether your facility itself is located in a stressed area), as well as your potential impact on sensitive locations. 175 Water stress is a driver of business risk and, as stress is likely to worsen, transparency is critical. Understanding elevated business risk due to operations in water stressed areas is important for the investor community, and this question allows data users to review the trend in dependency on water from stressed basins. Knowledge of water-related hot spots helps your organization identify where water stress may be affecting its operations, now or in the future, as well as to prioritize your sustainable water management practices.",
      tableColumns: [
        "Withdrawals are from areas with water stress",
        "Volume withdrawn from areas with water stress (megaliters)",
        "Comparison with previous reporting year",
        "Primary reason for comparison with previous reporting year",
        "Five-year forecast",
        "% of total withdrawals that are withdrawn from areas with water stress",
        "Identification tool",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP93_19",
    },
    {
      slNo: "9.2.5",
      question:
        "What proportion of the produced agricultural commodities that are significant to your organization originate from areas with water stress?",
      guidance:
        "This question provides data users with information on the exposure that the organization may have to scarce resources in their direct operations. This metric will also allow data users to better understand the answers provided in other sections of the questionnaire.",
      tableColumns: [
        "Agricultural commodities",
        "The proportion of this commodity produced in areas with water stress is known",
        "% of total agricultural commodity produced in areas with water stress",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP93_20",
    },
    {
      slNo: "9.2.6",
      question:
        "What proportion of the sourced agricultural commodities that are significant to your organization originate from areas with water stress?",
      guidance:
        "This question provides data users with information on an organization’s exposure to scarce resources in their value chain. This metric will also allow data users to better understand the answers provided in other sections of the questionnaire.",
      tableColumns: [
        "Agricultural commodities",
        "The proportion of this commodity sourced from areas with water stress is known",
        "% of total agricultural commodity sourced from areas with water stress",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP91_13",
    },
    {
      slNo: "9.2.7",
      question: "Provide total water withdrawal data by source.",
      guidance:
        "Distinguishing between source types and reporting volume of water withdrawn by source contributes to an understanding of the potential risks and impacts associated with an organization’s water use as this level of detail can be significant. For example, withdrawing water from an overdrawn aquifer will have different consequences for local water stress and a company’s water security than does withdrawing seawater. Clean freshwater is becoming increasingly scarce, and this can impact production processes that rely on large volumes of water. In regions where water sources are highly restricted, the organization’s water consumption patterns can also influence relations with other stakeholders.",
      tableColumns: [
        "Source",
        "Relevance",
        "Volume (megaliters/year)",
        "Comparison with previous reporting yea",
        "Primary reason for comparison with previous reporting year",
        "Please explain",
      ],
      tableRows: 2,
      response: "",
    },
    {
      slNo: "9.2.8",
      question: "Provide total water discharge data by destination.",
      guidance:
        "Reporting volume of water discharged to specific destinations contributes to an understanding of the specific risks and impacts associated with an organization’s water discharges.",
      tableColumns: [
        "Destination",
        "Relevance",
        "Volume (megaliters/year)",
        "Comparison with previous reporting year",
        "Primary reason for comparison with previous reporting year",
        "Please explain",
      ],
      tableRows: 2,
      response: "",
    },
    {
      slNo: "9.2.9",
      question:
        "Within your direct operations, indicate the highest level(s) to which you treat your discharge.",
      guidance:
        "Reporting on levels of treatment demonstrates that the organization is monitoring its discharges and is able to understand the extent to which its activities impact water quality. Pollution is a driver of business risk and a potential threat to public health, food security, and economic resilience – as well as a cause of degradation of freshwater biodiversity. Treatment of discharge is therefore critical and transparency on this will aid investors, customers, and other data users to assess the risks and opportunities.",
      tableColumns: [
        "Highest level of treatment within direct operations",
        "Relevance of treatment level to discharge",
        "Volume (megaliters/ye ar)",
        "Comparison of treated volume with previous reporting year",
        "Primary reason for comparison with previous reporting year",
        "% of your sites/facilities/operati ons this volume applies to",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP90_40",
    },
    {
      slNo: "9.2.10",
      question:
        "Provide details of your organization’s emissions of nitrates, phosphates, pesticides, and other priority substances to water in the reporting year.",
      guidance:
        "This question allows organizations to indicate their emissions to water of priority substances, helping them understand, manage, and reduce the use of nitrates, phosphates, pesticides, and other priority substances.",
      tableColumns: [
        "Emissions to water in the reporting year (metric tons)",
        "Categories of substances included",
        "List the specific substances included",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP90_41",
    },
    {
      slNo: "9.3",
      question:
        "In your direct operations and upstream value chain, what is the number of facilities where you have identified substantive water-related dependencies, impacts, risks, and opportunities?",
      guidance:
        "Water is a local issue, and data users want to know that organizations are considering dependencies, impacts, risks, and opportunities at the facility level. Reporting the total count of facilities where substantive water-related dependencies, impacts, risks, and/or opportunities have been identified provides a basic but useful indication of the organization’s reliance on these areas. Reporting the proportion of total facilities in your direct operations that have been identified allows data users to understand the importance of these facilities relative to the size of your organization.",
      tableColumns: [
        "Value chain stage",
        "Identification of facilities in the value chain stage",
        "Total number of facilities identified",
        "% facilities in direct operations that this represents",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP88_33",
    },
    {
      slNo: "9.3.1",
      question:
        "For each facility referenced in 9.3, provide coordinates, water accounting data, and a comparison with the previous reporting year.",
      guidance:
        "Reporting information on facilities where you have identified substantive water-related dependencies, impacts, risks, and/or opportunities helps data users have confidence that your organization is monitoring local water aspects. It provides insight to dependency on different sources and potential impacts associated with water withdrawals and discharges. For example, withdrawing from an overdrawn freshwater aquifer rather than from seawater will have significantly different consequences for local areas with water stress and an organization's water security. In regions where water sources are highly restricted, the organization's water consumption patterns can influence relations with other stakeholders. Providing facility-level information is useful for demonstrating regulatory compliance (e.g., discharges to the local environment), for risk assessments and for providing insight to risk responses (e.g., tracking water efficiency improvements). Geo-location coordinates for your facilities with substantive water-related dependencies, impacts, risks, and/or opportunities enables data users to analyze geographically linked dependencies, impacts, risks, and opportunities and to do so across multiple companies. This also facilitates the integration of CDP’s water data with other geographically linked data.",
      tableColumns: [
        "Facility reference number",
        "Facility name (optional)",
        "Value chain stage",
        "Dependencies, impacts, risks, and/or opportunities identified at this facility",
        "Withdrawals or discharges in the reporting year",
        "Reason for no withdrawals and/or discharges",
        "Country/Area & River basin",
        "Latitude",
        "Longitude",
        "Located in area with water stress",
        "Primary power generation source for your electricity generation at this facility",
        "Oil & gas sector business division",
        "Total water withdrawals at this facility (megaliters)",
        "Comparison of total withdrawals with previous reporting year",
        "Withdrawals from fresh surface water, including rainwater, water from wetlands, rivers, and lakes",
        "Withdrawals from brackish surface water /seawater",
        "Withdrawals from groundwater - renewable",
        "Withdrawals from groundwater - non-renewable",
        "Withdrawals from produced/entrained water",
        "Withdrawals from third party sources",
        "Total water discharges at this facility (megaliters)",
        "Comparison of total discharges with previous reporting year",
        "Discharges to fresh surface water",
        "Discharges to brackish surface water/seawater",
        "Discharges to groundwater ",
        "Discharges to third party destinations",
        "Total water consumption at this facility (megaliters)",
        "Comparison of total consumption with previous reporting year",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP93_21",
    },
    {
      slNo: "9.3.2",
      question:
        "For the facilities in your direct operations referenced in 9.3.1, what proportion of water accounting data has been third party verified?",
      guidance:
        "Providing third party verification for water accounting data at facilities with substantive water related dependencies, impacts, risks, and/or opportunities gives CDP data users increased confidence in the data you are reporting.",
      tableColumns: [
        "Water aspect",
        "% verified",
        "Verification standard used",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP93_22",
    },
    {
      slNo: "9.4",
      question:
        "Could any of your facilities reported in 9.3.1 have an impact on a requesting CDP supply chain member?",
      guidance:
        "In 9.3 you were asked to identify the number of your facilities with substantive water related dependencies, impacts, risks, and/or opportunities. In 9.3.1 you then reported water accounting data for these facilities. This question asks whether any of these facilities could have an impact on a requesting CDP supply chain member.",
      tableColumns: [],
      tableRows: 0,
      response: "SDP87_26",
    },
    {
      slNo: "9.4.1",
      question:
        "Indicate which of the facilities referenced in 9.3.1 could impact a requesting CDP supply chain member.",
      guidance:
        "Indicating which of your customers use goods or services produced by facilities referenced in 9.3.1 will help them understand and take action to respond to their substantive water-related dependencies, impacts, risks and/or opportunities.",
      tableColumns: [
        "Facility reference number",
        "Facility name",
        "Requesting member",
        "Description of potential impact on member",
        "Comment",
      ],
      tableRows: 2,
      response: "SDP87_27",
    },
    {
      slNo: "9.5",
      question:
        "Provide a figure for your organization’s total water withdrawal efficiency.",
      guidance:
        "A water withdrawal efficiency metric enables organizations to track the water-dependency of their revenue, as well as bench mark their water use. Awareness of water efficiency can drive cost savings, increased brand value, and product or service innovation. This metric helps data users track an organization’s transition towards a water secure future.",
      tableColumns: [
        "Revenue (currency)",
        "Total water withdrawal efficiency",
        "Anticipated forward trend",
      ],
      tableRows: 2,
      response: "SDP93_23",
    },
    {
      slNo: "9.6",
      question:
        "Do you calculate water intensity for your activities in the chemical sector?",
      guidance:
        "This metric encourages organizations with activities in the chemical sector to monitor water intensity data and improve efficiency. In addition to total water volumes, water intensity metrics provide a complementary indicator to help identify efficiencies and opportunities for the reduction in water withdrawals or consumption. Data users seek improved transparency around the calculation of such metrics to enable performance monitoring and high-level benchmarking. This question aligns with public policy goals related to water at all levels, such as the Sustainable Development Goal 6.4.1.",
      tableColumns: [
        "Purchased feedstock",
        "Percentage of Scope 3, Category 1 tCO2e from purchased feedstock",
        "Explain calculation methodology",
      ],
      tableRows: 2,
      response: "SDP93_24",
    },
    {
      slNo: "9.6.1",
      question:
        "For your top five products by production weight/volume, provide the following water intensity information associated with your activities in the chemical sector.",
      guidance:
        "This question provides data users with information on how organizations are monitoring the water intensity of their key products and the underlying factors that determine their trend for this metric. It is acknowledged that water intensities will naturally vary according to facility-specific factors like final product obtained, cooling technology or processes used. Specifying a type of metric also helps data users to understand common practice in the industry.",
      tableColumns: [
        "Product type",
        "Product name",
        "Water intensity value (m3/denominat or)",
        "Numerator: water aspect",
        "Denominator",
        "Comparison with previous reporting year",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP93_25",
    },
    {
      slNo: "9.7",
      question:
        "Do you calculate water intensity for your electricity generation activities?",
      guidance:
        "This metric encourages organizations with electricity generation activities to monitor water intensity data and improve efficiency. Data users seek improved transparency around the calculation of such metrics to enable performance monitoring and high-level benchmarking. In addition to total water volumes, water intensity metrics provide a complementary indicator to help identify efficiencies and opportunities in water withdrawals or consumption. This aligns with public policy goals related to water at all levels, including such as the Sustainable Development Goal 6.4.1.",
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
      tableRows: 2,
      response: "SDP93_26",
    },
    {
      slNo: "9.7.1",
      question:
        "Provide the following intensity information associated with your electricity generation activities.",
      guidance:
        "This question provides data users with information on how organizations are monitoring their water intensity and the underlying factors that determine their trend for this metric. CDP acknowledges that water intensities will vary according to power generation source and technologies used. Specifying a type of metric also helps data users to understand common practice in the industry.",
      tableColumns: [
        "Water intensity value (m3/denominator)",
        "Numerator: water aspect",
        "Denominator",
        "Comparison with previous reporting year",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP93_27",
    },
    {
      slNo: "9.8",
      question:
        "Provide water intensity information for each of the agricultural commodities significant to your organization that you produce.",
      guidance:
        "The focus of this question is to ensure that organizations are monitoring the water intensity of their key produced commodities and that they are aware of the underlying factors that determine trends in product water intensity. It is acknowledged that water intensities will naturally vary according to local context factors like climate, soil, agricultural practices, crop varieties, or water management factors. Additionally, it may clarify how this metric is calculated including what water aspects were accounted for, how such factors may affect the metrics, or what company boundaries were used. Specifying a type of metric allows data users to understand common practice in the industry.",
      tableColumns: [
        "Agricultural commodity",
        "Water intensity information for this produced commodity is collected/calculate d",
        "Water intensity value (m3/denominato r)",
        "Numerator: water aspect",
        "Denominator",
        "Comparison with previous reporting year",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP93_28",
    },
    {
      slNo: "9.9",
      question:
        "Provide water intensity information for each of the agricultural commodities significant to your organization that you source.",
      guidance:
        "The focus of this question is to ensure that organizations are monitoring the water intensity of their key sourced commodities and that they are aware of the underlying factors that determine their trend for this metric. It is acknowledged that water intensities will naturally vary according to local context factors like climate, soil, agricultural practices, crop varieties or water management factors. Additionally, it may clarify how this metric is calculated including what water aspects were accounted for, how such factors may affect the metrics, or what organization boundaries were used. Specifying a type of metric allows data users to understand common practice in the industry.",
      tableColumns: [
        "Agricultural commoditie s",
        "Water intensity information for this sourced commodity is collected/calculate d",
        "Water intensity value (m3/denominato r)",
        "Numerator: Water aspect",
        "Denominator",
        "Comparison with previous reporting year",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP93_29",
    },
    {
      slNo: "9.1O",
      question:
        "Do you calculate water intensity information for your metals and mining activities?",
      guidance:
        "This metric encourages organizations with activities in the metals & mining and coal sectors to monitor water intensity data and improve efficiency. Data users seek improved transparency around the calculation of such metrics to enable performance monitoring and high-level benchmarking. In addition to total water volumes, water intensity metrics provide a complementary indicator to help identify efficiencies and opportunities for the reduction of water withdrawals and consumption. This aligns with public policy goals related to water at all levels, such as the Sustainable Development Goal 6.4.1.",
      tableColumns: [],
      tableRows: 0,
      response: "SDP93_30",
    },
    {
      slNo: "9.10.1",
      question:
        "For your top 5 products by revenue, provide the following intensity information associated with your metals and mining activities.",
      guidance:
        "Various methods exist for calculating water intensity in the metals & mining and coal sectors, and it is acknowledged that water intensities will naturally vary according to local context factors like geology, landscape, hydrology, the mining methods used, or ore grades. Specifying a type of metric allows data users to understand common practice in the industry. This question provides them with information on how organizations determine a water intensity metric and are aware of the underlying factors that affects their trend. • Note that the question does not ask for an organization to provide water intensity data. CDP is taking a staged approach to this disclosure.",
      tableColumns: [
        "Product name",
        "Numerator: water aspect",
        "Denominator",
        "Comparison with previous reporting year",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP93_31",
    },
    {
      slNo: "9.11",
      question:
        "Do you calculate water intensity for your activities associated with the oil & gas sector?",
      guidance:
        "This metric encourages organizations to monitor water intensity data and improve efficiency. In addition to total water volumes, water intensity metrics provide a complementary indicator to help identify efficiencies and reduction opportunities in water withdrawals or consumption. Data users also seek improved transparency around the calculation of such metrics to enable performance monitoring and high-level benchmarking. This aligns with public policy goals at all levels, including Sustainable Development Goal",
      tableColumns: [],
      tableRows: 0,
      response: "SDP93_32",
    },
    {
      slNo: "9.11.1",
      question:
        "Provide water intensity information associated with your activities in the oil & gas sector",
      guidance:
        "The focus of this question is to determine which metric organizations are using to monitor their water intensity, and that they are aware of the underlying factors that determine their trend in this metric. Specifying a type of metric also allows data users to understand common practice in the industry. Various methods exist for calculating water intensity for the oil & gas sector. It is acknowledged that water intensities will naturally vary according to local context factors like geology, hydrology, or technology used.",
      tableColumns: [
        "Business division",
        "Water intensity value (m3/denominat or)",
        "Numerator: water aspect",
        "Denominator",
        "Comparison with previous reporting year",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP93_33",
    },
    {
      slNo: "9.12",
      question:
        "Provide any available water intensity values for your organization’s products or services.",
      guidance:
        "Methodologies for calculating and reporting water intensity are currently becoming more standardized, particularly with the development of ISO 14046. CDP supply chain members are increasingly interested in the water use of their purchased products (goods or services). In particular, they are interested in the water intensity of the goods and services they purchase that are produced in facilities exposed to water risk (where that risk is related to access to water or physical scarcity).",
      tableColumns: [
        "Product name",
        "Water intensity value",
        "Numerator: Water aspect",
        "Denominator",
        "Comment",
      ],
      tableRows: 2,
      response: "SDP93_34",
    },
    {
      slNo: "9.13",
      question:
        "Do any of your products contain substances classified as hazardous by a regulatory authority?",
      guidance:
        "Tracing and eliminating the use of hazardous substances in all sectors is pivotal in safeguarding the quality of water bodies and by extension the effects on humans and ecosystems. Keeping track of the hazardous substances present in their products allows companies to work systematically to phase out these substances.",
      tableColumns: [],
      tableRows: 0,
      response: "SDP87_28",
    },
    {
      slNo: "9.13.1",
      question:
        "What percentage of your company’s revenue is associated with products containing substances classified as hazardous by a regulatory authority?",
      guidance:
        "This question assesses whether your company monitors hazardous substances in your products, with the aim to improve the protection of human health and the environment from the risks posed by hazardous substances.",
      tableColumns: [
        "Regulatory classification of hazardous substances",
        "% of revenue associated with products containing substances in this list",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP87_29",
    },
    {
      slNo: "9.14",
      question:
        "Do you classify any of your current products and/or services as low water impact?",
      guidance:
        "Reducing the water impact of products, in the production or use phase of the value chain, will hasten the transition to a water-secure future. This question informs investors and other data users on the action that companies are taking towards this. There is no common definition of what constitutes a low water impact product and/or service, so companies are asked to explain the criteria and threshold used for classifying products and/or services as low water impact.",
      tableColumns: [
        "Products and/or services classified as low water impact",
        "Definition used to classify low water impact*",
        "Primary reason for not classifying any of your current products and/or services as low water impact*",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP88_34",
    },
    {
      slNo: "9.15",
      question: "Do you have any water-related targets?",
      guidance:
        "Target setting plays a vital role in water management and assists the successful execution of corporate strategies. Setting and making progress against targets helps decouple growth from dependence on water. CDP data users wish to know about your organization’s tracked, timebound, quantitative targets for achieving its water policy and commitments, improving water management, and responding to current and future water risks.",
      tableColumns: [],
      tableRows: 0,
      response: "SDP92_1",
    },
    {
      slNo: "9.15.1",
      question:
        "Indicate whether you have targets relating to water pollution, water withdrawals, WASH, or other water-related categories.",
      guidance:
        "It is good practice for companies to set targets to reduce water withdrawals, reduce water pollution, and improve water, sanitation, and hygiene (WASH) services where these water aspects are relevant to the impact of their business activities on water security.",
      tableColumns: [
        "Category of target",
        "Target set in this category",
        "Please explain",
        "MWh fuel consumed for the self generation of electricity",
        "MWh fuel consumed for self cogeneration or self trigeneration",
        "Comment",
      ],
      tableRows: 2,
      response: "SDP92_13",
    },
    {
      slNo: "9.15.2",
      question:
        "Provide details of your water-related targets and the progress made.",
      guidance:
        "Investors need an explanation as to why you do not have water-related targets in place, especially if your organization has a dependency on water or substantive water risks.",
      tableColumns: [
        "Target reference number  ",
        "Target coverage",
        "Category of target & Quantitative metric ",
        "Date target was set ",
        "End date of base year ",
        "Base year figure",
        "End date of target year ",
        "Target year figure",
        "Reporting year figure",
        "Target status in reporting year",
        "% of target achieved relative to base year",
        "Global environmental treaties/initiatives/ frameworks aligned with or supported by this target",
        "Explain target coverage and identify any exclusions",
        "Plan for achieving target, and progress made to the end of the reporting year",
        "Actions which contributed most to achieving or maintaining this target",
        "Further details of target",
      ],
      tableRows: 2,
      response: "SDP92_14",
    },
    {
      slNo: "9.15.3",
      question:
        "Why do you not have water-related target(s) and what are your plans to develop these in the future?",
      guidance:
        "Investors need an explanation as to why you do not have water-related targets in place, especially if your organization has a dependency on water or substantive water risks.",
      tableColumns: ["Primary reason ", "Please explain"],
      tableRows: 2,
      response: "SDP92_15",
    },
  ];

  const tableDataModuleTen = [
    {
      slNo: "10.1",
      question: "Do you have plastics-related targets, and if so what type?",
      guidance:
        "Organizations need to set and progress targets that address their plastics-related dependencies, impacts, risks, and opportunities. This question allows organizations to demonstrate to data users their commitment to reduce plastic usage, reduce or eliminate virgin content in plastics, eliminate problematic and unnecessary plastics, transition to reuse systems, reduce microplastic emissions, and increase circularity.",
      tableColumns: [
        "Targets in place",
        "Target type and metric",
        "Please explain",
      ],
      tableRows: 2,
      response: "SDP111_11",
    },
    {
      slNo: "10.2",
      question:
        "Indicate whether your organization engages in the following activities.",
      guidance:
        "Different activities related to the production, commercialization, and use of plastics may result in different dependencies, impacts, risks, and opportunities. This question enables data users to contextualize the information you provide in this module.",
      tableColumns: ["Activity", "Activity applies", "Comment"],
      tableRows: 2,
      response: "SDP111_12",
    },
    {
      slNo: "10.3",
      question:
        "Provide the total weight of plastic polymers sold and indicate the raw material content.",
      guidance:
        "Organizations monitoring the types and amounts of raw materials they use to produce plastic polymers are better able to understand their plastics-related dependencies, impacts, risks, and opportunities, and thus take action to increase the circularity of plastics sold.",
      tableColumns: [
        "Total weight of plastic polymers sold during the reporting year (Metric tons)",
        "Raw material content percentages available to report",
        "% virgin fossil based content",
        "% virgin renewable content",
        "% pre-consumer recycled content",
        "% post consumer recycled content",
        "Please explain",
      ],
      tableRows: 2,
      response: "MT2538",
    },
    {
      slNo: "10.4",
      question:
        "Provide the total weight of plastic durable goods and durable components produced, sold and/or used, and indicate the raw material content.",
      guidance:
        "Organizations monitoring the amounts and contents of plastic durable goods and durable components they sell and/or use are better able to understand their plastics-related dependencies, impacts, risks, and opportunities, and increase their potential to reduce the use of virgin fossil-based content.",
      tableColumns: [
        "Activity",
        "Total weight during the reporting year (Metric tons)",
        "Raw material content percentages available to report",
        "% virgin fossil based content",
        "% virgin renewable content",
        "% pre-consumer recycled content",
        "% post consumer recycled content",
        "Please explain",
      ],
      tableRows: 2,
      response: "MT2539",
    },
    {
      slNo: "10.5",
      question:
        "Provide the total weight of plastic packaging sold and/or used and indicate the raw material content.",
      guidance:
        "Organizations monitoring the amounts and contents of plastic packaging that they use or sell are better able to understand their plastics-related dependencies, impacts, and opportunities, and increase their potential to reduce the use of virgin fossil-based content.",
      tableColumns: [
        "Activity",
        "Total weight during the reporting year (Metric tons)",
        "Raw material content percentages available to report",
        "% virgin fossil-based content",
        "% virgin renewable content",
        "% post consumer recycled content",
        "Total electricity/heat/steam/coolin g energy consumption (MWh) [Auto-calculated]",
        "Please explain",
      ],
      tableRows: 2,
      response: "MT2540",
    },
    {
      slNo: "10.5.1",
      question:
        "Indicate the circularity potential of the plastic packaging you sold and/or used.",
      guidance:
        "Companies that monitor reusability and recyclability of their plastic packaging demonstrate a commitment to increasing the share of their packaging that has circularity potential and to tackling the plastic pollution crisis.",
      tableColumns: [
        "Activity",
        "Percentages available to report for circularity potential",
        "% of plastic packaging that is reusable*",
        "% of plastic packaging that is technically recyclable*",
        "% of plastic packaging that is recyclable in practice at scale*",
        "Please explain",
      ],
      tableRows: 2,
      response: "",
    },
    {
      slNo: "10.6",
      question:
        "Provide the total weight of waste generated by the plastic you produce, commercialize, use and/or process and indicate the end-of-life management pathways.",
      guidance:
        "For organizations that produce, commercialize, use, and/or process plastics, a crucial step in tackling plastics pollution is to understand their end-of-life management of plastics. This question allows organizations to indicate the amount of plastic waste that their organization generates, and how it is managed to drive progress in line with the waste hierarchy.",
      tableColumns: [
        "Activity",
        "Total weight of waste generated during the reporting year (Metric tons)",
        "End-of-life management pathways available to report",
        "% prepared for reuse",
        "% recycling",
        "% composting (industrial/home)",
        "% waste to energy",
        "% incineration",
        "% landfill",
        "% mismanaged wast",
        "% leakage",
        "% other",
        "Please explain",
      ],
      tableRows: 2,
      response: "",
    },

    {
      section: "Further information & Sign-off",
      slNo: "13.1",
      question:
        "Indicate if any environmental information included in your CDP response (not already reported in 7.9.1/2/3, 8.9.1/2/3/4, and 9.3.2) is verified and/or assured by a third party?",
      guidance:
        "This information gives data users confidence in the quality and credibility of your organization's response. CDP supports third-party verification and assurance as good practice in environmental reporting as it ensures the reliability of the data and processes disclosed. This question allows leading organizations to report their efforts on this and to highlight trends in verification and assurance of interest to investors and purchasing organizations. CDP also recognizes the growing importance to organizations of disclosing credible independently verified environmental data for demonstrating compliance with emerging standards and regulations.",
      tableColumns: [
        "Other environmental information included in your CDP response is verified and/or assured by a third party",
        "Primary reason why other environmental information included in your CDP response is not verified and/or assured by a third party",
        "Explain why other environmental information included in your CDP response is not verified and/or assured by a third party",
      ],
      tableRows: 2,
      response: "",
    },
    {
      slNo: "13.1.1",
      question:
        "Which data points within your CDP response are verified and/or assured by a third party, and which standards were used?",
      guidance:
        "This information allows data users to understand which elements of your organizations CDP response have been verified/assured by an accredited third-party.",
      tableColumns: [
        "Environmental issue for which data has been verified and/or assured",
        "Disclosure module and data verified and/or assured",
        "Verification/assurance standard",
        "Further details of the third-party verification/assurance process",
        "Attach verification/assurance evidence/report (optional)",
      ],
      tableRows: 2,
      response: "",
    },
    {
      slNo: "13.2",
      question:
        "Use this field to provide any additional information or context that you feel is relevant to your organization's response. Please note that this field is optional and is not scored.",
      guidance: "",
      tableColumns: [],
      tableRows: 0,
      response: "",
    },
    {
      slNo: "13.3",
      question:
        "Use this field to provide any additional information or context that you feel is relevant to your organization's response. Please note that this field is optional and is not scored.",
      guidance:
        "CDP asks organizations to identify the job title and corresponding job category of the person signing off (approving) the CDP response. This information indicates to investors where in the corporate structure direct responsibility is being taken for the response and the information contained therein.",
      tableColumns: ["Job title", "Corresponding job category"],
      tableRows: 2,
      response: "",
    },
    {
      slNo: "13.4",
      question:
        "Please indicate your consent for CDP to share contact details with the Pacific Institute to support content for its Water Action Hub website",
      guidance:
        "The CEO Water Mandate Water Action Hub is an online platform that catalogues water stewardship projects around the world and enables interested parties to connect and work together to solve local and regional water challenges. CDP will share public response data from 3.1.1 with the Pacific Institute to be reviewed as potential water stewardship projects for upload to the Water Action Hub website. Only responses to the following datapoints will be considered for upload: For the Water environmental issue: Country/Area where the risk occurs; River basin where the risk occurs; Primary response to risk; Description of response. CDP’s Privacy Policy can be found here.",
      tableColumns: [],
      tableRows: 0,
      response: "",
    },
  ];

  const tableDataModuleEleven = [
    {
      section: "Environmental Performance – Biodiversity",
      slNo: "11.2",
      question:
        "What actions has your organization taken in the reporting year to progress your biodiversity-related commitments?",
      guidance:
        "This question enables organizations to demonstrate how they are achieving their vision and ambition for biodiversity through addressing the issues they have identified and committed to addressing. Your response to this question aligns with requirements of “Stage 2: Ambitions” in IUCN’s Guidelines for planning and monitoring corporate biodiversity performance, which recommends that companies develop and deliver biodiversity goals and objectives.",
      tableColumns: [
        "Actions taken in the reporting period to progress your biodiversity-related commitments",
        "Type of action taken to progress biodiversity related commitments",
      ],
      tableRows: 2,
      response: ["SDP98_1", "SDP98_30"],
    },
    {
      slNo: "11.3",
      question:
        "Does your organization use biodiversity indicators to monitor performance across its activities?",
      guidance:
        "Robust indicators are critical for a corporate-level assessment of biodiversity impact, by allowing the aggregation of data from different activities and geographies. This question allows an organization to demonstrate its use of indicators to track progress against its biodiversity goals and objectives and evaluate the success of its intervention/s. Your response to this question aligns with requirements of “Stage 3: Indicators” in IUCN’s Guidelines for planning and monitoring corporate biodiversity performance, which recommends that companies collect, share and analyse biodiversity data that encourages learning and improvement.",
      tableColumns: [
        "Does your organization use indicators to monitor biodiversity performance?",
        "Indicators used to monitor biodiversity performance",
      ],
      tableRows: 2,
      response: ["SDP98_31", "SDP98_16"],
    },
    {
      slNo: "11.4",
      question:
        "Does your organization have activities located in or near to areas important for biodiversity in the reporting year?",
      guidance:
        "Awareness of the proximity of your organization’s activities to areas important for biodiversity demonstrates an understanding of the relationship between the two. This awareness allows organizations to mitigate the potential negative effects of their activities on areas important for biodiversity.",
      tableColumns: [
        "Type of area important for biodiversity",
        "Indicate whether any of your organization's activities are located in or near to this type of area important for biodiversity",
      ],
      tableRows: 2,
      response: ["SDP98_32", "SDP98_29"],
    },
    {
      slNo: "11.4.1",
      question:
        "Provide details of your organization’s activities in the reporting year located in or near to areas important for biodiversity.",
      guidance:
        "Awareness of the proximity of your organization’s activities to areas important for biodiversity demonstrates an understanding of the relationship between the two. Information on your activities’ proximity to such areas provide insights to investors and other data users on potential risks. It also facilitates better understanding of what to expect from your organization in terms of commitments and actions related to this issue. This awareness allows organizations to mitigate potential negative effects of their activities on areas important for biodiversity.",
      tableColumns: [
        "Mining project ID",
        "Types of area important for biodiversity",
        "Protected area category (IUCN classification)",
        "Country/area",
        "Name of the area important for biodiversity",
        "Proximity",
        "Area of overlap (hectares)",
        "Briefly describe your organization’s activities in the reporting year located in or near to the selected area",
        "Indicate whether any of your organization’s activities located in or near to the selected area could negatively affect biodiversity",
        "Mitigation measures implemented within the selected area",
        "Explain how your organization’s activities located in or near to the selected area could negatively affect biodiversity, how this was assessed, and describe any mitigation measures implemented",
        "Further context for mining projects",
      ],
      tableRows: 2,
      response: [
        "SDP98_34",
        "SDP98_33",
        "SDP98_35",
        "SDP98_36",
        "SDP98_37",
        "SDP98_38",
        "SDP98_39",
        "SDP99_1",
        "SDP98_40",
        "SDP98_41",
        "SDP98_42",
      ],
    },
  ];

  const tableDataModuleThirteen = [
    {
      section: "Further information & Sign-off",
      slNo: "13.1",
      question:
        "Indicate if any environmental information included in your CDP response (not already reported in 7.9.1/2/3, 8.9.1/2/3/4, and 9.3.2) is verified and/or assured by a third party?",
      guidance:
        "This information gives data users confidence in the quality and credibility of your organization's response. CDP supports third-party verification and assurance as good practice in environmental reporting as it ensures the reliability of the data and processes disclosed. This question allows leading organizations to report their efforts on this and to highlight trends in verification and assurance of interest to investors and purchasing organizations. CDP also recognizes the growing importance to organizations of disclosing credible independently verified environmental data for demonstrating compliance with emerging standards and regulations.",
      tableColumns: [
        "Other environmental information included in your CDP response is verified and/or assured by a third party",
        "Primary reason why other environmental information included in your CDP response is not verified and/or assured by a third party",
        "Explain why other environmental information included in your CDP response is not verified and/or assured by a third party",
      ],
      tableRows: 2,
      response: "",
    },
    {
      slNo: "13.1.1",
      question:
        "Which data points within your CDP response are verified and/or assured by a third party, and which standards were used?",
      guidance:
        "This information allows data users to understand which elements of your organizations CDP response have been verified/assured by an accredited third-party.",
      tableColumns: [
        "Environmental issue for which data has been verified and/or assured",
        "Disclosure module and data verified and/or assured",
        "Verification/assurance standard",
        "Further details of the third-party verification/assurance process",
        "Attach verification/assurance evidence/report (optional)",
      ],
      tableRows: 2,
      response: "",
    },
    {
      slNo: "13.2",
      question:
        "Use this field to provide any additional information or context that you feel is relevant to your organization's response. Please note that this field is optional and is not scored.",
      guidance: "",
      tableColumns: [],
      tableRows: 0,
      response: "",
    },
    {
      slNo: "13.3",
      question:
        "Use this field to provide any additional information or context that you feel is relevant to your organization's response. Please note that this field is optional and is not scored.",
      guidance:
        "CDP asks organizations to identify the job title and corresponding job category of the person signing off (approving) the CDP response. This information indicates to investors where in the corporate structure direct responsibility is being taken for the response and the information contained therein.",
      tableColumns: ["Job title", "Corresponding job category"],
      tableRows: 2,
      response: "",
    },
    {
      slNo: "13.4",
      question:
        "Please indicate your consent for CDP to share contact details with the Pacific Institute to support content for its Water Action Hub website",
      guidance:
        "The CEO Water Mandate Water Action Hub is an online platform that catalogues water stewardship projects around the world and enables interested parties to connect and work together to solve local and regional water challenges. CDP will share public response data from 3.1.1 with the Pacific Institute to be reviewed as potential water stewardship projects for upload to the Water Action Hub website. Only responses to the following datapoints will be considered for upload: For the Water environmental issue: Country/Area where the risk occurs; River basin where the risk occurs; Primary response to risk; Description of response. CDP’s Privacy Policy can be found here.",
      tableColumns: [],
      tableRows: 0,
      response: "",
    },
  ];

  return (
    <div style={{ minHeight: "80vh" }}>
      <TableRenderer
        id="mod-8-perf"
        title="Section: Environmental Performance - Forests, plastic, water"
        tableData={tableDataModuleEight}
      />

      <br />

      <TableRenderer
        id="mod-9-perf"
        title="Section: Environmental Performance – Water security"
        tableData={tableDataModuleNine}
      />

      <br />

      <TableRenderer
        id="mod-10-perf"
        title="Section:  Environmental Performance – Plastics"
        tableData={tableDataModuleTen}
      />

      <br />

      <TableRenderer
        id="mod-11-perf"
        title="Section:  Environmental Performance – Biodiversity"
        tableData={tableDataModuleEleven}
      />

      <br />

      <TableRenderer
        id="mod-13-perf"
        title="Section:  Further information & Sign-off"
        tableData={tableDataModuleThirteen}
      />
    </div>
  );
};

export default Module_8_13_Perf;
