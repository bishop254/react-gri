import React from "react";

const TableRenderer = ({ id, title, tableData }) => {
  // Group items by Section
  const groupedData = tableData.reduce((acc, item) => {
    if (!acc[item["Section"]]) {
      acc[item["Section"]] = [];
    }
    acc[item["Section"]].push(item);
    return acc;
  }, {});

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
                width: "25%",
              }}
            >
              Section
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                fontWeight: "bold",
                width: "35%",
              }}
            >
              Policy / Action
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                fontWeight: "bold",
                width: "15%",
              }}
            >
              Evidence / Link
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                fontWeight: "bold",
                width: "15%",
              }}
            >
              Remarks
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedData).map(([section, items], sectionIndex) => {
            return items.map((item, index) => (
              <tr key={`${sectionIndex}-${index}`}>
                {index === 0 && (
                  <td
                    rowSpan={items.length}
                    style={{
                      border: "1px solid black",
                      padding: "8px",
                      fontWeight: "bold",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    {section}
                  </td>
                )}
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item["Policy / Action"]}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item["Evidence / Link"]}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item["Remarks"]}
                </td>
              </tr>
            ));
          })}
        </tbody>
      </table>
    </div>
  );
};

const Ecovadis = () => {
  const ecovadisModule = [
    {
      Section: "1. Accreditations and External Commitments",
      "Policy / Action":
        "Accreditation from the Association for Assessment and Accreditation of Laboratory Animal Care (AAALAC)",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "1. Accreditations and External Commitments",
      "Policy / Action":
        "External CSR initiatives or principles adhered to (UNGC, SBTi, Responsible Care Global Charter, PSCI, AMR Industry Alliance)",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "2. External Audits",
      "Policy / Action":
        "Independent external audit(s) regarding sustainability issues (environment, labor, ethics, etc.) conducted",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "2. External Audits",
      "Policy / Action":
        "Latest audit report or CAP, publication date within two years",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "3. CSR Reporting and Materiality",
      "Policy / Action": "Reporting on quantitative indicators on CSR topics",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "3. CSR Reporting and Materiality",
      "Policy / Action": "Indicators externally verified by a third-party",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "3. CSR Reporting and Materiality",
      "Policy / Action":
        "Indicators aligned with reporting standards like GRI, SASB",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "3. CSR Reporting and Materiality",
      "Policy / Action":
        "Materiality analysis conducted to identify relevant indicators",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "4. SDGs and Sustainability Communication",
      "Policy / Action":
        "Communication on progress towards Sustainable Development Goals (SDGs)",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "5. Labor Practices and Human Rights Policies",
      "Policy / Action": "Employee health and safety management policy",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "5. Labor Practices and Human Rights Policies",
      "Policy / Action":
        "Working conditions policy covering wages, benefits, working hours, communication",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "5. Labor Practices and Human Rights Policies",
      "Policy / Action":
        "Labor relations including structured relations with representatives/unions",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "5. Labor Practices and Human Rights Policies",
      "Policy / Action":
        "Career management policy covering recruitment, training, development",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "5. Labor Practices and Human Rights Policies",
      "Policy / Action": "Measures to prevent child and forced labor",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "5. Labor Practices and Human Rights Policies",
      "Policy / Action": "Diversity, equity & inclusion policy",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "5. Labor Practices and Human Rights Policies",
      "Policy / Action": "External stakeholder human rights policy",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "6. Employee Health & Safety Management",
      "Policy / Action":
        "Inclusion of subcontractors in health & safety policy",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "6. Employee Health & Safety Management",
      "Policy / Action":
        "Process to assess and document employee health & safety risks",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "6. Employee Health & Safety Management",
      "Policy / Action": "Health & safety risk assessments conducted",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "6. Employee Health & Safety Management",
      "Policy / Action": "Emergency action plans for workplace safety",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "6. Employee Health & Safety Management",
      "Policy / Action":
        "Training records/materials for employee health & safety",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "6. Employee Health & Safety Management",
      "Policy / Action":
        "Grievance procedure for reporting health & safety issues",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "6. Employee Health & Safety Management",
      "Policy / Action": "Equipment safety inspections and audit reports",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "6. Employee Health & Safety Management",
      "Policy / Action": "Periodic employee health check-up reports",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "6. Employee Health & Safety Management",
      "Policy / Action": "Training records for subcontractors",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "6. Employee Health & Safety Management",
      "Policy / Action": "RSI prevention policies or training materials",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "6. Employee Health & Safety Management",
      "Policy / Action": "Mental health and wellbeing programs",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "6. Employee Health & Safety Management",
      "Policy / Action":
        "Risk assessments, SDS, and monitoring reports for hazardous substances",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "7. Working Conditions",
      "Policy / Action": "Two-way communication system for employee voice",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "7. Working Conditions",
      "Policy / Action": "Compensation policies for extra working hours",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "7. Working Conditions",
      "Policy / Action":
        "Family friendly programs (parental leave, childcare services)",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "7. Working Conditions",
      "Policy / Action": "Flexible work arrangements (remote work, flexi-time)",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "7. Working Conditions",
      "Policy / Action": "Healthcare coverage for employees",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "7. Working Conditions",
      "Policy / Action": "Remuneration communication materials",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "7. Working Conditions",
      "Policy / Action": "Employee satisfaction survey results",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "7. Working Conditions",
      "Policy / Action": "Employee stock ownership plans",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "7. Working Conditions",
      "Policy / Action": "Bonus schemes linked to company performance",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "8. Social Dialogue",
      "Policy / Action":
        "Evidence of employee representative bodies (works council, etc.)",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "8. Social Dialogue",
      "Policy / Action": "Confirmation of European Works Council",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "8. Social Dialogue",
      "Policy / Action": "Collective agreement on health and safety",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "8. Social Dialogue",
      "Policy / Action": "Collective agreement on working conditions",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "8. Social Dialogue",
      "Policy / Action":
        "Collective agreement on training and career management",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "8. Social Dialogue",
      "Policy / Action":
        "Collective agreement on diversity, discrimination, harassment",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "9. Training and Career Management",
      "Policy / Action":
        "Transparent recruitment process communicated to candidates",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "9. Training and Career Management",
      "Policy / Action": "Regular individual performance assessments",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "9. Training and Career Management",
      "Policy / Action": "Individual development and career plans",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "9. Training and Career Management",
      "Policy / Action": "Career mobility promotion measures",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "9. Training and Career Management",
      "Policy / Action": "Skills development training",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "9. Training and Career Management",
      "Policy / Action": "Measures to anticipate or reduce layoffs",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "10. Diversity, Equity & Inclusion",
      "Policy / Action": "Prevention of discrimination in recruitment",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "10. Diversity, Equity & Inclusion",
      "Policy / Action":
        "Prevention of discrimination in promotion and development",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "10. Diversity, Equity & Inclusion",
      "Policy / Action":
        "Awareness training on diversity and harassment issues",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "10. Diversity, Equity & Inclusion",
      "Policy / Action": "Actions to prevent workplace harassment",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "10. Diversity, Equity & Inclusion",
      "Policy / Action": "Support groups for minorities/vulnerable groups",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "10. Diversity, Equity & Inclusion",
      "Policy / Action": "Women's mentorship or development programs",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "10. Diversity, Equity & Inclusion",
      "Policy / Action": "Inclusion of employees with disabilities",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "10. Diversity, Equity & Inclusion",
      "Policy / Action": "Grievance mechanism for discrimination",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "10. Diversity, Equity & Inclusion",
      "Policy / Action": "Remediation procedures for victims of harassment",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "10. Diversity, Equity & Inclusion",
      "Policy / Action": "Actions to promote wage equality",
      "Evidence / Link": "",
      Remarks: "",
    },

    {
      Section: "11. External Stakeholder Human Rights",
      "Policy / Action": "Human rights impact assessments performed",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "11. External Stakeholder Human Rights",
      "Policy / Action": "Stakeholder consultation in line with FPIC",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "11. External Stakeholder Human Rights",
      "Policy / Action": "Awareness training on external human rights",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "11. External Stakeholder Human Rights",
      "Policy / Action": "Partnerships with NGOs/local authorities",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "11. External Stakeholder Human Rights",
      "Policy / Action": "Grievance mechanisms for external stakeholders",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "11. External Stakeholder Human Rights",
      "Policy / Action": "Remediation procedures for human rights violations",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "12. Workers’ Rights and Migrant Workforce",
      "Policy / Action": "Right to join unions or collective bargaining bodies",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "12. Workers’ Rights and Migrant Workforce",
      "Policy / Action": "Employment of migrant workers",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "12. Workers’ Rights and Migrant Workforce",
      "Policy / Action":
        "Labor and human rights management certifications (ISO 45001, etc.)",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "13. Coverage and Assessments",
      "Policy / Action": "% of sites with health & safety risk assessments",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "13. Coverage and Assessments",
      "Policy / Action":
        "% workforce in joint management-worker health & safety committees",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "13. Coverage and Assessments",
      "Policy / Action":
        "% workforce covered by collective agreements on working conditions",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "13. Coverage and Assessments",
      "Policy / Action":
        "% workforce covered by collective agreements on health & safety",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "13. Coverage and Assessments",
      "Policy / Action": "% workforce receiving career reviews",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "13. Coverage and Assessments",
      "Policy / Action": "% workforce receiving career/skills training",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "13. Coverage and Assessments",
      "Policy / Action": "% workforce trained on diversity, harassment issues",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "13. Coverage and Assessments",
      "Policy / Action": "% sites subject to human rights reviews/assessments",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "13. Coverage and Assessments",
      "Policy / Action":
        "% facilities certified under labor/human rights management standards",
      "Evidence / Link": "",
      Remarks: "",
    },

    {
      Section: "14. KPIs on Health & Safety",
      "Policy / Action": "Lost time injury frequency rate (LTI)",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "14. KPIs on Health & Safety",
      "Policy / Action": "Lost time injury severity rate (LTS)",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "15. Training KPIs",
      "Policy / Action": "Average training hours per employee per year",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "16. Diversity KPIs",
      "Policy / Action": "% women employed in the organization",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "16. Diversity KPIs",
      "Policy / Action": "% women in top executive roles",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "16. Diversity KPIs",
      "Policy / Action": "% women on the board of directors",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "16. Diversity KPIs",
      "Policy / Action": "Average gender pay gap",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "16. Diversity KPIs",
      "Policy / Action": "% employees from minority/vulnerable groups",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "16. Diversity KPIs",
      "Policy / Action":
        "% minority/vulnerable employees in leadership positions",
      "Evidence / Link": "",
      Remarks: "",
    },

    {
      Section: "17. Environmental Policies",
      "Policy / Action":
        "Formal environmental policy covering energy, water, waste, air, biodiversity",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "17. Environmental Policies",
      "Policy / Action": "Policy on discharge of APIs",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "17. Environmental Policies",
      "Policy / Action": "Environmental risk assessment process",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Employee training on energy & climate issues",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Purchase of renewable energy",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Carbon offsets purchased",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Energy audits conducted",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Efficiency improvement measures implemented",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Waste heat recovery or CHP units",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Fuel switch initiatives",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Carbon capture and storage projects",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Water recycling and reuse systems",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Water audits conducted",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Cooling system improvements",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Rainwater harvesting",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Wastewater treatment facilities",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Wastewater quality reports",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Groundwater contamination control",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "API removal systems",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Reduction measures for dust, VOCs, SO2, NOx",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Ambient air quality monitoring",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Noise, odor, vibration mitigation programs",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Process optimization to reduce materials use",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Use of recovered or bio-based materials",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Spill control and emergency response plans",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Labeling and disposal of hazardous substances",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Safe handling training for hazardous materials",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Waste reduction, reuse, and recovery systems",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Waste sorting practices",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Waste stream mapping",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "18. Environmental Management",
      "Policy / Action": "Hazardous waste transboundary control",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "19. Customer Health & Safety",
      "Policy / Action": "Customer awareness programs",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "19. Customer Health & Safety",
      "Policy / Action": "Product composition disclosures (labels, datasheets)",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "19. Customer Health & Safety",
      "Policy / Action": "Product recall processes",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "19. Customer Health & Safety",
      "Policy / Action": "Health impact assessments",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "19. Customer Health & Safety",
      "Policy / Action": "Safety Data Sheets (SDS) availability",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "19. Customer Health & Safety",
      "Policy / Action": "Risk assessment processes",
      "Evidence / Link": "",
      Remarks: "",
    },

    {
      Section: "20. REACH Compliance",
      "Policy / Action": "Substance registrations with ECHA",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "20. REACH Compliance",
      "Policy / Action": "REACH-adapted SDS available",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "20. REACH Compliance",
      "Policy / Action": "SVHC communications to downstream users",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "21. Product End-of-Life",
      "Policy / Action": "Use of recyclable or eco-friendly packaging",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "21. Product End-of-Life",
      "Policy / Action": "End-of-life collection programs for products",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "22. Environmental Certifications",
      "Policy / Action":
        "Environmental certifications such as ISO 14001, EMAS, etc.",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "22. Environmental Certifications",
      "Policy / Action": "% of workforce trained on environmental issues",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "22. Environmental Certifications",
      "Policy / Action": "% of sites with environmental risk assessments",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "22. Environmental Certifications",
      "Policy / Action": "% of certified facilities",
      "Evidence / Link": "",
      Remarks: "",
    },

    {
      Section: "23. Environmental KPIs",
      "Policy / Action": "Total Scope 1 GHG emissions",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "23. Environmental KPIs",
      "Policy / Action": "Total Scope 2 GHG emissions",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "23. Environmental KPIs",
      "Policy / Action": "Total Scope 3 GHG emissions",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "23. Environmental KPIs",
      "Policy / Action": "Total energy consumption",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "23. Environmental KPIs",
      "Policy / Action": "Renewable energy consumption",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "23. Environmental KPIs",
      "Policy / Action": "Water consumption",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "23. Environmental KPIs",
      "Policy / Action": "Pollutants emitted to water",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "23. Environmental KPIs",
      "Policy / Action": "Hazardous waste generated",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "23. Environmental KPIs",
      "Policy / Action": "Non-hazardous waste generated",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "23. Environmental KPIs",
      "Policy / Action": "Waste recovered",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "23. Environmental KPIs",
      "Policy / Action": "Expired medicines collected (% of sales volume)",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "24. Sustainable Procurement",
      "Policy / Action":
        "Sustainable procurement policies (environmental, labor, human rights)",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "24. Sustainable Procurement",
      "Policy / Action": "Supplier CSR Code of Conduct",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "24. Sustainable Procurement",
      "Policy / Action": "CSR clauses included in supplier contracts",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "24. Sustainable Procurement",
      "Policy / Action": "Supplier assessment/audit processes",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "24. Sustainable Procurement",
      "Policy / Action": "Buyer training programs on sustainable procurement",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "24. Sustainable Procurement",
      "Policy / Action": "Supplier diversity programs",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "25. Business Ethics",
      "Policy / Action":
        "Policies covering corruption, fraud, conflicts of interest, money laundering, competition, and information security",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "25. Business Ethics",
      "Policy / Action": "Awareness training on corruption and bribery",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "25. Business Ethics",
      "Policy / Action": "Anti-corruption due diligence programs",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "25. Business Ethics",
      "Policy / Action": "Whistleblower reporting mechanisms",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "25. Business Ethics",
      "Policy / Action": "Risk assessments conducted for ethics issues",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "25. Business Ethics",
      "Policy / Action": "Audits of control procedures",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "25. Business Ethics",
      "Policy / Action":
        "Information security management certifications (ISO 27001, etc.)",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "26. Ethics KPIs",
      "Policy / Action": "Reporting year covered by data",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "26. Ethics KPIs",
      "Policy / Action": "% of workforce trained on ethics policies",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "26. Ethics KPIs",
      "Policy / Action": "Number of whistleblower reports filed",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "26. Ethics KPIs",
      "Policy / Action": "Confirmed corruption incidents",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "26. Ethics KPIs",
      "Policy / Action": "Confirmed information security incidents",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "26. Ethics KPIs",
      "Policy / Action": "% of sites with ethics audits conducted",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "26. Ethics KPIs",
      "Policy / Action": "% of sites with anti-corruption management systems",
      "Evidence / Link": "",
      Remarks: "",
    },
    {
      Section: "26. Ethics KPIs",
      "Policy / Action": "% of sites with ISO 27000-certified ISMS",
      "Evidence / Link": "",
      Remarks: "",
    },
  ];

  return (
    <div style={{ minHeight: "80vh" }}>
      <TableRenderer
        id="mod-1-26"
        title="Ecovadis Report"
        tableData={ecovadisModule}
      />
    </div>
  );
};

export default Ecovadis;
