import React from 'react'
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

const Info = () => {
  const [visible, setVisible] = React.useState([])

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
                  to run a bit longer so that you can see how spacing within an alert works with this kind
                  of content.
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
              

              <CButton color="primary" onClick={() => setVisible(10)}>
                Reset timer
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Info
