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
  CRow,
} from "@coreui/react";
import { DocsLink } from "src/reusable";
import axios from "axios";

const Info = () => {
  const [idata, setiData] = React.useState([]);

  useEffect(() => {
    let ServicesConfig = {
      method: "get",
      url: `http://46.209.219.53:5003/home/getAllItemFromNotifyDb`,
    };
    axios(ServicesConfig)
      .then((Response) => {
        console.log(Response);
        if (Response.status === 200) {
          let obj = 
          setiData(Response.data);
          console.log(idata);

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
                {/* {idata.map((e) => {
                  return (
                    <p>
                    {e}
                   </p>
                  )
                })} */}
                <hr />
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
              <CAlert color="dark" closeButton>
                I am an dismissible alert!
              </CAlert>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Info;
