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
  CSelect,
  CBadge
} from '@coreui/react'

import axios from "axios";
import { ToastContainer } from "react-toastify";
import { MyNotify } from "./../../../utilities/MyNotify";


const Jobs = () => {
  const [modal, setModal] = useState(false)
  const [AllJobs, setAllJobs] = useState([])
  const [AJob, setAJob] = useState([])

useEffect(() => {
    let JobConfig = {
      method: "get",
      url: `admin/dashboard/jobs`,
    };
    axios(JobConfig)
      .then((Response) => {
        if (Response.data.statusCode === 200) {
          setAllJobs(Response.data.data)
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

const showModel=(item)=>{
    setModal(!modal)
    setAJob(item)
}

const deleteJob=(id)=>{

  let JobConfig = {
    method: "delete",
    url: `admin/dashboard/jobs/${id}`,
  };
  axios(JobConfig)
    .then((Response) => {
      if (Response.data.statusCode === 200) {
        // setAJob(Response.data.data)
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

const acceptJob=(id)=>{

    let JobConfig = {
        method: "put",
        url: `admin/dashboard/jobs/${id}/accept`,
    };
    axios(JobConfig)
    .then((Response) => {
      if (Response.data.statusCode === 200) {
        // setAJob(Response.data.data)
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

const licenseJob=(id)=>{

    let JobConfig = {
        method: "put",
        url: `admin/dashboard/jobs/${id}/license`,
    };
    axios(JobConfig)
    .then((Response) => {
      if (Response.data.statusCode === 200) {
        // setAJob(Response.data.data)
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
          <CModalTitle>نمایش کاربران</CModalTitle>
        </CModalHeader>
        <CModalBody>  
        <CForm action="" method="post" className="form-horizontal">
          <CFormGroup row>
            <CLabel sm="2" col htmlFor="input-normal">عنوان</CLabel>
            <CCol sm="10">
              <CInput id="input-normal" name="input-normal" placeholder="عنوان کاربر را وارد کنید" value={AJob.title}/>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CLabel sm="2" col htmlFor="input-normal">بیوگرافی</CLabel>
            <CCol sm="10">
              <CInput id="input-normal" name="input-normal" placeholder="بیوگرافی کاربر را وارد کنید" value={AJob.bio}/>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CLabel sm="2" col htmlFor="input-normal">توضیحات</CLabel>
            <CCol sm="10">
              <CInput id="input-normal" name="input-normal" placeholder="توضیحات کاربر را وارد کنید" value={AJob.description}/>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CLabel sm="2" col htmlFor="input-normal">شماره همراه</CLabel>
            <CCol sm="10">
              <CInput id="input-normal" name="input-normal" placeholder="شماره همراه کاربر را وارد کنید" value={AJob.phone}/>
            </CCol>
          </CFormGroup>
          {
            (AJob.category!=null || AJob.category!=undefined)?
              <CFormGroup row>
                <CLabel sm="2" col htmlFor="input-normal">دسته بندی</CLabel>
                <CCol sm="10">
                  <CInput id="input-normal" name="input-normal" placeholder="دسته بندی کاربر را وارد کنید" value={AJob.category.name}/>
                </CCol>
              </CFormGroup>
            :null
          }
          <CFormGroup row>
            <CLabel sm="2" col htmlFor="input-normal">وضعیت درخواست</CLabel>
            <CCol sm="10">
                <CListGroup>
                    {
                        (AJob.isAccepted==false || AJob.isAccepted==null)?
                            <CListGroupItem action color="danger">درخواست این کاربر تایید نشده است .</CListGroupItem>
                        :
                            <CListGroupItem action color="success">درخواست این کاربر تایید شده است .</CListGroupItem>
                    }
                </CListGroup>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CLabel sm="2" col htmlFor="input-normal">وضعیت اعتبار</CLabel>
            <CCol sm="10">
                <CListGroup>
                    {
                        (AJob.isLicensed==false || AJob.isLicensed==null)?
                            <CListGroupItem action color="danger">اعتبار این کاربر تایید نشده است .</CListGroupItem>
                        :
                            <CListGroupItem action color="success">اعتبار این کاربر تایید شده است .</CListGroupItem>
                    }
                </CListGroup>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CLabel sm="2" col htmlFor="input-normal">خدمات</CLabel>
            <CCol sm="10">
              {
                (AJob.facilities!=null || AJob.facilities!=undefined)?
                  AJob.facilities.map((item,index)=>
                    <CBadge key={index} className="mr-1" color="success">{item.name}</CBadge>
                  )
                :null
              }
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CLabel sm="2" col htmlFor="input-normal">سرویس ها</CLabel>
            <CCol sm="10">
              {
                (AJob.services!=null || AJob.services!=undefined)?
                  AJob.services.map((item,index)=>
                    <CBadge key={index} className="mr-1" color="success">{item.name}</CBadge>
                  )
                :null
              }
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CLabel sm="2" col htmlFor="input-normal">تصویر</CLabel>
            <CCol sm="10">
                <CCard>
                    <CCardBody>
                     <img src={`http://185.211.59.175/uploads/jobs-profile/${AJob.profileImage}`} style={{width: '100%',height: 300}} alt="Italian Trulli"/>
                    </CCardBody>
                </CCard>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CLabel sm="2" col htmlFor="input-normal">مکان</CLabel>
            <CCol sm="10">
                <CCard>
                    <CCardBody>
                      
                    </CCardBody>
                </CCard>
            </CCol>
          </CFormGroup>
        </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModal(false)}>بستن</CButton>
          <CButton color="danger" onClick={() => deleteJob(AJob._id)}>حذف</CButton>
          <CButton color="success" onClick={() => acceptJob(AJob._id)}>تایید درخواست</CButton>
          <CButton color="success" onClick={() => licenseJob(AJob._id)}>تایید اعتبار نامه</CButton>
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
                </tr>
              </thead>
            </table>
              <CListGroup>
                {
                  AllJobs.map((item,index)=>
                    <CListGroupItem key={index} href="#" onClick={() =>showModel(item)} >
                      {item.title}
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

export default Jobs