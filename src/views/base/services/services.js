import React, { useState,useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CListGroup,
  CListGroupItem,
  CRow,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
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


const Services = () => {
  const [modal, setModal] = useState(false)
  const [AllServices, setAllServices] = useState([])
  const [AllSubCategories, setAllSubCategories] = useState([])
  const [AService, setAService] = useState([])

  const [name, setname] = useState("")
  const [color, setcolor] = useState("")
  const [icon, seticon] = useState(null);
  const [id, setid] = useState("")
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

const showModel=(id)=>{

  let AServiceConfig = {
    method: "get",
    url: `admin/dashboard/services/${id}`,
  };
  axios(AServiceConfig)
    .then((Response) => {
      if (Response.data.statusCode === 200) {
        setModal(!modal)
        setAService(Response.data.data)
        setname(Response.data.data.name)
        setcolor(Response.data.data.color)
        seticon(Response.data.data.icon)
        setid(Response.data.data.parent)
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
}

const deleteService=(id)=>{

  let ServicesConfig = {
    method: "delete",
    url: `admin/dashboard/services/${id}`,
  };
  axios(ServicesConfig)
    .then((Response) => {
      if (Response.data.statusCode === 200) {
        setAService(Response.data.data)
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
}

const updateService=(id)=>{

  var myHeaders = new Headers();
  myHeaders.append("token", localStorage.getItem("token"));

  var formdata = new FormData();
  formdata.append("icon", icon, FileAddress);
  formdata.append("name", name);
  formdata.append("color", color);

  var requestOptions = {
    method: "put",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    `http://185.211.59.175/api/admin/dashboard/services/${id}`,
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

      <CModal 
        show={modal} 
        onClose={setModal}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>نمایش مشخصات خدمت</CModalTitle>
        </CModalHeader>
        <CModalBody>
          
        <CForm action="" method="post" className="form-horizontal">
          <CFormGroup row>
            <CLabel sm="2" col htmlFor="input-normal">نام</CLabel>
            <CCol sm="10">
              <CInput id="input-normal" name="input-normal" placeholder="نام دسته بندی را وارد کنید" value={name} onChange={(e) => setname(e.target.value)}/>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CLabel sm="2" col htmlFor="input-normal">رنگ</CLabel>
            <CCol sm="10">
              <CInput id="input-normal" name="input-normal" placeholder="رنگ دسته بندی را وارد کنید" value={color} onChange={(e) => setcolor(e.target.value)}/>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CLabel col sm="2">ایکن</CLabel>
            <CCol sm="10">
              <CInputFile type="file" name="FileMain" id="attachment" accept="image/*" custom id="custom-file-input" onChange={(event) => SelectImage(event)}/>
              <CLabel htmlFor="custom-file-input" variant="custom-file">
                فایل ایکن مورد نظر را انتخاب کنید
              </CLabel>
            </CCol>
          </CFormGroup>
        </CForm>

        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModal(false)}>بستن</CButton>
          <CButton color="danger" onClick={() => deleteService(id)}>حذف</CButton>
          <CButton color="success" onClick={() => updateService(id)}>ویرایش</CButton>
        </CModalFooter>
      </CModal>

      <CRow>
        <CCol xs="12">
          <CCard>
            
            <CCardBody>
            <table className="table">
              <thead>
                <tr>
                  <th>نام</th>
                  <th>رنگ</th>
                  <th>ایکن</th>
                </tr>
              </thead>
            </table>
              <CListGroup>
                {
                  AllServices.map((item,index)=>
                    <CListGroupItem key={index} href="#" onClick={() =>showModel(item._id)} >
                      {item.name}
                    </CListGroupItem>
                  )
                }
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

    </>
  )
}

export default Services