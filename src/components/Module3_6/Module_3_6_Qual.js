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
            style={{ border: "1px solid black", padding: "8px", width: "5%" }}
          >
            {/* Blank col */}
          </th>
          <th
            style={{
              border: "1px solid black",
              padding: "8px",
              fontWeight: "bold",
              width: "15%",
            }}
          >
            Topic
          </th>
          <th
            style={{
              border: "1px solid black",
              padding: "8px",
              fontWeight: "bold",
              width: "10%",
            }}
          >
            CDP Ref No.
          </th>
          <th
            style={{
              border: "1px solid black",
              padding: "8px",
              fontWeight: "bold",
              width: "30%",
            }}
          >
            Questions to be added in platform
          </th>
          <th
            style={{
              border: "1px solid black",
              padding: "8px",
              fontWeight: "bold",
              width: "30%",
            }}
          >
            Guidance
          </th>
          <th
            style={{ border: "1px solid black", padding: "8px", width: "10%" }}
          >
            {/* Response */}
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
              {item.subTopic}
            </td>
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
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {item.guidance}
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {item.response}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Module_3_6_Qual = () => {
  const tableDataModuleThree = [
    {
      topic: "Risk Management",
      subTopic: "Risk Management Process",
      slNo: "3.1",
      question:
        "Have you identified any environmental risks which have had a substantive effect on your organization in the reporting year, or are anticipated to have a substantive effect on your organization in the future? What environmental issues and risks has your organization identified, and what is the primary reason it does not consider itself to have environmental risks in its direct operations and/or upstream or downstream value chain?",
      guidance:
        "It is crucial for investors and data users to understand your organization's risk exposure, especially regarding any environmental risks across your value chain which are anticipated to have substantive effects on your organization. This includes both risks which have already had an effect within the reporting year and risks which may have an effect in the future. If no environmental risks with substantive effects have been identified as part of your assessment, it is equally crucial for data users to understand how and why you have concluded that such risks are not anticipated to affect your organization.",
      response: "SDP145_18",
    },
    {
      topic: "Risk Management",
      subTopic: "Risk Management Process",
      slNo: "3.1.1",
      question:
        "Provide details of the environmental risks identified which have had a substantive effect on your organization in the reporting year, or are anticipated to have a substantive effect on your organization in the future.",
      guidance:
        "Your response to this question provides data users with an overview of the environmental risks affecting your organization now and in the future. Information on the current and anticipated financial effects of these risks, and your response strategy to manage and mitigate them, are critical elements for guiding investments as well as implementing corporate actions to improve business resilience and environmental stewardship.",
      response: "SDP145_19",
    },
    {
      topic: "Risk Management",
      subTopic: "Risk Management Process",
      slNo: "3.1.2",
      question:
        "Provide the amount and proportion of your financial metrics from the reporting year that are vulnerable to the substantive effects of environmental risks.",
      guidance:
        "This question provides investors and data users with more transparency over the vulnerability of an organization to the substantive effects of environmental risks. Quantifying vulnerability can provide an understanding of the degree to which the organization stands to be affected by their anticipated risks. This can inform how and where the organization responds to environmental risk within their financial planning and strategy.",
      response: "SDP145_20",
    },
    {
      topic: "Risk Management",
      subTopic: "Risk Management Process",
      slNo: "3.2",
      question:
        "Within each river basin, how many facilities are exposed to substantive effects of water-related risks, and what percentage of your total number of facilities does this represent?",
      guidance:
        "Information on river basins provides a deeper understanding of the potential significance of the water risk exposure associated with each basin, which may be driven by the organization’s dependencies and impacts. Knowing the number of facilities at risk for each basin and the potential impact of this risk exposure helps organizations with decision making based on basin-level issues. It allows financial planning at that level to take account of water issues and provides a powerful indicator to support river basin action and investment.",
      response: "SDP145_21",
    },
    {
      topic: "Risk Management",
      subTopic: "Risk Management Process",
      slNo: "3.3",
      question:
        "In the reporting year, was your organization subject to any fines, enforcement orders, and/or other penalties for water-related regulatory violations?",
      guidance:
        "Knowledge of compliance related fines and other non-financial penalties across your organization demonstrates an awareness by your organization of its impact on the local operating environment as well as the potential financial implications of its water management. This information helps investors and other data users to gain some insight into the effectiveness of your control procedures at a corporate level.",
      response: "SDP145_22",
    },
    {
      topic: "Risk Management",
      subTopic: "Risk Management Process",
      slNo: "3.3.1",
      question:
        "Provide the total number and financial value of all water-related fines. What is the total number and value of fines, the percentage of facilities/operations associated, the change in the number of fines compared to the previous year, and any related comments?",
      guidance:
        "Providing aggregated information, for absolute numbers and the tracking of numbers of compliance-related fines, is evidence that your organization is monitoring its local operating environments and keeping track at corporate level.",
      response: "SDP145_23",
    },
    {
      topic: "Risk Management",
      subTopic: "Risk Management Process",
      slNo: "3.3.2",
      question:
        "Provide details for all significant fines, enforcement orders, and/or penalties for water-related regulatory violations in the reporting year, and your plans for resolving them. What was the type of penalty, its financial impact, the country/area and river basin involved, the type of incident, and the description of the penalty, incident, regulatory violation, significance, and resolution?",
      guidance:
        "Providing these details of fines and other non-financial penalties, such as location and your plans for resolving them, demonstrates to CDP data users that your organization is keeping track at the corporate level and also that it has an awareness of impacts in their local operating environment.",
      response: "SDP145_24",
    },
    {
      topic: "Risk Management",
      subTopic: "Risk Management Process",
      slNo: "3.5.2",
      question:
        "Provide details of each Emissions Trading Scheme (ETS) your organization is regulated by.",
      guidance:
        "As the number of jurisdictions with carbon pricing policies has doubled over the last decade, data users are interested in understanding how organizations are affected by these schemes. This question contextualizes the regulatory landscapes in which organizations operate and the potential for future regulation which may impact an organization’s operations.",
      response: "SDP145_25",
    },
    {
      topic: "Risk Management",
      subTopic: "Risk Management Process",
      slNo: "3.4",
      question:
        "In the reporting year, was your organization subject to any fines, enforcement orders, and/or other penalties for violation of biodiversity-related regulation?",
      guidance:
        "Knowledge of compliance related to fines and other non-financial penalties across your organization demonstrates an awareness of your organization’s impact on the local environment, as well as the potential financial implications of its biodiversity management. This information provides insights to investors and other data users about the effectiveness of your control procedures at a corporate level.",
      response: "SDP145_26",
    },
    {
      topic: "Risk Management",
      subTopic: "Risk Management Process",
      slNo: "3.4.1",
      question:
        "Provide details for all significant fines, enforcement orders and/or other penalties for biodiversity-related regulatory violations in the reporting year, and your plans for resolving them.",
      guidance:
        "Providing details of significant fines and other non-financial penalties, such as location and your plans for resolving them, demonstrates to CDP data users that your organization is keeping track of these events at the corporate level and has awareness of unplanned impacts on biodiversity caused by its operations.",
      response: "SDP145_27",
    },
    {
      topic: "Risk Management",
      subTopic: "Risk Management Process",
      slNo: "3.5.4",
      question:
        "What is your strategy for complying with the systems you are regulated by or anticipate being regulated by?",
      guidance:
        "This question provides data users with insight into an organization’s long-term compliance and regulatory risk management strategy for the carbon pricing systems they are regulated by or anticipate being regulated by.",
      response: "SDP145_29",
    },
    {
      topic: "Risk Management",
      subTopic: "Risk Management Process",
      slNo: "3.6",
      question:
        "Have you identified any environmental opportunities which have had a substantive effect on your organization in the reporting year, or are anticipated to have a substantive effect on your organization in the future? What environmental issues have been identified, what environmental opportunities have been recognized, and what is the primary reason your organization does not consider itself to have environmental opportunities?",
      guidance:
        "It is crucial for investors and data users to know whether your organization has identified any environmental opportunities within your direct operations or across your value chain with the potential to have substantive effects on your organization. This includes both opportunities which have already had an effect in the reporting year, as well as opportunities which may have an effect in the future. If no environmental opportunities with substantive effects have been identified as part of your assessment, it is equally crucial for data users to understand how and why your organization has concluded that you are not presented with any opportunities.",
      response: "SDP145_30",
    },
    {
      topic: "Risk Management",
      subTopic: "Risk Management Process",
      slNo: "3.6.1",
      question:
        "Provide details of the environmental opportunities identified which have had a substantive effect on your organization in the reporting year, or are anticipated to have a substantive effect on your organization in the future. What is the environmental issue the opportunity relates to, along with its identifier, commodity, type, primary driver, value chain stage, location (country/area, river basin, mining project ID), organization-specific description, primary financial effect, anticipated time horizon, likelihood, magnitude, current and anticipated financial impacts, quantifiable figures across short-, medium-, and long-term, explanation of financial figures, cost to realize the opportunity, cost calculation method, and the strategy to realize it?",
      guidance:
        "Your response to this question provides data users with an overview of the environmental opportunities which have had a substantive effect on your organization in the reporting year or are estimated to have a substantive effect in the future. Information on the current and estimated potential scale of these opportunities, as well as your response strategy to seize these opportunities, enable data users to see how your organization is implementing corporate actions to improve business resilience and environmental stewardship.",
      response: "SDP145_31",
    },
    {
      topic: "Risk Management",
      subTopic: "Risk Management Process",
      slNo: "3.6.2",
      question:
        "Provide the amount and proportion of your financial metrics in the reporting year that are aligned with the substantive effects of environmental opportunities.",
      guidance:
        "This question provides investors and data users with a more complete picture of alignment of finance the substantive effects of environmental opportunities. The proportion of individual financial metrics that are aligned with opportunities can inform strategy to addressing each environmental issue due to each metric’s implications and distinctive role within an organization's financial accounting and strategy.",
      response: "SDP145_32",
    },
  ];

  const tableDataModuleFour = [
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.3",
      question:
        "Is there management-level responsibility for environmental issues within your organization? What is the environmental issue, who holds management-level responsibility for it, what is the primary reason for having no such responsibility, and why does your organization not assign management-level responsibility for environmental issues?",
      guidance:
        "While it is most important for a member of the board to have accountability over environmental issues, assigning management-level responsibility indicates that the organization is committed to implementing its environmental policy.",
      response: "SDP135_13",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.4",
      question:
        "What are the environmental issues relevant to your organization?",
      guidance:
        "List the environmental issues that directly or indirectly affect your organization’s operations, supply chain, or stakeholders (e.g., climate change, waste management, water usage, biodiversity loss, emissions).",
      response: "SDP135_14",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.4",
      question:
        "Does your organization have management-level competency to address this environmental issue?",
      guidance:
        "Indicate whether your organization’s leadership has the knowledge, skills, and experience to address this issue effectively, supported by examples if applicable.",
      response: "SDP135_15",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.4",
      question:
        "What mechanisms are in place to maintain management-level competency on this environmental issue?",
      guidance:
        "Describe the training programs, professional development initiatives, external consultations, certifications, or internal review processes used to ensure management stays updated and capable of handling the issue.",
      response: "SDP135_16",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.4",
      question:
        "What environmental expertise does the responsible management-level individual possess?",
      guidance:
        "Provide details on the individual’s qualifications, certifications, relevant work experience, and specific environmental knowledge that enables them to manage this issue.",
      response: "SDP135_17",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.4",
      question:
        "What is the primary reason for having no management-level competency on environmental issues?",
      guidance:
        "If applicable, explain why management does not currently possess the necessary competency — reasons could include lack of exposure to environmental risks, low priority, or reliance on external consultants.",
      response: "SDP135_18",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.4",
      question:
        "Why does your organization not have management-level competency for this environmental issue?",
      guidance:
        "Offer a clear rationale, such as the issue being outside the scope of operations, insufficient resources, absence of identified material risks, or plans to develop competency in the future.",
      response: "SDP135_19",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.5",
      question:
        "Does your organization provide monetary incentives related to the management of this environmental issue?",
      guidance:
        "Specify whether bonuses, performance-based pay, or other financial rewards are tied to achieving environmental targets.",
      response: "SDP135_20",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.5",
      question:
        "What percentage of total C-suite and board-level monetary incentives are linked to the management of this environmental issue?",
      guidance:
        "Provide the percentage of executive and board-level pay that is directly linked to environmental performance measures.",
      response: "SDP135_21",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.5.1",
      question: "Which position is entitled to receive a monetary incentive?",
      guidance:
        "Specify the job title or role that is eligible for monetary incentives (e.g., Sustainability Manager, Plant Head, Operations Director). Avoid generic terms; use the official designation used in your organization’s structure.",
      response: "SDP135_22",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.5.1",
      question: "What incentives are provided to this position?",
      guidance:
        "Describe the type of incentives (e.g., annual bonus, performance-based bonus, stock options, profit-sharing). Mention if these incentives are one-time or recurring, and whether they are monetary or include other forms of rewards.",
      response: "SDP135_23",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.5.1",
      question:
        "What performance metrics are used to determine the incentives?",
      guidance:
        "List the key performance indicators (KPIs) or measurable goals linked to the incentive (e.g., reduction in CO₂ emissions, energy efficiency improvements, waste reduction, compliance rate). Include both environmental and operational metrics, if relevant.",
      response: "SDP135_24",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.5.1",
      question: "To which incentive plan are these incentives linked?",
      guidance:
        "Provide the name and brief description of the official incentive plan or program under which these incentives are offered (e.g., “Green Performance Bonus Plan,” “Executive Sustainability Incentive Program”). Clarify if it is part of the corporate compensation policy or a special sustainability-linked plan.",
      response: "SDP135_25",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.5.1",
      question:
        "What additional details can you provide about these incentives?",
      guidance:
        "Add any relevant context such as incentive duration, payout structure, percentage of base salary, conditions for payment, or examples of past achievements that triggered payouts. Include whether the incentive is tied to team or individual performance.",
      response: "SDP135_26",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.5.1",
      question:
        "How the position’s incentives contribute to environmental commitments/climate transition plan – How do the incentives for this position contribute to achieving your environmental commitments and/or climate transition plan?",
      guidance:
        "Explain how the incentive aligns with your organization’s sustainability goals (e.g., meeting net-zero targets, achieving renewable energy milestones, improving waste management). Provide examples of how incentivized actions have supported climate strategies in the past.",
      response: "SDP135_27",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.6.1",
      question:
        "What environmental issues are covered by your organization’s environmental policies, and what is the level of coverage for each?",
      guidance:
        "List the specific environmental issues addressed (e.g., climate change, air emissions, water use, waste management, biodiversity, deforestation, chemical use). For each, indicate whether the coverage is full, partial, or limited. If applicable, explain how the level of coverage was determined.",
      response: "SDP135_28",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.6.1",
      question:
        "Which stages of your value chain are addressed by the environmental policy, and how is this coverage implemented?",
      guidance:
        "Identify the stages of the value chain that are covered (e.g., raw material sourcing, manufacturing, logistics, product use, end-of-life disposal). Describe how your organization applies the policy in these stages — for example, through supplier requirements, operational controls, or customer guidelines.",
      response: "SDP135_29",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.6.1",
      question:
        "What key content is included in your environmental policy, and is it aligned with global environmental treaties or policy goals?",
      guidance:
        "Summarize the main principles, commitments, and objectives in the policy. Indicate whether it aligns with international frameworks such as the Paris Agreement, UN Sustainable Development Goals (SDGs), or other recognized treaties and guidelines. Specify the relevant treaties or goals and how the policy supports them.",
      response: "SDP135_30",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.6.1",
      question:
        "Is your environmental policy publicly available, and if so, where can it be accessed?",
      guidance:
        "State whether the policy is published for public access. If yes, provide a link to the webpage or document repository where it is available. If not public, explain why and indicate if it can be shared upon request.",
      response: "SDP135_31 and SDP135_32",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.7",
      question:
        "Does the policy framework for the portfolio activities of your organization include environmental requirements that clients/investees need to meet, and/or exclusion policies?",
      guidance:
        "Considering environmental issues in an organization’s policy framework is an important element of business strategy and a signal of how deeply environmental issues are embedded in an organization’s processes. For these reasons, data users are interested in understanding whether organizations in the financial services sector have integrated environmental requirements for clients/investees, and whether financial institutions have implemented any environmental exclusion policies.",
      response: "SDP135_33",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.7",
      question:
        "What is the composition and scope of your organization’s portfolio?",
      guidance:
        "Describe the types of assets, investments, or client activities included in your portfolio (e.g., corporate loans, equity investments, project financing). Indicate relevant sectors, geographic coverage, and any environmental risk exposure.",
      response: "SDP135_34",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.7",
      question:
        "Does your policy framework for portfolio activities include environmental requirements for clients/investees, and/or environmental exclusion policies?",
      guidance:
        "State whether your policy framework contains: Environmental requirements for clients/investees (e.g., ESG performance standards, compliance with environmental laws), Environmental exclusion policies (e.g., no financing of coal, deforestation-related activities). Provide a brief description of these policies if they exist.",
      response: "SDP135_35",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.7",
      question:
        "If applicable, what is the primary reason for not including both environmental requirements and environmental exclusion policies in your portfolio policy framework?",
      guidance:
        "If you do not have both types of policies, specify the main reason (e.g., still under development, limited relevance to portfolio type, lack of regulatory requirement, strategic decision). Be concise and factual.",
      response: "SDP135_36",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.7",
      question:
        "Why does your organization’s policy framework for portfolio activities not include both environmental client/investee requirements and environmental exclusion policies?",
      guidance:
        "Provide a detailed explanation, including business, regulatory, or operational factors influencing this decision. Mention if there are plans to introduce such policies in the future, and any interim measures currently in place.",
      response: "SDP135_37",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.7",
      question:
        "How does your current portfolio policy framework address environmental considerations, even if it does not include both policies?",
      guidance:
        "Describe any alternative approaches or partial measures (e.g., voluntary guidelines, sector-specific assessments, engagement with clients on ESG improvement, case-by-case environmental due diligence).",
      response: "SDP135_38",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.7.1",
      question:
        "What type of policies which include environmental requirements that clients/investees need to meet does your organization have, and is it publicly available?",
      guidance:
        "Indicate the official name and category of the policy (e.g., Climate Policy, Responsible Sourcing Policy, Deforestation Policy).",
      response: "SDP135_39",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.7.1",
      question: "What are the coverage details of the policy?",
      guidance:
        "Describe the value chain stages of clients/investees covered (e.g., production, processing, distribution).",
      response: "SDP135_40",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.7.1",
      question: "What are the criteria and exceptions for the policy?",
      guidance:
        "Explain the basis of exceptions (e.g., geographical, size of operation, temporary grace periods).",
      response: "SDP135_41",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.7.1",
      question:
        "What requirements does the policy impose on clients/investees, and how is compliance measured?",
      guidance:
        "Detail the specific requirements for clients/investees (e.g., zero deforestation commitments, GHG emissions reduction targets, reporting obligations).",
      response: "SDP135_42",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.7.1",
      question:
        "What are your targets for compliance and reasons for any lack of measurement?",
      guidance: "Indicate the target year for achieving 100% compliance.",
      response: "SDP135_43",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.7.2",
      question:
        "What type of exclusion policy does your organization have, and which part(s) of the fossil fuel value chain does it apply to?",
      guidance:
        "Specify the type of exclusion policy (e.g., investment exclusion, procurement exclusion, financing restriction).",
      response: "SDP135_44",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.7.2",
      question:
        "When was the exclusion policy implemented, and in which country/area does it apply?",
      guidance: "Provide the official year the policy came into effect.",
      response: "SDP135_45",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.7.2",
      question:
        "What is the phaseout pathway defined under your exclusion policy?",
      guidance:
        "Describe the step-by-step plan for reducing and eliminating the targeted fossil fuel activities.",
      response: "SDP135_46",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.7.2",
      question:
        "What is the target year for complete phaseout of the excluded fossil fuel activities?",
      guidance:
        "Provide the final year by which the excluded activities will be fully phased out.",
      response: "SDP135_47",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.7.2",
      question: "Please describe the exclusion policy in detail.",
      guidance:
        "Summarize the purpose, scope, and operational mechanism of the policy.",
      response: "SDP135_48",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.8",
      question:
        "What covenants are included in your financing agreements to reflect and enforce your organization’s policies?",
      guidance:
        "List any specific clauses, terms, or conditions in your financing agreements that ensure adherence to your organization’s environmental, social, or governance (ESG) policies. Examples may include sustainability-linked loan conditions, environmental performance requirements, or compliance obligations with international standards. Be as specific as possible about the type of covenant and the policy area it supports.",
      response: "SDP135_49",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.8",
      question:
        "What is the primary reason for not including covenants in your financing agreements?",
      guidance:
        "If no such covenants are in place, explain the main reason (e.g., lender does not require them, financing agreements predate ESG commitments, difficulty in measuring compliance, or lack of standardized covenant frameworks). Provide one clear primary reason rather than multiple",
      response: "SDP135_50",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.8",
      question:
        "Why does your organization not include covenants in financing agreements?",
      guidance:
        "Give a more detailed explanation of the absence of such covenants, including any contextual or strategic factors. This could involve industry norms, financial negotiation priorities, internal policy approaches, or plans to incorporate such covenants in future agreements. Include any steps being taken to explore or implement them.",
      response: "SDP135_51",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.8.1",
      question:
        "What types of covenants are used in your organization’s financing agreements to reflect and enforce your environmental policies?",
      guidance:
        "Specify the categories or types of covenants in place (e.g., environmental covenants, social covenants, governance covenants).",
      response: "SDP135_52",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.8.1",
      question:
        "Which asset classes or product types are covered by these covenants?",
      guidance:
        "List the financial products or asset classes to which these covenants apply (e.g., corporate loans, project finance, bonds, equity investments). Indicate if the coverage is sector-specific or applies across all investments/products.",
      response: "SDP135_53",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.8.1",
      question:
        "What criteria are used to determine how covenants are applied?",
      guidance:
        "Describe the decision-making process and thresholds for applying covenants (e.g., based on ESG risk ratings, industry type, project size, environmental impact assessments). Mention any screening tools, frameworks, or standards used.",
      response: "SDP135_54",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.8.1",
      question: "What percentage of your clients are covered by covenants?",
      guidance:
        "Provide the proportion (in %) of total clients that have signed agreements containing covenants. If possible, break this down by asset class or client category for better clarity.",
      response: "SDP135_55",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.8.1",
      question:
        "What percentage of your portfolio is covered by covenants in relation to your total portfolio value?",
      guidance:
        "Indicate the share (in %) of your total portfolio value that is under agreements with covenants. Clarify how this percentage is calculated (e.g., based on total committed value, outstanding value).",
      response: "SDP135_56",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.8.1",
      question:
        "Which environmental policies do your covenants enforce, and how?",
      guidance:
        "List the key environmental policies embedded in your covenants (e.g., no deforestation, carbon reduction requirements, water usage limits). Explain how these policies are monitored, enforced, and what happens in cases of non-compliance.",
      response: "SDP135_57",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.9",
      question:
        "Does your organization’s pension scheme incorporate environmental criteria in its holdings?",
      guidance:
        "State whether environmental considerations (e.g., ESG factors, climate impact, exclusion of high-emission industries) are integrated into your pension investment portfolio. Provide a clear “Yes” or “No” response and, if applicable, specify the type of criteria used.",
      response: "SDP135_58",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.9",
      question:
        "How are funds within the pension scheme selected, and how does your organization ensure that environmental criteria are incorporated?",
      guidance:
        "Describe the process for selecting pension scheme funds, including screening methods, engagement with fund managers, and any third-party sustainability ratings used. Include examples of environmental criteria applied, such as renewable energy investments, carbon footprint limits, or deforestation-free commitments.",
      response: "SDP135_59",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.9",
      question:
        "If environmental criteria are not incorporated into the pension scheme holdings, please explain why.",
      guidance:
        "Provide the primary reasons for not including environmental considerations (e.g., lack of available ESG-compliant funds, regulatory constraints, low awareness, or prioritization of financial performance). Be transparent and include plans, if any, for future integration of environmental factor",
      response: "SDP135_60",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.10",
      question:
        "Are you a signatory or member of any environmental collaborative frameworks or initiatives?",
      guidance:
        "Indicate whether your organization has formally signed, joined, or committed to any environmental collaborations, partnerships, or initiatives (e.g., UN Global Compact, Science Based Targets initiative, RE100). Provide “Yes” or “No,” and if “Yes,” list the names of the initiatives.",
      response: "SDP135_61",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.10",
      question:
        "Which collaborative frameworks or initiatives is your organization part of?",
      guidance:
        "For each initiative, give the official name and a brief description. Specify whether it is global, regional, or industry-specific. Include the date of joining/signing, and mention if your membership is ongoing or time-bound.",
      response: "SDP135_62",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.10",
      question:
        "What is your organization’s role within each framework or initiative?",
      guidance:
        "Describe the nature and level of your participation (e.g., active contributor, steering committee member, reporting participant, financial supporter). Include examples of activities, commitments, or deliverables you provide under the initiative.",
      response: "SDP135_63",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11",
      question:
        "What external engagement activities does your organization conduct that could directly or indirectly influence policy, law, or regulation impacting the environment?",
      guidance:
        "List activities such as lobbying, advocacy, public consultations, participation in policy forums, industry associations, or partnerships with NGOs. Indicate whether the influence is direct (e.g., formal lobbying) or indirect (e.g., participating in working groups).",
      response: "SDP135_64",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11",
      question:
        "Does your organization have a public commitment or position statement to conduct engagement activities in line with global environmental treaties or policy goals?",
      guidance:
        "Please ensure the statement is publicly available on your website or in an official publication.",
      response: "SDP135_65",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11",
      question:
        "Which global environmental treaties or policy goals is your public commitment or position statement aligned with?",
      guidance:
        "Specify treaties or goals such as the Paris Agreement, UN Sustainable Development Goals (SDGs), Convention on Biological Diversity, or other international environmental frameworks.",
      response: "SDP135_66",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11",
      question: "Please attach your commitment or position statement.",
      guidance:
        "Upload an official, dated, and approved copy of your organization’s statement, ensuring it is on company letterhead or part of an official corporate publication.",
      response: "SDP135_67",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11",
      question: "Is your organization registered on a transparency register?",
      guidance:
        "Transparency registers are official databases that track lobbying and policy-influencing activities (e.g., EU Transparency Register, national lobbying registers).",
      response: "SDP135_68",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11",
      question:
        "What type(s) of transparency register is your organization registered on?",
      guidance:
        "Indicate whether the registration is at a local, national, or international level. Examples include the EU Transparency Register, U.S. Lobbying Disclosure Act Register, or specific country registers.",
      response: "SDP135_69",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11",
      question:
        "Please disclose the transparency registers on which your organization is registered and the relevant ID numbers.",
      guidance:
        "Provide the official name of each register and your unique registration ID for verification. Ensure details are up to date.",
      response: "SDP135_70",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11",
      question:
        "Describe the process your organization follows to ensure external engagement activities are consistent with your environmental commitments and/or transition plan.",
      guidance:
        "Explain internal checks such as approval workflows, compliance reviews, ethics committee oversight, or alignment with sustainability policies. Provide examples if possible.",
      response: "SDP135_71",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11",
      question:
        "What is the primary reason your organization does not engage in activities that could directly or indirectly influence environmental policy, law, or regulation?",
      guidance:
        "Select from common reasons such as lack of resources, strategic choice to remain neutral, reliance on industry associations, or focus on other priorities.",
      response: "SDP135_72",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11",
      question:
        "Please explain in detail why your organization does not engage in activities that could directly or indirectly influence environmental policy, law, or regulation.",
      guidance:
        "Provide a clear narrative justification, including any strategic, operational, or ethical considerations. Indicate if engagement is done indirectly through partnerships.",
      response: "SDP135_73",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11.1",
      question:
        "Which policy, law, or regulation is your organization engaging with policy makers on?",
      guidance:
        "Provide the official name and citation of the policy, law, or regulation. If applicable, include the year of enactment or latest amendment. Use the exact title as recognized by the relevant authority.",
      response: "SDP135_74",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11.1",
      question:
        "Which environmental issues does this policy, law, or regulation address?",
      guidance:
        "List the specific environmental concerns (e.g., climate change, water pollution, biodiversity loss, waste management) covered by the regulation. Be as specific as possible to ensure clarity.",
      response: "SDP135_75",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11.1",
      question:
        "What is the focus area of the policy, law, or regulation that may impact the environment?",
      guidance:
        "Describe the particular environmental aspects targeted (e.g., carbon emissions limits, renewable energy adoption, habitat protection). Mention whether the focus is preventive, corrective, or supportive.",
      response: "SDP135_76",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11.1",
      question:
        "What is the geographic coverage of this policy, law, or regulation?",
      guidance:
        "Indicate whether it is local, regional, national, or international in scope. Specify if its application is restricted to certain jurisdictions or sectors.",
      response: "SDP135_77",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11.1",
      question:
        "In which country, area, or region does this policy, law, or regulation apply?",
      guidance:
        "Name all countries, states, provinces, or territories where the policy is applicable. Use official geopolitical boundaries.",
      response: "SDP135_78",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11.1",
      question:
        "What is your organization’s position on this policy, law, or regulation?",
      guidance:
        "Clearly state whether your organization supports, opposes, or partially supports the regulation. Provide reasoning for your stance, including economic, operational, and environmental considerations.",
      response: "SDP135_79",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11.1",
      question:
        "Are there any exceptions, and what alternative approach is your organization proposing?",
      guidance:
        "If your organization has identified exceptions or exemptions, describe them in detail. Outline any alternative solutions or policy modifications you are advocating for.",
      response: "SDP135_80",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11.1",
      question:
        "What type of direct engagement has your organization undertaken with policy makers regarding this policy, law, or regulation?",
      guidance:
        "Specify the form of engagement (e.g., formal consultation, public comment submission, meetings, workshops, advocacy campaigns). Mention the frequency and nature of these interactions.",
      response: "SDP135_81",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11.1",
      question:
        "Which stakeholders or officials has your organization engaged with regarding this policy, law, or regulation?",
      guidance:
        "List the government agencies, policy makers, industry groups, or NGOs you have communicated with. Include the level of seniority (e.g., ministerial, technical, local authority).",
      response: "SDP135_83",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11.1",
      question:
        "How is this policy, law, or regulation relevant to your environmental commitments and/or transition plan, and how do you measure engagement success?",
      guidance:
        "Explain the connection between the policy and your organization’s sustainability or climate targets. Describe key performance indicators (KPIs) or metrics you use to assess the impact of your engagement.",
      response: "SDP135_84",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11.1",
      question:
        "Has your organization evaluated whether this engagement aligns with global environmental treaties or policy goals?",
      guidance:
        "Indicate whether a formal assessment has been conducted to ensure alignment with agreements such as the Paris Agreement, Convention on Biological Diversity, or UN Sustainable Development Goals.",
      response: "SDP135_85",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11.1",
      question:
        "Which global environmental treaties or policy goals are aligned with your organization’s engagement on this policy, law, or regulation?",
      guidance:
        "Name the specific treaties or goals relevant to your engagement. Briefly describe how your position or advocacy supports these global objectives.",
      response: "SDP135_86",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.11.2",
      question:
        "Provide details of your indirect engagement on policy, law, or regulation that may (positively or negatively) impact the environment through trade associations or other intermediary organizations or individuals in the reporting year.",
      guidance:
        "Organizations have many potential avenues for engagement activities. Trade associations are a tool through which organizations can shape policy and interact with legislators and industry peers. Engaging with, or providing support to, other intermediary organizations or individuals can play an important role in the development and adoption of environmental policy. As such, data users expect organizations to be transparent about the full range of their engagement and funding activities as well as their relationship and responsibilities with intermediary organizations that are likely to take a position on legislation or that could influence policy, law, or regulation that may impact the environment.",
      response: "SDP135_87",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.12",
      question:
        "Have you published information about your organization’s response to environmental issues for this reporting year in places other than your CDP response?",
      guidance:
        "The integration of information on environmental issues into mainstream financial reporting is a regulatory requirement in some jurisdictions and is a TCFD recommendation. Data users wish to understand whether an organization includes or plans to include environmental information in their mainstream reports to facilitate their understanding of the organization’s response to environmental dependencies, impacts, risks, and opportunities.",
      response: "SDP135_88",
    },
    {
      topic: "Board oversight on Sustainability",
      subTopic: "Role of Board in Sustainability related aspects",
      slNo: "4.12.1",
      question:
        "Provide details on the information published about your organization’s response to environmental issues for this reporting year in places other than your CDP response. Please attach the publication.",
      guidance:
        "For transparency in corporate environmental reporting, organizations are encouraged to integrate non-financial metrics and data into mainstream financial reports. Data users seek to understand where and how organizations communicate their environmental strategies, their emissions figures, and their dependencies, impacts, risks, and opportunities, as well as whether these communications are in line with environmental disclosure standards or frameworks.",
      response: "SDP135_89",
    },
  ];

  const tableDataModuleFive = [
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1",
      question:
        "Which environmental issues are considered when conducting scenario analysis in your organization?",
      guidance:
        "Describe the specific environmental issues (e.g., climate change, biodiversity loss, water scarcity) included in your scenario analysis. Indicate how these issues were selected and their relevance to your organization’s operations, value chain, and strategy.",
      response: "SDP123_60",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1",
      question:
        "How does your organization apply scenario analysis to identify environment-related outcomes?",
      guidance:
        "Explain the methodology, models, or frameworks used in your scenario analysis. Highlight how the results inform strategic planning, risk management, or investment decisions.",
      response: "SDP123_61",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1",
      question:
        "How frequently does your organization carry out scenario analysis for environmental issues?",
      guidance:
        "Indicate whether the analysis is performed annually, biennially, or at other intervals. Explain the rationale for the chosen frequency and how it aligns with changes in environmental trends, regulations, and business priorities.",
      response: "SDP123_62",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1",
      question:
        "If scenario analysis is not used, what is the primary reason for this decision?",
      guidance:
        "Provide qualitative insights into barriers such as lack of expertise, data availability, financial resources, or perceived irrelevance. Include any plans to initiate scenario analysis in the future.",
      response: "SDP123_63",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1",
      question:
        "Can you explain why your organization has not adopted scenario analysis for environmental outcomes?",
      guidance:
        "Explain the strategic or operational considerations behind this decision. Include perspectives on alternative approaches used for environmental planning and how they compare to scenario analysis.",
      response: "SDP123_64",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1.1",
      question:
        "What environmental issue(s) does this scenario aim to analyze?",
      guidance:
        "Describe the main environmental challenge(s) addressed (e.g., climate change, biodiversity loss, water scarcity) and explain why these are relevant to your organization’s operations or strategy.",
      response: "SDP123_65",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1.1",
      question: "Which specific scenario has been used for this analysis?",
      guidance:
        "Provide the name and description of the scenario (e.g., IEA NZE2050, IPCC RCP 4.5), including its origin (organization or research body) and relevance.",
      response: "SDP123_66",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1.1",
      question:
        "Have Shared Socioeconomic Pathways (SSPs) been used in this scenario?",
      guidance:
        "State whether an SSP is applied, specify which SSP(s), and explain how it complements the scenario in modeling potential futures.",
      response: "SDP123_67",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1.1",
      question: "What approach was taken to develop or apply this scenario?",
      guidance:
        "Explain whether the scenario was internally developed, adapted from existing literature, or taken from recognized external sources, and outline the analytical or modeling method used.",
      response: "SDP123_68",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1.1",
      question:
        "What aspects of your organization or value chain does the scenario cover?",
      guidance:
        "Describe whether the coverage is global, regional, or site-specific, and clarify which parts of your operations or supply chain are included.",
      response: "SDP123_69",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1.1",
      question: "What types of risks are considered in this scenario?",
      guidance:
        "Identify whether the scenario addresses physical risks (acute/chronic), transition risks (policy, technology, market, reputation), or both, and why.",
      response: "SDP123_70",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1.1",
      question: "What is the temperature alignment of this scenario?",
      guidance:
        "Indicate the projected global temperature outcome (e.g., 1.5°C, 2°C, 4°C) and explain its significance for your business resilience and planning.",
      response: "SDP123_71",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1.1",
      question: "What is the reference year used for this scenario?",
      guidance:
        "Provide the baseline year from which impacts are measured, and explain its selection in relation to historical data or business milestones.",
      response: "SDP123_72",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1.1",
      question: "What timeframes does the scenario cover?",
      guidance:
        "Specify short-, medium-, and long-term periods considered, and explain how each timeframe informs decision-making and strategy.",
      response: "SDP123_73",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1.1",
      question: "What driving forces underpin the scenario’s projections?",
      guidance:
        "Outline key drivers such as technological change, policy developments, market trends, resource availability, or demographic shifts.",
      response: "SDP123_74",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1.1",
      question: "What key assumptions are made in this scenario?",
      guidance:
        "Describe the assumptions around economic growth, energy transition, consumer behavior, or other variables, and state why they are considered reasonable.",
      response: "SDP123_75",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1.1",
      question:
        "What uncertainties and constraints are recognized in the scenario?",
      guidance:
        "Identify limitations in data, modeling accuracy, or predictability, and discuss how these are managed in the analysis.",
      response: "SDP123_76",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1.1",
      question:
        "What is the rationale for selecting this scenario for your organization?",
      guidance:
        "Explain how the scenario aligns with strategic objectives, risk management needs, or compliance requirements, and why it is preferred over alternatives.",
      response: "SDP123_77",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1.2",
      question:
        "What environmental issue(s) were analyzed in your organization’s scenario analysis, and why were they selected?",
      guidance:
        "Describe the key environmental issue(s) that formed the focus of the scenario analysis, explain their relevance to your business, and outline the rationale for their selection.",
      response: "SDP123_78",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1.2",
      question:
        "Which scenario(s) and SSP(s) were used in your analysis, and what was your approach in applying them?",
      guidance:
        "Provide the names of the scenarios and any Shared Socioeconomic Pathways (SSPs) applied, explain why they were chosen, and detail the methodology or framework used to conduct the analysis.",
      response: "SDP123_79",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1.2",
      question:
        "What was the scope and coverage of the scenario analysis across your organization’s operations and value chain?",
      guidance:
        "Explain whether the analysis was conducted at the asset, business unit, regional, or company-wide level, and indicate the extent of geographical, operational, and value chain coverage.",
      response: "SDP123_80",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1.2",
      question:
        "What were the key outcomes of the scenario analysis, and how did they influence business strategy, financial planning, or risk management?",
      guidance:
        "Summarize the major findings, including identified risks and opportunities, and explain how these outcomes have informed strategic decisions, investment priorities, or resilience planning.",
      response: "SDP123_81",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.1.2",
      question:
        "What assumptions, uncertainties, and constraints were considered, and how might they affect the interpretation of your results?",
      guidance:
        "Detail the main assumptions underlying the scenario, the uncertainties involved, any constraints in data or scope, and how these factors may impact the robustness of your conclusions.",
      response: "SDP123_82",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.2",
      question:
        "Why does your organization not explicitly commit to cease all spending on and revenue generation from activities that contribute to fossil fuel expansion?",
      guidance:
        "Describe your rationale for continuing investment or revenue generation in fossil fuel-related activities. Include business, operational, or strategic considerations, transitional dependencies, and any mitigation measures in place.",
      response: "SDP123_83",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.2",
      question:
        "How does your organization collect feedback from shareholders on your climate transition plan, and how is this feedback used?",
      guidance:
        "Outline the channels (e.g., AGMs, surveys, direct consultations) and processes used to gather shareholder input. Explain how feedback is integrated into updates or revisions of the plan.",
      response: "SDP123_84",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.2",
      question:
        "What are the key assumptions and dependencies underpinning your climate transition plan?",
      guidance:
        "Provide the major economic, technological, policy, and market assumptions on which your plan is based. Mention critical dependencies such as renewable energy availability, regulatory changes, or carbon pricing.",
      response: "SDP123_85",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.2",
      question:
        "Which other environmental issues does your climate transition plan consider, and how are they addressed?",
      guidance:
        "Specify issues beyond climate change—such as biodiversity, water stewardship, waste management, or air quality—and explain the measures or targets integrated into the transition plan to address them.",
      response: "SDP123_86",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.2",
      question:
        "Why does your organization not have a climate transition plan that aligns with a 1.5°C scenario?",
      guidance:
        "Describe the main barriers, such as financial constraints, technological limitations, data availability, or strategic priorities. If relevant, indicate the steps being taken toward eventual alignment.",
      response: "SDP123_87",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.3",
      question:
        "How have environmental risks and/or opportunities influenced your organization’s strategy and/or financial planning?",
      guidance:
        "Describe the types of environmental risks (e.g., climate change impacts, resource scarcity, pollution regulations) and opportunities (e.g., renewable energy adoption, green product innovation) that are relevant to your business.",
      response: "SDP123_88",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.3",
      question:
        "If environmental risks and/or opportunities have not influenced your strategy and/or financial planning, what are the reasons?",
      guidance:
        "Clearly state why environmental considerations have not yet been integrated into strategic or financial decision-making.",
      response: "SDP123_89",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.3.1",
      question:
        "In which business areas have environmental risks and/or opportunities impacted your organization’s strategy?",
      guidance:
        "Identify the specific parts of your business (e.g., operations, supply chain, product development, marketing, finance) where environmental risks or opportunities have influenced strategic decisions. Include both core and supporting functions.",
      response: "SDP123_90",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.3.1",
      question:
        "What type of effect have these environmental risks and/or opportunities had on your strategy?",
      guidance:
        "Describe whether the effect was positive (opportunity-driven) or negative (risk-driven), and indicate if it led to strategy modification, reinforcement, expansion, or reduction in scope.",
      response: "SDP123_91",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.3.1",
      question:
        "Which environmental issues are relevant to the risks and/or opportunities affecting your strategy?",
      guidance:
        "Specify the environmental issues involved, such as climate change, water scarcity, biodiversity loss, pollution, waste management, or energy transition. Link them to the business areas they affect.",
      response: "SDP123_92",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.3.1",
      question:
        "How have these environmental risks and/or opportunities shaped your strategic decisions in the affected areas?",
      guidance:
        "Provide qualitative detail on changes in investment priorities, business models, operational practices, market positioning, or innovation initiatives. Explain the reasoning behind these strategic changes.",
      response: "SDP123_93",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.3.2",
      question:
        "Which financial planning elements have been affected by environmental risks and/or opportunities?",
      guidance:
        "Identify the specific areas of financial planning impacted (e.g., capital allocation, revenue forecasts, operating costs). This helps stakeholders understand where environmental factors are influencing your organization’s financial structure.",
      response: "SDP123_94",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.3.2",
      question:
        "What type of effect have these environmental risks and/or opportunities had on your financial planning elements?",
      guidance:
        "Specify whether the effect is positive, negative, or mixed, and clarify the nature of the impact (e.g., cost increase, revenue growth, risk mitigation benefits).",
      response: "SDP123_95",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.3.2",
      question:
        "Which environmental issues are relevant to the risks and/or opportunities affecting these financial planning elements?",
      guidance:
        "List the environmental drivers (e.g., climate change, resource scarcity, regulatory changes, biodiversity loss) and explain their link to the identified risks or opportunities.",
      response: "SDP123_96",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.3.2",
      question:
        "How have environmental risks and/or opportunities been incorporated into your financial planning process?",
      guidance:
        "Describe the approach, strategies, or adjustments made in financial planning to address environmental impacts, including any integration into long-term budgeting, investment decisions, or risk management frameworks.",
      response: "SDP123_97",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.4",
      question:
        "Does your organization identify spending and/or revenue that is aligned with its climate transition goals?",
      guidance:
        "This question assesses whether the organization tracks financial flows that support its climate transition. The identification should focus on activities, projects, or assets that contribute to climate change mitigation and adaptation.",
      response: "SDP123_98",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.4",
      question:
        "What methodology or framework does your organization use to assess the alignment of spending/revenue with its climate transition?",
      guidance:
        "Organizations should specify if they follow a recognized sustainable finance taxonomy, internal criteria, or other frameworks to determine alignment. This enhances transparency and credibility.",
      response: "SDP123_99",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.4",
      question:
        "At what level does your organization identify the alignment of spending/revenue with a sustainable finance taxonomy?",
      guidance:
        "Clarify whether the identification is done at the organizational, business unit, project, or asset level. The granularity of this assessment helps in measuring and demonstrating progress towards climate commitments.",
      response: "SDP123_100",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.4.1",
      question:
        "What methodology or framework do you use to assess alignment with your climate transition?",
      guidance:
        "Describe the assessment approach, e.g., EU Taxonomy, national taxonomy, internal framework, or third-party standard. Include criteria, metrics, and assessment frequency.",
      response: "SDP123_101",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.4.1",
      question:
        "Which taxonomy are you reporting under for your climate transition alignment?",
      guidance:
        "State the specific taxonomy (e.g., EU, ASEAN, national, or sector-specific). Clarify why it was chosen and its relevance to your sector and climate strategy.",
      response: "SDP123_102",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.4.1",
      question: "Under which objective(s) is your alignment being reported?",
      guidance:
        "Identify whether your objective relates to climate change mitigation, adaptation, or other sustainability goals within the chosen taxonomy.",
      response: "SDP123_103",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.4.1",
      question:
        "Are you reporting eligibility information for the selected objective(s)?",
      guidance:
        "Indicate whether you assess both eligibility and alignment or only alignment. Explain how you determine eligibility.",
      response: "SDP123_104",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.4.1",
      question:
        "What financial metric have you selected to measure climate transition alignment?",
      guidance:
        "Specify whether you use revenue, capital expenditure (CapEx), operational expenditure (OpEx), or other financial metrics. Explain why it was chosen.",
      response: "SDP123_105",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.4.1",
      question:
        "How do you determine the amount of your selected financial metric that is aligned in the reporting year?",
      guidance:
        "Outline the process for calculation, data sources used, and how the alignment figure is validated.",
      response: "SDP123_106",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.4.1",
      question:
        "How do you calculate the percentage share of your selected financial metric aligned in the reporting year?",
      guidance:
        "Provide details on the numerator and denominator used, and any assumptions or exclusions applied.",
      response: "SDP123_107",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.4.1",
      question:
        "What percentage share of your selected financial metric is planned to align by 2025?",
      guidance:
        "Describe targets, plans, and strategies for achieving this level of alignment.",
      response: "SDP123_108",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.4.1",
      question:
        "What percentage share of your selected financial metric is planned to align by 2030?",
      guidance:
        "Outline long-term alignment goals, transition pathways, and planned initiatives to reach them.",
      response: "SDP123_109",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.4.1",
      question:
        "How do you assess the percentage share of your financial metric that is taxonomy-eligible in the reporting year?",
      guidance:
        "Explain the process for eligibility screening and criteria used for categorization.",
      response: "SDP123_110",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.4.1",
      question:
        "How do you assess the percentage share of your financial metric that is taxonomy non-eligible in the reporting year?",
      guidance:
        "Describe reasons for non-eligibility, and whether there are plans to transition these activities towards eligibility.",
      response: "SDP123_111",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "What economic activity is being reported under the sustainable finance taxonomy?",
      guidance:
        "Describe the nature of the activity, its sector, and relevance to core operations.",
      response: "SDP124_63",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "Which sustainable finance taxonomy framework is being used for reporting?",
      guidance:
        "Specify the taxonomy (e.g., EU Taxonomy, national/regional) and version/year.",
      response: "SDP124_64",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question: "How is taxonomy alignment determined for this activity?",
      guidance: "Outline the criteria or methodology used to assess alignment.",
      response: "SDP124_65",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "What financial metrics are considered for measuring taxonomy eligibility and alignment?",
      guidance:
        "State whether turnover, CAPEX, OPEX, or other metrics are used and why.",
      response: "SDP124_66",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "Which types of substantial contribution are relevant to this activity?",
      guidance:
        "Indicate whether it contributes to climate mitigation, adaptation, or other objectives.",
      response: "SDP124_67",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "How do you define turnover for taxonomy-aligned activities in the reporting year?",
      guidance:
        "Provide a definition consistent with your financial reporting standards.",
      response: "SDP124_68",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "What proportion of turnover from this activity is considered taxonomy-aligned?",
      guidance: "Describe the process used to determine the proportion.",
      response: "SDP124_69",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "In what ways did taxonomy-aligned turnover contribute substantially to climate change mitigation?",
      guidance:
        "Explain the link between turnover activities and mitigation objectives.",
      response: "SDP124_70",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "What is the rationale for any taxonomy-eligible but not aligned turnover from this activity?",
      guidance:
        "Clarify why these revenues are eligible but not fully aligned.",
      response: "SDP124_71",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "Why has alignment not been assessed for certain taxonomy-eligible turnover?",
      guidance:
        "Mention data gaps, pending evaluations, or methodological issues.",
      response: "SDP124_72",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "How do you define CAPEX in the context of taxonomy-aligned activities?",
      guidance:
        "Use a definition aligned with accounting standards and sustainable finance reporting.",
      response: "SDP124_73",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "What proportion of CAPEX from this activity is taxonomy-aligned?",
      guidance: "Explain the methodology for identifying alignment.",
      response: "SDP124_74",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "How does taxonomy-aligned CAPEX contribute to climate change mitigation?",
      guidance: "Provide qualitative evidence of mitigation benefits.",
      response: "SDP124_75",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "How does taxonomy-aligned CAPEX contribute to climate change adaptation?",
      guidance: "Provide qualitative evidence of adaptation benefits.",
      response: "SDP124_76",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question: "Why is some CAPEX taxonomy-eligible but not aligned?",
      guidance:
        "Explain the reasons for partial compliance with alignment requirements.",
      response: "SDP124_77",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "Why has alignment not been assessed for certain taxonomy-eligible CAPEX?",
      guidance: "Mention any technical, regulatory, or data-related barriers.",
      response: "SDP124_78",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "How do you define OPEX in the context of taxonomy-aligned activities?",
      guidance:
        "State your definition consistent with financial and sustainability practices.",
      response: "SDP124_79",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "What proportion of OPEX from this activity is taxonomy-aligned?",
      guidance: "Explain how alignment is measured.",
      response: "SDP124_80",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "In what ways did taxonomy-aligned OPEX contribute to climate change mitigation?",
      guidance:
        "Describe operational activities that help reduce GHG emissions.",
      response: "SDP124_81",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "In what ways did taxonomy-aligned OPEX contribute to climate change adaptation?",
      guidance:
        "Describe operational activities that improve climate resilience.",
      response: "SDP124_82",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question: "Why is some OPEX taxonomy-eligible but not aligned?",
      guidance: "Identify gaps in technical compliance or other barriers.",
      response: "SDP124_83",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "Why has alignment not been assessed for certain taxonomy-eligible OPEX?",
      guidance:
        "Mention reasons such as insufficient information or ongoing assessments.",
      response: "SDP124_84",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "What calculation methodology was used to determine taxonomy eligibility and alignment?",
      guidance:
        "Provide a narrative of formulas, benchmarks, or tools applied.",
      response: "SDP124_85",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question: "Which substantial contribution criteria have been met?",
      guidance:
        "List the relevant criteria and explain evidence supporting compliance.",
      response: "SDP124_86",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "What analysis was undertaken to confirm substantial contribution?",
      guidance: "Describe steps, data sources, and experts consulted.",
      response: "SDP124_87",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question: "Have ‘Do No Significant Harm’ (DNSH) requirements been met?",
      guidance: "State compliance status and the approach used to assess it.",
      response: "SDP124_88",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question: "What analysis was conducted to confirm DNSH compliance?",
      guidance:
        "Provide details on risk assessments and environmental impact evaluations.",
      response: "SDP124_89",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question: "Have minimum safeguards compliance requirements been met?",
      guidance:
        "Indicate compliance with labor, human rights, and governance safeguards.",
      response: "SDP124_90",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "What processes are in place to ensure ongoing compliance with minimum safeguards?",
      guidance: "Explain monitoring systems, audits, or certifications used.",
      response: "SDP124_91",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "What internal or external verification has been carried out on taxonomy reporting?",
      guidance:
        "State if independent auditors or internal teams have reviewed the data.",
      response: "SDP124_92",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "What challenges did you face in taxonomy eligibility and alignment assessment?",
      guidance:
        "Mention data gaps, inconsistent definitions, or evolving taxonomy criteria.",
      response: "SDP124_93",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.2",
      question:
        "What supporting evidence can you provide to substantiate your taxonomy reporting?",
      guidance:
        "List types of documentation, reports, and certifications that support your claims.",
      response: "SDP124_94",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.3",
      question:
        "What are the details of your organization’s minimum safeguards analysis related to taxonomy alignment?",
      guidance:
        "Explain the processes, standards, or checks used to ensure compliance with minimum safeguards outlined in the relevant sustainable finance taxonomy. Include any ethical, social, or governance considerations.",
      response: "SDP124_95",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.3",
      question:
        "Please provide additional contextual information relevant to your organization’s taxonomy alignment.",
      guidance:
        "Describe any background, circumstances, methodologies, or sector-specific factors that help data users interpret your taxonomy alignment disclosures.",
      response: "SDP124_96",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.3",
      question:
        "Will you be providing verification/assurance information relevant to your taxonomy alignment in question 13.1?",
      guidance:
        "Indicate whether third-party or internal verification/assurance will be provided. This helps users assess the credibility and accuracy of your taxonomy alignment data.",
      response: "SDP124_97",
    },
    {
      topic: "Climate Change",
      subTopic: "Transitional planning",
      slNo: "5.4.3",
      question:
        "Please explain why you will not be providing verification/assurance information relevant to your taxonomy alignment in question 13.1.",
      guidance:
        "If no assurance will be provided, explain the reasons, such as resource constraints, timing, lack of requirement, or other operational factors.",
      response: "SDP124_98",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.5",
      question:
        "Does your organization invest in research and development (R&D) of low-carbon products or services related to your sector activities?",
      guidance:
        "Investment in R&D of new low-carbon technologies is needed to mitigate transition risk. According to the TCFD recommendations, the level of investment provides an indication of how exposed future earning capacity is to climate risks.",
      response: "SDP126_169",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.5.7",
      question:
        "What technology areas has your organization focused on for low-carbon R&D in the last three years?",
      guidance:
        "Describe each technology area relevant to your sector, specifying if it addresses emissions reduction, energy efficiency, renewable energy, or other low-carbon solutions.",
      response: "SDP126_170",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.5.7",
      question:
        "At what stage of development were these technologies during the reporting year?",
      guidance:
        "Indicate whether the technology was in the concept, prototype, pilot, or commercialization phase, and explain any major milestones achieved.",
      response: "SDP126_171",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.5.7",
      question:
        "How does your average percentage of total R&D investment in these technology areas over the last three years reflect your organization’s low-carbon priorities?",
      guidance:
        "Provide a qualitative assessment of whether the proportion of low-carbon R&D investment is increasing, stable, or decreasing, and the reasons behind the trend.",
      response: "SDP126_172",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.5.7",
      question:
        "How does your average planned percentage of R&D investment over the next five years support your low-carbon transition?",
      guidance:
        "Explain forward-looking investment intentions and how they are linked to your climate strategy and business growth plans.",
      response: "SDP126_173",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.5.7",
      question:
        "How are these R&D investments aligned with your climate commitments and/or climate transition plan?",
      guidance:
        "Link the R&D work to specific emission reduction targets, net-zero goals, or adaptation strategies. Include references to internal policies or frameworks guiding these investments.",
      response: "SDP126_174",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.5.7",
      question:
        "What qualitative benefits or opportunities do you expect from your low-carbon R&D in terms of resilience, competitiveness, or market positioning?",
      guidance:
        "Discuss expected non-financial outcomes such as brand reputation, stakeholder confidence, regulatory compliance, and long-term business viability.",
      response: "SDP126_175",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.5.8",
      question:
        "What specific low-carbon R&D activities has your organization undertaken in the transport sector over the last three years?",
      guidance:
        "Describe the nature of R&D projects, their objectives, and relevance to low-carbon transport solutions.",
      response: "SDP126_176",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.5.8",
      question:
        "Which technology areas have been the focus of your low-carbon transport R&D?",
      guidance:
        "Indicate the targeted technologies (e.g., electric mobility, hydrogen fuel cells, sustainable fuels) and explain why they were prioritized.",
      response: "SDP126_177",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.5.8",
      question:
        "At what stage of development were these low-carbon transport R&D projects during the reporting year?",
      guidance:
        "Provide context on whether projects are in research, prototype, pilot, or commercialization phase.",
      response: "SDP126_178",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.5.8",
      question:
        "How is your R&D investment in low-carbon transport technologies aligned with your climate commitments and/or transition plan?",
      guidance:
        "Explain how these R&D activities contribute to your decarbonization targets, net-zero goals, or sector-specific emission reduction plans.",
      response: "SDP126_179",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.5.8",
      question:
        "What are the main drivers influencing your organization’s decision to invest in these specific low-carbon transport technologies?",
      guidance:
        "Include considerations such as regulatory requirements, market trends, stakeholder expectations, or technological advancements.",
      response: "SDP126_180",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.5.8",
      question:
        "What challenges or barriers has your organization faced in implementing low-carbon transport R&D initiatives?",
      guidance:
        "Outline issues like funding constraints, technological limitations, supply chain challenges, or lack of infrastructure.",
      response: "SDP126_181",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.6",
      question:
        "Describe your organization’s strategic rationale for investing in each fossil fuel expansion activity.",
      guidance:
        "Explain why these expansion projects were initiated, including market demand, regulatory environment, or strategic positioning. Highlight alignment or deviation from global climate goals (e.g., IEA NZE).",
      response: "SDP126_182",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.6",
      question:
        "Outline the decision-making process used to approve CAPEX for fossil fuel expansion projects.",
      guidance:
        "Describe governance mechanisms, internal approvals, and risk assessment processes used to sanction these investments. Include sustainability and climate risk considerations.",
      response: "SDP126_183",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.6",
      question:
        "Explain how your CAPEX allocation for fossil fuel expansion aligns with your long-term energy transition strategy.",
      guidance:
        "Discuss how current and planned investments fit within net-zero commitments or renewable energy transition plans. Highlight measures taken to reduce dependency on fossil fuels.",
      response: "SDP126_184",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.6",
      question:
        "Detail the environmental and social impact assessments conducted before approving expansion activities.",
      guidance:
        "Provide an overview of any EIA, community consultation, or biodiversity assessments carried out, and how they influenced CAPEX decisions.",
      response: "SDP126_185",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.6",
      question:
        "Describe the key assumptions and scenarios used to forecast CAPEX for the next 5 years.",
      guidance:
        "Explain modelling parameters, commodity price forecasts, regulatory trends, and demand outlooks that shaped your CAPEX projections.",
      response: "SDP126_186",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.7",
      question:
        "What are your organization’s key power generation sources and their strategic importance in your current energy mix?",
      guidance:
        "Identify each primary source (e.g., coal, gas, solar, wind, hydro, nuclear) and explain its role in meeting demand, regulatory compliance, and long-term energy strategy.",
      response: "SDP126_187",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.7",
      question:
        "How does your CAPEX allocation for each source in the reporting year align with your low-carbon transition goals?",
      guidance:
        "Discuss whether current-year investments support or hinder decarbonization targets, and highlight any shift towards renewable or cleaner sources.",
      response: "SDP126_188",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.7",
      question:
        "What factors influence your CAPEX planning for the next 5 years across different power generation sources?",
      guidance:
        "Describe drivers such as policy changes, technology costs, demand forecasts, financing availability, and climate-related risks or opportunities.",
      response: "SDP126_189",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.7",
      question:
        "How does the timing of your most recent power plant approvals reflect your technology transition strategy?",
      guidance:
        "Provide context on whether new plant approvals are aligned with emerging low-carbon pathways or lock in high-emission technologies.",
      response: "SDP126_190",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.7",
      question:
        "What assumptions and methodologies underpin your CAPEX calculations for current and planned investments?",
      guidance:
        "Explain data sources, inflation/discount rates, asset life estimates, technology cost assumptions, and how uncertainty is addressed.",
      response: "SDP126_191",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.7",
      question:
        "How does your planned CAPEX mix enhance resilience to climate-related risks and market shifts?",
      guidance:
        "Outline how diversification, flexible generation technologies, or renewable integration reduces vulnerability to policy, market, or physical climate risks.",
      response: "SDP126_192",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.7.1",
      question:
        "What strategic factors influenced the inclusion of specific products and services in your current CAPEX plan?",
      guidance:
        "Explain how market trends, regulatory requirements, technological developments, or stakeholder expectations shaped the selection of products and services.",
      response: "SDP126_193",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.7.1",
      question:
        "How do these planned products and services support your organization’s low-carbon transition objectives?",
      guidance:
        "Describe alignment with decarbonization strategies, renewable energy goals, or broader sustainability commitments.",
      response: "SDP126_194",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.7.1",
      question:
        "What is the anticipated impact of these investments on your organization’s long-term competitiveness and profitability?",
      guidance:
        "Provide insights on expected business growth, operational efficiency, and market positioning benefits.",
      response: "SDP126_195",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.7.1",
      question:
        "How will the planned CAPEX contribute to innovation or adoption of emerging technologies in your operations?",
      guidance:
        "Detail expected advancements in digitalization, smart grids, energy storage, or other emerging solutions.",
      response: "SDP126_196",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.7.1",
      question:
        "What challenges or risks could affect the execution of your CAPEX plan for these products and services?",
      guidance:
        "Highlight potential regulatory, financial, technological, or supply chain risks and proposed mitigation strategies.",
      response: "SDP126_197",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.8",
      question:
        "Disclose the breakeven price (US$/BOE) required for cash neutrality during the reporting year, i.e. where cash flow from operations covers CAPEX and dividends paid / share buybacks.",
      guidance:
        "The intention of this question is to provide investors with the average breakeven cost(s) of your current production. This is useful to investors as it provides a measure to compare cash provided by operating activities after deduction of capital expenditures and dividends paid/share buybacks across periods on a consistent basis.",
      response: "SDP126_198",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.9",
      question:
        "What factors contributed to the observed change in your organization’s water-related CAPEX during the reporting year?",
      guidance:
        "Describe key drivers such as regulatory compliance, efficiency improvements, technology upgrades, or infrastructure expansions that influenced the capital expenditure change.",
      response: "SDP126_199",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.9",
      question:
        "How does your organization anticipate its water-related CAPEX to change in the next reporting year, and why?",
      guidance:
        "Provide a qualitative assessment of planned projects, strategic initiatives, or policy changes expected to influence future capital spending on water-related assets.",
      response: "SDP126_200",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.9",
      question:
        "What factors influenced the change in your organization’s water-related OPEX during the reporting year?",
      guidance:
        "Include details such as increased water tariffs, higher treatment costs, maintenance requirements, or operational process changes that impacted expenditure.",
      response: "SDP126_201",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.9",
      question:
        "How does your organization expect its water-related OPEX to trend in the next reporting year, and what are the key drivers?",
      guidance:
        "Discuss anticipated operational changes, efficiency programs, or external factors (e.g., climate impacts, supplier pricing) affecting future operating expenditure.",
      response: "SDP126_202",
    },
    {
      topic: "Climate Change",
      subTopic: "Reduction of GHG Emissions",
      slNo: "5.9",
      question:
        "How do your reported CAPEX and OPEX water-related trends align with your water risk management strategies and business opportunities?",
      guidance:
        "Explain the connection between spending trends and broader organizational goals, including risk mitigation, sustainability commitments, or growth plans.",
      response: "SDP126_203",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10",
      question:
        "Does your organization currently use an internal price for any environmental externalities (e.g., carbon, water, biodiversity impacts)?",
      guidance:
        "Explain that internal pricing involves assigning a monetary value to environmental impacts to influence decision-making, investments, and risk assessment.",
      response: "SDP123_112",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10",
      question:
        "Which specific environmental externalities are priced by your organization (e.g., CO₂ emissions, water use, waste generation)?",
      guidance:
        "Provide a list of applicable externalities and ensure the response reflects the scope, boundaries, and units of measurement used for pricing.",
      response: "SDP123_113",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10",
      question:
        "What is the primary reason for not applying internal pricing to environmental externalities?",
      guidance:
        "If no internal pricing is used, state whether it is due to lack of data, low perceived risk, regulatory absence, cost concerns, or strategic priorities.",
      response: "SDP123_114",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10",
      question:
        "Please explain why your organization does not price environmental externalities.",
      guidance:
        "Offer qualitative insights into organizational strategy, market conditions, or internal challenges preventing adoption of internal pricing mechanisms.",
      response: "SDP123_115",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10",
      question:
        "Apart from the primary environmental externalities, does your organization price any other impacts (e.g., ecosystem services, air pollution)?",
      guidance:
        "Clarify if additional environmental factors are monetized and how they influence business decisions.",
      response: "SDP123_116",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10",
      question:
        "Please provide further details on the methodology, assumptions, or frameworks used for pricing environmental externalities.",
      guidance:
        "Describe calculation methods, data sources, scenario planning approaches, and whether global or regional benchmarks are applied.",
      response: "SDP123_117",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.1",
      question:
        "What factors are considered when determining your internal carbon price?",
      guidance:
        "Describe key influencing elements such as carbon market trends, regulatory requirements, corporate climate targets, industry benchmarks, operational costs, and stakeholder expectations.",
      response: "SDP123_118",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.1",
      question:
        "What calculation methodology is used to determine your internal carbon price?",
      guidance:
        "Explain whether the methodology is market-based, shadow pricing, cost-based, or science-based. Include any reference to established frameworks or protocols.",
      response: "SDP123_119",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.1",
      question:
        "What assumptions are made in determining the internal carbon price?",
      guidance:
        "Mention assumptions related to future carbon market trends, inflation, emissions projections, policy changes, or technological advancements.",
      response: "SDP123_120",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.1",
      question:
        "Which scopes (Scope 1, Scope 2, Scope 3) are covered by your internal carbon pricing mechanism?",
      guidance:
        "Specify the emissions categories included, the rationale for their inclusion, and any exclusions with reasons.",
      response: "SDP123_121",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.1",
      question:
        "What pricing approach do you use to account for spatial variance?",
      guidance:
        "Describe whether pricing differs across geographies due to regulatory differences, carbon market prices, or cost of abatement measures.",
      response: "SDP123_122",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.1",
      question:
        "How and why is the internal carbon price differentiated by location or business unit?",
      guidance:
        "Provide justification for different pricing levels in various operational regions or units, considering local carbon costs and risks.",
      response: "SDP123_123",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.1",
      question:
        "What pricing approach do you use to account for temporal variance?",
      guidance:
        "Describe whether the internal price changes over time (e.g., annually escalated price, step-change approach) and the factors influencing timing.",
      response: "SDP123_124",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.1",
      question:
        "How do you expect the internal carbon price to change over time?",
      guidance:
        "Indicate planned price adjustments based on climate goals, regulatory forecasts, and alignment with decarbonization pathways.",
      response: "SDP123_125",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.1",
      question:
        "What is the minimum actual internal carbon price used (currency per metric ton CO₂e)?",
      guidance:
        "Explain how the lowest price was set, its purpose, and contexts where it is applied.",
      response: "SDP123_126",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.1",
      question:
        "What is the maximum actual internal carbon price used (currency per metric ton CO₂e)?",
      guidance:
        "Describe the rationale for setting the upper price level and the conditions that trigger its application.",
      response: "SDP123_127",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.1",
      question:
        "In which business decision-making processes is the internal carbon price applied?",
      guidance:
        "Provide examples such as capital investment decisions, procurement, supply chain, project feasibility, and risk assessments.",
      response: "SDP123_128",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.1",
      question:
        "Is the use of an internal carbon price mandatory within your business decision-making processes?",
      guidance:
        "State whether it is compulsory or voluntary, and outline governance structures enforcing it.",
      response: "SDP123_129",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.1",
      question:
        "What percentage of total emissions in the reporting year is covered by the internal carbon price?",
      guidance:
        "Provide the scope and rationale for coverage percentage, and note any plans to expand it.",
      response: "SDP123_130",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.1",
      question:
        "How is the pricing approach monitored and evaluated to ensure it achieves objectives?",
      guidance:
        "Describe monitoring tools, KPIs, frequency of review, responsibility assignment, and links to climate targets.",
      response: "SDP123_131",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.2",
      question:
        "What type of internal pricing scheme does your organization use for water?",
      guidance:
        "Describe whether the pricing scheme is fixed, tiered, market-linked, shadow price, or based on full-cost recovery.",
      response: "SDP123_132",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.2",
      question:
        "What are the key objectives for implementing an internal water price?",
      guidance:
        "Explain goals such as promoting efficiency, cost recovery, risk management, sustainability, or compliance.",
      response: "SDP123_133",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.2",
      question:
        "Are factors beyond the current market price considered in your internal water price?",
      guidance:
        "Indicate inclusion of opportunity costs, scarcity value, environmental impacts, or social costs.",
      response: "SDP123_134",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.2",
      question:
        "What factors are considered when determining the internal water price?",
      guidance:
        "List parameters such as extraction costs, treatment costs, infrastructure depreciation, scarcity index, or regulatory charges.",
      response: "SDP123_135",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.2",
      question:
        "What calculation methodology and assumptions are used to determine the internal water price?",
      guidance:
        "Provide details on formulas, data sources, discount rates, water demand forecasts, or baseline consumption assumptions.",
      response: "SDP123_136",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.2",
      question:
        "Which stages of your value chain are covered by the internal water pricing?",
      guidance:
        "Mention whether it applies to production, supply chain, distribution, or customer engagement.",
      response: "SDP123_137",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.2",
      question:
        "How is spatial variance incorporated into your pricing approach?",
      guidance:
        "Describe geographic or site-specific price differentiation based on local scarcity or regulatory conditions.",
      response: "SDP123_138",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.2",
      question: "Why and how is the price differentiated across locations?",
      guidance:
        "Explain rationale such as water stress levels, operational dependency, or alternative water sources.",
      response: "SDP123_139",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.2",
      question:
        "How is temporal variance incorporated into your pricing approach?",
      guidance:
        "Describe seasonal or time-based pricing adjustments due to demand patterns or water availability.",
      response: "SDP123_140",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.2",
      question:
        "How do you expect the internal water price to change over time?",
      guidance:
        "Share projections based on climate change impacts, regulatory changes, inflation, or technological improvements.",
      response: "SDP123_141",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.2",
      question:
        "What is the minimum actual price applied internally (per cubic meter)?",
      guidance:
        "Provide the lowest price used, with context on why this is set.",
      response: "SDP123_142",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.2",
      question:
        "What is the maximum actual price applied internally (per cubic meter)?",
      guidance:
        "Provide the highest price used, with context on why this is set.",
      response: "SDP123_143",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.2",
      question:
        "In which business decision-making processes is the internal water price applied?",
      guidance:
        "Mention applications in capital planning, procurement, product pricing, or risk assessment.",
      response: "SDP123_144",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.2",
      question:
        "Is the internal water price mandatory within your decision-making processes?",
      guidance:
        "State whether it is a required element or optional consideration in decision-making.",
      response: "SDP123_145",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.2",
      question:
        "Is your pricing approach monitored and evaluated to ensure objectives are met?",
      guidance:
        "Explain whether performance tracking and periodic review are in place.",
      response: "SDP123_146",
    },
    {
      topic: "Climate Change",
      subTopic: "Risks and opportunities",
      slNo: "5.10.2",
      question:
        "How is the pricing approach monitored and evaluated to achieve objectives?",
      guidance:
        "Provide monitoring frequency, performance metrics, review mechanisms, and responsible teams.",
      response: "SDP123_147",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11",
      question:
        "Which value chain stakeholders does your organization engage with on environmental issues?",
      guidance:
        "Identify key groups such as suppliers, distributors, customers, contractors, and partners. Include both upstream and downstream stakeholders.",
      response: "SDP155_27",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11",
      question:
        "How does your organization engage with these stakeholders on environmental issues?",
      guidance:
        "Describe engagement methods (e.g., supplier training, environmental audits, joint projects, reporting requirements). Specify whether engagement is ongoing, ad-hoc, or formalized.",
      response: "SDP155_28",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11",
      question:
        "What specific environmental issues are covered during these engagements?",
      guidance:
        "Mention focus areas like climate change, energy efficiency, waste reduction, water management, biodiversity, or sustainable sourcing.",
      response: "SDP155_29",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11",
      question:
        "What is the primary reason for not engaging with certain value chain stakeholders on environmental issues?",
      guidance:
        "Provide rationale such as lack of influence, resource constraints, low perceived impact, or absence of relevant issues.",
      response: "SDP155_30",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11",
      question:
        "Can you explain why engagement with these stakeholders on environmental issues is not currently in place?",
      guidance:
        "Give detailed explanation covering operational, strategic, or market-related barriers, and specify if there are plans to address them.",
      response: "SDP155_31",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11",
      question:
        "What future plans or commitments exist to initiate or expand engagement on environmental issues within the value chain?",
      guidance:
        "Share strategies, timelines, and intended outcomes for new or enhanced value chain environmental engagement programs.",
      response: "SDP155_32",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.1",
      question:
        "What environmental issues are covered in your supplier assessment process?",
      guidance:
        "Describe the environmental aspects considered (e.g., water usage, carbon emissions, biodiversity impact, pollution). Clarify if the coverage is sector-specific or applies to all suppliers.",
      response: "SDP155_33",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.1",
      question:
        "How does your organization assess supplier dependencies and/or impacts on the environment?",
      guidance:
        "Explain the methodology used (e.g., surveys, audits, third-party evaluations, life cycle assessments) and how data is collected and verified.",
      response: "SDP155_34",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.1",
      question:
        "What criteria are used to evaluate supplier environmental dependencies and/or impacts?",
      guidance:
        "Outline the parameters (e.g., environmental risk score, compliance with environmental laws, certifications like ISO 14001, performance against sustainability KPIs).",
      response: "SDP155_35",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.1",
      question:
        "How do you determine the percentage of Tier 1 suppliers assessed for environmental dependencies/impacts?",
      guidance:
        "Describe the process for calculating the percentage, including the scope, data sources, and frequency of assessment.",
      response: "SDP155_36",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.1",
      question:
        "What threshold is defined to classify suppliers as having substantive environmental dependencies and/or impacts?",
      guidance:
        "Specify how the threshold is determined (e.g., quantitative score, risk level, non-compliance incidents) and why it is considered significant.",
      response: "SDP155_37",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.1",
      question:
        "How do you measure the percentage of Tier 1 suppliers meeting the threshold for substantive environmental dependencies/impacts?",
      guidance:
        "Explain the calculation method, referencing the assessment criteria and how often it is updated.",
      response: "SDP155_38",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.1",
      question:
        "How do you record and report the number of Tier 1 suppliers meeting the substantive environmental impact threshold?",
      guidance:
        "Detail the reporting mechanism, systems/tools used, and whether results are disclosed publicly or internally only.",
      response: "SDP155_39",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.2",
      question:
        "Which environmental issues are included when prioritizing suppliers for engagement?",
      guidance:
        "Specify whether you focus on climate change, water use, waste management, biodiversity, deforestation, etc., and why these are chosen.",
      response: "SDP155_40",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.2",
      question:
        "How does your organization determine which suppliers to prioritize for engagement on environmental issues?",
      guidance:
        "Describe the methodology or approach, such as spend analysis, supplier location, environmental risk exposure, or operational impact.",
      response: "SDP155_41",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.2",
      question:
        "What specific criteria are used to decide supplier prioritization for environmental engagement?",
      guidance:
        "Include examples like GHG emissions levels, compliance with environmental standards, product category impact, or supplier performance ratings.",
      response: "SDP155_42",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.2",
      question:
        "If no supplier prioritization is conducted, what are the main reasons?",
      guidance:
        "Explain barriers such as lack of data, limited resources, early-stage program development, or equal engagement across all suppliers.",
      response: "SDP155_43",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.2",
      question:
        "Please explain your supplier prioritization process and its expected benefits for environmental outcomes.",
      guidance:
        "Outline the intended impacts, such as reducing emissions in the value chain, improving resource efficiency, or driving innovation in sustainable products.",
      response: "SDP155_44",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.3",
      question:
        "What types of clients are included in your environmental engagement strategy?",
      guidance:
        "Specify whether clients are corporate, institutional, SME, retail, or other categories. Include sectoral or geographic segmentation if relevant.",
      response: "SDP155_45",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.3",
      question:
        "Which environmental issues are addressed through your engagement strategy?",
      guidance:
        "Outline the specific focus areas (e.g., climate change, biodiversity, deforestation, water use, waste management, energy efficiency).",
      response: "SDP155_46",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.3",
      question:
        "What type of engagement do you undertake and what are the details of these engagements?",
      guidance:
        "Describe whether engagements are one-on-one, workshops, webinars, sectoral initiatives, or joint projects, and provide examples.",
      response: "SDP155_47",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.3",
      question:
        "What percentage of client-associated Scope 3 emissions are covered by your engagement activities?",
      guidance:
        "Relate this percentage to the total Scope 3 emissions reported under question 12.1.1. Indicate the methodology for calculating coverage.",
      response: "SDP155_48",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.3",
      question:
        "What percentage of your portfolio (by value) is covered under the environmental engagement strategy?",
      guidance:
        "Provide details of portfolio coverage and any criteria used for inclusion or exclusion.",
      response: "SDP155_49",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.3",
      question:
        "What is the rationale for selecting the current coverage of clients?",
      guidance:
        "Explain selection criteria such as emissions intensity, strategic importance, willingness to engage, or sector risk profile.",
      response: "SDP155_50",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.3",
      question:
        "How do you communicate your engagement strategy to clients and/or the public?",
      guidance:
        "Describe the communication channels such as sustainability reports, client newsletters, annual meetings, or dedicated microsites.",
      response: "SDP155_51",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.3",
      question:
        "Can you provide a copy of your engagement strategy or related policy document?",
      guidance:
        "Indicate whether an internal or public document exists, and attach or provide a link if possible.",
      response: "SDP155_52",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.3",
      question:
        "Which staff in your organization carry out environmental engagement with clients?",
      guidance:
        "Detail roles such as relationship managers, ESG specialists, investment analysts, or sustainability officers.",
      response: "SDP155_53",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.3",
      question:
        "What roles do individuals at the portfolio organizations play in the engagement process?",
      guidance:
        "Specify whether you engage with CEOs, CFOs, sustainability managers, operational teams, or board members.",
      response: "SDP155_54",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.3",
      question:
        "What measurable effects or outcomes have resulted from your engagement activities?",
      guidance:
        "Describe KPIs such as number of clients setting SBTi targets, emissions reductions achieved, or improved ESG ratings.",
      response: "SDP155_55",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.3",
      question:
        "What escalation process do you follow when client engagement does not lead to progress?",
      guidance:
        "Outline the steps taken, such as increasing frequency of dialogue, involving senior leadership, adjusting investment terms, or divesting.",
      response: "SDP155_56",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.3",
      question: "How would you describe your escalation process in detail?",
      guidance:
        "Provide a step-by-step narrative including timeframes, triggers for escalation, and ultimate consequences.",
      response: "SDP155_57",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.4",
      question:
        "What environmental issues are covered by your engagement strategy with investees?",
      guidance:
        "Specify the thematic focus (e.g., climate change, biodiversity, pollution prevention, water management) and explain why these were prioritized.",
      response: "SDP155_58",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.4",
      question:
        "What type of engagement do you conduct and what are the key details?",
      guidance:
        "Outline methods (e.g., direct dialogue, shareholder resolutions, collaborative initiatives) and frequency, including examples of past engagements.",
      response: "SDP155_59",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.4",
      question:
        "How do you determine the % of Scope 3 investees’ associated emissions covered by your engagement?",
      guidance:
        "Explain methodology, data sources, and any assumptions used to calculate coverage.",
      response: "SDP155_60",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.4",
      question:
        "What percentage of your investment portfolio (Asset Managers) is covered by this engagement strategy?",
      guidance:
        "Provide qualitative reasoning behind the proportion covered, noting portfolio characteristics or constraints.",
      response: "SDP155_61",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.4",
      question:
        "What percentage of your investment portfolio (Asset Owners) is covered by this engagement strategy?",
      guidance:
        "Similar to the above, but from an asset ownership perspective, considering investment mandates and governance.",
      response: "SDP155_62",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.4",
      question:
        "What is your rationale for the coverage of your engagement strategy?",
      guidance:
        "Describe strategic factors, risk prioritization, influence potential, and alignment with sustainability commitments.",
      response: "SDP155_63",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.4",
      question:
        "How do you communicate your engagement strategy to your investees?",
      guidance:
        "Mention communication channels (e.g., formal letters, meetings, ESG briefings) and key messages.",
      response: "SDP155_64",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.4",
      question:
        "How do you communicate your engagement strategy to the public?",
      guidance:
        "Include public disclosure methods (e.g., sustainability reports, websites, investor briefings, press releases).",
      response: "SDP155_65",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.4",
      question:
        "Do you have a documented engagement strategy, and can you describe its key components?",
      guidance:
        "Provide an overview of your policy document, including objectives, scope, timelines, and review mechanisms.",
      response: "SDP155_66",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.4",
      question:
        "Which staff in your organization carry out the engagement activities?",
      guidance:
        "Identify internal roles, departments, or teams (e.g., ESG analysts, investment managers) and their responsibilities.",
      response: "SDP155_67",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.4",
      question:
        "Which roles at portfolio organizations do you typically engage with?",
      guidance:
        "Specify targeted decision-makers (e.g., board members, sustainability officers, CFOs) and why they are chosen.",
      response: "SDP155_68",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.4",
      question:
        "How do you measure the effect and success of your engagement efforts?",
      guidance:
        "Describe qualitative and quantitative indicators (e.g., policy changes, target setting, improved disclosures).",
      response: "SDP155_69",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.4",
      question:
        "What is your escalation process when engagement dialogue is not effective?",
      guidance:
        "Outline steps such as collaborative engagement, voting against directors, divestment, or public statements.",
      response: "SDP155_70",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.5",
      question:
        "What specific environmental issues do your suppliers need to address as part of your purchasing process?",
      guidance:
        "Identify and describe the environmental focus areas (e.g., waste management, emissions reduction, resource efficiency, biodiversity protection) that are embedded in supplier requirements.",
      response: "SDP155_71",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.5",
      question:
        "Do you require suppliers to meet specific environmental requirements related to these issues?",
      guidance:
        "Explain if these requirements are mandatory, whether they align with international standards, and how compliance is verified (e.g., audits, certifications, declarations).",
      response: "SDP155_72",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.5",
      question:
        "Is there a formal policy or procedure in place for addressing supplier non-compliance with environmental requirements?",
      guidance:
        "Describe the escalation process, corrective action plans, and consequences (e.g., warnings, probation, contract termination) for suppliers who fail to meet environmental criteria.",
      response: "SDP155_73",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.5",
      question:
        "Please provide any additional comments on how environmental requirements are integrated into your supplier engagement strategy.",
      guidance:
        "Include details on capacity building, training, supplier collaboration programs, and how environmental performance influences supplier selection and retention.",
      response: "SDP155_74",
    },

    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.6",
      question:
        "What are the key environmental issues considered in your supplier selection process?",
      guidance:
        "Identify main focus areas such as emissions, waste management, water usage, biodiversity, or chemical management.",
      response: "SDP155_75",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.6",
      question:
        "Describe the specific environmental requirements your suppliers must meet.",
      guidance:
        "Outline the standards, certifications, or policies suppliers are required to follow (e.g., ISO 14001, REACH, FSC).",
      response: "SDP155_76",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.6",
      question:
        "How are these environmental requirements communicated to suppliers?",
      guidance:
        "Mention methods such as contracts, supplier codes of conduct, onboarding documents, or training sessions.",
      response: "SDP155_77",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.6",
      question:
        "What mechanisms are in place to monitor supplier compliance with environmental requirements?",
      guidance:
        "Provide examples like audits, self-assessments, third-party verification, or regular reporting.",
      response: "SDP155_78",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.6",
      question:
        "How does your organization assess environmental risks in the supply chain?",
      guidance:
        "Explain processes such as supplier risk mapping, site visits, or environmental impact assessments.",
      response: "SDP155_79",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.6",
      question:
        "Describe how environmental requirements are integrated into procurement contracts.",
      guidance:
        "Include clauses, mandatory certifications, or sustainability-linked performance conditions.",
      response: "SDP155_80",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.6",
      question:
        "What steps are taken when suppliers are found to be non-compliant with environmental requirements?",
      guidance:
        "Provide details of corrective action plans, timelines for improvement, or potential termination of contracts.",
      response: "SDP155_81",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.6",
      question:
        "How are non-compliant suppliers engaged to achieve compliance?",
      guidance:
        "Explain engagement measures such as capacity building, training, technical assistance, or collaboration programs.",
      response: "SDP155_82",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.6",
      question:
        "How does your organization track progress of suppliers working towards compliance?",
      guidance:
        "Mention tracking systems, follow-up audits, or supplier scorecards.",
      response: "SDP155_83",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.6",
      question:
        "How are environmental requirements adapted for suppliers with significant environmental impacts?",
      guidance:
        "Outline whether stricter requirements or tailored improvement programs are applied.",
      response: "SDP155_84",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.6",
      question:
        "How does your organization encourage suppliers to go beyond minimum environmental requirements?",
      guidance:
        "Provide examples such as innovation grants, preferential procurement, or public recognition.",
      response: "SDP155_85",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.6",
      question:
        "How do you ensure continuous improvement in supplier environmental performance?",
      guidance:
        "Mention periodic review of requirements, stakeholder engagement, or joint improvement initiatives.",
      response: "SDP155_86",
    },

    // 5.11.7 Supplier engagement program
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.7",
      question:
        "What key environmental issues are covered in your supplier engagement program?",
      guidance:
        "Specify whether issues relate to climate change, biodiversity, water, waste, pollution, deforestation, etc. Use recognized environmental categories.",
      response: "SDP155_87",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.7",
      question:
        "Which commodities or raw materials are most associated with your environmental supplier engagement activities?",
      guidance:
        "Identify high-impact commodities (e.g., palm oil, soy, seafood, paper, metals) and link them to the environmental issues addressed.",
      response: "SDP155_88",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.7",
      question:
        "What specific environmental actions are driven by your supplier engagement initiatives?",
      guidance:
        "Examples: emissions reduction, energy efficiency, water conservation, waste minimization, sustainable sourcing. Describe the intended outcomes.",
      response: "SDP155_89",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.7",
      question: "What types of engagement methods do you use with suppliers?",
      guidance:
        "Mention workshops, training, audits, joint projects, contractual requirements, incentives, or performance scorecards.",
      response: "SDP155_90",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.7",
      question: "What details can you provide on these engagement methods?",
      guidance:
        "Include scope, duration, frequency, and resources provided to suppliers to support environmental initiatives.",
      response: "SDP155_91",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.7",
      question:
        "How far up your upstream value chain does the engagement extend?",
      guidance:
        "Explain whether engagement covers only tier 1 suppliers or includes tier 2, tier 3, and beyond.",
      response: "SDP155_92",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.7",
      question:
        "How do you ensure coverage of a significant portion of your procurement spend in supplier engagement?",
      guidance:
        "Outline strategies such as prioritizing high-spend suppliers, high-risk categories, or suppliers with largest environmental impact.",
      response: "SDP155_93",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.7",
      question:
        "How do you address suppliers responsible for a large share of your scope 3 emissions?",
      guidance:
        "Detail any tools, targets, or collaborative programs to reduce supplier-related emissions.",
      response: "SDP155_94",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.7",
      question:
        "How do you identify and engage tier 1 suppliers with substantive environmental impacts or dependencies?",
      guidance:
        "Define the criteria and metrics used (e.g., environmental footprint analysis, risk assessments).",
      response: "SDP155_95",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.7",
      question:
        "How many suppliers beyond tier 1 (tier 2 and above) have you engaged on environmental initiatives?",
      guidance:
        "Provide numbers and examples, and explain why deeper-tier engagement is relevant.",
      response: "SDP155_96",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.7",
      question:
        "What impact or effect has your supplier engagement had on environmental actions?",
      guidance:
        "Describe measurable or observed changes in supplier practices, performance, or reporting.",
      response: "SDP155_97",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.7",
      question:
        "How are you enabling your suppliers to cascade environmental engagement to their own suppliers?",
      guidance:
        "Share approaches like knowledge sharing, standardized tools, or contractual obligations for sub-supplier engagement.",
      response: "SDP155_98",
    },

    // 5.11.8 Smallholder engagement
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.8",
      question:
        "What commodities are covered under your smallholder engagement activities?",
      guidance:
        "Specify the raw materials or products sourced from smallholders (e.g., spices, coffee, cocoa). Indicate whether they are primary commodities for your operations.",
      response: "SDP155_99",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.8",
      question:
        "What type of engagement approach do you adopt with smallholders?",
      guidance:
        "Describe the nature of engagement such as capacity building, training on sustainable farming, providing inputs, technical assistance, or fair trade agreements.",
      response: "SDP155_100",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.8",
      question:
        "What specific support or initiatives have been provided to smallholders to improve environmental sustainability?",
      guidance:
        "Include initiatives like water conservation practices, organic farming adoption, soil health management, biodiversity protection, or renewable energy use.",
      response: "SDP155_101",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.8",
      question:
        "What measurable changes or impacts have been observed as a result of smallholder engagement?",
      guidance:
        "Share qualitative evidence such as improved farming practices, reduction in environmental impact, community empowerment, or better market access for smallholders.",
      response: "SDP155_102",
    },

    // 5.11.9 Value chain stakeholder engagement
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.9",
      question:
        "What key environmental issues are addressed through your engagement with value chain stakeholders?",
      guidance:
        "Specify whether the focus is on climate change, water management, biodiversity, waste reduction, sustainable sourcing, or other issues. Include a brief explanation of why these issues are priorities for your organization.",
      response: "SDP155_103",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.9",
      question:
        "Which types of stakeholders in your value chain are engaged in environmental initiatives?",
      guidance:
        "Identify the stakeholder groups, such as suppliers, distributors, smallholders, customers, logistics providers, or NGOs. Clarify if the engagement is upstream, downstream, or both.",
      response: "SDP155_104",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.9",
      question:
        "What methods or types of engagement are used with these stakeholders?",
      guidance:
        "Describe approaches such as training programs, capacity-building workshops, collaborative projects, joint innovation initiatives, supplier codes of conduct, or technical support.",
      response: "SDP155_105",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.9",
      question:
        "What criteria do you use to select stakeholders for environmental engagement?",
      guidance:
        "Explain whether selection is based on emissions contribution (e.g., Scope 3), supply chain risk, business dependency, volume of trade, or potential for impact.",
      response: "SDP155_106",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.9",
      question:
        "What is the rationale for engaging these stakeholders and the intended scope of engagement?",
      guidance:
        "Provide details on the drivers—such as reducing environmental impact, achieving sustainability goals, mitigating supply chain risks, or meeting customer demands.",
      response: "SDP155_107",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.9",
      question:
        "How do you measure the success of your stakeholder environmental engagement activities?",
      guidance:
        "Mention metrics such as reduction in emissions, water usage, deforestation, waste; number of stakeholders trained; adoption of sustainable practices; or achievement of certifications.",
      response: "SDP155_108",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.11.9",
      question:
        "If engaging smallholders, what approach is used, and how do you assess its effectiveness?",
      guidance:
        "Describe the engagement model (e.g., cooperative programs, fair-trade partnerships, technical training) and how improvements are tracked (e.g., yield increases, environmental compliance, livelihood enhancement).",
      response: "SDP155_109",
    },

    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.12",
      question:
        "Which CDP Supply Chain members could you collaborate with for mutually beneficial environmental initiatives?",
      guidance:
        "List the specific requesting members you have identified for potential collaboration. Consider members with whom you already have strong business ties or aligned sustainability goals.",
      response: "SDP155_110",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.12",
      question: "What environmental issues would this initiative address?",
      guidance:
        "Clearly state whether the initiative relates to climate change, water security, deforestation, biodiversity, pollution prevention, or another environmental concern.",
      response: "SDP155_111",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.12",
      question:
        "Which commodities or materials are relevant to the proposed initiative?",
      guidance:
        "For food/agriculture sectors, specify commodities such as palm oil, soy, coffee, tea, etc. For manufacturing, indicate raw materials like steel, plastics, or paper.",
      response: "SDP155_112",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.12",
      question: "What is the category and type of the proposed initiative?",
      guidance:
        "Choose from categories such as joint R&D, supplier training, technology deployment, waste reduction, renewable energy, water management, or supply chain decarbonization.",
      response: "SDP155_113",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.12",
      question: "Can you describe the initiative in detail?",
      guidance:
        "Provide a qualitative overview including objectives, scope, processes, and the roles each party would play in the collaboration.",
      response: "SDP155_114",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.12",
      question: "What mutual benefits are expected from this initiative?",
      guidance:
        "Explain both environmental and business benefits for you and the supply chain member — e.g., reduced emissions, cost savings, improved resource efficiency, or reputational gains.",
      response: "SDP155_115",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.12",
      question:
        "What is the anticipated timeframe for realizing these benefits?",
      guidance:
        "Indicate if benefits are expected in the short term (1–2 years), medium term (3–5 years), or long term (over 5 years).",
      response: "SDP155_116",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.12",
      question: "Can you estimate the lifetime CO₂e savings of the initiative?",
      guidance:
        "Even if only qualitatively, explain whether emissions savings are measurable and how they might be calculated.",
      response: "SDP155_117",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.12",
      question:
        "Can you estimate the lifetime water savings (in megaliters) of the initiative?",
      guidance:
        "Provide a qualitative statement on whether water savings can be measured, even if an exact figure is not available.",
      response: "SDP155_118",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.12",
      question:
        "How will you monitor and report on the outcomes of this initiative?",
      guidance:
        "Describe any tracking mechanisms, reporting frameworks, or verification processes you would use to measure impact.",
      response: "SDP155_119",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.12",
      question:
        "How could this collaboration drive innovation or new business opportunities?",
      guidance:
        "Highlight how the initiative could create new products, services, or processes that provide competitive advantages while supporting environmental goals.",
      response: "SDP155_120",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.13",
      question:
        "What mutually beneficial environmental initiatives has your organization implemented as a direct result of CDP Supply Chain member engagement?",
      guidance:
        "Describe specific initiatives, their scope, and collaborative partners involved. Include details of how they align with environmental goals (e.g., emissions reduction, water conservation, waste management).",
      response: "SDP155_121",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.13",
      question:
        "What is the primary reason your organization has not implemented any environmental initiatives linked to CDP Supply Chain member engagement?",
      guidance:
        "Provide the key factor preventing implementation, such as lack of resources, limited supplier collaboration opportunities, or other strategic priorities.",
      response: "SDP155_122",
    },
    {
      topic: "Sustainable procurement",
      subTopic: "Actions to mitigate material impacts",
      slNo: "5.13",
      question:
        "Please explain in detail why no environmental initiatives have been undertaken despite CDP Supply Chain member engagement.",
      guidance:
        "Offer a narrative explanation covering organizational, operational, or strategic constraints. Mention if any plans or feasibility assessments are underway for future initiatives.",
      response: "SDP155_123",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.13.1",
      question:
        "Which CDP Supply Chain member(s) requested or influenced the implementation of the initiative?",
      guidance:
        "List the names of requesting members; ensure clarity if multiple members are involved.",
      response: "SDP121_53",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.13.1",
      question:
        "What specific environmental issues does the initiative address?",
      guidance:
        "Identify whether it relates to climate change, water security, deforestation, biodiversity, waste reduction, etc.",
      response: "SDP121_54",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.13.1",
      question:
        "If applicable, which commodities does the initiative relate to?",
      guidance:
        "Mention relevant commodities (for Food, Agriculture, and Forest sectors) such as palm oil, soy, timber, dairy, seafood, etc.",
      response: "SDP121_55",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.13.1",
      question: "What is the internal or external Initiative ID/reference?",
      guidance:
        "Provide an internal tracking code or external reference used to identify this initiative.",
      response: "SDP121_56",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.13.1",
      question: "What is the category and type of the initiative?",
      guidance:
        'Select from CDP categories such as "Engagement with suppliers," "Collaborative R&D," "Sustainable sourcing," etc.',
      response: "SDP121_57",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.13.1",
      question: "Please describe the initiative in detail.",
      guidance:
        "Include background, scope, key activities, stakeholders, and timelines.",
      response: "SDP121_58",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.13.1",
      question: "What mutual benefits have been achieved so far?",
      guidance:
        "Explain how both your organization and the requesting member(s) have benefitted, e.g., cost savings, improved resource efficiency, enhanced reputation.",
      response: "SDP121_59",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.13.1",
      question:
        "Are you able to provide quantitative figures for emissions or water savings for this initiative?",
      guidance:
        'State "Yes/No" and give reasoning; mention data availability challenges if applicable.',
      response: "SDP121_60",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.13.1",
      question:
        "If yes, what is the estimated GHG emissions savings achieved in the reporting year (in metric tons CO₂e)?",
      guidance:
        "Provide best available estimates, using recognized calculation methodologies.",
      response: "SDP121_61",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.13.1",
      question:
        "If yes, what is the estimated water savings achieved in the reporting year (in megaliters)?",
      guidance:
        "Provide estimated figures with methodology reference, where possible.",
      response: "SDP121_62",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.13.1",
      question: "How is success for this initiative measured?",
      guidance:
        "Include KPIs, monitoring methods, baseline comparison, and reporting frequency.",
      response: "SDP121_63",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.13.1",
      question:
        "Would you agree for the CDP Supply Chain members to showcase this initiative in their external communications?",
      guidance:
        'State "Yes/No" and provide any limitations (confidentiality, competitive sensitivity, etc.).',
      response: "SDP121_64",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.14",
      question:
        "Do your external asset managers have to meet specific environmental requirements as part of your organization’s selection and engagement process?",
      guidance:
        "State whether environmental requirements are part of the criteria for selecting and engaging with external asset managers. Provide examples such as ESG screening, climate risk assessment, or responsible investment guidelines.",
      response: "SDP121_65",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.14",
      question:
        "Is there a formal policy in place for addressing non-compliance with environmental requirements by external asset managers?",
      guidance:
        "Describe whether your organization has documented procedures or contractual clauses that address situations where asset managers fail to meet environmental requirements, including corrective actions or termination clauses.",
      response: "SDP121_66",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.14",
      question:
        "What is the primary reason for not including environmental requirements in your selection and engagement process with external asset managers?",
      guidance:
        "If no environmental criteria are applied, explain the main reason—e.g., lack of internal resources, focus on financial performance over ESG, reliance on asset manager’s internal policies, or perceived irrelevance to portfolio.",
      response: "SDP121_67",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.14",
      question:
        "Please explain why environmental requirements are not included in your selection and engagement process with external asset managers.",
      guidance:
        "Provide a detailed explanation if such requirements are not in place. Include business rationale, strategic considerations, or market constraints. Clarify whether there are plans to introduce them in the future.",
      response: "SDP121_68",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.14.1",
      question:
        "What environmental issues are covered by the requirements for external asset managers?",
      guidance:
        "Describe whether the requirements address climate change, biodiversity, pollution prevention, natural resource management, or other environmental factors relevant to your investment strategy.",
      response: "SDP121_69",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.14.1",
      question:
        "What is the coverage of these environmental requirements across your external asset managers?",
      guidance:
        "Explain whether the requirements apply to all asset managers, only those managing certain asset classes, or only those above a specific threshold of funds under management.",
      response: "SDP121_70",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.14.1",
      question:
        "What specific environmental requirements must external asset managers meet?",
      guidance:
        "Provide details such as ESG integration standards, reporting frameworks (e.g., TCFD, CDP), exclusion lists, carbon reduction targets, or environmental risk assessment criteria.",
      response: "SDP121_71",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.14.1",
      question:
        "What mechanisms are used to integrate environmental requirements into the selection and engagement process?",
      guidance:
        "Describe methods such as pre-selection questionnaires, contract clauses, due diligence checks, ongoing monitoring, or periodic performance reviews.",
      response: "SDP121_72",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.14.1",
      question:
        "How does your organization respond to non-compliance by external asset managers with environmental requirements?",
      guidance:
        "Explain corrective actions, escalation processes, engagement dialogues, contract termination clauses, or capacity-building support for improvement.",
      response: "SDP121_73",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.14.1",
      question:
        "What percentage of non-compliant external asset managers are engaged for corrective actions?",
      guidance:
        "State how you track non-compliance, the proportion of managers addressed, and whether engagement has led to improved compliance over time.",
      response: "SDP121_74",
    },

    // 5.15 Shareholder Voting Rights
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.15",
      question:
        "How does your organization exercise voting rights as a shareholder on environmental issues?",
      guidance:
        "Describe the process, policies, or criteria used when voting on environmental resolutions. Include examples of recent votes and how these align with your environmental strategy.",
      response: "SDP121_75",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.15",
      question:
        "What is the primary reason your organization does not exercise voting rights as a shareholder on environmental issues?",
      guidance:
        "Explain the specific challenges, constraints, or strategic considerations that prevent voting on such issues (e.g., lack of shareholding, proxy voting limitations, no formal policy).",
      response: "SDP121_76",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.15",
      question:
        "Please explain in detail why your organization does not exercise voting rights on environmental issues.",
      guidance:
        "Provide context, such as organizational priorities, investment structures, or governance frameworks, and any future plans to adopt or improve voting practices on environmental matters.",
      response: "SDP121_77",
    },

    // 5.15.1 Shareholder Voting Practices
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.15.1",
      question:
        "What method do you use to exercise your voting rights as a shareholder?",
      guidance:
        "Describe whether voting rights are exercised directly, through a proxy service, asset manager, or internal governance teams. Include the rationale for the chosen method.",
      response: "SDP121_78",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.15.1",
      question:
        "How do you ensure your shareholder voting rights are exercised in line with your overall environmental strategy or transition plan?",
      guidance:
        "Explain policies, internal controls, or voting guidelines in place to align voting actions with climate goals, sustainability commitments, or ESG frameworks.",
      response: "SDP121_79",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.15.1",
      question:
        "What percentage of your voting rights were exercised during the reporting period?",
      guidance:
        "While a percentage is quantitative, describe qualitative factors influencing the extent of voting participation (e.g., jurisdictional restrictions, company-specific considerations).",
      response: "SDP121_80",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.15.1",
      question:
        "What measures do you take to make your shareholder voting record publicly available?",
      guidance:
        "Outline the platforms, reports, or disclosures where voting records are published and the transparency principles followed.",
      response: "SDP121_81",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.15.1",
      question:
        "What environmental issues were covered in your shareholder voting during the reporting period?",
      guidance:
        "Provide examples such as climate change mitigation, biodiversity protection, pollution reduction, circular economy, or renewable energy adoption.",
      response: "SDP121_82",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.15.1",
      question:
        "Which global environmental commitments or frameworks is your shareholder voting aligned with?",
      guidance:
        "Mention frameworks such as the Paris Agreement, UN SDGs, TCFD recommendations, or Science Based Targets initiative (SBTi).",
      response: "SDP121_83",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "5.15.1",
      question:
        "What environmental issues have you supported through shareholder resolutions?",
      guidance:
        "Detail the nature of resolutions supported, the expected impact, and how they contribute to sustainable business practices in investee companies.",
      response: "SDP121_84",
    },
  ];

  const tableDataModuleSix = [
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "6.1",
      question:
        "What consolidation approach have you used to calculate your organization’s environmental performance data (e.g., equity share, operational control, financial control)?",
      guidance:
        "Clearly state the method applied, referencing recognized standards such as the GHG Protocol. Specify if the same approach is used for all environmental issues or if it varies.",
      response: "SDP121_85",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "6.1",
      question:
        "For each environmental issue (e.g., GHG emissions, water withdrawals, waste generation), which consolidation approach is applied?",
      guidance:
        "Break down the chosen approach by environmental parameter to ensure transparency. Indicate if scope boundaries differ between issues and explain any exceptions.",
      response: "SDP121_86",
    },
    {
      topic: "Climate Change",
      subTopic: "Environmental policies and certifications",
      slNo: "6.1",
      question:
        "What is the rationale for selecting your chosen consolidation approach?",
      guidance:
        "Provide qualitative reasoning (e.g., regulatory alignment, internal reporting structure, investor requirements, operational practicality). Include how this approach ensures accurate reflection of your environmental impact.",
      response: "SDP121_87",
    },
  ];

  return (
    <div style={{ minHeight: "80vh" }}>
      <TableRenderer
        id="mod-3-qual"
        title="Module 3 - Qualitative"
        tableData={tableDataModuleThree}
      />

      <br />

      <TableRenderer
        id="mod-4-qual"
        title="Module 4 - Qualitative"
        tableData={tableDataModuleFour}
      />

      <br />

      <TableRenderer
        id="mod-5-qual"
        title="Module 5 - Qualitative"
        tableData={tableDataModuleFive}
      />

      <br />

      <TableRenderer
        id="mod-6-qual"
        title="Module 6 - Qualitative"
        tableData={tableDataModuleSix}
      />
    </div>
  );
};

export default Module_3_6_Qual;
