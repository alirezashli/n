import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import axios from "axios";
import { MyNotify } from "./../../../utilities/MyNotify";

import { EnterMobileAction } from "./../../../redux/actions/EnterMobileAction";
import { EnterPasswordAction } from "./../../../redux/actions/EnterPasswordAction";
import { EnterUserDataAction } from "./../../../redux/actions/EnterUserDataAction";

const mapStateToProps = (state) => ({
  Mobile: state.EnterMobileReducer,
  Password: state.EnterPasswordReducer,
  UserData: state.EnterUserDataReducer,
});

const mapDispatchToProps = (dispatch) => ({
  EnterMobile: (Mobile) => dispatch(EnterMobileAction(Mobile)),
  EnterPassword: (Password) => dispatch(EnterPasswordAction(Password)),
  EnterUserData: (UserData) => dispatch(EnterUserDataAction(UserData)),
});

const Login = (props) => {
  const history = useHistory();

  const LoginUser = () => {
    history.push("/");

    // setLoading(true)
    // let Data = JSON.stringify({
    //   username: String(props.Mobile),
    //   password: String(props.Password),
    // });
    // let Config = {
    //   method: "post",
    //   url: `admin/login`,
    //   data: Data,
    //   proxy: {
    //     // protocol: 'https',
    //     host: 'http://185.211.59.175/api/',
    //     // port: 9000,
    //     // auth: {
    //     //   username: 'mikeymike',
    //     //   password: 'rapunz3l'
    //   }
    // };
    // axios(Config)
    //   .then((Response) => {
    //     console.log(Response);
    //     if (Response.data.statusCode === 200) {
    //       localStorage.setItem("token", Response.data.data.authToken);
    //       props.EnterUserData(Response.data.data);
    //       MyNotify.Success.RegisterSuccessNotify();
    //       setLoading(false)
    //       history.push("/");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error.response.data);
    //     if(error.response.data.statusCode>=400 && error.response.data.statusCode<500){
    //       MyNotify.Error.DataErrorNotify(error.response.data.message);
    //     }
    //     if(error.response.data.statusCode>=500){
    //       MyNotify.Error.ServerErrorNotify(error.response.data.message);
    //     }
    //     // setLoading(false)
    //   });
  };

  const LoginHandler = () => {
    if (
      props.Mobile === 0 ||
      props.Mobile === "" ||
      props.Mobile === null ||
      props.Mobile === undefined
    ) {
      MyNotify.Error.MobileEmptyNotify();
    } else if (
      props.Password === "" ||
      props.Password === null ||
      props.Password === undefined
    ) {
      MyNotify.Error.PasswordEmptyNotify();
    } else if (props.Password.length < 4) {
      MyNotify.Error.PasswordMinLengthNotify();
    } else {
      LoginUser();
    }
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

      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1>ورود به حساب</h1>
                      <p className="text-muted">وارد حساب خود شوید</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="نام کاربری" autoComplete="username" onChange={(e) => props.EnterMobile(e.target.value)}/>
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" placeholder="رمز عبور" autoComplete="current-password" onChange={(e) => props.EnterPassword(e.target.value)}/>
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton color="primary" className="px-4" onClick={LoginHandler}>ورود</CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <CButton color="link" className="px-0">رمز عبور خود را فراموش کرده اید؟</CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>ثبت حساب جدید</h2>
                      <p>
                        چنانچه حساب کاربری در سیستم ندارید می توانید از این قسمت برای ایجاد حساب جدید اقدام کنید.
                      </p>
                      <Link to="/register">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>ثبت نام</CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Login));