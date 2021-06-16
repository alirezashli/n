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
  CBadge,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs,

} from '@coreui/react'

import axios from "axios";
import { ToastContainer } from "react-toastify";
import { MyNotify } from "./../../../utilities/MyNotify";


const Comments = () => {
  const [modal, setModal] = useState(false)
  const [AllAcceptedComments, setAllAcceptedComments] = useState([])
  const [AllNotAcceptedComments, setAllNotAcceptedComments] = useState([])
  const [AllRejectedComments, setAllRejectedComments] = useState([])
  const [AComment, setAComment] = useState([])

  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'

useEffect(() => {
    let AcceptedCommentsConfig = {
      method: "get",
      url: `admin/dashboard/comments?isAccepted=true`,
    };
    axios(AcceptedCommentsConfig)
    .then((Response) => {
      if (Response.data.statusCode === 200) {
        setAllAcceptedComments(Response.data.data)
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

    let NotAcceptedCommentsConfig = {
      method: "get",
      url: `admin/dashboard/comments`,
    };
    axios(NotAcceptedCommentsConfig)
    .then((Response) => {
      if (Response.data.statusCode === 200) {
        setAllNotAcceptedComments(Response.data.data)
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

    let RejectedCommentsConfig = {
      method: "get",
      url: `admin/dashboard/comments?isAccepted=false`,
    };
    axios(RejectedCommentsConfig)
    .then((Response) => {
      if (Response.data.statusCode === 200) {
        setAllRejectedComments(Response.data.data)
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
    setAComment(item)
}

const deleteComment=(id)=>{

  let CommentConfig = {
    method: "delete",
    url: `admin/dashboard/comments/${id}`,
  };
  axios(CommentConfig)
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

const acceptComment=(id)=>{

    let CommentConfig = {
        method: "post",
        url: `admin/dashboard/comments/${id}`,
    };
    axios(CommentConfig)
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

const RestoreJob=(id)=>{

    let JobConfig = {
        method: "put",
        url: `admin/dashboard/comments/${id}`,
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
          <CModalTitle>نمایش نظر</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <CForm action="" method="post" className="form-horizontal">
          <CFormGroup row>
            <CLabel sm="2" col htmlFor="input-normal">نظر</CLabel>
            <CCol sm="10">
              <CInput id="input-normal" name="input-normal" placeholder="نظر را وارد کنید" value={AComment.content}/>
            </CCol>
          </CFormGroup>
        </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModal(false)}>بستن</CButton>
          <CButton color="danger" onClick={() => deleteComment(AComment._id)}>حذف</CButton>
          <CButton color="success" onClick={() => acceptComment(AComment._id)}>پذیرفتن</CButton>
          <CButton color="primary" onClick={() => RestoreJob(AComment._id)}>بازگردانی</CButton>
        </CModalFooter>
      </CModal>

      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardBody>
                <CTabs>
                    <CNav variant="tabs">
                        <CNavItem>
                        <CNavLink>
                            پذیرفته شده
                        </CNavLink>
                        </CNavItem>
                        <CNavItem>
                        <CNavLink>
                            رد شده
                        </CNavLink>
                        </CNavItem>
                        <CNavItem>
                        <CNavLink>
                            بررسی نشده
                        </CNavLink>
                        </CNavItem>
                    </CNav>
                    <CTabContent>
                        <CTabPane>
                          <CListGroup>
                            {
                              AllAcceptedComments.map((item,index)=>
                                <CListGroupItem key={index} href="#" onClick={() =>showModel(item)} >
                                  {item.content}
                                </CListGroupItem>
                              )
                            }
                          </CListGroup>
                        </CTabPane>
                        <CTabPane>
                          <CListGroup>
                            {
                              AllRejectedComments.map((item,index)=>
                                <CListGroupItem key={index} href="#" onClick={() =>showModel(item)} >
                                  {item.content}
                                </CListGroupItem>
                              )
                            }
                          </CListGroup>
                        </CTabPane>
                        <CTabPane>
                          <CListGroup>
                            {
                              AllNotAcceptedComments.map((item,index)=>
                                <CListGroupItem key={index} href="#" onClick={() =>showModel(item)} >
                                  {item.content}
                                </CListGroupItem>
                              )
                            }
                          </CListGroup>
                        </CTabPane>
                    </CTabContent>
                </CTabs>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

    </>
  )
}

export default Comments