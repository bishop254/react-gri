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
              Social Dimension
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                fontWeight: "bold",
                width: "20%",
              }}
            >
              Response for Social Dimension
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
                {item["Social Dimension"]}
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

const Social = () => {
  const socialModuleOne = [
    {
      ID: "3.1",
      "Social Dimension": "Labor Practice Indicators",
      Output: "",

      isTitle: true,
    },
    {
      ID: "3.1.1",
      "Social Dimension": "Discrimination & Harassment",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company have a public group-wide non-discrimination and anti-harassment policy, and what are the measures in place to effectively deal with discrimination and harassment in the workplace?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.1.2",
      "Social Dimension": "Workforce Breakdown: Gender",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company monitor indicators regarding workforce gender diversity? Please provide the coverage reported on as a percentage of FTEs.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What percentage of your company’s total workforce are women? Have you set a public target to increase this share? If yes, please state the target percentage, the target year, and whether this information is publicly available (with evidence, if possible).",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the share of women in all management positions (junior, middle, and top management) as a percentage of total management positions? If yes, please state the target percentage, the target year, and whether this information is publicly available (with evidence, if possible).",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the share of women in junior management positions (i.e., first level of management) as a percentage of total junior management positions? If yes, please state the target percentage, the target year, and whether this information is publicly available (with evidence, if possible).",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the share of women in top management positions (i.e., up to two levels below the CEO or equivalent roles) as a percentage of total top management positions? If yes, please state the target percentage, the target year, and whether this information is publicly available (with evidence, if possible).",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the share of women in management positions in revenue-generating functions (e.g., sales), as a percentage of all such managers (excluding support functions such as HR, IT, Legal, etc.)? If yes, please state the target percentage, the target year, and whether this information is publicly available (with evidence, if possible).",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the share of women in STEM-related positions as a percentage of total STEM positions? If yes, please state the target percentage, the target year, and whether this information is publicly available (with evidence, if possible).",
      Output: "",

      isTitle: false,
    },

    {
      ID: "3.1.3",
      "Social Dimension":
        "Workforce Breakdown: Race/ Ethnicity & Nationality",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company provide a breakdown of its workforce according to racial and ethnic self-identifications, or nationality? Please provide the coverage reported on as a percentage of FTEs.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the share of your total workforce (as a percentage) for the following groups?\n1) Asian\n2) Black or African American\n3) Hispanic or Latino\n4) White\n5) Indigenous or Native\n6) Other (please specify)",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the share (as a percentage) of employees in all management positions (including junior, middle, and senior management) across the following categories?\n1) Asian\n2) Black or African American\n3) Hispanic or Latino\n4) White\n5) Indigenous or Native\n6) Other (please specify)",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Is this information publicly available? If yes, please provide supporting evidence.",
      Output: "",

      isTitle: false,
    },

    {
      ID: "3.1.4",
      "Social Dimension": "Gender Pay Indicators",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company monitor and publicly disclose the results of a gender pay gap or equal pay assessment? If both assessments are conducted, please report the one with the higher coverage as a percentage of full-time employees (FTEs).",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the average salary of women for the following employee levels:\n1) Executive level (base salary only)\n2) Executive level (base salary + other cash incentives)\n3) Management level (base salary only)\n4) Management level (base salary + other cash incentives)\n5) Non-management level (base salary only)",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the average salary of men for the following employee levels:\n1) Executive level (base salary only)\n2) Executive level (base salary + other cash incentives)\n3) Management level (base salary only)\n4) Management level (base salary + other cash incentives)\n5) Non-management level (base salary only)",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "If your company publicly reports equal pay information (or the pay ratios), what is the relevant URL?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Is your company’s equal pay assessment third-party verified? If yes, please provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the percentage difference between men and women employees for the following indicators?\n1) Mean gender pay gap:\n2) Median gender pay gap:\n3) Mean bonus gap:\n4) Median bonus gap:",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Is your company’s gender pay gap assessment third-party verified? If yes, please provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.1.5",
      "Social Dimension": "Freedom of Association",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "What percent of your total number of employees are represented by an independent trade union or covered by collective bargaining agreements? Please indicate where this is available in your public reporting.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.1.6",
      "Social Dimension": "MSA Social Dimension",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "In this section DJSI includes a performance score on the Corporate Sustainability Monitoring with the objective of verifying the company's involvement and management of crisis situations that can have a damaging effect on reputation. The evaluation will be filled in by the responsible analyst of your industry. No additional information is required from your company.",
      Output: "",

      isTitle: false,
    },

    {
      ID: "3.2",
      "Social Dimension": "Human Rights",
      Output: "",

      isTitle: true,
    },
    {
      ID: "3.2.1",
      "Social Dimension": "Human Rights Commitment",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Do you have a publicly available, company-specific policy in place for your commitment to respect human rights? The policy must be company-wide, covering all company operations.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Is this information is available in your public reporting or corporate website? If yes, provide the relevant URL.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What are the elements covered in the human rights policy?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Which entities are covered under the scope of this policy?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.2.2",
      "Social Dimension": "Human Rights Due Diligence Process",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Has your company developed a company-wide due diligence process to proactively identify and assess potential impacts and risks relating to respecting human rights?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What aspects are covered in the due diligence process?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What issues and vulnerable groups are covered or identified in your due diligence risk identification process? Please also provide public supporting evidence for all aspects covered.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.2.3",
      "Social Dimension": "Human Rights Assessment",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Has your company conducted an assessment of potential human rights issues across your business activities in the past three years?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "For your own operations (including Joint Ventures where the company has management control), what percentage of activities have been assessed, what percentage have risks identified, and what percentage have mitigation actions taken?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the basis for reporting (denominator) chosen? Please select one of the following: ❍ FTEs ❍ Revenues ❍ Clients ❍ Investment Portfolio ❍ Sites ❍ Products.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "For contractors and Tier I suppliers (as a % of total contractors or Tier I suppliers), what percentage of activities have been assessed, what percentage had risks identified, and what percentage had mitigation actions taken?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "For Joint Ventures (including stakes above 10%) (as a % of joint ventures), what percentage of activities have been assessed, what percentage had risks identified, and what percentage had mitigation actions taken?",
      Output: "",

      isTitle: false,
    },

    {
      ID: "3.2.4",
      "Social Dimension": "Human Rights Mitigation & Remediation",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company publicly report on human rights mitigation and remediation actions?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "If yes, please provide supporting evidence for the following:\n1) Processes implemented to mitigate human rights risks\n2) The number of sites with mitigation plans\n3) The types of remediation actions taken",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.2.5",
      "Social Dimension": "MSA Human Rights",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "In this section DJSI includes a performance score on the Corporate Sustainability Monitoring with the objective of verifying the company's involvement and management of crisis situations that can have a damaging effect on reputation. The evaluation will be filled in by the responsible analyst of your industry. No additional information is required from your company.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.3",
      "Social Dimension": "Human Capital Development",
      Output: "",

      isTitle: true,
    },
    {
      ID: "3.3.1",
      "Social Dimension": "Training & Development Inputs",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "What percentage of your global full-time employees (FTEs) have training and development data that is publicly available? If available, please provide supporting evidence such as a URL or report reference.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the average number of training and development hours per full-time employee (FTE)? Is this data publicly available? If yes, please provide supporting evidence or a web link.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the average amount spent on training and development per full-time employee (FTE)? Please specify the currency. Is this data publicly available? If yes, please provide supporting evidence or a web link.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company break down training and development data (for the above KPIs) by any of the following categories? If yes, please provide supporting evidence:\n1) Age group\n2) Gender\n3) Management level (e.g., junior/low level, middle, senior/top level management)\n4) Race, ethnicity, nationality, country of origin, cultural background\n5) Type of training",
      Output: "",

      isTitle: false,
    },

    {
      ID: "3.3.2",
      "Social Dimension": "Employee Development Programs",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company have employee development programs that have been developed to upgrade and improve employee skills? Please indicate where this information is available in your public reporting or corporate website.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "For each of the program, please provide the following details:\n1) Name and description of the program\n2) Objective of the program and business benefits\n3) Quantitative impact of business benefits (monetary or non-monetary)\n4) Percentage of FTEs participating in the program\n5) Supporting evidence",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.3.3",
      "Social Dimension": "Human Capital Return on Investment",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company report on a standard Human Capital Return on Investment (HCROI) metric?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What was your company’s total revenue (a) ? Please state the currency.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What were your company’s total operating expenses (b) ? Please state the currency.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What were your company’s total employee-related expenses (c) (salaries + benefits)? Please state the currency.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What was your company’s resulting Human Capital ROI, calculated as (a–(b–c))/c(a – (b – c)) / c(a–(b–c))/c?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        'What was the total number of employees, as specified in the "Denominator" question?',
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.3.4",
      "Social Dimension": "MSA Human Capital Development",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "In this section DJSI includes a performance score on the Corporate Sustainability Monitoring with the objective of verifying the company's involvement and management of crisis situations that can have a damaging effect on reputation. The evaluation will be filled in by the responsible analyst of your industry. No additional information is required from your company.",
      Output: "",

      isTitle: false,
    },

    {
      ID: "3.4",
      "Social Dimension": "Talent Attraction & Retention",
      Output: "",

      isTitle: true,
    },
    {
      ID: "3.4.1",
      "Social Dimension": "Hiring",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the total number of new employee hires? Is this data publicly available? If yes, please provide supporting evidence or a web link.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the percentage of open positions filled by internal candidates (internal hires) for the past four fiscal years? Is this data publicly available? If yes, please provide supporting evidence or a web link.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the average hiring cost per FTE? Please state the currency.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Do you break down the data for new employee hires and/or internal hires by any of the following categories? If yes, please provide supporting evidence.\n1) Age group - MT1997, MT1998, MT1999, MT2000, MT2001, MT2002, MT2003, MT2004, MT2005, MT2006, MT2007, MT2008\n2) Gender - MT1997, MT1998, MT1999, MT2000, MT2001, MT2002, MT2003, MT2004, MT2005, MT2006, MT2007, MT2008\n3) Management level (e.g., junior/low level, middle, senior/top level management)\n4) Race, ethnicity, nationality, country of origin, or cultural background",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.4.2",
      "Social Dimension": "Type of Performance Appraisal",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company conduct individual and/or team-based performance management appraisals and publicly share this information?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What aspects are covered in the performance management appraisals?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "How often does your company conduct performance appraisals? Please specify the frequency for at least one type of performance appraisal.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.4.3",
      "Social Dimension": "Long-Term Incentives for Employees",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company provide long-term incentives for employees below the senior management level?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What type of long-term incentive program does your company provide for employees below the senior management level? (e.g., stock options, restricted stock units, cash incentives, etc.)",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "To which employees below the senior management level does this program apply?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "On average, after how many years are these long-term incentives paid out to employees below the senior management level?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What percentage of your workforce below the senior management level (maximum two levels from the CEO) is covered by this program?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Do the long-term incentives include targets linked to sustainability performance?",
      Output: "",

      isTitle: false,
    },

    {
      ID: "3.4.4",
      "Social Dimension": "Employee Support Programs",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company provide special training and/or measures to foster employees' health and well-being in the following areas?\n1) Employee Benefits\n2) Working Conditions\n3) Family benefits",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "If yes, what programs and policies has your company implemented to support employees’ health and well-being in each of the above-mentioned areas?\nPlease indicate where this information is available in your public reporting or corporate website.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.4.5",
      "Social Dimension": "Employee Turnover Rate",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "What is your company’s total employee turnover rate?. If this data is publicly available, please provide supporting evidence or a web link.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is your company’s voluntary employee turnover rate?. If this data is publicly available, please provide supporting evidence or a web link.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the data coverage of the turnover rates (as a % of all FTEs globally)?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Do you break down the data of the total employee turnover rate by age group, gender, management level (e.g., junior/low level, middle, senior/top level management), and race/ethnicity/nationality/country of origin/cultural background? If yes, please provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.4.6",
      "Social Dimension": "Trend of Employee Wellbeing",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company conduct an employee survey?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What was the core focus of your survey (e.g., Employee Engagement, Employee Satisfaction, Employee Well-being, or Employee Net Promoter Score [eNPS]), and what was its coverage?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What percentage of employees reported the highest level of engagement, satisfaction, well-being, or employee net promoter score (eNPS) for each of the past four fiscal years, and what was the target set for the most recent year?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Are the results of your annual employee surveys publicly available? If yes, please provide supporting evidence or a web link.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What aspects are addressed in your employee surveys, and please provide supporting evidence or a web link?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.4.7",
      "Social Dimension": "MSA Talent Attraction & Retention",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "In this section DJSI includes a performance score on the Corporate Sustainability Monitoring with the objective of verifying the company's involvement and management of crisis situations that can have a damaging effect on reputation. The evaluation will be filled in by the responsible analyst of your industry. No additional information is required from your company.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.5",
      "Social Dimension": "Occupational Health & Safety",
      Output: "",

      isTitle: true,
    },
    {
      ID: "3.5.1",
      "Social Dimension": "OHS Policy",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company have an OHS policy/ commitment? If yes, what are the elements covered in the policy.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.5.2",
      "Social Dimension": "OHS Programs",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company have an OHS management system? If yes, what are the elements covered in the system.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.5.3",
      "Social Dimension": "Fatalities",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the number of work-related fatalities for employees and contractors? Please provide data for the past four fiscal years.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Has your data been third-party verified in the most recent financial year reported? If yes, please provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Please provide any relevant information that may affect the consistency of the data reported.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.5.4",
      "Social Dimension":
        "Lost-Time Injury Frequency Rate (LTIFR) - Employees",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Please provide your company's lost-time injury frequency rate for employees (per one million hours worked).",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Please provide your company's Lost Workday Rate (LWR) or Days Away/Restricted or Transfer Rate (DART) for employees (per 200,000 hours worked).",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the data coverage (as a percentage of employees, operations, or revenues)?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Has your data been third-party verified in the most recent financial year reported? If yes, please provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Please provide any relevant information that may affect the consistency of the data reported.",
      Output: "",

      isTitle: false,
    },

    {
      ID: "3.5.5",
      "Social Dimension":
        "Lost-Time Injury Frequency Rate (LTIFR) - Contractors",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Please provide your company's lost-time injury frequency rate for contractors (per one million hours worked).",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Please provide your company's Lost Workday Rate (LWR) or Days Away/Restricted or Transfer Rate (DART) for contractors (per 200,000 hours worked).",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the data coverage (as a percentage of contractors, operations, or revenues)?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Has your data been third-party verified in the most recent financial year reported? If yes, please provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Please provide any relevant information that may affect the consistency of the data reported.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.5.6",
      "Social Dimension": "MSA Occupational Health & Safety",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "In this section DJSI includes a performance score on the Corporate Sustainability Monitoring with the objective of verifying the company's involvement and management of crisis situations that can have a damaging effect on reputation. The evaluation will be filled in by the responsible analyst of your industry. No additional information is required from your company.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.6",
      "Social Dimension": "Customer Relationship Management",
      Output: "",

      isTitle: true,
    },
    {
      ID: "3.6.1",
      "Social Dimension": "Customer Satisfaction Measurement",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company monitor and set quantitative targets to improve satisfaction and are targets and results communicated externally?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What is the unit of measurement for customer satisfaction (e.g., percentage of satisfied customers/tenants, net promoter score or similar, rank or similar)?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension": "Report the satisfaction measurement.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Is your data coverage expressed as a percentage of customers, operations, revenues, or tenants? Please specify the data coverage.",
      Output: "",

      isTitle: false,
    },

    {
      ID: "3.6.2",
      "Social Dimension":
        "Quality Management & Audits of Distribution Networks",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company have a Quality Management System to ensure that external product/service distribution networks comply with defined customer service quality standards?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company use an external network of distributors to market at least 30% of its products?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company have a Quality Management System to ensure that external product/service distribution networks comply with your defined customer service quality standards? Please provide supporting evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "Please indicate which measures your company uses to implement your Quality Management System, and the percentage of distributors (whether exclusive distributors or non-exclusive distributors) affected by each measure . Please provide supporting evidence",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What percentage of your product/service distribution network undergoes regular internal audits?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What percentage of your operations undergo regular external audits based on your company-defined Quality Management System?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What percentage of your operations undergo regular external audits based on the ISO 9000 series or other generally accepted Quality Management Systems?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.6.3",
      "Social Dimension": "MSA Customer Relationship Management",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "In this section DJSI includes a performance score on the Corporate Sustainability Monitoring with the objective of verifying the company's involvement and management of crisis situations that can have a damaging effect on reputation. The evaluation will be filled in by the responsible analyst of your industry. No additional information is required from your company.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.7",
      "Social Dimension": "Sustainable Marketing & Brand Perception",
      Output: "",

      isTitle: true,
    },
    {
      ID: "3.7.1",
      "Social Dimension": "Ethical Marketing & Advertising",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company have a publicly available worldwide commitment for ethical marketing and advertising practices? Please indicate where this information is available in your public reporting or corporate website",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What elements are covered in your company’s commitments to ethical marketing, advertising, and sales practices?",
      Output: "",

      isTitle: false,
    },

    {
      ID: "3.7.2",
      "Social Dimension": "Brand Management Metrics",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Do you track the progress of your brand perception on sustainability topics and how it impacts business performance?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What are the sustainability topics covered in the brand perception survey?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "How do you perform the statistical analysis of your brand perception survey result?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.7.3",
      "Social Dimension":
        "MSA Sustainable Marketing & Brand Perception",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "In this section DJSI includes a performance score on the Corporate Sustainability Monitoring with the objective of verifying the company's involvement and management of crisis situations that can have a damaging effect on reputation. The evaluation will be filled in by the responsible analyst of your industry. No additional information is required from your company.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.8",
      "Social Dimension": "Privacy Protection",
      Output: "",

      isTitle: true,
    },
    {
      ID: "3.8.1",
      "Social Dimension": "Privacy Policy: Systems/ Procedures",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "What mechanisms are in place to ensure effective implementation of your company's privacy policy? Please provide publicly available supporting evidence for each mechanism.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.8.2",
      "Social Dimension": "Customer Privacy Information",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "Does your company inform customers on the following privacy protection issues? Please provide publicly available evidence.",
      Output: "",

      isTitle: false,
    },
    {
      ID: "",
      "Social Dimension":
        "What privacy protection issues does your company communicate to customers?",
      Output: "",

      isTitle: false,
    },
    {
      ID: "3.8.3",
      "Social Dimension": "MSA Privacy Protection",
      Output: "",

      isTitle: true,
    },
    {
      ID: "",
      "Social Dimension":
        "In this section DJSI includes a performance score on the Corporate Sustainability Monitoring with the objective of verifying the company's involvement and management of crisis situations that can have a damaging effect on reputation. The evaluation will be filled in by the responsible analyst of your industry. No additional information is required from your company.",
      Output: "",

      isTitle: false,
    },
  ];

  return (
    <div style={{ minHeight: "80vh" }}>
      <TableRenderer
        id="mod-2"
        title="Guidance Document for DJSI Submission - Social"
        tableData={socialModuleOne}
      />
    </div>
  );
};

export default Social;
