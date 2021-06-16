import React, { useState,useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CInputFile,
  CSelect
} from '@coreui/react'

import axios from "axios";
import { ToastContainer } from "react-toastify";
import { MyNotify } from "./../../../utilities/MyNotify";

const InsertAService = () => {
  const [AllServices, setAllServices] = useState([])

  const [name, setname] = useState("")
  const [color, setcolor] = useState("")
  const [icon, seticon] = useState(null);
  const [FileAddress, SetFileAddress] = useState("");

  useEffect(() => {
    let ServicesConfig = {
        method: "get",
        url: `admin/dashboard/services`,
      };
      axios(ServicesConfig)
        .then((Response) => {
          if (Response.data.statusCode === 200) {
            setAllServices(Response.data.data)
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

const AddService=(id)=>{

  var myHeaders = new Headers();
  myHeaders.append("token", localStorage.getItem("token"));

  var formdata = new FormData();
  formdata.append("icon", icon, FileAddress);
  formdata.append("name", name);
  formdata.append("color", color);

  var requestOptions = {
    method: "post",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    `http://185.211.59.175/api/admin/dashboard/services`,
    requestOptions
  )
  .then((response) => response.json())
  .then((result) => {
    if (result.statusCode === 200) {
      MyNotify.Success.UploadJobPicSuccessNotify();
    }
  })
  .catch((error) => {
    if (error.statusCode >= 400 && error.statusCode < 500) {
      MyNotify.Error.DataErrorNotify(error.message);
    }
    if (error.statusCode >= 500) {
      MyNotify.Error.ServerErrorNotify(error.message);
    }
  });
}

const SelectImage = (event) => {
  SetFileAddress(document.getElementById("attachment").value);
  seticon(event.target.files[0]);
};

  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardBody>
                <CForm action="" method="post" className="form-horizontal">
                    <CFormGroup row>
                        <CLabel sm="2" col htmlFor="input-normal">نام</CLabel>
                        <CCol sm="10">
                        <CInput id="input-normal" name="input-normal" placeholder="نام خدمت را وارد کنید" value={name} onChange={(e) => setname(e.target.value)}/>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CLabel sm="2" col htmlFor="input-normal">رنگ</CLabel>
                        <CCol sm="10">
                        <CInput id="input-normal" name="input-normal" placeholder="رنگ خدمت را وارد کنید" value={color} onChange={(e) => setcolor(e.target.value)}/>
                        </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                        <CLabel col sm="2">ایکن</CLabel>
                        <CCol sm="10">
                        <CInputFile type="file" name="FileMain" id="attachment" accept="image/*" multiple custom onChange={(event) => SelectImage(event)}/>
                        <CLabel htmlFor="custom-file-input" variant="custom-file">
                            فایل ایکن مورد نظر را انتخاب کنید
                        </CLabel>
                        </CCol>
                    </CFormGroup>
                </CForm>
                <CButton color="success" size="lg" block onClick={() => AddService(false)}>ثبت</CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default InsertAService