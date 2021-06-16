import React,{useState,useEffect} from 'react'
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
import axios from "axios";

const Charts = () => {
  const [businessUserCount, SetbusinessUserCount] = useState([]);
  const [commentsCount, SetcommentsCount] = useState([]);

  useEffect(() => {
    let ServicesConfig = {
      method: "get",
      url: `http://46.209.219.53:5003/home/chartLine`,
    };
    axios(ServicesConfig)
      .then((Response) => {
        console.log(Response)
        if (Response.status === 200) {
          SetbusinessUserCount(Response.data)
          // SetcommentsCount(Response.data.data.jobsCount)
          // SetbusinessUserCount(Response.data.data.businessUserCount)
          // SetcommentsCount(Response.data.data.commentsCount)
        }
      })
      .catch((error) => {
     
      })
}, []);
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
                data: {businessUserCount},
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
