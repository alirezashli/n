import React,{useState,useEffect} from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'

import axios from "axios";
import { MyNotify } from "./../../utilities/MyNotify";

const WidgetsDropdown = () => {

  const [appUsersCount, SetappUsersCount] = useState();
  const [jobsCount, SetjobsCount] = useState([]);
  const [businessUserCount, SetbusinessUserCount] = useState([]);
  const [commentsCount, SetcommentsCount] = useState([]);

  useEffect(() => {
    let ServicesConfig = {
      method: "get",
      url: `http://46.209.219.53:5003/home/GetAllUser`,
    };
    axios(ServicesConfig)
      .then((Response) => {
        console.log(Response)
        if (Response.status === 200) {
          SetappUsersCount(Response.data.length)
          // SetjobsCount(Response.data.data.jobsCount)
          // SetbusinessUserCount(Response.data.data.businessUserCount)
          // SetcommentsCount(Response.data.data.commentsCount)
        }
      })
      .catch((error) => {
        if(error.response.data.statusCode>=400 && error.response.data.statusCode<500){
          MyNotify.Error.DataErrorNotify(error.response.data.message);
        }
        if(error.response.data.statusCode>=500){
          MyNotify.Error.ServerErrorNotify(error.response.data.message);
        }
      })
}, []);

  // render
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header={appUsersCount}
          text="کاربران"
          footerSlot={
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[65, 59, 84, 84, 51, 55, 40]}
              pointHoverBackgroundColor="primary"
              label="Members"
              labels="months"
              icon="cil-people"
            />
          }
        <CIcon className="progress-group-icon" name="cil-user-female" />

        >
          {/* <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>مشاهده</CDropdownItem>
              <CDropdownItem>حذف</CDropdownItem>
              <CDropdownItem>مدیریت کاربران</CDropdownItem>
              <CDropdownItem disabled>بستن</CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header={jobsCount}
          text="کسب و کار ها"
          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[1, 18, 9, 17, 34, 22, 11]}
              pointHoverBackgroundColor="info"
              options={{ elements: { line: { tension: 0.00001 }}}}
              label="Members"
              labels="months"
            />
          }
        >
          {/* <CDropdown>
            <CDropdownToggle caret={false} color="transparent">
              <CIcon name="cil-location-pin"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>مشاهده</CDropdownItem>
              <CDropdownItem>حذف</CDropdownItem>
              <CDropdownItem>مدیریت خدمات</CDropdownItem>
              <CDropdownItem disabled>بستن</CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header={businessUserCount}
          text="فعالیت های تجاری"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="warning"
              label="Members"
              labels="months"
            />
          }
        >
          {/* <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>مشاهده</CDropdownItem>
              <CDropdownItem>حذف</CDropdownItem>
              <CDropdownItem>مدیریت سرویس ها</CDropdownItem>
              <CDropdownItem disabled>بستن</CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header={commentsCount}
          text="نظرات"
          footerSlot={
            <ChartBarSimple
              className="mt-3 mx-3"
              style={{height: '70px'}}
              backgroundColor="rgb(250, 152, 152)"
              label="Members"
              labels="months"
            />
          }
        >
          {/* <CDropdown>
            <CDropdownToggle caret className="text-white" color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>مشاهده</CDropdownItem>
              <CDropdownItem>حذف</CDropdownItem>
              <CDropdownItem>مدیریت نظرات</CDropdownItem>
              <CDropdownItem disabled>بسنن</CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
