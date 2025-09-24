import React from "react";

const TableRenderer = ({ id, title, tableData }) => {
  return (
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
                width: "5%",
              }}
            >
              ID
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                fontWeight: "bold",
                width: "30%",
              }}
            >
              Governance and economic
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                fontWeight: "bold",
                width: "20%",
              }}
            >
              Response
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr
              key={index}
              style={{
                fontWeight: item.isTitle ? "bold" : "normal",
                backgroundColor: item.isTitle ? "#f2f2f2" : "white",
              }}
            >
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {item["ID"]}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  whiteSpace: "pre-line",
                }}
              >
                {item["Governance and economic"]}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {item["Output"]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Governance = () => {
  const governanceModuleOne = [
    {
      ID: "1",
      "Governance and economic": "General Information",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic": "Company Name:",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic": "Registration Data:",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Main contact person (Person to be contacted in the case of questions):",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic": "Function/position:",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic": "Department:",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic": "Address:",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic": "Town/city: Chennai",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic": "Zip:",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic": "Country: India",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic": "Phone:",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic": "E-mail:",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic": "Web:",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic": "Reporting Currency:",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic": "Fiscal year-end date:",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic": "Company Data",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Are your revenues reported in constant currency or reported currency?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic": "What is your total number of employees?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "How many units are there in your organsiation?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.1",
      "Governance and economic": "Transparency & Reporting",
      Output: "",

      isTitle: true,
    },
    {
      ID: "1.1.1.",
      "Governance and economic": "Sustainability Reporting Boundaries",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company publicly report on the scope or reporting boundaries of your sustainability disclosure?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What percentage of revenue is covered by your sustainability disclosure?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please specify what indicators are covered by your sustainability disclosure",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.1.2",
      "Governance and economic": "Sustainability Reporting Assurance",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Have you received any external assurance in relation to your company's sustainability reporting? If yes, then attach supporting evidence indicating where the assurance statement is available in the public domain.",
      Output: "",

      isTitle: false,
    },

    {
      ID: "1.1.3.",
      "Governance and economic": "Sustainability Taxonomies",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company report its revenues, capital expenditure and operating expenditure in line with a sustainable activity reporting framework? Please indicate where this information is available in your public reporting or corporate website.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Is your company within the scope of a sustainability taxonomy framework, and if so, in which geography?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What are the total figures for your company in monetary units (Revenue, Capital Expenditure, and Operational Expenditure)?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Of the above, what percentage of the total figures (Revenue, Capital Expenditure, and Operational Expenditure) is Taxonomy-Eligible?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Of the above, what percentage of the total figures (Revenue, Capital Expenditure, and Operational Expenditure) is Taxonomy-Aligned?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What percentage of the total figures (Revenue, Capital Expenditure, and Operational Expenditure) is not Taxonomy-Eligible?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Has your company publicly mapped its eligibility and alignment at the activity level, and if so, where is this information available (please provide the link or supporting evidence)?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.1.4",
      "Governance and economic": "MSA Transparency & Reporting",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "In this section, DJSI includes a performance score for Corporate Sustainability Monitoring to verify how the company manages crisis situations that could harm its reputation. The evaluation will be completed by the responsible industry analyst, and no additional information is required from your company.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.2",
      "Governance and economic": "Coporate Governance",
      Output: "",

      isTitle: true,
    },
    {
      ID: "1.2.1",
      "Governance and economic": "Board Independence",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company have a publicly available independence statement for the board of directors? Indicate below what the statement includes and provide a reference.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "If your company is not listed on a stock exchange, what requirements does it specify for the independence of its directors?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company have a target share of independent directors on the board. If yes, Please specify.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.2.2",
      "Governance and economic": "Board Type",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company publicly report on its board type? Please indicate the number of executive and non-executive directors on the board of directors/supervisory board of your company and specify where this information is available.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.2.3",
      "Governance and economic": "Non-Executive Chairperson/ Lead Director",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Is the board of directors/supervisory board headed by a non-executive and independent chairperson and/or an independent lead director? Please indicate where this information is available.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.2.4",
      "Governance and economic": "Board Diversity Policy",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company have a formal board diversity policy that clearly requires diversity factors such as gender, race, ethnicity, country of origin, nationality or cultural background in the board nomination process? Please indicate where this information is available.",
      Output: "",

      isTitle: false,
    },

    {
      ID: "1.2.5",
      "Governance and economic": "Board Gender diversity",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Please indicate the number of women on your company's board of directors/supervisory board and specify where this information is available. If your company has a one-tier board structure, this figure includes: female executive directors, non-executive directors and independent directors. If your company has a two-tier board structure, this figure ONLY includes female independent directors and non-executive directors (this means that senior executives and employee representatives should not be included).",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.2.6",
      "Governance and economic": "Board Effectiveness",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the average board meeting attendance, expressed as the percentage of meetings of the board of directors or supervisory board?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the minimum attendance requirement (in %) for all board members?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the number of non-executive/independent directors with four or fewer other mandates?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic": "Please provide the names of these directors.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "To what number are the other mandates for non-executive/independent directors restricted?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company conduct regular self-assessments of board performance? If yes, please specify the process or provide supporting documents.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company conduct regular independent assessments of board performance? If yes, please specify the process or provide supporting documents.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Are board members elected and re-elected on an annual basis?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Are board members elected individually (as opposed to being elected by slate)?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.2.7",
      "Governance and economic": "Board Average Tenure",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Please indicate the average tenure of board members on your company’s board of directors/supervisory board in years. If your company has a one-tier board structure, this figure includes all members (executive directors, non-executive directors and independent directors). If your company has a two-tier board structure, this figure ONLY includes independent directors and non-executive directors (e.g. exclude employee representatives). Please indicate where this information is available.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.2.8",
      "Governance and economic": "Board Industry Experience",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the number of independent or non-executive members with industry experience (excluding executives)?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please list the independent or non-executive directors included in this count.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.2.9",
      "Governance and economic": "CEO Compensation - Success Metrics",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company have predefined financial returns and/or relative financial metrics relevant for Chief Executive Officer’s variable compensation? Please indicate where this information is available.",
      Output: "",

      isTitle: false,
    },

    {
      ID: "1.2.10",
      "Governance and economic":
        "CEO Compensation - Long-Term Performance Alignment",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company have guidelines on deferred bonus, time vesting, and performance period for the CEO’s variable compensation?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Is a portion of the CEO’s short-term incentive deferred in the form of shares or stock options? Please indicate the percentage of the short-term bonus deferred in the form of shares or stock options",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the longest performance period applied to evaluate variable compensation(based on predefined targets, either relative or absolute), covered in your executive compensation plan? Is there a clawback policy in place? Please note that compensation that only is time vested is not considered as performance based compensation in this part of the question.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please indicate the longest time vesting period for variable CEO compensation",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.2.11",
      "Governance and economic": "Management Ownership",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Do your company's CEO and other executive committee members hold company shares? Please note that the shares included in the calculation should not be hedged or the personal financial risk of holding the shares otherwise removed.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Can you specify the name(s) and the multiple of base salary of the CEO and other executive committee members holding company shares? For executive committee members, please provide the average multiple of base salary across those owning shares.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.2.12",
      "Governance and economic": "Management Ownership Requirements",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company have specific stock ownership requirements for the CEO and other members of your executive committee? Please indicate where this information is available.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the required share ownership for the CEO, expressed as a multiple of the annual base salary?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the required share ownership for other executive committee members (besides the CEO), expressed as a multiple of the annual base salary?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.2.13",
      "Governance and economic": "Government Ownership",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Please indicate whether individual governmental institutions own more than 5% of the total voting rights of your company and if yes, whether golden shares exist for them. Government ownership of 5% or less of the voting rights need not be reported. Please also indicate where this information is available.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please provide the total percentage of government ownership (sum of % of individual governmental institutions owning more than 5% of voting rights)",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please provide details for the government ownership (e.g. calculation, members, organizations etc. if available)",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company have golden shares for governmental institutions?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.2.14",
      "Governance and economic": "Family Ownership",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Please indicate whether one or several founding individuals or family members, personally or through other companies or organizations, individually have more than 5% of the voting rights of your company. Please also indicate where this information is available.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the total percentage of voting rights of the company?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Can you provide details of the individual/family ownership (e.g., calculation, members, organizations, etc., if available)?",
      Output: "",

      isTitle: false,
    },

    {
      ID: "1.2.15",
      "Governance and economic": "CEO-to-Employee Pay Ratio",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Please provide the annual compensation for the Chief Executive Officer and the median of the annual compensation of all other employees as well as the ratio between the two. If you are unable to provide the median, please provide figures for total mean compensation and the ratio using the mean. The currency provided should remain consistent for all figures.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.2.16",
      "Governance and economic": "MSA Corporate Governance",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "In this section, DJSI includes a performance score for Corporate Sustainability Monitoring to verify how the company manages crisis situations that could harm its reputation. The evaluation will be completed by the responsible industry analyst, and no additional information is required from your company.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.3",
      "Governance and economic": "Materiality",
      Output: "",

      isTitle: true,
    },
    {
      ID: "1.3.1",
      "Governance and economic": "Materiality Analysis",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Do you publicly disclose details of your materiality determination process and how you conduct materiality analysis? Please provide supporting public evidence",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the frequency of conducting/reviewing materiality analysis?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic": "Explain the materiality assessment process.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Who is responsible for reviewing and approving the results of the materiality assessment?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.3.2",
      "Governance and economic":
        "Material Issues for Enterprise Value Creation",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company publicly report analysis to identify the most important material issues (economic, environmental, or social) for your company's performance?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please indicate the three material issues that have the greatest impact on your business and its generation of long-term value.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please provide a brief rationale for why each of the issue is material to your business.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please specify the type of impact each material issue has on your business (cost/revenue/ risk).",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please specify your primary business strategies, initiatives or products that address each of the material issues.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.3.3",
      "Governance and economic":
        "Materiality Metrics for Enterprise Value Creation",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Please indicate the three material issues that have the greatest impact on your business and its generation of long-term value.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "For each of the top three material issues, do you have a target or metric to systematically measure progress? If yes, please specify where this target or metric is disclosed in your public reporting.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "For each of the top three material issues, what is the target year associated with this metric or target?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "For each of the top three material issues, do you publicly disclose progress on these targets or metrics? If yes, please specify where this information is available.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "For each of the top three material issues, is this metric or target linked to the compensation of executive committee members? If yes, please explain how it is applied and provide a public reference showing the linkage to executive compensation.",
      Output: "",

      isTitle: false,
    },

    {
      ID: "1.3.4",
      "Governance and economic": "Material Issues for External Stakeholders",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Has your company conducted a materiality analysis to identify and assess the positive and negative impacts on external stakeholders associated with your business operations, products/services, and/or supply chain?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please indicate two material issues that demonstrate the most significant social or environmental impact on external stakeholder groups (e.g., environment, society, customers, etc.).",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What are the positive and/or negative impacts on external stakeholders resulting from your company’s business operations, products and services, and/or supply chain?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Which part of your business is responsible for the external impact, and what is the coverage of the business activity considered in the assessment?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please specify the stakeholder(s) group or impact areas evaluated.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please provide a brief rationale why the external impact assessed is material to external societal stakeholders or the environment.Also indicate the type of impact assessed along with public disclosure, if available.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.3.5",
      "Governance and economic":
        "Materiality Metrics for External Stakeholders",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Have you evaluated the positive/negative impacts on external stakeholders using quantitative output and impact metrics?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please specify the material issue that generates a positive/negative impact on external stakeholders.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please specify the quantitative metric/s used to measure the output of the direct environmental and/or social results of the business activity.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please specify whether you have conducted an impact valuation converting the output metrics to an impact metric to measure the societal or environmental external impact. Please mention the quantitative metric used in the valuation from the list and provide a description of the impact assessed.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please specify the quantitative metric used to measure your external impact.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.3.6",
      "Governance and economic": "MSA Materiality",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "In this section, DJSI includes a performance score for Corporate Sustainability Monitoring to verify how the company manages crisis situations that could harm its reputation. The evaluation will be completed by the responsible industry analyst, and no additional information is required from your company.",
      Output: "",

      isTitle: false,
    },

    {
      ID: "1.4",
      "Governance and economic": "Risk & Crisis Management",
      Output: "",

      isTitle: true,
    },
    {
      ID: "1.4.1",
      "Governance and economic": "Risk Governance",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Who in your company (people, departments, or committees) is responsible and accountable for enterprise risk management in terms of risk appetite, risk tolerance, risk monitoring, and reporting? Is this information available in your public reporting? If yes, please provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Who is the highest-ranking person with dedicated risk management responsibility at the operational level (excluding the CEO)? Please indicate their name and position, and also specify to whom this person or committee reports.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Who is the highest-ranking person with with responsibility for monitoringand auditing risk management performance at the operational level (excluding the CEO)? Please indicate their name and position, and also specify to whom this person or committee reports.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "How many non-executive members of the board of directors/supervisory board have expertise in enterprise risk management? Please specify the number and provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Is regular risk management education provided for non-executive directors? Please specify and provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Is the risk management function structurally independent of the business lines? Please specify and provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.4.2",
      "Governance and economic": "Risk Management Processes",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company have risk management processes in place?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company publicly report on risks identified, including a description of the risk, its likelihood, and the magnitude of the potential impact? Please provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company perform sensitivity analysis or stress testing on financial and/or non-financial risks? Please provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company review its risk exposure on a regular basis? Please specify the frequency of these assessments and provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company conduct an audit of the risk management process? Please specify whether an internal audit and/or an external audit has been performed and provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.4.3",
      "Governance and economic": "Emerging Risks",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Please indicate two important long-term (3-5 years+) emerging risks that your company identifies with the most significant impact on the business in the future",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "For the two most important emerging risks identified by your company, please specify:\n1) The risk category they belong to\n2) A description of the risk and its potential impact\n3) The mitigating actions taken",
      Output: "",

      isTitle: false,
    },

    {
      ID: "1.4.4",
      "Governance and economic": "Risk Culture",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "What strategies does your company pursue in order to promote and enhance an effective risk culture throughout the organization?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What financial incentives in your company incorporate risk management metrics? Please specify the incentives and metrics and provide supporting evidence.\n\n1) For senior executives, what incentives and metrics are included? Please provide supporting evidence\n2) For line managers, what incentives and metrics are included? Please provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company provide focused training throughout the organization on risk management principles? Please specify and provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Are risk management criteria included in the HR review process for employee evaluations? Please specify and provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What measures are in place that allow individual employees to proactively identify and report potential risks throughout the organization? Please specify and provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What measures are in place to enable continuous improvement in risk management practices through structured employee feedback processes? Please specify and provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Are risk management criteria incorporated into the product development or approval process? Please specify and provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What other means does your company use to measure or innovate for an effective risk culture? Please specify and provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.4.5",
      "Governance and economic": "MSA Risk & Crisis Management",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "In this section, DJSI includes a performance score for Corporate Sustainability Monitoring to verify how the company manages crisis situations that could harm its reputation. The evaluation will be completed by the responsible industry analyst, and no additional information is required from your company.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.5",
      "Governance and economic": "Business Ethics",
      Output: "",

      isTitle: true,
    },
    {
      ID: "1.5.1",
      "Governance and economic": "UN Global Compact Membership",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Is your company a signatory/participant of the United Nations Global Compact?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.5.2",
      "Governance and economic": "Codes of Contact",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Which aspects are covered by your codes of conduct at a group level (including subsidiaries)? Please indicate where this information is available in your public reporting or corporate website.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.5.3",
      "Governance and economic": "Corruption & Bribery",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Which aspects are covered by your anti-corruption and bribery policy at a group level (including subsidiaries)? Please indicate where this information is available in your public reporting or corporate website.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.5.4",
      "Governance and economic": "Codes of Conduct: Systems/ Procedures",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "What mechanisms are in place to assure effective implementation of your company's codes of conduct (e.g. compliance system)? Please indicate where this information is available in your public reporting.",
      Output: "",

      isTitle: false,
    },

    {
      ID: "1.5.5",
      "Governance and economic": "Reporting on breaches",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company publicly report on breaches (e.g. Corruption, Discrimination etc.) against your codes of conduct/ethics? Please specify where this information is available in your public reporting or corporate website.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please mention the number of breaches in the past fiscal year with respect to the following categories and provide supporting evidence (if applicable):\n1) Corruption or Bribery\n2) Discrimination or Harassment\n3) Customer Privacy Data\n4) Conflicts of Interest\n5) Money Laundering or Insider trading",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.5.6",
      "Governance and economic": "MSA Business Ethics",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "In this section, DJSI includes a performance score for Corporate Sustainability Monitoring to verify how the company manages crisis situations that could harm its reputation. The evaluation will be completed by the responsible industry analyst, and no additional information is required from your company.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.6",
      "Governance and economic": "Policy Influence",
      Output: "",

      isTitle: true,
    },
    {
      ID: "1.6.1",
      "Governance and economic": "Contributions & Other Spending",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Please specify your company’s annual total monetary contributions and expenditures related to:\n1) Political campaigns\n2) Political organizations\n3) Lobbyists or lobbying entities\n4) Trade associations\n5) Other tax-exempt groups\n\nIf this information is publicly disclosed, kindly provide supporting evidence or share the relevant weblink.\nNote: PAC contributions made by employees should not be included.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.6.2",
      "Governance and economic": "Largest Contributions & Expenditures",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Did your company make any contributions to or expenditures to political campaigns or organizations, lobbying, trade associations, tax-exempt entities, or other groups whose role is to influence political campaigns or public policy and legislation?\nPlease indicate if this information is available in the public domain.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.6.3",
      "Governance and economic":
        "Lobbying and Trade Associations - Climate Alignment",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Do you publicly disclose your management system for lobbying activities and trade association memberships? If yes, please specify which elements are included in it.\nWhich jurisdictions does the program cover?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.6.4",
      "Governance and economic": "MSA Policy Influence",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "In this section, DJSI includes a performance score for Corporate Sustainability Monitoring to verify how the company manages crisis situations that could harm its reputation. The evaluation will be completed by the responsible industry analyst, and no additional information is required from your company.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.7",
      "Governance and economic": "Supply Chain Management",
      Output: "",

      isTitle: true,
    },
    {
      ID: "1.7.1",
      "Governance and economic": "Supply Chain Management",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company have a Supplier Code of Conduct that is publicly available?\nIf yes, please provide the weblink and specify which issues are covered in the Code and applied to all suppliers across all countries.",
      Output: "",

      isTitle: false,
    },

    {
      ID: "1.7.2",
      "Governance and economic": "Supplier ESG Program",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company have systems or procedures in place to ensure the effective implementation of its supplier ESG programs required to identify and address material risks and impacts?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Do you publicly disclose the measures related to your supplier ESG programs? If yes, please specify what those measures are.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.7.3",
      "Governance and economic": "Supplier Screening",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company apply supplier screening to systematically identify significant suppliers?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Which aspects are considered in your screening process for significant suppliers? Please provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Which risks are considered in your screening process for significant suppliers: country-specific, sector-specific, or commodity-specific?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.7.4",
      "Governance and economic": "Supplier Assessment and Development",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company have a publicly available supplier assessment process in place? If yes, what does it include?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company have a publicly available supplier development process in place? If yes, what does it include?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.7.5",
      "Governance and economic": "KPIs for Supplier Screening",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company monitor and report on coverage and progress of your supplier screening program?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the total number of Tier-1 suppliers?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the total number of significant suppliers in Tier-1?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the percentage of total spend on significant suppliers in Tier-1?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the total number of significant suppliers in non–Tier-1?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the total number of significant suppliers across Tier-1 and non–Tier-1?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Is this data publicly available? If yes, please provide supporting evidence or a web link.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Has this data been third-party verified in the most recent financial year reported? If yes, please provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.7.6",
      "Governance and economic": "KPIs for Supplier Assessment and Development",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company monitor and report on the coverage and progress of your supplier assessment and development program?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the total number of suppliers assessed via desk assessments or on-site assessments? Please specify the number and the percentage of significant suppliers. Provide the status and target.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the percentage of significant suppliers assessed? Provide the status and target.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the number of suppliers assessed with substantial actual or potential negative impacts? Provide the status and target.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the percentage of suppliers with substantial actual or potential negative impacts that have an agreed corrective action or improvement plan? Provide the status and target.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the number of suppliers with substantial actual or potential negative impacts that were terminated?Provide the status and target.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the total number of suppliers supported in corrective action plan implementation? Please specify the number and the percentage of significant suppliers. Provide the status and target.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the percentage of suppliers assessed with substantial actual or potential negative impacts that were supported in corrective action plan implementation? Provide the status and target.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the total number of suppliers in capacity building programs? Please specify the number of suppliers and the percentage of significant suppliers.Provide the status and target.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the percentage of significant suppliers participating in capacity building programs? Provide the status and target.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Is this data publicly available? If yes, please provide supporting evidence or a web link.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Has this data been third-party verified in the most recent financial year reported? If yes, please provide supporting evidence.",
      Output: "",

      isTitle: false,
    },

    {
      ID: "1.7.7",
      "Governance and economic": "Conflict Minerals",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company have a comprehensive strategy in place to avoid contributing to conflict through your purchasing decisions and practices?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Do you have a publicly available policy in place for minerals from conflict-affected and high-risk areas? Please indicate where in the public domain the policy is available.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company have a formal process or operating procedure to track minerals through the supply chain and identify and assess risks related to minerals sourced from conflict-affected and high-risk areas? If yes, please attach supporting documents and specify the aspects that the process covers",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Has your company developed a risk management plan at smelter or refinery (SOR) or supplier level to mitigate or remediate identified risks from minerals from conflict-affected and high-risk areas? Please provide a brief explanation",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the percentage of total revenues from products containing minerals sourced from conflict-affected and high-risk areas? Provide status and target.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What is the percentage of total revenues from products containing minerals sourced from conflict-affected and high-risk areas that come from suppliers verified as conflict-free? Provide status and target.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company have any ongoing initiatives to label your products as conflict-free? Please provide an example.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.7.8",
      "Governance and economic": "MSA Supply Chain Management",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "In this section, DJSI includes a performance score for Corporate Sustainability Monitoring to verify how the company manages crisis situations that could harm its reputation. The evaluation will be completed by the responsible industry analyst, and no additional information is required from your company.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.8",
      "Governance and economic": "Tax Strategy",
      Output: "",

      isTitle: true,
    },
    {
      ID: "1.8.1",
      "Governance and economic": "Tax Strategy and Governance",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Do you have a publicly available, group-wide tax policy? If yes, what are the elements covered in it, and please provide the relevant web link.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.8.2",
      "Governance and economic": "Tax Reporting",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company publicly report on key business, financial and tax information for each tax jurisdiction where the entities included in your organization’s audited consolidated financial statements are resident for tax purposes? Please indicate where this information is available in your public reporting.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.8.3",
      "Governance and economic": "Effective Tax Rate",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "What were your Earnings Before Tax (EBT)? Please provide the currency used.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What were your Reported Taxes? Please provide the currency used.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What were the Cumulative Acceptable Adjustments applied to taxes during this period? Please specify.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What was your Effective Tax Rate (%), calculated as Reported Taxes (with adjustments) divided by Earnings Before Tax over the two-year period?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic": "What were your Cash Taxes Paid ?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic": "What was your Cash Tax Rate (%)?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Where is this information publicly disclosed in your financial reporting? Please provide the reference or web link.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "If your calculated average Effective Tax Rate and/or Cash Tax Rate is lower than the industry group averages, please specify the reason, indicate the tax amount per item, and provide supporting explanations.",
      Output: "",

      isTitle: false,
    },

    {
      ID: "1.8.4",
      "Governance and economic": "MSA Tax Strategy",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "In this section, DJSI includes a performance score for Corporate Sustainability Monitoring to verify how the company manages crisis situations that could harm its reputation. The evaluation will be completed by the responsible industry analyst, and no additional information is required from your company.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.9",
      "Governance and economic":
        "Information Security/ Cybersecurity & System Availability",
      Output: "",

      isTitle: true,
    },
    {
      ID: "1.9.1",
      "Governance and economic": "IT Security/ Cybersecurity Governance",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Are the board of directors and executive management engaged in the information security /cybersecurity strategy and review process?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please indicate the Board member who oversees the cybersecurity strategy together with his/her experience and indicate this person’s membership in the committee responsible for the oversight of cybersecurity. Please provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please indicate which role or function within or reporting directly to the Executive Management team is responsible for overseeing cybersecurity within the company. Please provide supporting evidence",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.9.2",
      "Governance and economic": "IT Security/ Cybersecurity Measures",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Have you implemented policies and procedures for all employees in order to ensure that they are aware of threat issues and the importance of information security/cybersecurity?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Does your company have an information security/cybersecurity policy that is internally available to all employees? If yes, please provide the relevant document.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Do you provide information security/cybersecurity awareness training to employees? If yes, please explain and provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Is there a clear escalation process in place that employees can follow if they notice something suspicious? If yes, please explain and provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Is information security/cybersecurity included as part of employee performance evaluations (e.g. through disciplinary actions)? If yes, please explain and provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.9.3",
      "Governance and economic":
        "IT Security/ Cybersecurity Process & Infrastructure",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Do you have business continuity / contingency plans and incident response procedures in place and how often do you test them? Please provide supporting evidence of how often these plans/procedures are tested.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Is your IT infrastructure and information security management system certified to ISO 27001, NIST or similar?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Please indicate if there are other additional procedures implemented to assure the security of the IT infrastructure / information security management systems.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "Has your company experienced breaches of information security? If yes, please specify the total number of information security breaches and the total number of clients, customers, and employees affected by these breaches.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.9.4",
      "Governance and economic":
        "MSA Information Security/ Cybersecurity & System Availability",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "In this section, DJSI includes a performance score for Corporate Sustainability Monitoring to verify how the company manages crisis situations that could harm its reputation. The evaluation will be completed by the responsible industry analyst, and no additional information is required from your company.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.10",
      "Governance and economic": "Innovation Management",
      Output: "",

      isTitle: true,
    },

    {
      ID: "1.10.1",
      "Governance and economic": "R&D Spending",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "What was your company’s total R&D spending (in million USD)?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What was the total number of R&D positions (in full-time equivalents – FTEs) ?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What was your company’s R&D spending as a percentage of sales?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.10.2",
      "Governance and economic": "Open Innovation",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "Please indicate three approaches you have adopted to profit from or contribute to external knowledge to complement in-house R&D. For each approach, please provide examples, add supporting evidence and describe/quantify the impacts of the open innovation approach.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.10.3",
      "Governance and economic": "MSA Innovation Management",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "In this section, DJSI includes a performance score for Corporate Sustainability Monitoring to verify how the company manages crisis situations that could harm its reputation. The evaluation will be completed by the responsible industry analyst, and no additional information is required from your company.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.11",
      "Governance and economic": "Product Quality & Recall Management",
      Output: "",

      isTitle: true,
    },
    {
      ID: "1.11.1",
      "Governance and economic": "Warranty Provisions",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "What was the provision warranty balance at the beginning of the period ?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What were the warranty payments (costs) made during the period? Please specify the currency.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What were the revenues as provided in the Company Information section?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What was the cost of warranty payments as a percentage of annual revenues ?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.11.2",
      "Governance and economic":
        "Product Recalls (Automobiles & Auto Components)",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic": "What was the number of vehicles recalled ?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What were the expenses incurred due to recalls issued in the corresponding fiscal year? Please specify the currency.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What was the number of vehicles recalled that were mandated (involuntary)?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What were the revenues as provided in the Company Information section?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Governance and economic":
        "What was the cost of recalls as a percentage of annual revenues?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "1.11.3",
      "Governance and economic": "MSA Product Quality & Recall Management",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Governance and economic":
        "In this section, DJSI includes a performance score for Corporate Sustainability Monitoring to verify how the company manages crisis situations that could harm its reputation. The evaluation will be completed by the responsible industry analyst, and no additional information is required from your company.",
      Output: "",

      isTitle: false,
    },
  ];

  return (
    <div style={{ minHeight: "80vh" }}>
      <TableRenderer
        id="mod-1"
        title="Guidance Document for DJSI Submission - Governance & Economic"
        tableData={governanceModuleOne}
      />
    </div>
  );
};

export default Governance;
