import React, { useState, useEffect } from "react";
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CLink,
  CProgress,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import axios from "axios";

const Info = () => {
  const [data, setData] = React.useState([])

  useEffect(() => {
    let ServicesConfig = {
      method: "get",
      url: `http://46.209.219.53:5003/home/chartLine`,
    };
    axios(ServicesConfig)
      .then((Response) => {
        console.log(Response);
        if (Response.status === 200) {
          let arr = [];
          let arrr = [];
         
          console.log(arr);
          SetbusinessUserCount(arr);
          SetcommentsCount(arrr);

          // SetcommentsCount(Response.data.data.jobsCount)
          // SetbusinessUserCount(Response.data.data.businessUserCount)
          // SetcommentsCount(Response.data.data.commentsCount)
        }
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <CRow>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
              اطلاعات
              <small> :</small>
            </CCardHeader>
            <CCardBody>
              <CAlert color="primary">
                <h4 className="alert-heading">Well done!</h4>
                <p>
                  Aww yeah, you successfully read this important alert message. This example text is going
                </p>
                <hr />
                <p className="mb-0">
                  Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                </p>
              </CAlert>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
            اطلاعات
              <small> :</small>
            </CCardHeader>
            <CCardBody>
              <CAlert
                color="dark"
                closeButton
              >
                I am an dismissible alert!
              </CAlert>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Info
