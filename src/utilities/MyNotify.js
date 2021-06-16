import { toast } from "react-toastify";

export const MyNotify = {
  Error: {
    FullNameEmptyNotify: () =>
      toast.error("لطفا نام و نام خانوادگی خود را وارد کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    FullNameMinLengthNotify: () =>
      toast.error("نام و نام خانوادگی نمی تواند کمتر از 6 حرف باشد .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    MobileEmptyNotify: () =>
      toast.error("لطفا شماره همراه خود را وارد کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    MobileMinLengthNotify: () =>
      toast.error("شماره همراه نمی تواند کمتر از 11 رقم باشد .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    EmailEmptyNotify: () =>
      toast.error("لطفا پست الکترونیک خود را وارد کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    EmailFormatNotify: () =>
      toast.error("لطفا پست الکترونیک معتبر وارد کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    PasswordEmptyNotify: () =>
      toast.error("لطفا رمز عبور خود را وارد کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    PasswordMinLengthNotify: () =>
      toast.error("رمز عبور نمی تواند کمتر از 4 حرف باشد .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    ServerErrorNotify: (Message) =>
      toast.error(Message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    DataErrorNotify: (Message) =>
      toast.error(Message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    BusinessTitleEmptyNotify: () =>
      toast.error("لطفا عنوان کسب و کار خود را وارد کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    BusinessCategoryEmptyNotify: () =>
      toast.error("لطفا گروه فعالیت کسب و کار خود را وارد کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    BusinessPhoneEmptyNotify: () =>
      toast.error("لطفا شماره تماس کسب و کار خود را وارد کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    BusinessAddressEmptyNotify: () =>
      toast.error("لطفا آدرس محل کسب و کار خود را وارد کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    BusinessMinLengthNotify: () =>
      toast.error("آدرس وارد شده باید بیشتر از 10 حرف باشد.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    BusinessBioEmptyNotify: () =>
      toast.error("لطفا توضیح کوتاه کسب و کار خود را وارد کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    BusinessDescriptionEmptyNotify: () =>
      toast.error("لطفا شرح کسب و کار خود را وارد کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    BusinessDescriptionMinLengthNotify: () =>
      toast.error("شرح کسب و کار وارد شده باید بیشتر از 6 حرف باشد.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    BusinessCoordinatesEmptyNotify: () =>
      toast.error("لطفا محل کسب و کار خود را  روی نقشه وارد کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    DayTitleEmptyNotify: () =>
      toast.error("روز فعالیت خود را وارد کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    OpenTimeEmptyNotify: () =>
      toast.error("ساعت شروع فعالیت خود را وارد کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    CloseTimeEmptyNotify: () =>
      toast.error("ساعت پایان فعالیت خود را وارد کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    WorkingTimeEmptyNotify: () =>
      toast.error("روز های فعالیت خود را وارد کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    TypeOfServiceEmptyNotify: () =>
      toast.error("نوع خدمات خود را انتخاب کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    TypeOfFacilitiesEmptyNotify: () =>
      toast.error("نوع امکانات خود را انتخاب کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    businessLicenseCodeEmptyNotify: () =>
      toast.error("شماره پروانه کب و کار نمی تواند خالی باشد .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    businessLicenseUserEmptyNotify: () =>
      toast.error("تایید کننده پروانه کب و کار نمی تواند خالی و کمتر از 6 حرف باشد .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    businessLicensePhotoEmptyNotify: () =>
      toast.error("لطفا تصویر پروانه کب و کار را انتخواب کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    updatetitleEmptyNotify: () =>
      toast.error("عنوان کسب و کار نمی تواند خالی و کوچک تز از 3 حرف باشد", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    updatecategoryEmptyNotify: () =>
      toast.error("لطفا یک دسته بندی انتخواب کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    updatephoneEmptyNotify: () =>
      toast.error("لطفا شماره خود را وارد کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    updateaddressEmptyNotify: () =>
      toast.error("لطفا آدرس خود را وارد کنید  . آدرس نباید کمتر از 10 حرف باشد .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    updatebioEmptyNotify: () =>
      toast.error("لطفا بیوگرافی خود را وارد کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    updatedescriptionEmptyNotify: () =>
      toast.error("لطفا توضیحات کسب و کار خود را وارد کنید . توضیحات نباید کمتر از 6 حرف باشد .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    updatetelephoneEmptyNotify: () =>
      toast.error("لطفا شماره تلفن خود را وارد کنید .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    updatecoordinatesEmptyNotify: () =>
      toast.error("لطفا موقعیت مکانی خود را وارد کنید", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    updateBusinessServicesEmptyNotify: () =>
      toast.error("لطفا خدمات خود را وارد کنید", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    // updateBusinessServicesEmptyNotify: () =>
    //   toast.error("لطفا امکانات خود را وارد کنید", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   }),
    updateWorkingTimeEmptyNotify: () =>
      toast.error("لطفا ساعات و روز های فعالیت خود را وارد کنید", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
      updatemessangersEmptyNotify: () =>
      toast.error("لطفا شبکه های اجتماعی خود را وارد کنید", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
  },
  Warning: {},
  Success: {
    RegisterSuccessNotify: () =>
      toast.success("ثبت نام با موفقیت انجام شد .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    SetCommentsSuccessNotify: () =>
      toast.success("نظر شما با موفقیت ثبت شد و پس از تایید نمایش داده می شود .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    RegisterPropertySuccessNotify: () =>
      toast.success("ثبت مالکیت با موفقیت انجام شد .", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
    UpdateJobSuccessNotify: () =>
      toast.success("به روزرسانی اطلاعات کسب و کار با موفقیت انجام شد", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
      UploadJobPicSuccessNotify: () =>
      toast.success("به روزرسانی تصویر کسب و کار با موفقیت انجام شد", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }),
  },
  Info: {},
};
