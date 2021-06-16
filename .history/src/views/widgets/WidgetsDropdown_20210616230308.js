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
        <div class="dropdown"><button class="btn btn-transparent" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Dropdown toggle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="c-icon" role="img"><path fill="var(--ci-primary-color, currentColor)" d="M253.924,127.592a64,64,0,1,0,64,64A64.073,64.073,0,0,0,253.924,127.592Zm0,96a32,32,0,1,1,32-32A32.037,32.037,0,0,1,253.924,223.592Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M376.906,68.515A173.922,173.922,0,0,0,108.2,286.426L229.107,472.039a29.619,29.619,0,0,0,49.635,0L399.653,286.426A173.921,173.921,0,0,0,376.906,68.515Zm-4.065,200.444L253.925,451.509,135.008,268.959C98.608,213.08,106.415,138.3,153.571,91.142a141.92,141.92,0,0,1,200.708,0C401.435,138.3,409.241,213.08,372.841,268.959Z" class="ci-primary"></path></svg></button><div class="pt-0 dropdown-menu" role="menu" aria-hidden="true"><a href="#" class="dropdown-item" role="menuitem">Action</a><a href="#" class="dropdown-item" role="menuitem">Another action</a><a href="#" class="dropdown-item" role="menuitem">Something else here...</a><a href="#" class="disabled dropdown-item" tabindex="-1">Disabled action</a></div></div>
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
