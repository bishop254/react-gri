import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import TreemapModule from "highcharts/modules/treemap";

const CalculatingGhgEmissions = () => {
  const methodologyList = [
    {
      title: "Selection of GHG Calculation Approach",
    },
    {
      title: "Collection of Activity Data and Selection of Emission Factors",
    },
    {
      title: "Apply Calculation Tools",
    },
    {
      title: "Consolidation of GHG Emission Data",
    },
  ];

  const co2businessUnitsOptions = {
    chart: {
      type: "column",
      backgroundColor: "#ffffff",
    },
    title: {
      text: "SCOPE 1 EMISSIONS (TONNE CO2 EQ) BY BUSINESS UNIT",
      style: {
        fontWeight: "bold",
        textTransform: "uppercase",
        color: "#333333",
      },
    },
    xAxis: {
      categories: [
        "PTREI",
        "REF",
        "REI",
        "RIMC",
        "RMC",
        "RMEC",
        "RTC",
        "Supermec",
        "TREL",
        "RELQ",
      ],
      title: {
        text: "Business Unit",
      },
      crosshair: true,
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "tonnes CO2 eq",
      },
      labels: {
        format: "{value:.2f}",
      },
    },
    tooltip: {
      headerFormat: "<span style='font-size:10px'>{point.key}</span><br/>",
      pointFormat:
        "<span style='color:{series.color}'>{series.name}</span>: <b>{point.y:.2f}</b><br/>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Tonnes CO2 eq",
        data: [
          600.23, 570.48, 400.67, 190.12, 250.54, 123.76, 100.34, 48.76, 7384.9,
          950.25,
        ],
        colorByPoint: true,
      },
    ],
  };

  const emissionOptions = {
    chart: {
      type: "column",
      backgroundColor: "#ffffff",
      height: 700,
    },
    title: {
      text: "SCOPE 1 EMISSIONS (TONNES CO₂ EQ) BY EMISSION SOURCE",
      style: {
        fontWeight: "bold",
        textTransform: "uppercase",
        color: "#333333",
      },
    },
    xAxis: {
      categories: [
        "AIR COMPRESSOR (DIESEL)",
        "LIGHT-DUTY TRUCKS (DIESEL)",
        "MEDIUM AND HEAVY-DUTY VEHICLES (DIESEL)",
        "MOBILE LIGHTING EQUIPMENT (DIESEL)",
        "BOOM LIFT (DIESEL)",
        "CRAWLER CRANE (DIESEL)",
        "FORKLIFT (DIESEL)",
        "LORRY CRANE (DIESEL)",
        "MOBILE CRANE (DIESEL)",
        "OTHER CONSTRUCTION EQUIPMENT (DIESEL)",
        "OTHER CRANE (DIESEL)",
        "PASSENGER CARS, VANS (GASOLINE)",
        "PUMPING EQUIPMENT (DIESEL)",
        "DIESEL ENGINE (DIESEL)",
        "LIGHT DUTY TRUCKS (GASOLINE)",
        "PASSENGER CARS, VANS (GASOLINE)",
        "GENERATOR (DIESEL)",
        "CUTTING EQUIPMENT (LPG)",
        "PASSENGER CAR (LPG)",
        "WELDING GENERATOR SET (DIESEL)",
      ],
      labels: {
        rotation: -90,
        style: {
          fontSize: "11px",
          textAlign: "right",
        },
      },
    },
    yAxis: {
      visible: false,
    },
    tooltip: {
      enabled: true,
      headerFormat: "<b>{point.key}</b><br/>",
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: <b>{point.y:.2f}</b><br/>',
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      column: {
        color: "#00aaff",
        pointPadding: 0.2,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          rotation: -90,
          align: "right",
          verticalAlign: "bottom",
          inside: false,
          style: {
            fontSize: "8px",
            color: "#000000",
          },
          format: "{y:.2f}",
        },
      },
    },
    series: [
      {
        name: "Emissions",
        data: [
          1377.69, 1215.27, 2611.8, 342.58, 383.79, 1.34, 328.7, 97.77, 985.14,
          54.73, 46.84, 283.53, 81.18, 14.82, 91.96, 317.78, 4315.77, 53.92,
          1.58, 197.96,
        ],
      },
    ],
  };

  const mobileEmissionsOptions = {
    chart: {
      type: "treemap",
      height: 600,
      backgroundColor: "#ffffff",
    },
    title: {
      text: "Emissions By Type of Vehicles (Mobile Combustion)",
      style: {
        fontWeight: "bold",
      },
    },
    tooltip: {
      pointFormat: "<b>{point.name}</b>: {point.value:.2f} tonnes CO₂ eq",
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      align: "center",
      verticalAlign: "top",
      itemStyle: {
        fontWeight: "normal",
      },
    },
    plotOptions: {
      treemap: {
        allowDrillToNode: false,
        layoutAlgorithm: "squarified",
        dataLabels: {
          enabled: true,
          format: "{point.name}, {point.value:.2f}",
          style: {
            color: "#ffffff",
            textOutline: "none",
          },
        },
      },
      series: {
        showInLegend: true,
      },
    },
    series: [
      {
        type: "treemap",
        name: "Emissions",
        colorByPoint: true,
        legendType: "point", // Show each point as a legend item
        data: [
          {
            name: "Medium and Heavy Duty Vehicles",
            value: 2611.8,
            color: "#e76f51",
          },
          {
            name: "Light-Duty Trucks",
            value: 1307.23,
            color: "#264653",
          },
          {
            name: "Mobile Crane",
            value: 995.14,
            color: "#2a9d8f",
          },
          {
            name: "Passenger Cars, Vans",
            value: 602.88,
            color: "#264d27",
          },
          {
            name: "Boom Lift",
            value: 338.79,
            color: "#6a994e",
          },
          {
            name: "Forklift",
            value: 328.7,
            color: "#d62828",
          },
          {
            name: "Lorry Crane",
            value: 97.77,
            color: "#0077b6",
          },
          {
            name: "Other Crane",
            value: 46.84,
            color: "#9e6f21",
          },
          {
            name: "Crawler Crane",
            value: 1.34,
            color: "#6c757d",
          },
        ],
      },
    ],
  };

  const stationeryCombustionOptions = {
    chart: {
      type: "treemap",
      height: 600,
      backgroundColor: "#ffffff",
    },
    title: {
      text: "Emissions By Type of Equipment (Stationary Combustion)",
      style: {
        fontWeight: "bold",
      },
    },
    tooltip: {
      pointFormat: "<b>{point.name}</b>: {point.value:.2f} tonnes CO₂ eq",
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      align: "center",
      verticalAlign: "top",
      itemStyle: {
        fontSize: "12px",
        fontWeight: "normal",
      },
    },
    plotOptions: {
      series: {
        showInLegend: true,
      },
      treemap: {
        layoutAlgorithm: "squarified",
        dataLabels: {
          enabled: true,
          format: "{point.name}",
          style: {
            color: "#ffffff",
            textOutline: "none",
          },
        },
      },
    },
    series: [
      {
        type: "treemap",
        name: "Emissions",
        colorByPoint: true,
        legendType: "point",
        data: [
          { name: "Generator", value: 4315.77, color: "#4CAF50" },
          { name: "Air Compressor", value: 1377.69, color: "#0D47A1" },
          {
            name: "Mobile Lighting Equipment",
            value: 342.58,
            color: "#03A9F4",
          },
          { name: "Welding Generator Set", value: 197.96, color: "#263238" },
          { name: "Pumping Equipment", value: 81.18, color: "#EF6C00" },
          {
            name: "Other Construction Equipment",
            value: 54.73,
            color: "#2E7D32",
          },
          { name: "Cutting Equipment", value: 53.92, color: "#8D6E63" },
          { name: "Diesel Engine", value: 14.82, color: "#8E24AA" },
        ],
      },
    ],
  };

  const scope2Emissions = {
    chart: {
      type: "column",
      backgroundColor: "#ffffff",
      height: 400,
    },
    title: {
      text: "Scope 2 Emissions for 2024 (Tonne CO2 eq)",
      style: {
        fontWeight: "normal",
      },
    },
    xAxis: {
      categories: ["PTREI", "REIT", "REL", "RMEC", "Supermec", "TREL"],
      crosshair: true,
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    tooltip: {
      headerFormat: "<b>{point.key}</b><br/>",
      pointFormat: "Emissions: <b>{point.y:.2f}</b> tonnes CO₂ eq",
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      column: {
        color: "#125c75",
        borderWidth: 0,
        pointPadding: 0.1,
        groupPadding: 0.2,
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "Emissions",
        data: [1100, 50, 575, 60, 15, 820],
      },
    ],
  };

  return (
    <div style={{ minHeight: "80vh", fontFamily: "Lato, sans-serif" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h3
          class="section-marker"
          id="section-calculating-ghg-emissions"
          style={{
            fontWeight: "bold",
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          5 CALCULATING GHG EMISSIONS
        </h3>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
          }}
        >
          5.1 CALCULATON METHODOLOGY
        </p>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
          }}
        >
          With the definition of operational boundaries and identification of
          emission sources for both Scope 1 and Scope 2 emissions, the GHG
          emissions will be calculated with the following calculation
          methodology:
        </p>

        {methodologyList.list && (
          <ul>
            {methodologyList.list.map((item, i) => (
              <li key={i}>
                <strong>{i + 1}:</strong> {item.title}
              </li>
            ))}
          </ul>
        )}

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
          }}
        >
          The data obtained for the calculation of GHG emissions include
          purchase records for fuels, such as diesel, gasoline and liquified
          petroleum gases (emission source activity data). These fuels are used
          for various construction and project activities in each of the
          Business Unit. The usage of these fuels is further categorized into
          the equipment and vehicle type to improve the accuracy of the
          calculations for the GHG emissions. The calculation methodology is
          applied with the data obtained with the emission source activity data
          multiplied by the emission factors.
        </p>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
          }}
        >
          For Scope 2 emissions, purchase and utilities bills were used to
          obtain data for electricity consumption. The emissions are calculated
          by multiplying the relevant emission factors.
        </p>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
          }}
        >
          5.2 EMISSION PROFILE SUMMARY
        </p>

        <p
          class="section-marker"
          style={{
            textDecoration: "underline",
            marginBottom: "1rem",
          }}
        >
          Table 6 1: Summary for Scope 1 and Scope 2 Emissions
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            marginBottom: "1rem",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr>
              <th
                colSpan={5}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Component Gas (expressed as tonne CO<sub>2</sub> eq)
              </th>
            </tr>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Emission Scope
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                CO<sub>2</sub>
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                CH<sub>4</sub>
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                N<sub>2</sub>O
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={5}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  background: "#b1b1b1",
                }}
              >
                Scope 1: Direct Emissions
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Stationary Combustion (Fuel Used)
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Mobile Combustion (Owned and Leased Vehicles)
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td
                colSpan={5}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  background: "#b1b1b1",
                }}
              >
                Scope 2 – Indirect Emission
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                Emissions from purchased electricity (Grid Electricity)
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
            <tr>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                  background: "#b1b1b1",
                }}
              >
                Total Emissions
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  background: "#b1b1b1",
                }}
              ></td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  background: "#b1b1b1",
                }}
              ></td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  background: "#b1b1b1",
                }}
              ></td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  background: "#b1b1b1",
                }}
              ></td>
            </tr>
          </tbody>
        </table>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
          }}
        >
          The total GHG emissions for Group Level from Scope 1 and Scope 2
          emissions is 15,340.65 tonnes CO2 eq. In FY 2024, the overall Group
          Revenue is SGD $385 million, and the total GHG emissions per million
          is calculated to be 39.8 tonnes CO2 eq /million.
        </p>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
          }}
        >
          5.3 SCOPE 1 GHG EMISSIONS BY BUSINESS UNIT / SUBSIDIARY COMPANY
        </p>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
          }}
        >
          The table below shows the GHG emissions from various BUs / Subsidiary
          Companies. All values are expressed in CO2 eq in the respective units
          stated.
        </p>

        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={co2businessUnitsOptions}
          />
        </div>

        <p
          class="section-marker"
          style={{
            textAlign: "center",
            color: "red",
          }}
        >
          [Graph for total Scope 1 Emissions by BU]
        </p>

        <p
          class="section-marker"
          style={{
            textAlign: "center",
            color: "blue",
          }}
        >
          Figure 2: Scope 1 Emission by Business Unit
        </p>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
          }}
        >
          Table 6 2: Scope 1 Emissions by Business Units
        </p>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
            color: "red",
          }}
        >
          [Table listing: BUs, carbon dioxide (kg, tonnes), methane (kg, tonnes)
          [expressed in CO2 eq] and Nitrous Oxide (kg, tonnes) [expressed in CO2
          eq]]
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            marginBottom: "1rem",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr>
              {[
                "BU",
                "kg CO2",
                "Tonne CO2",
                "kg CH4",
                "tonne CH4",
                "kg N2O",
                "tonne N2O",
                "Total",
              ].map((header) => (
                <th
                  key={header}
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    fontWeight: "bold",
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              "PTREI",
              "REF",
              "REI",
              "RIMC",
              "RMC",
              "RMEC",
              "RTC",
              "Supermec",
              "TREL",
              "RELQ",
              "REIT",
              "RCWLL",
              "Total",
            ].map((bu, idx) => (
              <tr key={idx}>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    fontWeight: bu === "Total" ? "bold" : "normal",
                  }}
                >
                  {bu}
                </td>
                {Array(7)
                  .fill("")
                  .map((_, i) => (
                    <td
                      key={i}
                      style={{
                        border: "1px solid black",
                        padding: "8px",
                      }}
                    ></td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
          }}
        >
          5.4 SCOPE 1 EMISSIONS BY EQUIPMENT / VEHICLE CATEGORY
        </p>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
          }}
        >
          Table 6 3: Scope 1 Emission by Emission Source
        </p>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
            color: "red",
          }}
        >
          [Table listing: Type of Equipment and emission]
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            marginBottom: "1rem",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#d3d3d3" }}>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Category
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Total (tonne CO<sub>2</sub> eq)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: "#d3d3d3", fontWeight: "bold" }}>
              <td
                style={{ border: "1px solid black", padding: "8px" }}
                colSpan={2}
              >
                Mobile Combustion
              </td>
            </tr>

            {[
              "Passenger Cars, Vans",
              "Light Duty Trucks",
              "Forklift",
              "Medium and Heavy-Duty Vehicles",
              "Mobile Crane",
              "Lorry Crane",
              "Crawler Crane",
              "Boom Lift",
              "Scissor Lift",
              "Excavators",
              "Other Vehicles",
            ].map((item, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}

            <tr style={{ backgroundColor: "#d3d3d3", fontWeight: "bold" }}>
              <td
                style={{ border: "1px solid black", padding: "8px" }}
                colSpan={2}
              >
                Stationary Combustion
              </td>
            </tr>

            {[
              "Generator",
              "Air Compressor",
              "Pumping Equipment",
              "Welding Generator Set",
              "Mobile Lighting Equipment",
              "Cutting Equipment",
              "Diesel Engine",
              "Others",
            ].map((item, idx) => (
              <tr key={`stationary-${idx}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <HighchartsReact highcharts={Highcharts} options={emissionOptions} />
        </div>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
            textAlign: "center",
            color: "red",
          }}
        >
          [Graphical representation of emissions by type of equipment / vehicle]
        </p>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Figure 3: Scope 1 Emission by Emission Source
        </p>

        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={mobileEmissionsOptions}
          />
        </div>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
            textAlign: "center",
            color: "red",
          }}
        >
          [Graphical representation of emissions by type of mobile combustion
          vehicles]
        </p>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Figure 4: Emissions by Type of Vehicles (Mobile Combustion) –
          Graph/Block Diagram
        </p>

        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={stationeryCombustionOptions}
          />
        </div>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
            textAlign: "center",
            color: "red",
          }}
        >
          [Graphical representation of emissions by type of stationary
          combustion vehicles]
        </p>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Figure 5: Emissions by Type of Equipment (Stationary Combustion)
        </p>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
          }}
        >
          The main source of emissions for Scope 1 emissions are the from the
          combustion of diesel for equipment (e.g. Generator sets and air
          compressors) for construction power and power for site facilities in
          ongoing projects. Other major source of Scope 1 emissions is from the
          usage of fuel for transportation purposes (light duty to heavy duty
          vehicles) for the transportation of manpower and materials.
        </p>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
          }}
        >
          5.5 SCOPE 2 EMISSIONS
        </p>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
          }}
        >
          The main sources for Scope 2 Emissions are the emissions associated
          with the purchase of electricity for use in buildings and offices. The
          following table details the Scope 2 emissions associated with the
          respective Business Unit and locations.
        </p>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
            color: "red",
          }}
        >
          [Tabular and Graphical representation of Scope 2 Emissions from each
          Subsidiary]
        </p>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
          }}
        >
          Table 6 4: Scope 2 Emissions by Business Unit
        </p>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            textAlign: "left",
            marginBottom: "1rem",
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
                }}
              >
                Business Unit
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Location
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                tonne CO<sub>2</sub> eq
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { unit: "PTREI", location: "Indonesia" },
              { unit: "REIT", location: "Thailand" },
              { unit: "REL", location: "Singapore" },
              { unit: "RMEC", location: "Malaysia" },
              { unit: "SUPERMEC", location: "Singapore" },
              { unit: "TREL", location: "Thailand" },
            ].map((item, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.unit}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.location}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}></td>
              </tr>
            ))}
            <tr>
              <td
                colSpan={2}
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Total
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}></td>
            </tr>
          </tbody>
        </table>

        <div>
          <HighchartsReact highcharts={Highcharts} options={scope2Emissions} />
        </div>

        <p
          class="section-marker"
          style={{
            marginBottom: "1rem",
            textAlign: "center",
            color: "red",
          }}
        >
          Figure 6: Scope 2 Emissions by Business Unit
        </p>
      </div>
    </div>
  );
};

export default CalculatingGhgEmissions;
