import React from 'react';
import './../styles/PasswordStrengthMeter.css';
import zxcvbn from 'zxcvbn';

const PasswordStrengthMeter = (props) =>{
  let PersianPasswordLable="";

  const createPasswordLabel = (result) => {
    switch (result.score) {
      case 0:
        PersianPasswordLable="بسیار ضعیف";
        return 'Weak';
      case 1:
        PersianPasswordLable="ضعیف";
        return 'Weak';
      case 2:
        PersianPasswordLable="متوسط";
        return 'Fair';
      case 3:
        PersianPasswordLable="خوب";
        return 'Good';
      case 4:
        PersianPasswordLable="قدرتمند";
        return 'Strong';
      default:
        PersianPasswordLable="بسیار قدرتمند";
        return 'Weak';
    }
  }

  const testedResult = zxcvbn(props.password);

  return (
    <div className="password-strength-meter">
      <progress
        className={`password-strength-meter-progress strength-${createPasswordLabel(testedResult)}`}
        value={testedResult.score}
        max="4"
      />
      <br />
      {
        props.password && (
          <>
            <strong>میزان امنیت کلمه عبور : </strong><strong> {PersianPasswordLable}</strong>
          </>
        )
      }
    </div>
  );
}

export default PasswordStrengthMeter;