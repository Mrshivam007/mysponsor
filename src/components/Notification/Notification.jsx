import React, { useEffect, useState } from "react";
import { Dropdown, Badge, Button, Toast } from "react-bootstrap";
import {
  getNotification,
  clearNotification,
  clearAllNotification,
} from "../../redux/actions/notificationAction";
import "./notification.css";
import { useDispatch, useSelector } from "react-redux";

function Notification() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      heading: "New Message",
      description:
        "You have a new message from John Doe. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, error?",
      dateTime: "10:30:00",
    },
    {
      id: 2,
      heading: "Reminder",
      description: "Don't forget your appointment at 3:00 PM.",
      dateTime: "5min ago",
    },
    {
      id: 3,
      heading: "Alert",
      description: "System maintenance scheduled for tomorrow.",
      dateTime: "1day ago",
    },
  ]);

  const dispatch = useDispatch();
  const Notification = useSelector((state) => state.notification);
  useEffect(() => {
    dispatch(getNotification());
  }, []);
  console.log("Notification Messages ", Notification?.notificationDetails);

  const dynamicNotification = Notification?.notificationDetails;

  const { clearNotificationDetails } = Notification;

  console.log("clear notification success message", clearNotificationDetails);

  // const clearNotification = (id) => {
  //   setNotifications(notifications.filter(notification => notification.id !== id));
  // };

  const closeNotification = (id) => {
    // Dispatch an action to clear the notification
    dispatch(clearNotification(id));
  };

  useEffect(() => {
    if (clearNotificationDetails) {
      dispatch(getNotification());
    }
  }, [clearNotificationDetails, dispatch]);

  const closeAllNotification = () => {
    dispatch(clearAllNotification());
  };

  const handleNotificationClose = (e, id) => {
    e.stopPropagation(); // Prevent dropdown menu from closing
    clearNotification(id); // Clear the specific notification
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="link"
        id="dropdown-basic"
        style={{ color: "white", padding: 0 }}
      >
        <span className="fa fa-bell fa-lg"></span>
        {dynamicNotification?.length > 0 && (
          <Badge pill variant="danger">
            {dynamicNotification?.length}
          </Badge>
        )}
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-right">
        <Dropdown.Header>Notifications</Dropdown.Header>
        {dynamicNotification?.map((notification) => (
          <div key={notification.id}>
            <Dropdown.Item onClick={(e) => e.stopPropagation()}>
              <Toast
                onClose={(e) => handleNotificationClose(e, notification.id)}
              >
                <Toast.Header closeButton={false}>
                  <strong className="me-auto">{notification.title}</strong>
                  <div style={{ marginLeft: "auto" }}>
                    <span style={{ paddingRight: "10px", fontSize: "14px" }}>
                      {notification.time_since}
                    </span>
                    <span
                      className="fa fa-times notification-close"
                      style={{ fontSize: "16px" }}
                      onClick={() => closeNotification(notification.id)}
                    ></span>
                  </div>
                </Toast.Header>
                <Toast.Body
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.2",
                    whiteSpace: "normal",
                  }}
                >
                  {notification.message}
                </Toast.Body>
              </Toast>
            </Dropdown.Item>
          </div>
        ))}
        {notifications.length === 0 && (
          <Dropdown.Item>No new notifications</Dropdown.Item>
        )}
        <Dropdown.Divider />
        <Dropdown.Item onClick={closeAllNotification}>Clear All</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Notification;
