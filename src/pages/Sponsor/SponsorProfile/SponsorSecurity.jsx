import React, { useEffect, useState } from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { passwordReset } from "../../../redux/actions/authActions";
const SponsorSecurity = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [currentPassword, setCurrentPassword] = useState("");
  const [currentPasswordError, setCurrentPasswordError] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [password1Error, setPassword1Error] = useState("");
  const [password2Error, setPassword2Error] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});
  const { passwordResetDetails, passwordResetError } = auth;

  console.log("password reset error ", passwordResetError);
  console.log("password reset detail ", passwordResetDetails);


  const validateForm = () => {
    const errorsObj = {};


    if (password1.trim() === "") {
      errorsObj.password1 = "New Password is required";
    }
    if (password2.trim() === "") {
      errorsObj.password2 = "Confirm Password is required";
    }

    // ... validate other fields similarly
    setErrors(errorsObj);
    return Object.keys(errorsObj).length === 0;
  };


  const submitHandler = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {

      try {
        await dispatch(passwordReset(password1, password2));
        // Destructure the error from the response payload
        sessionStorage.setItem("passwordMessage", "Password change successfully!");
      } catch (error) {
        // Handle any errors that occur during the dispatch
        console.log("error message", error);
        console.error("An error occurred during login:", error);
        // Optionally, you can set an error message for the user
        setShowMessage("An error occurred during login. Please try again.");
      }
    }
  };

  const handlePassword = (event) => {
    const newPassword = event.target.value;
    setPassword1(newPassword);

    // Check password length
    if (newPassword.length < 8) {
      setPassword1Error("Password must be at least 8 characters long");
      return;
    }

    // Check password strength
    const hasAlphaNumeric = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(newPassword);
    if (!hasAlphaNumeric) {
      setPassword1Error("Password must contain both letters and numbers");
      return;
    }

    setPassword1Error("");
  };

  const handleConfirmPassword = (event) => {
    const newConfirmPassword = event.target.value;
    setPassword2(newConfirmPassword);
    if (newConfirmPassword !== password1) {
      setPassword2Error("Passwords do not match");
    } else {
      setPassword2Error("");
    }
  };

  console.log("User Details password ", auth);

  return (
    <>
      <div className="container-xl px-4 mt-4">
        <div className="row">
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-header">Change Password</div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  {/* <div className="mb-3">
                    <label className="small mb-1" for="currentPassword">
                      Current Password
                    </label>
                    <input
                      className="form-control"
                      id="currentPassword"
                      value={currentPassword}
                      type="password"
                      placeholder="Enter current password"
                    />
                  </div> */}
                  <div className="mb-3">
                    <label className="small mb-1" for="newPassword">
                      New Password
                    </label>
                    <input
                      className="form-control"
                      id="newPassword"
                      value={password1}
                      onChange={(e) => {
                        setPassword1(e.target.value);
                        handlePassword(e);
                      }}
                      type="password"
                      placeholder="Enter new password"
                    />
                    <p className="error-msg">{password1Error}</p>
                    {errors.password == "" ? (
                      <p className="error-msg">{errors.password}</p>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <label className="small mb-1" for="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      className="form-control"
                      id="confirmPassword"
                      value={password2}
                      onChange={(e) => {
                        setPassword2(e.target.value);
                        handleConfirmPassword(e);
                      }}
                      type="password"
                      placeholder="Confirm new password"
                    />
                    <p className="error-msg">{password2Error}</p>
                    {errors.password2 == "" ? (
                      <p className="error-msg">{errors.password2}</p>
                    ) : null}
                  </div>
                  <button className="btn btn-primary"  type="submit">
                    Save
                  </button>
                </form>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">Security Preferences</div>
              <div className="card-body">
                <h5 className="mb-1">Account Privacy</h5>
                <p className="small text-muted">
                  By setting your account to private, your profile information
                  and posts will not be visible to users outside of your user
                  groups.
                </p>
                <form>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="radioPrivacy1"
                      type="radio"
                      name="radioPrivacy"
                    />
                    <label className="form-check-label" for="radioPrivacy1">
                      Public (posts are available to all users)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="radioPrivacy2"
                      type="radio"
                      name="radioPrivacy"
                    />
                    <label className="form-check-label" for="radioPrivacy2">
                      Private (posts are available to only users in your groups)
                    </label>
                  </div>
                </form>
                <hr className="my-4" />
                <h5 className="mb-1">Data Sharing</h5>
                <p className="small text-muted">
                  Sharing usage data can help us to improve our products and
                  better serve our users as they navigation through our
                  application. When you agree to share usage data with us, crash
                  reports and usage analytics will be automatically sent to our
                  development team for investigation.
                </p>
                <form>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="radioUsage1"
                      type="radio"
                      name="radioUsage"
                    />
                    <label className="form-check-label" for="radioUsage1">
                      Yes, share data and crash reports with app developers
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="radioUsage2"
                      type="radio"
                      name="radioUsage"
                    />
                    <label className="form-check-label" for="radioUsage2">
                      No, limit my data sharing with app developers
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-header">Two-Factor Authentication</div>
              <div className="card-body">
                <p>
                  Add another level of security to your account by enabling
                  two-factor authentication. We will send you a text message to
                  verify your login attempts on unrecognized devices and
                  browsers.
                </p>
                <form>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="twoFactorOn"
                      type="radio"
                      name="twoFactor"
                    />
                    <label className="form-check-label" for="twoFactorOn">
                      On
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="twoFactorOff"
                      type="radio"
                      name="twoFactor"
                    />
                    <label className="form-check-label" for="twoFactorOff">
                      Off
                    </label>
                  </div>
                  <div className="mt-3">
                    <label className="small mb-1" for="twoFactorSMS">
                      SMS Number
                    </label>
                    <input
                      className="form-control"
                      id="twoFactorSMS"
                      type="tel"
                      placeholder="Enter a phone number"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="card mb-4 bg-danger text-white">
              <div className="card-header">Delete Account</div>
              <div className="card-body">
                <p>
                  Deleting your account is a permanent action and cannot be
                  undone. If you are sure you want to delete your account,
                  select the button below.
                </p>
                <button className="btn btn-danger-soft text-danger" type="button">
                  I understand, delete my account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorSecurity;
