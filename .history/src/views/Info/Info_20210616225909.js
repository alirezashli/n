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
  const [iidata, setiiData] = React.useState();

  useEffect(() => {
    let ServicesConfig = {
      method: "get",
      url: `http://46.209.219.53:5003/home/getAllItemFromNotifyDb`,
    };
    axios(ServicesConfig)
      .then((Response) => {
        console.log(Response);
        if (Response.status === 200) {
          let obj = {}
          obj.data = Response.data
          setiData(obj.data);
          console.log(idata);
        }
      })
      .catch((error) => {});


      let ServicesConfig1 = {
        method: "get",
        url: `http://46.209.219.53:5003/home/getAllItemFromColdDb`,
      };
      axios(ServicesConfig1)
        .then((Response) => {
          console.log('a',Response.data[0]);
          if (Response.status === 200) {
            setiiData(Response.data[0]);
            // console.log(iidata);
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
                {idata.map((e) => {
                  return (
                    <p>
                    {e}
                   </p>
                  )
                })}
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
                <p>{iidata}</p>
              </CAlert>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Info;
