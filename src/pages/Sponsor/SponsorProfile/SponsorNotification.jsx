import React from "react";

const SponsorNotification = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-8">
          <div className="card card-header-actions mb-4">
            <div className="card-header">
              Email Notifications
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  id="flexSwitchCheckChecked"
                  type="checkbox"
                />
                <label
                  className="form-check-label"
                  for="flexSwitchCheckChecked"
                ></label>
              </div>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="small mb-1" for="inputNotificationEmail">
                    Default notification email
                  </label>
                  <input
                    className="form-control"
                    id="inputNotificationEmail"
                    type="email"
                    placeholder="user@email.com"
                  />
                </div>
                <div className="mb-0">
                  <label className="small mb-2">
                    Choose which types of email updates you receive
                  </label>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      id="checkAccountChanges"
                      type="checkbox"
                    />
                    <label className="form-check-label" for="checkAccountChanges">
                      Changes made to your account
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      id="checkAccountGroups"
                      type="checkbox"
                    />
                    <label className="form-check-label" for="checkAccountGroups">
                      Changes are made to groups you're part of
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      id="checkProductUpdates"
                      type="checkbox"
                    />
                    <label className="form-check-label" for="checkProductUpdates">
                      Product updates for products you've purchased or starred
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      id="checkProductNew"
                      type="checkbox"
                    />
                    <label className="form-check-label" for="checkProductNew">
                      Information on new products and services
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      id="checkPromotional"
                      type="checkbox"
                    />
                    <label className="form-check-label" for="checkPromotional">
                      Marketing and promotional offers
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="checkSecurity"
                      type="checkbox"
                    />
                    <label className="form-check-label" for="checkSecurity">
                      Security alerts
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card card-header-actions mb-4">
            <div className="card-header">
              Push Notifications
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  id="smsToggleSwitch"
                  type="checkbox"
                />
                <label className="form-check-label" for="smsToggleSwitch"></label>
              </div>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="small mb-1" for="inputNotificationSms">
                    Default SMS number
                  </label>
                  <input
                    className="form-control"
                    id="inputNotificationSms"
                    type="tel"
                    placeholder="123-456-7890"
                  />
                </div>
                <div className="mb-0">
                  <label className="small mb-2">
                    Choose which types of push notifications you receive
                  </label>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      id="checkSmsComment"
                      type="checkbox"
                    />
                    <label className="form-check-label" for="checkSmsComment">
                      Someone comments on your post
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      id="checkSmsShare"
                      type="checkbox"
                    />
                    <label className="form-check-label" for="checkSmsShare">
                      Someone shares your post
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      id="checkSmsFollow"
                      type="checkbox"
                    />
                    <label className="form-check-label" for="checkSmsFollow">
                      A user follows your account
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      id="checkSmsGroup"
                      type="checkbox"
                    />
                    <label className="form-check-label" for="checkSmsGroup">
                      New posts are made in groups you're part of
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="checkSmsPrivateMessage"
                      type="checkbox"
                    />
                    <label
                      className="form-check-label"
                      for="checkSmsPrivateMessage"
                    >
                      You receive a private message
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">Notification Preferences</div>
            <div className="card-body">
              <form>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    id="checkAutoGroup"
                    type="checkbox"
                  />
                  <label className="form-check-label" for="checkAutoGroup">
                    Automatically subscribe to group notifications
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    id="checkAutoProduct"
                    type="checkbox"
                  />
                  <label className="form-check-label" for="checkAutoProduct">
                    Automatically subscribe to new product notifications
                  </label>
                </div>
                <button className="btn btn-danger-soft text-danger">
                  Unsubscribe from all notifications
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorNotification;
