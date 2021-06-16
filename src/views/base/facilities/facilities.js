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


const Facilities = () => {
  const [modal, setModal] = useState(false)
  const [AllFacilities, setAllFacilities] = useState([])
  const [AFacilitie, setAFacilitie] = useState([])

  const [name, setname] = useState("")
  const [id, setid] = useState("");

useEffect(() => {
    let ServicesConfig = {
      method: "get",
      url: `admin/dashboard/facilities`,
    };
    axios(ServicesConfig)
      .then((Response) => {
        if (Response.data.statusCode === 200) {
          setAllFacilities(Response.data.data)
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
    url: `admin/dashboard/facilities/${id}`,
  };
  axios(AServiceConfig)
    .then((Response) => {
      if (Response.data.statusCode === 200) {
        setModal(!modal)
        setAFacilitie(Response.data.data)
        setname(Response.data.data.name)
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

const deletefacilitie=(id)=>{

  let ServicesConfig = {
    method: "delete",
    url: `admin/dashboard/facilities/${id}`,
  };
  axios(ServicesConfig)
    .then((Response) => {
      if (Response.data.statusCode === 200) {
        setAFacilitie(Response.data.data)
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

const updatefacilitie=(id)=>{

  var myHeaders = new Headers();
  myHeaders.append("token", localStorage.getItem("token"));

  var formdata = new FormData();
  formdata.append("name", name);

  var requestOptions = {
    method: "put",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    `http://185.211.59.175/api/admin/dashboard/facilities/${id}`,
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
          <CModalTitle>نمایش مشخصات سرویس ها</CModalTitle>
        </CModalHeader>
        <CModalBody>
          
        <CForm action="" method="post" className="form-horizontal">
          <CFormGroup row>
            <CLabel sm="2" col htmlFor="input-normal">نام</CLabel>
            <CCol sm="10">
              <CInput id="input-normal" name="input-normal" placeholder="نام سرویس را وارد کنید" value={name} onChange={(e) => setname(e.target.value)}/>
            </CCol>
          </CFormGroup>
        </CForm>

        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModal(false)}>بستن</CButton>
          <CButton color="danger" onClick={() => deletefacilitie(id)}>حذف</CButton>
          <CButton color="success" onClick={() => updatefacilitie(id)}>ویرایش</CButton>
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
                  AllFacilities.map((item,index)=>
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

export default Facilities