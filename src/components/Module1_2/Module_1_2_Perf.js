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
              width: "20%",
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
            &nbsp;
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <React.Fragment key={index}>
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

const Module_1_2_Perf = () => {
  const tableDataModuleOne = [
    {
      slNo: "1.1",
      question: "In which language are you submitting your response?",
      guidance: "",
      response: "SDP121_15",
    },
    {
      slNo: "1.2",
      question:
        "Select the currency used for all financial information disclosed throughout your response",
      guidance:
        "CDP encourages organizations to report financial figures associated with dependencies, impacts, risks, and opportunities. Establishing a single currency will facilitate the collection of comparable financial information. This will benefit investors and other data users when assessing the costs and benefits reported by your organization.",
      response: "SDP121_16",
    },
    {
      slNo: "1.3",
      question: "Provide an overview and introduction to your organization.",
      guidance:
        "This introductory information about your organization helps data users to understand your responses in the context of your business activities and sector as well as their connection to environmental issues and corporate strategy.",
      response: "SDP184_25",
    },
    {
      slNo: "1.4",
      question:
        "State the end date of the year for which you are reporting data. For emissions data, indicate whether you will be providing emissions data for past reporting years.",
      guidance:
        "This question allows for the establishment of a clear temporal context, enabling consistent year-to-year comparisons and assessments of an organization’s environmental progress. It enhances transparency and accountability and aids data users in interpreting your responses in relation to the reported timeframe.",
      response: "SDP184_26",
    },
    {
      slNo: "1.4.1",
      question:
        "What is your organization’s annual revenue for the reporting period?",
      guidance:
        "Annual revenue for the reporting period provides contextual information for data users.",
      response: "SDP184_27",
    },
    {
      slNo: "1.5",
      question: "Provide details on your reporting boundary.",
      guidance:
        "This question helps data users interpret how your responses relate to your business operations. Your response to this question defines the set of entities (companies, businesses, other groups, etc.) that you are providing data for in the CDP questionnaire.",
      response: "SDP184_28",
    },
    {
      slNo: "1.6",
      question:
        "Does your organization have an ISIN code or another unique identifier (e.g., Ticker, CUSIP, etc.)?",
      guidance:
        "ISIN codes and other market identifiers are used globally in the identification of securities such as bonds, futures, and stocks. Providing your organization’s unique identifier increases the transparency of your response.",
      response: "SDP184_29",
    },
    {
      slNo: "1.7",
      question: "Select the countries/areas in which you operate.",
      guidance:
        "This question helps data users interpret how your responses relate to your operations across different geographical areas. Ensuring precise country selection in this question enhances the overall accuracy of reporting throughout the questionnaire.",
      response: "SDP184_30",
    },
    {
      slNo: "1.8",
      question: "Are you able to provide geolocation data for your facilities?",
      guidance:
        "This question will be useful for requesting members to link your data with water stress maps, and the types of risk exposure in those water stressed areas.",
      response: "SDP184_31",
    },
    {
      slNo: "1.8.1",
      markedRed: true,
      question:
        "If you have provided yes to the previous question please respond to this question: Please provide all available geolocation data for your facilities.",
      guidance:
        "This information will be useful for requesting members to link CDP data with maps which show areas of greater water stress, and the types of risk exposure in those water stressed areas.",
      response: "SDP184_32",
    },
    {
      slNo: "1.9",
      question:
        "What was the size of your organization based on total assets value at the end of the reporting period?",
      guidance:
        "This question helps data users interpret how your responses relate to your operations by providing context on your financing and/or activities disclosed via CDP in relation to your total activities.",
      response: "SDP184_33",
    },
    {
      slNo: "1.10",
      question:
        "Which activities does your organization undertake, and which industry sectors does your organization lend to, invest in, and/or insure?",
      guidance:
        "To interpret your disclosure, it is important that data users understand what type of financial institution your organization is and, accordingly, what financial industry activities your organization performs and/or engages in that are relevant for this disclosure. This also enables data users to make more accurate cross-organizational and cross-industry comparisons.",
      response: "SDP205_3",
    },
    {
      slNo: "1.11",
      question:
        "Are greenhouse gas emissions and/or water-related impacts from the production, processing/manufacturing, distribution activities or the consumption of your products relevant to your current CDP disclosure?",
      guidance:
        "Business activities within the ‘agricultural commodities’, ‘food, beverage and tobacco’, and ‘paper and forestry’ sectors are directly related to greenhouse gas emissions and water usage. Disclosing the activities that these organizations engage in - whether in direct operations or in other parts of the value chain - provides data users with the contextual information necessary to understand and evaluate how they assess and manage climate and water-related dependencies, impacts, risks, and opportunities. This also enables data users to make more accurate cross-organizational and cross-industry comparisons.",
      response: "SDP205_4",
    },
    {
      slNo: "1.12",
      question:
        "Which part of the concrete value chain does your organization operate in?",
      guidance:
        "CDP aims to deliver a more focused questionnaire for organizations that operate in the concrete value chain. Answers given here allow investors and data users to more accurately compare responses across organizations and industries.",
      response: "SDP205_5",
    },
    {
      slNo: "1.13",
      question:
        "In which part of the coal value chain does your organization operate?",
      guidance:
        "Business activities within the coal sector are directly related to greenhouse gas emissions and water usage. Disclosing the activities that these organizations engage in provides data users with the contextual information necessary to understand and evaluate how they assess and manage climate and water-related dependencies, impacts, risks, and opportunities. This also enables data users to make more accurate cross-organizational and cross-industry comparisons.",
      response: "SDP205_6",
    },
    {
      slNo: "1.14",
      question:
        "In which part of the chemicals value chain does your organization operate?",
      guidance:
        "Business activities within the chemicals sector are directly related to greenhouse gas emissions and water usage. Disclosing the activities that these organizations engage in provides data users with the contextual information necessary to understand and evaluate how they assess and manage climate and water-related dependencies, impacts, risks, and opportunities. This also enables data users to make more accurate cross-organizational and cross-industry comparisons.",
      response: "SDP205_7",
    },
    {
      slNo: "1.15",
      question:
        "Which real estate and/or construction activities does your organization engage in?",
      guidance:
        "Information about the activities your organization engages in helps data users to contextualize and interpret your responses. Disclosures made in this question will drive the subsequent questions.",
      response: "SDP205_8",
    },
    {
      slNo: "1.16",
      question:
        "In which part of the electric utilities value chain does your organization operate?",
      guidance:
        "Business activities within the electric utilities sector are directly related to greenhouse gas emissions and water usage. Disclosing the activities that these organizations engage in provides data users with the contextual information necessary to understand and evaluate how they assess and manage climate- and water-related dependencies, impacts, risks, and opportunities. This also enables data users to make more accurate cross-organizational and cross-industry comparisons.",
      response: "SDP205_9",
    },
    {
      slNo: "1.16.1",
      question:
        "For your electricity generation activities, provide details of your nameplate capacity and electricity generation specifics for each technology employed.",
      guidance:
        "Each power generation source is associated with specific dependencies, impacts, risks, and opportunities, requiring tailored management procedures and future planning. For example, hydropower will use and impact water resources in a different way to biomass power generation plants. Asking organizations to disclose their power generation sources provides data users with the contextual information necessary to understand and evaluate how they assess and manage climate- and water-related dependencies, impacts, risks, and opportunities. This also enables data users to make more accurate cross-organizational and cross-industry comparisons.",
      response: "SDP205_10",
    },
    {
      slNo: "1.17",
      question:
        "In which part of the metals and mining value chain does your organization operate?",
      guidance:
        "Business activities within the metals and mining sector are directly related to greenhouse gas emissions and water usage. Disclosing the activities that these organizations engage in provides data users with the contextual information necessary to understand and evaluate how they assess and manage climate- and water-related dependencies, impacts, risks, and opportunities. This also enables data users to make more accurate cross-organizational and cross-industry comparisons.",
      response: "SDP205_11",
    },
    {
      slNo: "1.18",
      question:
        "Provide details on the mining projects covered by this disclosure, by specifying your project(s) type, location and mining method(s) used.",
      guidance:
        "Given the context-specific nature of biodiversity risks, and that responses to those risks might differ across mining projects, asset-level data is valuable information for decision-making and risk management. It allows investors and other data users to put your disclosure into perspective, providing a better understanding of impacts, risks, and opportunities.",
      response: "SDP205_12",
    },
    {
      slNo: "1.19",
      question:
        "In which part of the oil and gas value chain does your organization operate?",
      guidance:
        "Business activities within the oil and gas sector are directly related to greenhouse gas emissions and water usage. Disclosing the activities that these organizations engage in provides data users with the contextual information necessary to understand and evaluate how they assess and manage climate- and water-related dependencies, impacts, risks, and opportunities. This also enables data users to make more accurate cross-organizational and cross-industry comparisons.",
      response: "SDP205_13",
    },
    {
      slNo: "1.20",
      question:
        "Which parts of the steel value chain does your organization operate in?",
      guidance:
        "CDP aims to deliver a more focused questionnaire for organizations that operate in the steel value chain. Based on your response to this question, you will receive questions that are most relevant to your organization, which should simplify the process of reporting. Answers given here allow investors and data users to more accurately compare responses across organizations and industries.",
      response: "SDP205_14",
    },
    {
      slNo: "1.21",
      question: "For which transport modes will you be providing data?",
      guidance:
        "CDP aims to deliver a more focused questionnaire for organizations that operate in the transport value chain, including original equipment, vehicle parts and engine manufacturers, and service operators. By selecting the response options CDP provides and data users will be able to identify more specifically which transport modes are relevant to your organization.",
      response: "SDP205_15",
    },
    {
      slNo: "1.22",
      question:
        "Provide details on the commodities that you produce and/or source.",
      guidance:
        "This question indicates your organization’s dependence on commodities by establishing and contextualizing the total volumes that you produced and/or sourced in the reporting period. Reporting this information provides context to data users on how relevant the commodities are to your organization. Organizations benefit from disclosing this information by increasing awareness of their own dependency on commodities and promoting transparency of their business activities, which are important steps towards deforestation- and conversion-free value chains.",
      response: "SDP205_16",
    },
    {
      slNo: "1.23",
      question:
        "Which of the following agricultural commodities that your organization produces and/or sources are the most significant to your business by revenue?",
      guidance:
        "This question enables data users to understand how reliant your business is on produced or sourced agricultural commodities that: • are highly dependent on natural capital and its associated ecosystem services that are under risk due to climate change; • are closely associated with high CO2e emissions, either from their production/exploitation or from processing/manufacturing/distribution activities; and/or • require relatively large quantities of water. This information signals your organization’s exposure to risk where these commodities are not produced sustainably or managed carefully.",
      response: "SDP205_17",
    },
    {
      slNo: "1.24",
      question: "Has your organization mapped its value chain?",
      guidance:
        "This question allows data users to understand the extent to which your organization has visibility into different parts of its value chain, to facilitate activities such as effective risk management, traceability, and supplier engagement. Additionally, responses to this question will help data users interpret the supplier coverage reported across the rest of your responses regarding action in your value chain.",
      response: "SDP205_18",
    },
    {
      slNo: "1.24.1",
      question:
        "Have you mapped where in your direct operations or elsewhere in your value chain plastics are produced, commercialized, used, and/or disposed of?",
      guidance:
        "Mapping plastics in the value chain is the first step for organizations to increase awareness of how plastics are produced, commercialized, used, and disposed of. This allows organizations to understand their plastics-related impacts on the environment and society, their exposure to plastics-related business risks, and how to reduce plastic waste and pollution. Information on plastics mapping gives data users confidence in the accuracy and thoroughness of information reported on plastics impacts, risks, targets, and other metrics.",
      response: "SDP205_19",
    },
    {
      slNo: "1.24.2",
      markedRed: true,
      question:
        "Which commodities has your organization mapped in your upstream value chain (i.e., supply chain)?",
      guidance:
        "Organizations must have knowledge of the stakeholders in their upstream value chain (i.e., supply chain/portfolio activities) to effectively identify, assess, and manage their environmental dependencies, impacts, risks, and opportunities related to their sourced commodity volumes. Mapping your upstream value chain is complementary to other key activities such as risk management, traceability, and supplier engagement. Responses to this question will help data users interpret the supplier coverage across the rest of your responses regarding action in your value chain.",
      response: "SDP205_20",
    },
  ];

  const tableDataModuleTwo = [
    {
      slNo: "2.2",
      question:
        "Does your organization have a process for identifying, assessing, and managing environmental dependencies and/or impacts?",
      guidance:
        "Dependencies and impacts on the environment can result in changes to the capacity of nature to provide social and economic functions. Additionally, it is essential to identify, assess, and manage dependencies and impacts on the environment in order to assess effectively the risks and opportunities of an organization. This question allows data users to gauge the organization’s awareness of its own environmental dependencies and impacts.",
      response: "SDP122_20",
    },
    {
      slNo: "2.2.1",
      question:
        "Does your organization have a process for identifying, assessing, and managing environmental risks and/or opportunities?",
      guidance:
        "For many organizations, environmental issues pose significant challenges, now and in the future. This question establishes whether the organization has a process for identifying, assessing, and managing environmental issues so that data users may gauge the organization’s awareness of its own environmental risks and opportunities.",
      response: "SDP87_4",
    },
    {
      slNo: "2.2.2",
      markedRed: true,
      question:
        "If you have provided yes to the previous question please respond to this question: Provide details of your organization’s process for identifying, assessing, and managing environmental dependencies, impacts, risks, and/or opportunities.",
      guidance:
        "Organizations that have established a comprehensive, recurring procedure to identify, assess, and manage environmental dependencies, impacts, risks, and opportunities across their value chain and over a range of time-horizons will be better equipped to handle longer-term uncertainties and liabilities, as well as capitalize on opportunities. This question indicates to data users how robust an organization’s assessment process is.",
      response: "SDP122_21",
    },
    {
      slNo: "2.2.3",
      markedRed: true,
      question:
        "If you have provided yes to the previous question please respond to this question: Provide mining-specific details of your organization’s process for identifying, assessing, and managing biodiversity impacts.",
      guidance:
        "Assessing biodiversity impacts before the development of a mining project as part of an Environmental Impact Assessment (EIA) improves decision making and resource allocation, as well as helping to avoid costs associated with unforeseen issues. Indicating how your prior projects have gone through such assessment before project development stage provides evidence to data users that biodiversity impacts have been considered before implementation of the project.",
      response: "SDP122_22",
    },
    {
      slNo: "2.2.4",
      question:
        "Does your organization have a process for identifying, assessing, and managing environmental dependencies and/or impacts related to your portfolio activities?",
      guidance:
        "Dependencies and impacts on the environment can result in changes to the capacity of nature to provide social and economic functions. Additionally, it is essential for financial institutions to identify, assess, and manage dependencies and impacts on the environment in order to assess effectively the risks and opportunities related to their various portfolio activities. This question allows data users to gauge the organization’s awareness of its own environmental dependencies and impacts.",
      response: "SDP122_23",
    },
    {
      slNo: "2.2.5",
      question:
        "Does your organization have a process for identifying, assessing, and managing environmental risks and/or opportunities related to your portfolio activities?",
      guidance:
        "For many organizations, environmental issues pose significant challenges, now and in the future. This question establishes whether the financial institution has a process for identifying, assessing, and managing environmental issues related to their various portfolio activities so that data users may gauge the organization’s awareness of its own environmental risks and opportunities.",
      response: "SDP122_24",
    },
    {
      slNo: "2.2.6",
      markedRed: true,
      question:
        "If you have provided yes to the previous question please respond to this question: Provide details of your organization’s process for identifying, assessing, and managing environmental dependencies, impacts, risks, and/or opportunities related to your portfolio activities.",
      guidance:
        "Financial institutions that have established a comprehensive, recurring procedure to identify, assess, and manage environmental dependencies, impacts, risks, and opportunities across all their portfolios and over a range of time-horizons will be better equipped to handle longer-term uncertainties and liabilities, as well as capitalize on opportunities. This question indicates to data users how robust a financial institution’s assessment process is.",
      response: "SDP122_25",
    },
    {
      slNo: "2.2.7",
      question:
        "Are the interconnections between environmental dependencies, impacts, risks and/or opportunities assessed?",
      guidance:
        "Nature-related disclosures should be integrated with other business and sustainability-related disclosures, whenever possible, to provide report users with an integrated and holistic picture of the organization’s financial position and prospects. Integration of climate- and nature-related disclosures is of particular importance. It is important that any alignment, synergies, contributions and possible trade-offs between climate and nature are clearly identified. This question demonstrates that assessing the interconnections between environmental dependencies, impacts, risks and opportunities is part of the organization’s assessment process.",
      response: "SDP122_26",
    },
    {
      slNo: "2.2.8",
      question:
        "Does your organization consider environmental information about your clients/investees as part of your due diligence and/or environmental dependencies, impacts, risks and/or opportunities assessment process?",
      guidance:
        "Considering environmental information about clients/investees in the initial phases of a financial institution’s assessment of dependencies, impacts, risks, and opportunities and/or as part of their due diligence process helps data users and the organization understand their value chain’s exposure to environmental risks and opportunities. This question helps attest to the robustness of an organization’s assessment of environmental issues to data users.",
      response: "SDP122_27",
    },
    {
      slNo: "2.2.9",
      markedRed: true,
      question:
        "If you have provided yes to the previous question please respond to this question: Indicate the environmental information your organization considers about clients/investees as part of your due diligence and/or environmental dependencies, impacts, risks and/or opportunities assessment process, and how this influences decision-making.",
      guidance:
        "Considering environmental information about clients/investees in the initial phases of a financial institutions’ assessment of dependencies, impacts, risks, and opportunities and/or as part of their due diligence process helps data users and the organization understand their value chain’s exposure to environmental risks and opportunities. Data users are interested in what information financial institutions consider, about which clients/investees, and whether that is enough to form the basis of informed lending, investment and/or insurance underwriting decisions and thus mitigate environmental risks within their portfolio.",
      response: "SDP122_28",
    },
    {
      slNo: "2.3",
      question:
        "Have you identified priority locations across your value chain?",
      guidance:
        "To effectively address nature-related issues and to ensure operational stability, organizations should prioritize their attention in or near areas with ecosystems whose current and future health and resilience are challenged. Identifying and prioritizing locations in or near areas with ecological sensitivity, as well as areas where the organization has substantive dependencies, impacts, risks, and opportunities related to nature allows the organization to focus on areas where action is needed most urgently, maximizing the potential for positive impacts.",
      response: "SDP122_29",
    },
    {
      slNo: "2.4",
      question:
        "How does your organization define substantive effects on your organization?",
      guidance:
        "Indicators and thresholds employed to define which effects on the organization are considered substantive can differ among disclosers depending on their sector, value chain, or geography. Therefore, outlining clear definitions on how organizations determine potential effects as substantive provides clarity to data users. This question increases transparency and improves clarity as to what the discloser deems to be a substantive effect on their organization.",
      response: "SDP123_54",
    },
    {
      slNo: "2.5",
      question:
        "Does your organization identify and classify potential water pollutants associated with its activities that could have a detrimental impact on water ecosystems or human health?",
      guidance:
        "Water pollutants pose a threat to the quality of surface and groundwater bodies and their dependent ecosystems. This question allows organizations to indicate that they identify and classify the potential water pollutants associated with the substances they handle and the properties of their discharges. It is important that companies identify and classify potential water pollutants linked to their business operations and products, and are able to effectively manage these.",
      response: "SDP123_55",
    },
    {
      slNo: "2.5.1",
      question:
        "Describe how your organization minimizes the adverse impacts of potential water pollutants on water ecosystems or human health associated with your activities.",
      guidance:
        "Organizations are able to describe the company-specific actions and procedures they have in place to minimize the adverse impacts associated with the water pollutants identified. This will demonstrate to data users the organization’s commitment to address these water-related risks.",
      response: "SDP123_56",
    },
    {
      slNo: "2.6",
      markedRed: true,
      question:
        "By river basin, what number of active and inactive tailings dams are within your control?",
      guidance:
        "Ensuring the best management of tailings dams is a critical water-related issue for organizations in the Metals & Mining and Coal sectors. Operational requirements and local factors such as climate or landscape determine the dams’ type and design and subsequently the risk level for this task. Active and inactive tailings dams pose different risks, therefore requiring different management procedures. These questions will demonstrate to data users that organizations understand these issues, are assessing the risks associated, and are taking action to prevent them. Disclosure on the locations and state of the tailings dams will allow data users to relate this information to other responses in the CDP questionnaire that include country/area/region and basin specific information in Module 9.",
      response: "",
    },
    {
      slNo: "2.6.1",
      markedRed: true,
      question:
        "Do you evaluate and classify the tailings dams under your control according to the consequences of their failure to human health and ecosystems?",
      guidance:
        "Evaluating potential losses or damages to human health and ecosystems, irrespective of the perceived probability of failure, provides evidence to investors and other data users that an organization has an awareness of the severe risks as well as potential liabilities associated with poor management of tailings dams. It also helps data users interpret the disclosed information on management procedures for these risks (dams). If your organization responded to the Investor Mining and Tailings Safety Initiative 2019 disclosure request, you may find it useful to draw on that submission when completing these questions.",
      response: "SDP123_57",
    },
    {
      slNo: "2.6.2",
      markedRed: true,
      question:
        "If you have provided yes to the previous question please respond to this question: Provide details for all dams classified as 'hazardous' or 'highly hazardous'.",
      guidance:
        "Providing details for 'hazardous' and 'highly hazardous' tailings dams demonstrates a commitment to transparency around the potentially devastating consequences of tailings dam failures. Despite the existence of a variety of categorization systems and guidelines for evaluating the consequences of dam failure to human health and ecosystems, there is no standardized definition of what constitutes 'Hazardous' or 'Highly hazardous' tailings dams. Disclosing the guidelines used together with the current and planned impoundment volumes will also demonstrate data users that a company is aware of the potential risks and how this exposure may change in the near future. Requesting information about the location of the dam will allow data users to relate this information to other responses in the CDP questionnaire that include country/area and basin specific information. The information requested in this question aligns with the request by the Investor Mining and Tailings Safety Initiative, Sustainability Accounting Standards Board (SASB) and Global Reporting Initiative (GRI).",
      response: "",
    },
    {
      slNo: "2.6.3",
      question: "SDP123_58",
      guidance:
        "Sound governance and precautionary procedures are needed to address the potential risks linked to these tasks. Providing information on existing procedures will demonstrate to investors and data users that organizations are dealing with the potential risks associated with the tailings dams under their control. The question provides organizations with the chance to indicate and explain their company-specific management procedures, how these procedures are set, their scope, and their efficacy",
      response: "SDP123_59",
    },
  ];

  return (
    <div style={{ minHeight: "80vh" }}>
      <TableRenderer
        id="mod-1-perf"
        title="Module 1 - Introduction"
        tableData={tableDataModuleOne}
      />

      <br />

      <TableRenderer
        id="mod-2-perf"
        title="Module 2 - Identification, assessment, and management of dependencies, impacts, risks, and opportunities"
        tableData={tableDataModuleTwo}
      />
    </div>
  );
};

export default Module_1_2_Perf;
