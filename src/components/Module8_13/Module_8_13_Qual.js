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
            style={{ border: "1px solid black", padding: "8px", width: "15%" }}
          >
            Topic
          </th>
          <th
            style={{ border: "1px solid black", padding: "8px", width: "20%" }}
          >
            Section
          </th>
          <th
            style={{ border: "1px solid black", padding: "8px", width: "8%" }}
          >
            CDP Ref No.
          </th>
          <th
            style={{ border: "1px solid black", padding: "8px", width: "27%" }}
          >
            Questions to be added in platform
          </th>
          <th
            style={{ border: "1px solid black", padding: "8px", width: "25%" }}
          >
            Guidance
          </th>
          <th
            style={{ border: "1px solid black", padding: "8px", width: "5%" }}
          >
            Code
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {item.topic}
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {item.section}
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {item.refNo}
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
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {item.guidance}
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {item.code}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Module_8_13_Qual = () => {
  const tableDataModuleEight = [
    {
      topic: "Forest Stewardship",
      section: "Supply Chain and Disclosure Exclusions related to forests",
      refNo: "8.1",
      question:
        "Are there any exclusions from your disclosure of forests-related data? What is the specific commodity exclusion from disclosure, and what is the rationale behind it?",
      guidance:
        "CDP seeks to share comprehensive and representative data to ensure data users’ confidence in the information reported. As such, if organizations need to exclude parts of their direct operations and/or upstream value chain from their disclosure of forests-related data, data users must be informed of the exclusions as this may affect their analysis.",
      code: "SDP235_1",
    },
    {
      topic: "Forest Stewardship",
      section: "Supply Chain and Disclosure Exclusions related to forests",
      refNo: "8.1.1",
      question:
        "Provide details on these exclusions. For the excluded commodity, what is the description of the exclusion, its value chain stage, and the reason for its exclusion, including the primary reason for data unavailability; if the exclusion is due to a recent merger or acquisition, what is the completion date, and is the volume of excluded commodity (in metric tons) being indicated?",
      guidance:
        "An organization’s disclosure must be comprehensive and representative to ensure data users’ confidence in the information reported. As such, organizations are encouraged to report on all exclusions of forests-related data from their direct operations and/or upstream value chain. This question helps data users contextualize responses to subsequent commodity-related questions.",
      code: "SDP235_2",
    },
    {
      topic: "Forest Stewardship",
      section: "Supply Chain and Disclosure Exclusions related to forests",
      refNo: "8.2.1",
      question:
        "Provide details on any soy embedded in animal products sourced by your organization. What is the commodity? What is the disclosure of embedded soy? What is the description of embedded soy use and soy tiers? What is the volume calculation methodology? What is the embedded soy disclosure volume (metric tons)? What is the percentage of sourced volume that is embedded soy?",
      guidance:
        "Global population growth is increasing the demand for animal products and consequently, increasing the demand for soy used to feed animals. This growth in soy production is linked to deforestation and conversion of natural ecosystems and usually goes unaccounted for, as it is “embedded” or “hidden” in organizations’ value chains. To address this, organizations who source animal products should: improve their awareness of their embedded soy exposure across the breadth of their product sourcing; work towards better visibility of their embedded soy origins; and assess their deforestation-free (DF) or deforestation- and conversion-free (DCF) status of their embedded soy volume. This question provides investors and other data users transparency on an organization's embedded soy use, in terms of its associated volume calculation, traceability, and DCF status.",
      code: "SDP235_3",
    },
    {
      topic: "Forest Stewardship",
      section: "Supply Chain and Disclosure Exclusions related to forests",
      refNo: "8.3",
      question:
        "Provide details on the land you own, manage and/or control that is used to produce your disclosed commodities. For each commodity, provide: type of control, country/area, first-level administrative division, specific states/jurisdictions, land type, area (ha), ability to report volume from owned/managed/controlled land, actual volume (metric tons), % area certified, certification scheme, and list of production facility names/locations (optional).",
      guidance:
        "This question gathers information on the land that you own, manage and/or control that is used to produce your disclosed commodities. The data disclosed provides an indication of your market power and potential influence over land use in different regions including eventual links to deforestation and the conversion of natural ecosystems. It is important to demonstrate to investors and other stakeholders that your organization has a good understanding of the land it owns, manages, or controls.",
      code: "SDP235_4",
    },
    {
      topic: "Forest Stewardship",
      section: "Supply Chain and Disclosure Exclusions related to forests",
      refNo: "8.4",
      question:
        "Indicate if any of the land you own, manage and/or control was not used to produce your disclosed commodities in the reporting year.",
      guidance:
        "This question gathers information on if any of the land you own, manage and/or control was not used for the production of your disclosed commodities in the reporting year. The disclosure of land holdings is critical for understanding current and future risks and opportunities related to deforestation and conversion of other natural ecosystems.",
      code: "SDP235_5",
    },
    {
      topic: "Forest Stewardship",
      section: "Supply Chain and Disclosure Exclusions related to forests",
      refNo: "8.4.1",
      question:
        "Provide details of the sources of Scope 1, Scope 2, or Scope 3 emissions that are within your selected reporting boundary which are not included in your disclosure. For each country/area, what is the type of control, land type, area in hectares, percentage covered by natural forests and other natural ecosystems, and please explain?",
      guidance:
        "Organizations should be able to identify the land it owns, manages and/or controls which is not currently used to produce commodities, but may or may not be in the future. By disclosing this data, you provide investors and other data users insights on land stewardship in addition to potential challenges your organization may face in expanding production areas.",
      code: "SDP235_6",
    },
    {
      topic: "Forest Stewardship",
      section: "Supply Chain and Disclosure Exclusions related to forests",
      refNo: "8.5",
      question:
        "Provide details on the origins of your sourced volumes. What is the commodity, country/area of origin, first-level administrative division, specified states or equivalent jurisdictions, source, list of supplier production and primary processing sites (names and locations, optional), and explanation?",
      guidance:
        "This question provides data users with more clarity about your organization’s exposure to deforestation and conversion risks. This question will benefit disclosers through increased transparency and improved ability to identify risks to their business.",
      code: "SDP235_7",
    },
    {
      topic: "Forest Stewardship",
      section: "Supply Chain and Disclosure Exclusions related to forests",
      refNo: "8.6",
      question:
        "Does your organization produce or source palm oil derived biofuel?",
      guidance:
        "This question allows data users to understand the relevancy of palm oil derived biofuels to your organization.",
      code: "SDP235_8",
    },
    {
      topic: "Forest Stewardship",
      section: "Supply Chain and Disclosure Exclusions related to forests",
      refNo: "8.6.1",
      question:
        "Provide details of how your organization produces or sources palm oil derived biofuel. What is the volume type, palm oil–derived biofuel volume, metric, country/area of origin, first-level administrative division, percentage of disclosure volume, whether the biofuel material is sourced from smallholders, and any additional comments?",
      guidance:
        "This question provides investors and data users transparency on organization’s palm oil derived biofuel in terms of its associated volume and its origin.",
      code: "SDP235_9",
    },
    {
      topic: "Forest Stewardship",
      section: "Supply Chain and Disclosure Exclusions related to forests",
      refNo: "8.7",
      question:
        "Did your organization have a no-deforestation or no-conversion target, or any other targets for sustainable production/ sourcing of your disclosed commodities, active in the reporting year? What is the commodity, do you have an active no-deforestation or no-conversion target, what is the coverage of this target, what is the primary reason for not having an active no-deforestation or no-conversion target in the reporting year, why did you not have an active no-deforestation or no-conversion target in the reporting year, what other active targets related to this commodity exist including those contributing to your no-deforestation or no-conversion target, what is the primary reason for not having other active targets in the reporting year, and why did you not have other active targets in the reporting year?",
      guidance:
        "This question establishes whether organizations have targets for eliminating deforestation and conversion of other natural ecosystems in their value chain. Setting specific targets with clear progress indicators enables organizations to effectively implement their commitments, policies, and goals.",
      code: "SDP235_10 and SDP235_11",
    },
    {
      topic: "Forest Stewardship",
      section: "Targets and assessments related to forests",
      refNo: "8.7.1",
      question:
        "Provide details on your no-deforestation or no-conversion target that was active during the reporting year. What is the commodity? Does your organization have a no-deforestation or no-conversion target? What is your definition of “no deforestation” or “no conversion”? What is the cutoff date? What is the geographic scope of the cutoff date? What is the rationale for selecting the cutoff date? What is the target date for achieving no deforestation or no conversion?",
      guidance:
        "This question establishes how ambitious an organization’s no-conversion or no-deforestation targets are. Information disclosed about your targets provides data users with a way of tracking progress towards a sustainable value chain. Ambitious targets reflect how urgent issues related to deforestation and conversion of other natural ecosystems are being addressed by organizations.",
      code: "SDP236_01",
    },
    {
      topic: "Forest Stewardship",
      section: "Targets and assessments related to forests",
      refNo: "8.7.2",
      question:
        "Provide details of other targets related to your commodities, including any which contribute to your no-deforestation or no-conversion target, and progress made against them. What is the commodity, the target reference number, does the target contribute to a no deforestation or no-conversion target reported in 8.7, what is the target coverage, what is the commodity volume covered by the target (in metric tons), what is the category of target and quantitative metric, what is the traceability point, what is the third-party certification scheme, when was the target set, what is the end date of the base year, what is the base year figure, what is the end date of the target, and what is the target year figure?",
      guidance:
        "This question captures details on targets organizations have in place to implement their overall no-deforestation or no-conversion targets, or to improve the sustainability of commodity production and sourcing. Providing details on metrics and progress against targets helps data users understand whether organizations have relevant targets to address the dependencies, impacts, risks, and opportunities in their value chain.",
      code: "SDP236_02",
    },
    {
      topic: "Forest Stewardship",
      section: "Targets and assessments related to forests",
      refNo: "8.8",
      question:
        "Indicate if your organization has a traceability system to determine the origins of your sourced volumes and provide details of the methods and tools used. What is the commodity, what traceability system does your organization have, what methods/tools are used in this system, how are these methods/tools described, what is the primary reason for not having a traceability system, and why does your organization not have one?",
      guidance:
        "Organizations should know or control the origins of their sourced commodities to eliminate deforestation and conversion of other natural ecosystems in their value chain. Robust traceability systems allow organizations to ascertain that the production and processing units of commodity origins are free from deforestation and conversion. This information helps investors and other data users assess whether organizations have the necessary traceability systems to determine the compliance of sourced volumes with their no-deforestation and no-conversion policies, targets, and goals, and the methodologies and tools involved.",
      code: "SDP236_03",
    },
    {
      topic: "Forest Stewardship",
      section: "Targets and assessments related to forests",
      refNo: "8.8.1",
      question:
        "Provide details of the point to which your organization can trace its sourced volumes. What is the commodity, % of sourced volume traceable to production unit, % traceable to sourcing area (not production unit), % traceable to country/area of origin (not sourcing area or production unit), % traceable to other point (processing facility/first importer) not in country/area of origin, % from unknown origin, proportion of reported emissions verified (%), and % of sourced volume reported (auto calculated)?",
      guidance:
        "Organizations must understand and disclose the traceability levels of their sourced volumes to demonstrate their ability to assess compliance with no-deforestation and no-conversion policies, targets, and goals. This question helps investors and other data users understand the extent to which organizations know the origin of their commodities, and therefore their ability to determine deforestation- and conversion-free (DCF) status and identify their dependencies, impacts, risks, and opportunities.",
      code: "SDP236_04",
    },
    {
      topic: "Forest Stewardship",
      section: "Targets and assessments related to forests",
      refNo: "8.9",
      question:
        "Provide details of your organization's assessment of the deforestation-free (DF) or deforestation- and conversion-free (DCF) status of its disclosed commodities. What is the commodity? Has DF/DCF status been assessed for this commodity? What percentage of disclosure volume in the reporting year is determined as DF/DCF? What percentage is determined as DF/DCF through a third-party certification scheme providing full DF/DCF assurance? What percentage is determined as DF/DCF through monitoring of production unit? What percentage is determined as DF/DCF through monitoring of sourcing area? Is any proportion of your disclosure volume certified through a scheme not providing full DF/DCF assurance? What is the primary reason for not assessing DF/DCF status? Please explain why you have not assessed DF/DCF status.",
      guidance:
        "Organizations should disclose the proportion of volumes in their direct operations and upstream value chain assessed and determined to be DF or DCF. The DF designation signifies that the production and sourcing of commodity volumes did not cause or contribute to deforestation since a specified cutoff date, while the DCF designation signifies that the production and sourcing of commodity volumes did not cause or contribute to deforestation and the conversion of other natural ecosystems since a specified cutoff date. This question helps data users understand organizations’ performance and progress towards DCF and the methods used to ascertain DF/DCF status.",
      code: "SDP236_05",
    },
    {
      topic: "Forest Stewardship",
      section: "Targets and assessments related to forests",
      refNo: "8.9.1",
      question:
        "Provide details of third-party certification schemes used to determine the deforestation-free (DF) or deforestation- and conversion-free (DCF) status of the disclosure volume, since specified cutoff date. What is the commodity, which third-party certification scheme provides full DF/DCF assurance, what percentage of disclosure volume is determined as DF/DCF through this certification scheme, what is the comment, and what certification documentation is available?",
      guidance:
        "This question gathers information on the proportion of your disclosure volume determined to be DF or DCF using a third-party certification scheme providing full assurance of DF/DCF. Credible third-party certification is one method organizations can use to determine that no deforestation or conversion has occurred since a specified cutoff date and assure investors and other data users that their commodity volumes are DF/DCF.",
      code: "SDP236_06",
    },
    {
      topic: "Forest Stewardship",
      section: "Targets and assessments related to forests",
      refNo: "8.9.2",
      question:
        "Provide details of third-party certification schemes not providing full DF/DCF assurance. What is the commodity, which third-party certification scheme provides full DF/DCF assurance, what percentage of disclosure volume is determined as DF/DCF through this certification scheme, what is the comment, and what certification documentation is available?",
      guidance:
        "This question gathers information on the proportion of your disclosure volume certified through third-party certification schemes that do not provide full DF or DCF assurance, used in combination with additional control methods to determine the DF/DCF status.",
      code: "SDP236_07",
    },
    {
      topic: "Forest Stewardship",
      section: "Targets and assessments related to forests",
      refNo: "8.9.3",
      question:
        "Provide details of production unit monitoring used to determine deforestation-free (DF) or deforestation- and conversion-free (DCF) status of volumes since specified cutoff date. What is the commodity, what percentage of disclosure volume is determined as DF/DCF through monitoring of the production unit, what is the production unit monitoring approach, what is the description of the production unit monitoring approach, is the DF/DCF status verified, what is the type of verification, what percentage of your disclosure volume is both determined as DF/DCF through monitoring of the production unit and verified as DF/DCF, what is the process of verifying DF/DCF status, and is there an attachment of verification?",
      guidance:
        "This question gathers information on the proportion of the disclosure volume that has been determined to be DF or DCF via monitoring of the production unit for deforestation and conversion. Regular monitoring of the production unit is one method organizations can use to determine that no deforestation or conversion has occurred since a specified cutoff date and assure investors and other data users that their commodity volumes are DF/DCF.",
      code: "SDP236_08",
    },
    {
      topic: "Forest Stewardship",
      section: "Targets and assessments related to forests",
      refNo: "8.9.4",
      question:
        "Provide details of the sourcing area monitoring used to determine deforestation-free (DF) or deforestation- and conversion-free (DCF) status of volumes since specified cutoff date.",
      guidance:
        "Commodity volumes can be claimed to be DF or DCF if they originate in sourcing areas where there is no or negligible risk that deforestation and/or conversion has occurred related to that commodity since an appropriate cutoff date. Determining this risk requires ongoing monitoring of the sourcing area. This question helps data users understand whether your organization is making DF/DCF claims based on sourcing area-level risk assessment, and how your organization is monitoring those sourcing areas to ensure the absence of deforestation or conversion risk.",
      code: "SDP236_09",
    },
    {
      topic: "Forest Stewardship",
      section: "Targets and assessments related to forests",
      refNo: "8.10",
      question:
        "Indicate whether you have monitored or estimated the deforestation and conversion of other natural ecosystems footprint for your disclosed commodities. For each commodity, are you monitoring or estimating your deforestation and conversion footprint, what is the primary reason for not doing so, and (optional) can you explain why you do not monitor or estimate it?",
      guidance:
        "Monitoring and estimating the deforestation and conversion footprint associated with commodity production or sourcing is key to understanding the scale of your impacts.",
      code: "SDP236_10",
    },
    {
      topic: "Forest Stewardship",
      section: "Targets and assessments related to forests",
      refNo: "8.11",
      question:
        "For volumes not assessed and determined as deforestation- and conversion-free (DCF), indicate if you have taken actions in the reporting year to increase production or sourcing of DCF volumes.",
      guidance:
        "This question allows organizations to disclose actions taken in the reporting year related to volumes that are not yet assessed and determined as DCF. Achieving deforestation- and conversion-free value chains may take longer for organizations engaging in transformative actions across sourcing landscapes. This question allows data users to understand the actions your organization is taking to address environmental or social issues related to commodity production/sourcing and if and how these actions contribute to determining the DCF status of commodity volumes or remediate past conversion.",
      code: "SDP236_11",
    },
    {
      topic: "Forest Stewardship",
      section: "Targets and assessments related to forests",
      refNo: "8.11.1",
      question:
        "Provide details of actions taken in the reporting year to assess and increase production/sourcing of deforestation- and conversion-free (DCF) volumes. For each commodity, what is the action type, the percentage of disclosure volume covered by this action, whether you had any major barriers or challenges related to this action in the reporting year, the main measures identified to manage or resolve the challenges, and further details on the actions taken, their contribution to achieving DCF status, and any related barriers or challenges?",
      guidance:
        "Organizational approaches to achieving DCF status should support efforts to halt deforestation and conversion on the ground by working with non-compliant suppliers, ensuring smallholder inclusion, and working collaboratively in production landscapes. Achieving deforestation- and conversion-free value chains may take longer for organisations engaging in transformative actions across sourcing landscapes. This question allows data users to understand whether your organization is taking action to address environmental or social issues related to commodity production/sourcing and if and how these actions contribute to determining the DCF status of commodity volumes.",
      code: "SDP236_12",
    },
    {
      topic: "Forest Stewardship",
      section: "Targets and assessments related to forests",
      refNo: "8.12",
      question:
        "Indicate if certification details are available for the commodity volumes sold to requesting CDP Supply Chain members.",
      guidance:
        "This information will provide clarity to CDP Supply Chain members on whether data is available for the percentage of the total commodity volume bought from your organization that is certified by a third party. This meets the transparency expectations from requesting members and allows organizations to disclose their progress on securing a supply of sustainable raw materials and/or products. Additionally, this question allows CDP Supply Chain members to understand the primary reasons for not disclosing certification details for the volumes sold by your organization. This provides insight into the main challenges in this area and informs members on plans to address these challenges.",
      code: "SDP236_13",
    },
    {
      topic: "Forest Stewardship",
      section: "Targets and assessments related to forests",
      refNo: "8.12.1",
      question:
        "Provide details of the certified volumes sold to each requesting CDP Supply Chain member.",
      guidance:
        "This question gathers details on the percentage of the total commodity volume bought from your organization that is certified by a third party, the certification schemes used and forms of commodities that are certified.",
      code: "SDP236_14",
    },
    {
      topic: "Forest Stewardship",
      section: "Targets and assessments related to forests",
      refNo: "8.13",
      question:
        "Does your organization calculate the GHG emission reductions and/or removals from land use management and land use change that have occurred in your direct operations and/or upstream value chain? What is the commodity, are GHG emissions reductions and removals from land use management and land use change calculated, what is the primary reason your organization does not calculate them, and why does your organization not calculate GHG emissions reductions and removals from land use management and land use change?",
      guidance:
        "Understanding the GHG emissions reductions/removals from land use management and land use change can inform mitigation strategies. This question enables requesting CDP Supply Chain members to understand progress towards emissions reduction targets and it allows organizations to assess progress with regards to reducing emissions beyond business-as-usual scenarios (beyond standard maintenance/ replacement activities).",
      code: "SDP236_15",
    },
    {
      topic: "Collaboration and Projects",
      section: "Collaboration and Projects",
      refNo: "8.13.1",
      question:
        "Provide details on the actions your organization has taken in its direct operations and/or upstream value chain that have resulted in reduced GHG emissions and/or enhanced removals.",
      guidance:
        "Understanding the GHG emissions/removals from land use management and land use change can inform mitigation strategies. This question enables CDP supply chain requesting members to understand progress towards emissions targets and it allows organizations to assess progress with regards to reducing emissions beyond business-as-usual scenarios (beyond standard maintenance/replacement activities).",
      code: "SDP237_01",
    },
    {
      topic: "Collaboration and Projects",
      section: "Collaboration and Projects",
      refNo: "8.14",
      question:
        "Indicate if you assess your own compliance and/or the compliance of your suppliers with forest regulations and/or mandatory standards, and provide details.",
      guidance:
        "This question gathers data on how your organization assessed compliance with forest laws and regulations in its direct operations and the rest of its value chain within the reporting year. Assessment of applicable laws is an important aspect of social and environmental due diligence, and good practice that promotes legal compliance in the countries/areas of origin of commodities, including when acquiring lands and resources. For those organizations with operations in Brazil, compliance with the Brazilian Forest Code indicates that organizations are working to ensure their production in Brazil is compliant with national legislation.",
      code: "SDP237_02",
    },
    {
      topic: "Collaboration and Projects",
      section: "Collaboration and Projects",
      refNo: "8.15",
      question:
        "Do you engage in landscape (including jurisdictional) initiatives to progress shared sustainable land use goals? What is your organization’s engagement in landscape/jurisdictional initiatives, the primary reason for not engaging, and the explanation for non-engagement?",
      guidance:
        "A growing number of organizations, as well as platforms such as the Consumer Goods Forum and the Soft Commodities Forum, are incorporating landscape and jurisdictional approaches and initiatives as a part of corporate sustainability strategies. Working collaboratively with multiple actors at landscape and jurisdictional scale is increasingly accepted as a best practice approach to driving conservation and restoration impacts at scale, tackling deforestation and conversion commitments through a value chain and achieving sustainability goals, especially where there are systemic challenges in production landscapes. This question helps data users to understand which organizations are taking this approach and engaging in such landscape and jurisdictional initiatives.",
      code: "SDP237_03",
    },
    {
      topic: "Collaboration and Projects",
      section: "Collaboration and Projects",
      refNo: "8.15.1",
      question:
        "Indicate the criteria you consider when prioritizing landscapes and jurisdictions for engagement in collaborative approaches to sustainable land use and provide an explanation.",
      guidance:
        "To effectively address deforestation, achieve sustainability targets, and to secure supply chain operations, organizations need to actively engage in the landscapes/jurisdictions they depend on. They will likely have key knowledge and expertise to share with existing initiatives and be able to progress shared goals effectively. Investors and other data users are interested in knowing how organizations identify collaborations that maximize value and positive impact. Prioritizing a landscape should go beyond a country/area level analysis to the regions within a value chain that pose the highest risk from deforestation and conversion. It will also identify landscapes that present opportunities for collaboration, such as governmental commitments and the presence of existing initiatives, including for production, conservation, and restoration activities. This requires an understanding of the overlay between footprint and risk/opportunity within these production landscapes. It is critical that organizations establish a definition for the priority landscapes within their sourcing footprint, and a set of criteria for choosing which landscape to engage in – such as a risk of non-compliance with sourcing policies or the presence of conditions that foster meaningful engagement. This ensures that the engagement and type of intervention integrates with the organization’s sustainability strategy and risk assessment approach. Prioritizing action is important to maximize the potential impact of the engagement. It is important to consider enabling conditions both in the landscape/jurisdiction and in the organization.",
      code: "SDP237_04",
    },
    {
      topic: "Collaboration and Projects",
      section: "Collaboration and Projects",
      refNo: "8.15.2",
      question:
        "Provide details of your engagement with landscape/jurisdictional initiatives to sustainable land use during the reporting year.",
      guidance:
        "This question allows data users to understand: the landscape/jurisdictional initiatives you engage with, the nature of the engagement, the sustainability goals supported by your organization’s activities, the investment, and how progress is monitored. Working collaboratively with multiple actors at a landscape and jurisdictional scale is increasingly accepted as a best practice approach to driving conservation and restoration results at scale, transitioning towards deforestation and conversion free production and achieving sustainability goals, especially where there are systemic challenges in production landscapes. Responses will provide valuable insights into good practice for corporate involvement in landscape and jurisdictional initiatives.",
      code: "SDP237_05",
    },
    {
      topic: "Collaboration and Projects",
      section: "Collaboration and Projects",
      refNo: "8.15.3",
      question:
        "For each of your disclosed commodities, provide details on the disclosure volume from each of the landscapes/jurisdictions you engage in. Landscape/jurisdiction ID? Does any of your produced and/or sourced commodity volume originate from this landscape/jurisdiction, and are you able/willing to disclose information on this volume? Commodity? % of disclosure volume from this landscape/jurisdiction?",
      guidance:
        "Disclosing your produced or sourced volumes from each landscape/jurisdiction demonstrates whether collaborative engagement contributes to your own strategy for increasing sustainable production/sourcing. It also helps data users to understand how your engagement in landscape/jurisdictional initiatives relate to your sourcing of commodities.",
      code: "SDP237_06",
    },
    {
      topic: "Collaboration and Projects",
      section: "Collaboration and Projects",
      refNo: "8.16",
      question:
        "Do you participate in any other external activities to support the implementation of policies and commitments related to deforestation, ecosystem conversion, or human rights issues in commodity value chains?",
      guidance:
        "Beyond landscape and jurisdictional approaches, involvement in other external activities brings together actors in a sector to establish shared objectives, develop plans, and take action to overcome challenges that can help the organization improve its production/sourcing practices and address broader issues in sectors or production landscapes. There may also be opportunities for driving innovation in the market and finding solutions to the challenges associated with the production and sourcing of sustainable raw materials.",
      code: "SDP237_07",
    },
    {
      topic: "Collaboration and Projects",
      section: "Collaboration and Projects",
      refNo: "8.16.1",
      question:
        "Provide details of the external activities to support the implementation of your policies and commitments related to deforestation, ecosystem conversion, or human rights issues in commodity value chains.",
      guidance:
        "Beyond landscape and jurisdictional approaches, involvement in other external activities brings together actors in a sector to establish shared objectives, develop plans, and take action to overcome challenges that can help the organization improve its production/sourcing practices and address broader issues in sectors or production landscapes. There may also be opportunities for driving innovation in the market and finding solutions to the challenges associated with the production and sourcing of sustainable raw materials.",
      code: "SDP237_08",
    },
    {
      topic: "Collaboration and Projects",
      section: "Collaboration and Projects",
      refNo: "8.17",
      question:
        "Is your organization supporting or implementing project(s) focused on ecosystem restoration and long-term protection?",
      guidance:
        "This question gathers data on the projects your organization has supported or implemented, or plan to implement in two years, that are related to ecosystem restoration, reforestation and/or protection of forests and other ecosystems. This information demonstrates to investors and other data users that your organization is committed and proactive towards forests stewardship.",
      code: "SDP237_09",
    },
    {
      topic: "Collaboration and Projects",
      section: "Collaboration and Projects",
      refNo: "8.17.1",
      question:
        "Provide details on your project(s), including the extent, duration, and monitoring frequency. Please specify any measured outcome(s). What is the project reference? What is the project type? What are the expected benefits of the project? Is this project originating any carbon credits? What is the description of the project? Where is the project taking place in relation to your value chain? What is the start year? What is the target year? What is the project area to date (in hectares)? What is the project area in the target year (in hectares)? Which country or area is it located in? What is the latitude? What is the longitude? What is the monitoring frequency? What is the total investment over the project period (in currency)? For which of your expected benefits are you monitoring progress? Please explain.",
      guidance:
        "This question gathers data on the projects your organization has supported or implemented, that are related to ecosystem restoration, reforestation and/or conservation of forests and other ecosystems. This information demonstrates to CDP’s investors and other data users that your organization is strongly committed and proactive towards sustainable forests stewardship.",
      code: "SDP237_10",
    },
  ];

  const tableDataModuleNine = [
    {
      topic: "Management of water related issues",
      section: "Policy and commitment",
      refNo: "9.1",
      question:
        "Are there any exclusions from your disclosure of water-related data?",
      guidance:
        "CDP seeks to share comprehensive and representative water data. If organizations do need to exclude areas of their business from their disclosure, data users must be informed of the exclusions as this may affect their analysis.",
      code: "SDP87_23",
    },
    {
      topic: "Management of water related issues",
      section: "Policy and commitment",
      refNo: "9.1.1",
      question: "Provide details on these exclusions.",
      guidance:
        "An organization’s disclosure must be comprehensive and representative to ensure data user confidence in the information reported. As such, organizations are encouraged to report on any exclusions to their disclosure including any geographies, facilities, and other water aspects.",
      code: "SDP87_24",
    },
    {
      topic: "Management of water related issues",
      section: "Policy and commitment",
      refNo: "9.2",
      question:
        "Across all your operations, what proportion of the following water aspects are regularly measured and monitored?",
      guidance:
        "This question allows your company to indicate to investors, customers, and other data users the extent to which it monitors different aspects of its water use. Comprehensive water accounting is a first step in understanding the importance of water to your business and any potential water-related impacts to your business. This data may also be relevant to a company’s regulatory compliance.",
      code: "SDP87_25",
    },
    {
      topic: "Management of water related issues",
      section: "Water accounting or auditing performed",
      refNo: "9.2.2",
      question:
        "How do the water withdrawal is compared to the previous reporting year, and how are they forecasted to change?",
      guidance:
        "This question incentivizes companies to have a complete view of their water balance at the corporate level and to assess anticipated forward trends in water demand, encouraging a transition towards business models which do not pose threats to rivers, lakes, aquifers, and streams. Total volumes can indicate the organization’s relative significance as a user of water and provide a baseline figure for other calculations. Along with trend data, these volumes can also suggest the level of risk posed by future disruptions to water supplies or increases in the cost of water. Water consumption measures water that is no longer available for use by the ecosystem or local community in the reporting period. Reporting the volume of water consumption contributes to an organization’s understanding of the overall scale of its impact due to water withdrawal on downstream water availability.",
      code: "SDP93_17",
    },
    {
      topic: "Management of water related issues",
      section: "Water accounting or auditing performed",
      refNo: "9.2.3",
      question:
        "In your oil & gas sector operations, what are the total volumes of water withdrawn, discharged, and consumed (by business division), how do they compare to the previous reporting year, and how are they forecasted to change?",
      guidance:
        "This question incentivizes companies to have a complete view of their water balance at the business division level and to assess anticipated forward trends in water demand, encouraging a transition towards business models which do not pose threats to rivers, lakes, aquifers, and streams. Volumes of water withdrawals, discharges, and consumption typically differ significantly between business divisions. Detailing the water balance at this scale provides data users with an understanding of the key phases that determine the organization’s water balance and allow a better interpretation of answers provided in other sections of the questionnaire.",
      code: "SDP93_18",
    },
    {
      topic: "Management of water related issues",
      section: "Water accounting or auditing performed",
      refNo: "9.2.4",
      question:
        "Indicate whether water is withdrawn from areas with water stress, provide the volume, how it compares with the previous reporting year, and how it is forecasted to change.",
      guidance:
        "Since water is a shared resource, and water-related impacts are localized, organizations are increasingly encouraged to prioritize action in areas with water stress and to understand and respond to local contexts. This question on water from stressed areas supports a trend towards metrics for corporate water reporting and target setting informed by local context, and in addition, the TCFD recommends disclosure of reliance on water from areas of water stress. This question also incentivizes organizations to assess anticipated forward trends in withdrawals from water stressed areas, encouraging a transition towards business models which do not pose threats to rivers, lakes, aquifers, and streams. The data requested assists the assessment of your organization’s dependence on potentially contested sources (regardless of whether your facility itself is located in a stressed area), as well as your potential impact on sensitive locations.",
      code: "SDP93_19",
    },
    {
      topic: "Management of water related issues",
      section: "Water accounting or auditing performed",
      refNo: "9.2.5",
      question:
        "What proportion of the produced agricultural commodities that are significant to your organization originate from areas with water stress?",
      guidance:
        "This question provides data users with information on the exposure that the organization may have to scarce resources in their direct operations. This metric will also allow data users to better understand the answers provided in other sections of the questionnaire.",
      code: "SDP93_20",
    },
    {
      topic: "Management of water related issues",
      section: "Water stewardship and community engagement",
      refNo: "9.2.6",
      question:
        "What proportion of the sourced agricultural commodities that are significant to your organization originate from areas with water stress?",
      guidance:
        "This question provides data users with information on an organization’s exposure to scarce resources in their value chain. This metric will also allow data users to better understand the answers provided in other sections of the questionnaire.",
      code: "SDP91_13",
    },
    {
      topic: "Management of water related issues",
      section: "Wastewater treatment and discharge",
      refNo: "9.2.9",
      question:
        "Within your direct operations, indicate the highest level(s) to which you treat your discharge.",
      guidance:
        "Reporting on levels of treatment demonstrates that the organization is monitoring its discharges and is able to understand the extent to which its activities impact water quality. Pollution is a driver of business risk and a potential threat to public health, food security, and economic resilience – as well as a cause of degradation of freshwater biodiversity. Treatment of discharge is therefore critical and transparency on this will aid investors, customers, and other data users to assess the risks and opportunities.",
      code: "SDP90_40",
    },
    {
      topic: "Management of water related issues",
      section: "Wastewater treatment and discharge",
      refNo: "9.2.10",
      question:
        "Provide details of your organization’s emissions of nitrates, phosphates, pesticides, and other priority substances to water in the reporting year.",
      guidance:
        "This question allows organizations to indicate their emissions to water of priority substances, helping them understand, manage, and reduce the use of nitrates, phosphates, pesticides, and other priority substances.",
      code: "SDP90_41",
    },
    {
      topic: "Management of water related issues",
      section: "Identification of water related impacts",
      refNo: "9.3",
      question:
        "In your direct operations and upstream value chain, what is the number of facilities where you have identified substantive water-related dependencies, impacts, risks, and opportunities?",
      guidance:
        "Water is a local issue, and data users want to know that organizations are considering dependencies, impacts, risks, and opportunities at the facility level. Reporting the total count of facilities where substantive water-related dependencies, impacts, risks, and/or opportunities have been identified provides a basic but useful indication of the organization’s reliance on these areas.",
      code: "SDP88_33",
    },
    {
      topic: "Management of water related issues",
      section: "Water accounting or auditing performed",
      refNo: "9.3.1",
      question:
        "For each facility referenced in 9.3, provide coordinates, water accounting data, and a comparison with the previous reporting year.",
      guidance:
        "Reporting information on facilities where you have identified substantive water-related dependencies, impacts, risks, and/or opportunities helps data users have confidence that your organization is monitoring local water aspects. It provides insight to dependency on different sources and potential impacts associated with water withdrawals and discharges.",
      code: "SDP93_21",
    },
    {
      topic: "Management of water related issues",
      section: "Water accounting or auditing performed",
      refNo: "9.3.2",
      question:
        "For the facilities in your direct operations referenced in 9.3.1, what proportion of water accounting data has been third party verified?",
      guidance:
        "Providing third party verification for water accounting data at facilities with substantive water related dependencies, impacts, risks, and/or opportunities gives CDP data users increased confidence in the data you are reporting.",
      code: "SDP93_22",
    },
    {
      topic: "Management of water related issues",
      section: "Policy and commitment",
      refNo: "9.4",
      question:
        "Could any of your facilities reported in 9.3.1 have an impact on a requesting CDP supply chain member?",
      guidance:
        "This question asks whether any of these facilities could have an impact on a requesting CDP supply chain member.",
      code: "SDP87_26",
    },
    {
      topic: "Management of water related issues",
      section: "Policy and commitment",
      refNo: "9.4.1",
      question:
        "Indicate which of the facilities referenced in 9.3.1 could impact a requesting CDP supply chain member.",
      guidance:
        "Indicating which of your customers use goods or services produced by facilities referenced in 9.3.1 will help them understand and take action to respond to their substantive water-related dependencies, impacts, risks and/or opportunities.",
      code: "SDP87_27",
    },
    {
      topic: "Management of water related issues",
      section: "Water accounting or auditing performed",
      refNo: "9.5",
      question:
        "Provide a figure for your organization’s total water withdrawal efficiency.",
      guidance:
        "A water withdrawal efficiency metric enables organizations to track the water-dependency of their revenue, as well as benchmark their water use.",
      code: "SDP93_23",
    },
    {
      topic: "Management of water related issues",
      section: "Water accounting or auditing performed",
      refNo: "9.6",
      question:
        "Do you calculate water intensity for your activities in the chemical sector?",
      guidance:
        "This metric encourages organizations with activities in the chemical sector to monitor water intensity data and improve efficiency.",
      code: "SDP93_24",
    },
    {
      topic: "Management of water related issues",
      section: "Water accounting or auditing performed",
      refNo: "9.6.1",
      question:
        "For your top five products by production weight/volume, provide the following water intensity information associated with your activities in the chemical sector.",
      guidance:
        "This question provides data users with information on how organizations are monitoring the water intensity of their key products and the underlying factors that determine their trend for this metric.",
      code: "SDP93_25",
    },
    {
      topic: "Management of water related issues",
      section: "Water accounting or auditing performed",
      refNo: "9.7",
      question:
        "Do you calculate water intensity for your electricity generation activities?",
      guidance:
        "This metric encourages organizations with electricity generation activities to monitor water intensity data and improve efficiency.",
      code: "SDP93_26",
    },
    {
      topic: "Management of water related issues",
      section: "Water accounting or auditing performed",
      refNo: "9.7.1",
      question:
        "Provide the following intensity information associated with your electricity generation activities.",
      guidance:
        "This question provides data users with information on how organizations are monitoring their water intensity and the underlying factors that determine their trend for this metric.",
      code: "SDP93_27",
    },
    {
      topic: "Management of water related issues",
      section: "Water accounting or auditing performed",
      refNo: "9.8",
      question:
        "Provide water intensity information for each of the agricultural commodities significant to your organization that you produce.",
      guidance:
        "The focus of this question is to ensure that organizations are monitoring the water intensity of their key produced commodities.",
      code: "SDP93_28",
    },
    {
      topic: "Management of water related issues",
      section: "Water accounting or auditing performed",
      refNo: "9.9",
      question:
        "Provide water intensity information for each of the agricultural commodities significant to your organization that you source.",
      guidance:
        "The focus of this question is to ensure that organizations are monitoring the water intensity of their key sourced commodities.",
      code: "SDP93_29",
    },
    {
      topic: "Management of water related issues",
      section: "Water accounting or auditing performed",
      refNo: "9.1O",
      question:
        "Do you calculate water intensity information for your metals and mining activities?",
      guidance:
        "This metric encourages organizations with activities in the metals & mining and coal sectors to monitor water intensity data and improve efficiency.",
      code: "SDP93_30",
    },
    {
      topic: "Management of water related issues",
      section: "Water accounting or auditing performed",
      refNo: "9.10.1",
      question:
        "For your top 5 products by revenue, provide the following intensity information associated with your metals and mining activities.",
      guidance:
        "This question provides information on how organizations determine a water intensity metric and are aware of the underlying factors that affect their trend.",
      code: "SDP93_31",
    },
    {
      topic: "Management of water related issues",
      section: "Water accounting or auditing performed",
      refNo: "9.11",
      question:
        "Do you calculate water intensity for your activities associated with the oil & gas sector?",
      guidance:
        "This metric encourages organizations to monitor water intensity data and improve efficiency.",
      code: "SDP93_32",
    },
    {
      topic: "Management of water related issues",
      section: "Water accounting or auditing performed",
      refNo: "9.11.1",
      question:
        "Provide water intensity information associated with your activities in the oil & gas sector.",
      guidance:
        "The focus of this question is to determine which metric organizations are using to monitor their water intensity, and that they are aware of the underlying factors that determine their trend.",
      code: "SDP93_33",
    },
    {
      topic: "Management of water related issues",
      section: "Water accounting or auditing performed",
      refNo: "9.12",
      question:
        "Provide any available water intensity values for your organization’s products or services.",
      guidance:
        "Methodologies for calculating and reporting water intensity are currently becoming more standardized, particularly with the development of ISO 14046.",
      code: "SDP93_34",
    },
    {
      topic: "Management of water related issues",
      section: "Policy and commitment",
      refNo: "9.13",
      question:
        "Do any of your products contain substances classified as hazardous by a regulatory authority?",
      guidance:
        "Tracing and eliminating the use of hazardous substances in all sectors is pivotal in safeguarding the quality of water bodies and by extension the effects on humans and ecosystems.",
      code: "SDP87_28",
    },
    {
      topic: "Management of water related issues",
      section: "Policy and commitment",
      refNo: "9.13.1",
      question:
        "What percentage of your company’s revenue is associated with products containing substances classified as hazardous by a regulatory authority?",
      guidance:
        "This question assesses whether your company monitors hazardous substances in your products, with the aim to improve the protection of human health and the environment from the risks posed by hazardous substances.",
      code: "SDP87_29",
    },
    {
      topic: "Management of water related issues",
      section: "Identification of water related impacts",
      refNo: "9.14",
      question:
        "Do you classify any of your current products and/or services as low water impact?",
      guidance:
        "Reducing the water impact of products, in the production or use phase of the value chain, will hasten the transition to a water-secure future.",
      code: "SDP88_34",
    },
    {
      topic: "Management of water related issues",
      section: "Targets and performance",
      refNo: "9.15",
      question: "Do you have any water-related targets?",
      guidance:
        "Target setting plays a vital role in water management and assists the successful execution of corporate strategies.",
      code: "SDP92_1",
    },
    {
      topic: "Management of water related issues",
      section: "Targets and performance",
      refNo: "9.15.1",
      question:
        "Indicate whether you have targets relating to water pollution, water withdrawals, WASH, or other water-related categories.",
      guidance:
        "It is good practice for companies to set targets to reduce water withdrawals, reduce water pollution, and improve water, sanitation, and hygiene (WASH) services where these water aspects are relevant to the impact of their business activities on water security.",
      code: "SDP92_13",
    },
    {
      topic: "Management of water related issues",
      section: "Targets and performance",
      refNo: "9.15.2",
      question:
        "Provide details of your water-related targets and the progress made.",
      guidance:
        "Investors need an explanation as to why you do not have water-related targets in place, especially if your organization has a dependency on water or substantive water risks.",
      code: "SDP92_14",
    },
    {
      topic: "Management of water related issues",
      section: "Targets and performance",
      refNo: "9.15.3",
      question:
        "Why do you not have water-related target(s) and what are your plans to develop these in the future?",
      guidance:
        "Investors need an explanation as to why you do not have water-related targets in place, especially if your organization has a dependency on water or substantive water risks.",
      code: "SDP92_15",
    },
  ];

  const tableDataModuleTen = [
    {
      topic: "Management of waste",
      section: "Policy and commitment",
      refNo: "10.1",
      question: "Do you have plastics-related targets, and if so what type?",
      guidance:
        "Organizations need to set and progress targets that address their plastics-related dependencies, impacts, risks, and opportunities. This question allows organizations to demonstrate to data users their commitment to reduce plastic usage, reduce or eliminate virgin content in plastics, eliminate problematic and unnecessary plastics, transition to reuse systems, reduce microplastic emissions, and increase circularity.",
      code: "SDP111_11",
    },
    {
      topic: "Management of waste",
      section: "Policy and commitment",
      refNo: "10.2",
      question:
        "Indicate whether your organization engages in the following activities. What is the activity, does the activity apply, and what is the comment?",
      guidance:
        "Different activities related to the production, commercialization, and use of plastics may result in different dependencies, impacts, risks, and opportunities. This question enables data users to contextualize the information you provide in this module.",
      code: "SDP111_12",
    },
    {
      topic: "Biodiversity",
      section: "Commitments and actions",
      refNo: "11.2",
      question:
        "How does your organization categorize the types of actions taken to progress biodiversity-related commitments, and what is the rationale behind this categorization?",
      guidance:
        "Explain the classification of biodiversity actions (e.g., conservation, restoration, sustainable use, awareness-raising) and provide reasoning for the chosen approach, linking it to identified biodiversity goals and priorities.",
      code: "SDP98_30",
    },
    {
      topic: "Biodiversity",
      section: "Commitments and actions",
      refNo: "11.3",
      question:
        "How do these biodiversity indicators inform decision-making and drive improvements in your biodiversity management practices?",
      guidance:
        "Provide details on how monitoring results are analyzed, integrated into planning processes, and used to enhance biodiversity outcomes or address identified gaps.",
      code: "SDP98_31",
    },
    {
      topic: "Biodiversity",
      section: "Commitments and actions",
      refNo: "11.4",
      question:
        "Describe the types of areas important for biodiversity that are located in or near your organization’s activities.",
      guidance:
        "Provide details of the biodiversity significance of these areas (e.g., protected areas, key biodiversity areas, Ramsar sites) and their ecological importance.",
      code: "SDP98_32",
    },
    {
      topic: "Biodiversity",
      section: "Commitments and actions",
      refNo: "11.4.1",
      question:
        "Describe the location and nature of your organization’s activities situated in or near areas important for biodiversity.",
      guidance:
        "Provide detailed information about the type of activity (e.g., mining, infrastructure, agriculture) and its exact proximity to biodiversity-sensitive areas.",
      code: "SDP98_33",
    },
    {
      topic: "Biodiversity",
      section: "Commitments and actions",
      refNo: "11.4.2",
      question:
        "Identify and describe the type of biodiversity area(s) in or near your operational footprint.",
      guidance:
        "Refer to recognized categories such as Key Biodiversity Areas (KBAs), Ramsar sites, UNESCO World Heritage Sites, or locally recognized ecological hotspots.",
      code: "SDP98_34",
    },
    {
      topic: "Biodiversity",
      section: "Commitments and actions",
      refNo: "11.4.3",
      question:
        "Specify the protected area classification according to the IUCN category system for the identified biodiversity area(s).",
      guidance:
        "Use the official IUCN categories (Ia to VI) and provide supporting references or documentation.",
      code: "SDP98_35",
    },
    {
      topic: "Biodiversity",
      section: "Commitments and actions",
      refNo: "11.4.4",
      question:
        "Provide the country or area and the official name of the biodiversity area associated with your operations.",
      guidance:
        "Include formal names from authoritative sources (e.g., IUCN, national park databases).",
      code: "SDP98_36",
    },
    {
      topic: "Biodiversity",
      section: "Commitments and actions",
      refNo: "11.4.5",
      question:
        "Explain the proximity of your operations to the identified biodiversity area.",
      guidance:
        "Use qualitative descriptors such as 'within the boundary,' 'adjacent to,' or 'within 5 km,' along with supporting maps if available.",
      code: "SDP98_37",
    },
    {
      topic: "Biodiversity",
      section: "Commitments and actions",
      refNo: "11.4.6",
      question:
        "Describe the extent of overlap, if any, between your operations and the biodiversity area in terms of land use.",
      guidance:
        "While quantitative hectares can be provided separately, explain the overlap in operational terms (e.g., partial encroachment, shared boundary).",
      code: "SDP98_38",
    },
    {
      topic: "Biodiversity",
      section: "Commitments and actions",
      refNo: "11.4.7",
      question:
        "Provide an overview of how your organization’s activities could potentially impact biodiversity in the identified area.",
      guidance:
        "Discuss risks such as habitat loss, species disturbance, water contamination, noise, or light pollution.",
      code: "SDP98_39",
    },
    {
      topic: "Biodiversity",
      section: "Commitments and actions",
      refNo: "11.4.8",
      question:
        "Outline the mitigation measures implemented to reduce or prevent biodiversity impacts.",
      guidance:
        "Include measures like habitat restoration, buffer zones, seasonal work restrictions, and wildlife corridors.",
      code: "SDP98_40",
    },
    {
      topic: "Biodiversity",
      section: "Commitments and actions",
      refNo: "11.4.9",
      question:
        "Explain how the effectiveness of biodiversity mitigation measures is monitored and evaluated.",
      guidance:
        "Discuss monitoring schedules, performance indicators, and adaptive management practices.",
      code: "SDP98_41",
    },
    {
      topic: "Biodiversity",
      section: "Commitments and actions",
      refNo: "11.4.10",
      question:
        "Provide any additional context related to biodiversity management for mining or similar extractive projects.",
      guidance:
        "Include historical biodiversity data, long-term monitoring programs, or community-based conservation initiatives.",
      code: "SDP98_42",
    },
    {
      topic: "Biodiversity",
      section: "Commitments and actions",
      refNo: "11.4.11",
      question:
        "Describe your organization’s commitments or policies regarding operations in biodiversity-sensitive areas.",
      guidance:
        "Reference sustainability frameworks, corporate biodiversity policies, or voluntary initiatives like the Business and Biodiversity Pledge.",
      code: "SDP98_43",
    },
    {
      topic: "Verification & Assurance",
      section: "Data assurance",
      refNo: "13.1.1",
      question:
        "Which environmental issues in your CDP response have undergone third-party verification or assurance?",
      guidance:
        "Identify the specific environmental topics (e.g., GHG emissions, water usage, waste data) that have been externally verified/assured to give clarity on the scope of assurance.",
    },
    {
      topic: "Verification & Assurance",
      section: "Data assurance",
      refNo: "13.1.1.a",
      question:
        "For each verified/assured data point, which disclosure module and specific data sets were included in the assurance process?",
      guidance:
        "Clearly reference the CDP disclosure modules (e.g., Climate Change, Water Security) and the exact data points assured to ensure traceability for data users.",
    },
    {
      topic: "Verification & Assurance",
      section: "Data assurance",
      refNo: "13.1.1.b",
      question:
        "Which verification or assurance standard was applied to the data points, and why was it chosen?",
      guidance:
        "Mention standards such as ISO 14064-3, ISAE 3000, AA1000AS, or others, explaining the rationale for selection in terms of reliability, regulatory requirements, or stakeholder expectations.",
    },
    {
      topic: "Verification & Assurance",
      section: "Data assurance",
      refNo: "13.1.1.c",
      question:
        "What processes and methodologies did the third party follow to complete the verification/assurance?",
      guidance:
        "Describe the scope, approach, sampling methods, site visits, data checks, and any materiality thresholds applied during the verification/assurance.",
    },
    {
      topic: "Verification & Assurance",
      section: "Data assurance",
      refNo: "13.1.1.d",
      question:
        "How does the organization use the verification/assurance outcomes to improve environmental data quality and reporting?",
      guidance:
        "Explain whether the assurance findings influence internal processes, data management systems, or next-year reporting improvements.",
    },
  ];

  return (
    <div style={{ minHeight: "80vh" }}>
      <TableRenderer
        id="mod-8-qual"
        title="Module 8 - Qualitative"
        tableData={tableDataModuleEight}
      />

      <br />

      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <h3 className="section-marker" style={{ fontWeight: "bold" }}>
          CDP Water
        </h3>
      </div>

      <TableRenderer
        id="mod-9-qual"
        title="Module 9 - Qualitative"
        tableData={tableDataModuleNine}
      />

      <br />

      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <h3 className="section-marker" style={{ fontWeight: "bold" }}>
          CDP Plastics
        </h3>
      </div>

      <TableRenderer
        id="mod-10-qual"
        title="Module 10 - Qualitative"
        tableData={tableDataModuleTen}
      />
    </div>
  );
};

export default Module_8_13_Qual;
