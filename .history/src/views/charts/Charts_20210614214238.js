import React from "react";
import { CCard, CCardBody, CCardGroup, CCardHeader } from "@coreui/react";
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea,
} from "@coreui/react-chartjs";
import { DocsLink } from "src/reusable";

const Charts = () => {
  return (
    <CCardGroup columns className="cols-2">
      <CCard>
        <CCardHeader>
          Bar Chart
          <DocsLink href="http://www.chartjs.org" />
        </CCardHeader>
        <CCardBody>
          <CChartBar
            datasets={[
              {
                label: "GitHub Commits",
                backgroundColor: "#f87979",
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
              },
            ]}
            labels="months"
            options={{
              tooltips: {
                enabled: true,
              },
            }}
          />
        </CCardBody>
      </CCard>

      <CCard>
        <CCardHeader>Doughnut Chart</CCardHeader>
        <CCardBody>
          <CChartDoughnut
            datasets={[
              {
                backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
                data: [40, 20, 80, 10],
              },
            ]}
            labels={["VueJs", "EmberJs", "ReactJs", "AngularJs"]}
            options={{
              tooltips: {
                enabled: true,
              },
            }}
          />
        </CCardBody>
      </CCard>

      <CCard>
        <CCardHeader>Line Chart</CCardHeader>
        <CCardBody>
          <CChartLine
            datasets={[
              {
                label: "Data One",
                backgroundColor: "rgb(228,102,81,0.9)",
                data: [30, 39, 10, 50, 30, 70, 35],
              },
              {
                label: "Data Two",
                backgroundColor: "rgb(0,216,255,0.9)",
                data: [39, 80, 40, 35, 40, 20, 45],
              },
            ]}
            options={{
              tooltips: {
                enabled: true,
              },
            }}
            labels="months"
          />
        </CCardBody>
      </CCard>

      <CCard>
        <CCardHeader>Pie Chart</CCardHeader>
        <CCardBody>
          <CChartPie
            datasets={[
              {
                backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
                data: [40, 20, 80, 10],
              },
            ]}
            labels={["VueJs", "EmberJs", "ReactJs", "AngularJs"]}
            options={{
              tooltips: {
                enabled: true,
              },
            }}
          />
        </CCardBody>
      </CCard>
    </CCardGroup>
  );
};

export default Charts;
