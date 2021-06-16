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


const Categories = () => {
  const [modal, setModal] = useState(false)
  const [AllPrimariesCategories, setAllPrimariesCategories] = useState([])
  const [AllSubCategories, setAllSubCategories] = useState([])
  const [ACategory, setACategory] = useState([])

  const [name, setname] = useState("")
  const [color, setcolor] = useState("")
  const [parent, setparent] = useState("")
  const [icon, seticon] = useState(null);
  const [FileAddress, SetFileAddress] = useState("");

useEffect(() => {
    let ServicesConfig = {
      method: "get",
      url: `admin/dashboard/categories/primaries`,
    };
    axios(ServicesConfig)
      .then((Response) => {
        if (Response.data.statusCode === 200) {
          setAllPrimariesCategories(Response.data.data)
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

  let ACategoryConfig = {
    method: "get",
    url: `admin/dashboard/categories/${id}`,
  };
  axios(ACategoryConfig)
    .then((Response) => {
      if (Response.data.statusCode === 200) {
        setModal(!modal)
        setACategory(Response.data.data)
        setname(Response.data.data.name)
        setcolor(Response.data.data.color)
        setparent(Response.data.data.parent)
        seticon(Response.data.data.icon)
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

    let SubCategoriesConfig = {
      method: "get",
      url: `admin/dashboard/categories/${id}/subs`,
    };
    axios(SubCategoriesConfig)
      .then((Response) => {
        if (Response.data.statusCode === 200) {
          setAllSubCategories(Response.data.data)
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

const deleteCategory=(id)=>{

  let ServicesConfig = {
    method: "delete",
    url: `admin/dashboard/categories/${id}`,
  };
  axios(ServicesConfig)
    .then((Response) => {
      if (Response.data.statusCode === 200) {
        setACategory(Response.data.data)
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

const updateCategory=(id)=>{

  var myHeaders = new Headers();
  myHeaders.append("token", localStorage.getItem("token"));

  var formdata = new FormData();
  formdata.append("icon", icon, FileAddress);
  formdata.append("name", name);
  formdata.append("color", color);
  formdata.append("parent", parent);

  var requestOptions = {
    method: "put",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    `http://185.211.59.175/api/admin/dashboard/categories/${id}`,
    requestOptions
  )
  .then((response) => response.json())
  .then((result) => {
    if (result.statusCode === 200) {
      console.log(result);
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
          <CModalTitle>نمایش مشخصات دسته بندی</CModalTitle>
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
          <CFormGroup row>

            <CCol md="2">
              <CLabel htmlFor="select">دسته بندی والد</CLabel>
            </CCol>
            <CCol sm="10">
              <CSelect custom name="select" id="select" onChange={(e) => setparent(e.target.value)}>
                {
                  AllPrimariesCategories.map((item,index)=>
                    item._id==ACategory._id?
                      <option selected key={index} value={item._id}>{item.name}</option>
                    :
                      <option key={index} value={item._id}>{item.name}</option>
                  )
                }
              </CSelect>
            </CCol>
          </CFormGroup>
        </CForm>
          
        <CRow>
          <CCol xs="12">
            <CCard>
              <CCardHeader>
                زیر دسته های این گروه
              </CCardHeader>
              
              <CCardBody>
              <table className="table">
                <thead>
                  <tr>
                    <th>نام</th>
                    <th>رنگ</th>
                    <th>ایکن</th>
                    <th>دسته بندی والد</th>
                  </tr>
                </thead>
              </table>
                <CListGroup>
                  {
                    AllSubCategories.map((item,index)=>
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

        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModal(false)}>بستن</CButton>
          <CButton color="danger" onClick={() => deleteCategory(ACategory._id)}>حذف</CButton>
          <CButton color="success" onClick={() => updateCategory(ACategory._id)}>ویرایش</CButton>
        </CModalFooter>
      </CModal>

      <CRow>
        <CCol xs="12">
          <CCard>
            {/* <CCardHeader>
              مشاهده تمام دسته بندی ها
            </CCardHeader> */}
            
            <CCardBody>
            <table className="table">
              <thead>
                <tr>
                  <th>نام</th>
                  <th>رنگ</th>
                  <th>ایکن</th>
                  <th>دسته بندی والد</th>
                </tr>
              </thead>
            </table>
              <CListGroup>
                {
                  AllPrimariesCategories.map((item,index)=>
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

export default Categories