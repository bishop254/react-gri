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
              Environmental Dimension
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                fontWeight: "bold",
                width: "20%",
              }}
            >
              Output
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                fontWeight: "bold",
                width: "20%",
              }}
            >
              Whether the question is present and mapped to DJSI in Navigos
              Indicator Listing Sheet
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                fontWeight: "bold",
                width: "10%",
              }}
            >
              SDP/MT#
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                fontWeight: "bold",
                width: "15%",
              }}
            >
              If not, then new Question
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
                {item["Environmental Dimension"]}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {item["Output"]}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {
                  item[
                    "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet"
                  ]
                }
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {item["SDP/MT#"]}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {item["If not, then new Question"]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Environment = () => {
  const environmentModuleOne = [
    {
      ID: "2.1",
      "Environmental Dimension": "Environmental Policy & Management Systems",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If, not then new Question": "",
      isTitle: true,
    },
    {
      ID: "2.1.1",
      "Environmental Dimension": "Environmental Policy & Commitments",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If, not then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Does your company have a public environmental policy that defines elements of an Environmental Management System? If yes, please indicate which of the following elements are included in your policy by writing the corresponding numbers in the response box:\n\n 1) Commitment and oversight by the highest decision-making body (Board of Directors or Executive Management)\n 2) Roles and responsibilities for implementing the environmental management policy\n 3) Ensuring compliance with relevant environmental laws and regulations\n 4) Commitment to continuous improvement of environmental performance\n 5) Setting of targets and objectives to reduce environmental impacts\n 6) Measures to raise internal and external stakeholders’ awareness of environmental management policy and environmental impacts\n 7) Training for employees to understand the impacts of their work activities on the environment",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If, not then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.1.2",
      "Environmental Dimension": "Coverage of Environmental Management Policy",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If, not then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Which parts of your operations, corporate processes, and supply chain are covered by your environmental policy? Please indicate the applicable areas by writing the corresponding numbers in the response box. All selected areas should be clearly defined in the publicly available policy (i.e., formal policies and not different sections of a report or case study).\n\n1) Production operations and business facilities\n2) Products and services\n3) Distribution and logistics\n4) Management of waste\n5) Suppliers, service providers, and contractors\n6) Other key business partners (e.g., non-managed operations, joint venture partners, licensees, outsourcing partners, etc.)\n7) Due diligence, mergers, and acquisitions\n8) Other (please specify)",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If, not then new Question": "",
      isTitle: false,
    },

    {
      ID: "2.1.3",
      "Environmental Dimension": "EMS: Certification/ Audit/ Verification",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "",
      "Environmental Dimension":
        "How is your Environmental Management System (EMS) certified, audited, or verified across your global operations? Please answer by:\n1) Indicating the type of verification used (choose one for each part of your operations, in the following order of priority):\n(a) International standards (e.g., ISO 14001)\n(b) Third-party verification\n(c) Internal verification\n\n2) Specifying the coverage (%) of each verification type.\nNote: The total coverage across all three options should not exceed 100%.\nIf an operation has multiple certifications, count it only once using the order of priority listed above.\n\n3) Providing the source (e.g., link to corporate website or section of public report) where this information is available.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.1.4",
      "Environmental Dimension": "Environmental Violations",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Has your company paid any significant fines or penalties related to environmental or ecological matters in the past four fiscal years? If yes, please provide the following details for each of the following years:\n1) Number of violations of legal obligations/regulations\n2) Amount of fines/penalties related to the above (Amount and Currency)\n3) Environmental liability accrued at year-end  (Amount and Currency)",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.1.5",
      "Environmental Dimension":
        "MSA Environmental Policy & Management Systems",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "In this section, DJSI assigns a performance score under Corporate Sustainability Monitoring to assess how the company is involved in and manages crisis situations that could negatively impact its reputation. The evaluation will be conducted by the analyst responsible for your industry, and no further information is required from your company.\n\nNo further information is required from the company",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },

    {
      ID: "2.2",
      "Environmental Dimension": "Emissions",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "2.2.1",
      "Environmental Dimension": "Direct Greenhouse Gas Emissions (Scope 1)",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Please provide your company’s total direct greenhouse gas emissions (Scope 1) for the past four fiscal years, covering the parts of your operations where you have reliable and auditable data. Use the same unit for all values. Ensure that the coverage reported here matches the company information provided.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "What was your total direct greenhouse gas emissions (Scope 1) target for the past fiscal year?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "Is the data provided above publicly available? If yes, provide supporting evidence or web link.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "Has your data been third-party verified in the most recent financial year reported? If yes, please provide supporting evidence.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "V",
      "Environmental Dimension":
        "Please provide any relevant information that may affect the consistency of the data reported. For example, explain if the reported figures differ from publicly disclosed data, or if there were circumstances (such as temporary limitations in reporting coverage or unusual events) that caused your targets or results to appear irregular.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.2.2",
      "Environmental Dimension": "Indirect Greenhouse Gas Emissions (Scope 2)",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Please provide your company’s Location based indirect greenhouse gas emissions (Scope 2)  for the past four fiscal years, covering the parts of your operations where you have reliable and auditable data. Use the same unit for all values. Ensure that the coverage reported here matches the company information provided.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "What was your Location based indirect greenhouse gas emissions (Scope 2) target for the past fiscal year?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "Please provide your company’s Market based indirect greenhouse gas emissions (Scope 2) for the past four fiscal years, covering the parts of your operations where you have reliable and auditable data. Use the same unit for all values. Ensure that the coverage reported here matches the company information provided.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "What was your Market based indirect greenhouse gas emissions (Scope 2) target for the past fiscal year?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "V",
      "Environmental Dimension":
        "Is the data provided above publicly available? If yes, provide supporting evidence or web link.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "VI",
      "Environmental Dimension":
        "Has your data been third-party verified in the most recent financial year reported? If yes, please provide supporting evidence.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "VII",
      "Environmental Dimension":
        "Please provide any relevant information that may affect the consistency of the data reported. For example, explain if the reported figures differ from publicly disclosed data, or if there were circumstances (such as temporary limitations in reporting coverage or unusual events) that caused your targets or results to appear irregular.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },

    {
      ID: "2.2.3",
      "Environmental Dimension": "Indirect Greenhouse Gas Emissions (Scope 3)",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Please provide your company’s total indirect greenhouse gas emissions (Scope 3) for the past four fiscal years, reported as the sum of all 15 Scope 3 categories calculated in accordance with the GHG Protocol Corporate Value Chain Standard. Use the same unit for all values.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "Please provide your company’s Scope 3 greenhouse gas emissions using the latest available data, reported separately for each of the 15 categories defined by the GHG Protocol Corporate Value Chain Standard. For each category, please also state the methodology used to calculate emissions and indicate if any emissions have been excluded.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "Is the data provided above publicly available? If yes, provide supporting evidence or web link.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "Has your data been third-party verified in the most recent financial year reported? If yes, please provide supporting evidence.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "V",
      "Environmental Dimension":
        "Please provide any relevant information that may affect the consistency of the data reported. For example, explain if the reported figures differ from publicly disclosed data, or if there were circumstances (such as temporary limitations in reporting coverage or unusual events) that caused your targets or results to appear irregular.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.2.4",
      "Environmental Dimension": "MSA Emissions",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "In this section, DJSI assigns a performance score under Corporate Sustainability Monitoring to assess how the company manages crisis situations that could harm its reputation. The evaluation will be completed by the analyst responsible for your industry, and no additional input is required from your company. No further information is required from the company",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.3",
      "Environmental Dimension": "Resource Efficiency and Circularity",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "2.3.1",
      "Environmental Dimension": "Energy Consumption",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Please provide your company’s Total non-renewable energy consumption for the past four fiscal years, covering the parts of your operations where you have reliable and auditable data. Use the same unit for all values. Ensure that the coverage reported here matches the company information provided.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "What was your Total non-renewable energy consumption target for the past fiscal year?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "Please provide your company’s Total renewable energy consumption for the past four fiscal years, covering the parts of your operations where you have reliable and auditable data. Use the same unit for all values. Ensure that the coverage reported here matches the company information provided.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "What was your Total renewable energy consumption target for the past fiscal year?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "V",
      "Environmental Dimension":
        "Is the data provided above publicly available? If yes, provide supporting evidence or web link.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "VI",
      "Environmental Dimension":
        "Has your data been third-party verified in the most recent financial year reported? If yes, please provide supporting evidence.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "VII",
      "Environmental Dimension":
        "Please provide any relevant information that may affect the consistency of the data reported. For example, explain if the reported figures differ from publicly disclosed data, or if there were circumstances (such as temporary limitations in reporting coverage or unusual events) that caused your targets or results to appear irregular.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },

    {
      ID: "2.3.2",
      "Environmental Dimension": "MSA Resource Efficiency and Circularity",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "In this section, DJSI provides a performance score under Corporate Sustainability Monitoring to assess how the company handles crisis situations that may impact its reputation. The evaluation will be completed by the industry analyst, and no additional information is required from your company. No further information is required from the company",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.4",
      "Environmental Dimension": "Waste",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "2.4.1",
      "Environmental Dimension": "Waste Disposal",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Please provide your company’s Total waste recycled/ reused for the past four fiscal years, covering the parts of your operations where you have reliable and auditable data. Use the same unit for all values. Ensure that the coverage reported here matches the company information provided.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "What was your Total waste recycled/ reused consumption target for the past fiscal year?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "Please provide your company’s Total waste disposed for the past four fiscal years, covering the parts of your operations where you have reliable and auditable data. Use the same unit for all values. Ensure that the coverage reported here matches the company information provided.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "What was your Total waste disposed target for the past fiscal year?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "V",
      "Environmental Dimension":
        "Please provide your company’s Total waste sent to landfill for the past four fiscal years, covering the parts of your operations where you have reliable and auditable data. Use the same unit for all values. Ensure that the coverage reported here matches the company information provided.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "VI",
      "Environmental Dimension":
        "What was your Total waste to be sent to landfill target for the past fiscal year?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "VII",
      "Environmental Dimension":
        "Please provide your company’s Total waste sent to incineration with energy recovery for the past four fiscal years, covering the parts of your operations where you have reliable and auditable data. Use the same unit for all values. Ensure that the coverage reported here matches the company information provided.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "VIII",
      "Environmental Dimension":
        "What was your Total waste to be sent to incineration with energy recovery target for the past fiscal year?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IX",
      "Environmental Dimension":
        "Please provide your company’s Total waste sent to incineration without energy recovery for the past four fiscal years, covering the parts of your operations where you have reliable and auditable data. Use the same unit for all values. Ensure that the coverage reported here matches the company information provided.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "X",
      "Environmental Dimension":
        "What was your Total waste to be sent to incineration without energy recovery target for the past fiscal year?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "XI",
      "Environmental Dimension":
        "Please provide your company’s Total waste otherwise disposed for the past four fiscal years, covering the parts of your operations where you have reliable and auditable data. Use the same unit for all values. Ensure that the coverage reported here matches the company information provided.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "XII",
      "Environmental Dimension":
        "What was your Total waste otherwise disposed target for the past fiscal year?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "XIII",
      "Environmental Dimension":
        "Please provide your company’s Total waste with unknown disposal method for the past four fiscal years, covering the parts of your operations where you have reliable and auditable data. Use the same unit for all values. Ensure that the coverage reported here matches the company information provided.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "XIV",
      "Environmental Dimension":
        "What was your Total waste with unknown disposal methods target for the past fiscal year?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "XV",
      "Environmental Dimension":
        "Is the data provided above publicly available? If yes, provide supporting evidence or web link.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "XVI",
      "Environmental Dimension":
        "Has your data been third-party verified in the most recent financial year reported? If yes, please provide supporting evidence.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "XVII",
      "Environmental Dimension":
        "Please provide any relevant information that may affect the consistency of the data reported. For example, explain if the reported figures differ from publicly disclosed data, or if there were circumstances (such as temporary limitations in reporting coverage or unusual events) that caused your targets or results to appear irregular.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },

    {
      ID: "2.4.2",
      "Environmental Dimension": "MSA Waste",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "In this section, DJSI assigns a performance score for Corporate Sustainability Monitoring to evaluate how the company manages crisis situations that could harm its reputation. The assessment will be carried out by the industry analyst, and no further input is required from your company. No further information is required from the company",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.5",
      "Environmental Dimension": "Water",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "2.5.1",
      "Environmental Dimension": "Water Consumption",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Please provide your company’s Total water withdrawn from municipal water supplies (or from other water utilities) for the past four fiscal years, covering the parts of your operations where you have reliable and auditable data. Use the same unit for all values. Ensure that the coverage reported here matches the company information provided. (A)",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "Please provide your company’s Total water withdrawn from Fresh surface water (lakes, rivers, etc.) for the past four fiscal years, covering the parts of your operations where you have reliable and auditable data. Use the same unit for all values. Ensure that the coverage reported here matches the company information provided. (B)",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "Please provide your company’s Total water withdrawn from Fresh groundwater for the past four fiscal years, covering the parts of your operations where you have reliable and auditable data. Use the same unit for all values. Ensure that the coverage reported here matches the company information provided. (C)",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "Please provide your company’s Total water discharged to the source of extraction at similar or higher quality as raw water extracted for the past four fiscal years, covering the parts of your operations where you have reliable and auditable data. Use the same unit for all values. Ensure that the coverage reported here matches the company information provided. (D) (This question only applies to water withdrawn from fresh surface water and fresh groundwater sources)",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "V",
      "Environmental Dimension":
        "What was the total net fresh water consumption (A+B+C+D) for the past four fiscal years?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "VI",
      "Environmental Dimension":
        "What was the total net fresh water consumption (A+B+C+D) target for the past fiscal year?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "VII",
      "Environmental Dimension":
        "Is the data provided above publicly available? If yes, provide supporting evidence or web link.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "VIII",
      "Environmental Dimension":
        "Has your data been third-party verified in the most recent financial year reported? If yes, please provide supporting evidence.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IX",
      "Environmental Dimension":
        "Please provide any relevant information that may affect the consistency of the data reported. For example, explain if the reported figures differ from publicly disclosed data, or if there were circumstances (such as temporary limitations in reporting coverage or unusual events) that caused your targets or results to appear irregular.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.5.2",
      "Environmental Dimension": "MSA Water",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "In this section, DJSI gives a performance score for Corporate Sustainability Monitoring to assess how the company manages crisis situations that could affect its reputation. The evaluation will be completed by the industry analyst, and no additional information is required from your company. No further information is required from the company",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },

    {
      ID: "2.6",
      "Environmental Dimension": "Climate Strategy",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "2.6.1",
      "Environmental Dimension": "Climate Governance",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Is your company’s board of directors and/or executive management responsible for the oversight and management of climate-related issues? Please specify where this is available in your public reporting or corporate website.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "Mention the board level committee with oversight of climate-related issues",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "Are climate issues are on the agenda of the board of directors? If yes, please specify how often they are scheduled as agenda items.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "Does your company have a management position or committee responsible for climate-related issues? If yes, please provide the name of that position or committee.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.6.2",
      "Environmental Dimension": "TCFD Disclosure",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Does your organization apply the TCFD framework in the management of climate-related risks and opportunities? Please indicate where this information is available in your public reporting.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.6.3",
      "Environmental Dimension": "Climate-Related Management Incentives",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Does your company provide incentives for the management of climate change issues, including the attainment of targets? Please indicate where this information is available in your public reporting or corporate website.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "Who is entitled to benefit from this incentive?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension": "What is the type of incentive offered?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "Please provide a description of the KPI and how it is incentivized",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.6.4",
      "Environmental Dimension": "Climate Risk Management",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Does your company have a Climate Risk Management process? Please specify where this is available in your public reporting or corporate website.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension": "Explain the climate risk management process.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "What are the types of climate-related risk included in risk assessment?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "Which value chain stages are covered in the assessment?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "V",
      "Environmental Dimension": "What are the time horizons covered?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },

    {
      ID: "2.6.5",
      "Environmental Dimension": "Financial Risks of Climate Change",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Have you identified any climate change risks (current or future) that have potential to generate a substantive change in your business operations, revenue or expenditures?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "For the most significant risks driven by changes in regulation:\n1) Provide a description of the risk and the methods used to manage the risk.\n2) Estimated financial implications of the risk before taking action\n3) Average estimated time frame (in number of years) for financial implications of this risk\n4) Estimated costs of these actions",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "For the most significant risks driven by change in physical climate parameters or other climate-change related developments:\n1) Provide a description of the risk and the methods used to manage the risk.\n2) Estimated financial implications of the risk before taking action\n3) Average estimated time frame (in number of years) for financial implications of this risk\n4) Estimated costs of these actions",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.6.6",
      "Environmental Dimension":
        "Financial Opportunities Arising from Climate Change",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Have you identified any climate change-related opportunities (current or future) that have the potential to generate a substantive positive change in your business operations, revenue, expenditure (i.e. opportunities driven by changes in regulation, physical, or other climate change-related developments)?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "For the most significant opportunity resulting from climate change on your business operations, revenue growth, or expenditures\n1) Provide a description\n2) Estimate the annual financial positive implications of this opportunity\n3) Estimated time frame (in number of years) for positive financial implications of this opportunity\n4) Estimate the current annual costs associated with developing this opportunity",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.6.7",
      "Environmental Dimension": "Climate-Related Scenario Analysis",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Has your company conducted climate-related scenario analysis? Please specify where this is available in your public reporting or corporate website.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "What is the methodology used for scenario analysis?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "What are the physical and transition scenarios used for climate-related scenario analysis?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.6.8",
      "Environmental Dimension": "Physical Climate Risk Adaptation",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Based on your climate risk assessment, has your company set up a plan to adapt to the identified physical climate risks? Please provide supporting evidence and indicate where this is available in the public domain.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "Do you have a context-specific plan to adapt to physical climate risks in existing and/or new operations or an overall plan to adapt to potential physical climate risks?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "What share of your current operations (measured as a percentage of total revenues) is covered by your risk assessment and adaptation plan for physical climate risks?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "What is the target timeline set in your plan for implementing the identified adaptation measures?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.6.9",
      "Environmental Dimension": "Emissions Reduction Targets",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Does your company have any corporate-level emissions reduction targets publicly available?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension": "What is the Target Type and Metric?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "What is the scope of your emissions reduction target, including the target timeframe, the baseline year, the emissions covered in the baseline year (as a percentage of total baseline emissions), and the percentage reduction target from the baseline year?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "Is this target validated by the Science-based Targets Initiative?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },

    {
      ID: "2.6.10",
      "Environmental Dimension": "Low-Carbon Products",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        'Please provide the following details of your products and/or services that you classify as low carbon products or that enable a third party to avoid GHG emissions.\n1) Type & Description of product(s)\n2) Public Reporting\n3) Level of aggregation\n4) % of total revenues from "climate change" product(s) in FY 2022\n5) Estimated total avoided emissions per year',
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.6.11",
      "Environmental Dimension": "Internal Carbon Pricing",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Please indicate if your company uses an internal price of carbon. If yes, please specify your company’s objective to implement an internal carbon price.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "Provide the following details regarding the internal carbon price:\n1) Which GHG emission scope does it apply to?\n2) Type of internal carbon price\n3) Application\n4) Price (per metric tonne CO2e)\n5) Price setting approach",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.6.12",
      "Environmental Dimension": "Net-Zero Commitment",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Has your company publicly committed to reaching net-zero GHG emissions and set targets and programs to fulfil the commitment?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "What is the target timeframe, scope & related emission reduction target (as % of base year emissions)?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "Is the target validated by Science-Based Targets initiative?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "Has your company defined or implemented programs/activities to achieve emission reduction targets?\n(a) Scope 1 & 2\n(b) Scope 3",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "V",
      "Environmental Dimension":
        "Does your company plan to neutralize residual emissions?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "VI",
      "Environmental Dimension":
        "If yes, which activities are included?\n(a) Offsetting (e.g., purchasing carbon credits)\n(b) Investing in permanent carbon removal",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.6.13",
      "Environmental Dimension": "MSA Climate Strategy",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "In this section, DJSI assigns a performance score under Corporate Sustainability Monitoring to assess how the company manages crisis situations that could harm its reputation. The evaluation will be conducted by the industry analyst, and no additional information is required from your company.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.7",
      "Environmental Dimension": "Biodiversity",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "2.7.1",
      "Environmental Dimension": "Biodiversity Risk Assessment",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Has your company assessed dependency- and impact-related biodiversity risks covering all relevant activities?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "Describe the processes used for identifying and assessing dependency- and impact-related biodiversity risks and indicate if this information is reported in the public domain.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "Please indicate the scope of your biodiversity risk assessment, and indicate if this information is reported in the public domain.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "Indicate if biodiversity risks were identified, and indicate if this information is reported in the public domain.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },

    {
      ID: "2.7.2",
      "Environmental Dimension": "Biodiversity Commitment",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Does your company have a public policy or commitment on biodiversity? Please indicate where this information is available in your public reporting or corporate website.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "What are the aspects covered by the policy or commitment?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "Which parts of your value chain are covered by your biodiversity policy or commitment?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "Is your policy endorsed by a member of either the Board of Directors, or Executive Management?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.7.3",
      "Environmental Dimension": "No Deforestation Commitment",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Does your company have a publicly available no-deforestation policy or commitment for your company's own operational activities, and is this commitment applicable to your company's supply chain?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "Specify the extent of the policy or commitment.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "Which parts of your value chain are covered by your no-deforestation policy or commitment?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "Is your policy or commitment endorsed by a member of either the Board of Directors, or Executive Management?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.7.4",
      "Environmental Dimension": "MSA Biodiversity",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "In this section, DJSI includes a performance score for Corporate Sustainability Monitoring to verify how the company manages crisis situations that could harm its reputation. The evaluation will be completed by the responsible industry analyst, and no additional information is required from your company.",
      Output: "No further information is required from the company",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.8",
      "Environmental Dimension": "Product Stewardship",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Which impacts are covered by your company’s life cycle assessment (LCA)? Please specify the impacts included under each of the following categories:\na) Resource use\nb) Ecological consequences\nc) Human health",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "Please indicate the percentage of total products covered by the following Life Cycle Assessment approaches - Full LCAs and Simplified LCAs. The total sum should not exceed 100%.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "Please describe your company’s full life cycle assessment (LCA) approach, including the percentage of total products covered and whether this information is publicly available.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "Please describe your company’s Simplified assessment approach, including the percentage of total products covered and whether this information is publicly available.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "V",
      "Environmental Dimension":
        "Please describe other externally recognized tools, including the percentage of total products covered and whether this information is publicly available.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.8.2",
      "Environmental Dimension": "Resource Efficiency Benefits of Products",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "What percent of your products provide resource efficiency benefits during their use phase to your customers and consumers?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "Please explain what and how much benefit is provided through the use of your products and provide supporting evidence. Benefits include decreased energy consumption, decreased water consumption, decreased waste generation, GHG emissions reduction, pollution reduction, decreased raw material consumption, or increased product durability/longevity.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },

    {
      ID: "2.8.3",
      "Environmental Dimension": "Hazardous Substances Commitment",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Does your company have a commitment to reduce or phase-out hazardous substances in its products? The commitment can be specific to particular products or substances, or general to your product portfolio.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "If yes, provide a description of the commitment, target year and progress achieved towards this target:",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.8.4",
      "Environmental Dimension": "End of Life Cycle Responsibility",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Do you calculate the end-of-life stage of your products in metric tonnes or in cubic metres?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "What percentage of the products sold in the last fiscal year can be reused or recycled? If products are only partially recyclable, please provide an estimated proportion. Additionally, indicate whether this data is publicly available and, if so, provide suitable evidence.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "What percentage of the products and materials produced by your company were actually reused or recycled—either internally or by a third party directly contracted for this activity—relative to the total products produced (excluding disposal as waste or incineration for energy recovery)? Additionally, indicate whether this data is publicly available and, if so, provide suitable evidence.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "If your company’s take-back programs generate a financial benefit, please quantify the total benefit across all programs (e.g., revenues generated and/or costs saved). If the programs only generate costs, please leave this blank or write “0.”\n\nCurrency: ________\n\nAdditionally, indicate whether this data is publicly available and, if so, provide suitable evidence.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.8.5",
      "Environmental Dimension": "Environmental Labels & Declarations",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Does your company provide product environmental declarations or other types of eco-labelling to customers?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "What is the % of products with Environmental Labels and Declarations, and what is the % of revenues covered by them in the past fiscal year ? (Total revenues covered should not exceed 100%)",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "What is the % of products covered in Type III Environmental Product Declarations (in accordance with ISO 14025 or the European construction standard EN 15804)? Please also indicate the % of revenues covered in the past fiscal year. Attach supporting documents.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "What is the % of products covered in Type II self-declared environmental claims (in accordance with ISO 14021)? Please also indicate the % of revenues covered in the past fiscal year. Attach supporting documents.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "V",
      "Environmental Dimension":
        "What is the % of products covered in Type I or other ecolabels (in accordance with ISO 14024 or independent ecolabels such as WWF, Energy Star, LEED, or accepted industry-specific best practices)? Please also indicate the % of revenues covered in the past fiscal year. Specify the standards or labels used and attach supporting documents.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },

    {
      ID: "2.8.6",
      "Environmental Dimension": "MSA Product Stewardship",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "In this section, DJSI includes a performance score for Corporate Sustainability Monitoring to verify how the company manages crisis situations that could harm its reputation. The evaluation will be completed by the responsible industry analyst, and no additional information is required from your company.",
      Output: "No further information is required from the company",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.9",
      "Environmental Dimension": "Automotive Use-phase Decarbonization",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "2.9.1",
      "Environmental Dimension": "Electric Vehicle (EV) Battery Degradation",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Does your company measure battery degradation? If yes, provide supporting evidence.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "What is the average number of kilometres driven before the EV battery reaches 70-80% of its original total capacity?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "What is the average number of years before the EV battery reaches 70-80% of its original total capacity?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.9.2",
      "Environmental Dimension": "Electric Vehicle Efficiency",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Does your company measure the average energy economy of our produced electric vehicles? If yes, provide supporting evidence.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "What is the total percentage of Battery Electric Vehicles (BEV) and Fuel Cell Electric Vehicles (FCEV) sold using the Worldwide Harmonized Light Vehicles Test Procedure (WLTP), Environmental Protection Agency (EPA), and Corporate Average Fuel Consumption – New European Driving Cycle (CAFC-NEDC) energy economy standards (should not exceed 100%)?\n\nData to be provided for past four fiscal years.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "What is the average energy economy of Battery Electric Vehicles (BEV) and Fuel Cell Electric Vehicles (FCEV)? Please specify the unit (kWh/100 kilometers, kWh/100 miles, or MPG-e).\n\nData to be provided for past four fiscal years.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "What is the percentage of new cars sold (as a share of all Battery Electric Vehicles (BEV) and Fuel Cell Electric Vehicles (FCEV) sold globally)?\n\nData to be provided for past four fiscal years.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "V",
      "Environmental Dimension":
        "What is the average energy economy of Battery Electric Vehicles (BEV) and Fuel Cell Electric Vehicles (FCEV), and in which unit is it reported (kWh/100 kilometers, kWh/100 miles, or MPG-e)?\n\nData to be provided for past four fiscal years.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "VI",
      "Environmental Dimension":
        "What percentage of new cars sold globally were Battery Electric Vehicles (BEV) and Fuel Cell Electric Vehicles (FCEV), expressed as a share of total BEV and FCEV sales?\n\nData to be provided for past four fiscal years.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },

    {
      ID: "VII",
      "Environmental Dimension":
        "What is the total percentage of Battery Electric Vehicles (BEV) and Fuel Cell Electric Vehicles (FCEV) sold that are measured using the Worldwide Harmonized Light Vehicles Test Procedure (WLTP), the Environmental Protection Agency (EPA) standard, and the Corporate Average Fuel Consumption – New European Driving Cycle (CAFC-NEDC) energy economy standards (should not exceed 100%)?\n\nData to be provided for past four fiscal years.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "VIII",
      "Environmental Dimension":
        "What is the average energy economy of Battery Electric Vehicles (BEV) and Fuel Cell Electric Vehicles (FCEV)? Please specify the unit used:  kWh/100 kilometers / kWh/100 miles / Miles per Gallon gasoline-equivalent (MPG-e).\n\nData to be provided for past four fiscal years.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IX",
      "Environmental Dimension":
        "What percentage of new cars sold were Battery Electric Vehicles (BEV) and Fuel Cell Electric Vehicles (FCEV), expressed as a share of all BEV and FCEV sold globally?\n\nData to be provided for past four fiscal years.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.9.3",
      "Environmental Dimension":
        "Governance Checks for Vehicle Efficiency & Emissions",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Does your company have management measures in place to analyze and act on possible discrepancies for data on vehicle efficiency and emissions between the below two datasets?\na) Data reported to authorities (dataset 1)\nb) Data collected and analyzed in independent real-life driving situations or currently non-regulated off-cycle tests (dataset 2)\n\nIf yes, Please provide supporting evidence.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.9.4",
      "Environmental Dimension": "Vehicle Fuel & Carbon Efficiency",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "Do you measure the average vehicle or carbon efficiency of your vehicles sold under your brands for the past four years in the EU, the US and China? The data should meet respective market regulations and be supported with percentage of cars sold in those regions. If yes, provide supporting evidence.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "What is the total percentage of cars sold in EU-27 (CO₂ regulation – NEDC/WLTP)? Please provide data for the past four fiscal years.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "What is the total percentage of cars sold in the USA (CAFE – US combined)? Please provide data for the past four fiscal years.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "What is the total percentage of cars sold in China (CAFC – NEDC)? Please provide data for the past four fiscal years.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "V",
      "Environmental Dimension":
        "What is the total percentage of cars sold in EU-27 (CO₂ regulation – NEDC/WLTP), USA (CAFE – US combined), and China (CAFC – NEDC)? (The sum should not exceed 100%.). Please provide data for the past four fiscal years.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "VI",
      "Environmental Dimension":
        "What is the average CO₂ efficiency (or alternative fuel efficiency) of vehicles? Please specify the unit used:\n❍ Liters/100 kilometers\n❍ Grams of CO₂/kilometer\n❍ Miles per gallon (mpg)\n\nPlease provide data for the past four fiscal years.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },

    {
      ID: "VII",
      "Environmental Dimension":
        "What percentage of new cars sold represents the share of all cars sold globally? Please provide data for the past four fiscal years.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.9.5",
      "Environmental Dimension": "Alternative Drive Trains",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "For Battery Electric Vehicles (BEVs), what was the number of vehicles sold in the last fiscal year, and what is the projection for FY 2030 (as a % of total vehicles sold)?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "II",
      "Environmental Dimension":
        "For Fuel Cell Electric Vehicles (FCEVs), what was the number of vehicles sold in the last fiscal year, and what is the projection for FY 2030 (as a % of total vehicles sold)?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "III",
      "Environmental Dimension":
        "For Plug-in Hybrid Electric Vehicles (PHEVs), what was the number of vehicles sold in the last fiscal year, and what is the projection for FY 2030 (as a % of total vehicles sold)?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "IV",
      "Environmental Dimension":
        "For Battery-assisted Hybrid Vehicles (BAHVs), what was the number of vehicles sold in the last fiscal year, and what is the projection for FY 2030 (as a % of total vehicles sold)?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "V",
      "Environmental Dimension":
        "For Compressed Natural Gas Vehicles (CNGVs), what was the number of vehicles sold in the last fiscal year, and what is the projection for FY 2030 (as a % of total vehicles sold)?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "VI",
      "Environmental Dimension":
        "For Liquid Petroleum Gas Vehicles (LPGVs), what was the number of vehicles sold in the last fiscal year, and what is the projection for FY 2030 (as a % of total vehicles sold)?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "VII",
      "Environmental Dimension":
        "For Flex Fuel Vehicles (FFVs), what was the number of vehicles sold in the last fiscal year, and what is the projection for FY 2030 (as a % of total vehicles sold)?",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "VIII",
      "Environmental Dimension":
        "Is the data publicly available? Please provide supporting evidence or web link.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
    {
      ID: "2.9.6",
      "Environmental Dimension": "MSA Automotive Use-phase Decarbonization",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: true,
    },
    {
      ID: "I",
      "Environmental Dimension":
        "In this section, DJSI includes a performance score for Corporate Sustainability Monitoring to verify how the company manages crisis situations that could harm its reputation. The evaluation will be completed by the responsible industry analyst, and no additional information is required from your company.",
      Output: "",
      "Whether the question is present and mapped to DJSI in Navigos Indicator Listing Sheet":
        "",
      "SDP/MT#": "",
      "If not, then new Question": "",
      isTitle: false,
    },
  ];

  return (
    <div style={{ minHeight: "80vh" }}>
      <TableRenderer
        id="mod-2"
        title="Guidance Document for DJSI Submission - Environment"
        tableData={environmentModuleOne}
      />
    </div>
  );
};

export default Environment;
