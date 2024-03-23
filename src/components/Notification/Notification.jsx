import React, { useEffect, useState } from 'react';
import { Dropdown, Badge, Button, Toast } from 'react-bootstrap';
import { getNotification } from '../../redux/actions/notificationAction';
import { useDispatch, useSelector } from 'react-redux';

function Notification() {
  const [notifications, setNotifications] = useState([
    { id: 1, heading: 'New Message', description: 'You have a new message from John Doe.', dateTime: '10:30:00' },
    { id: 2, heading: 'Reminder', description: 'Don\'t forget your appointment at 3:00 PM.', dateTime: '5min ago' },
    { id: 3, heading: 'Alert', description: 'System maintenance scheduled for tomorrow.', dateTime: '1day ago' }
  ]);

  const dispatch = useDispatch();
  const Notification = useSelector((state) => state.notification);
  useEffect(() => {
    dispatch(getNotification());
  }, []);
  console.log("Notification Messages ", Notification?.notificationDetails);


  const clearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const handleNotificationClose = (e, id) => {
    e.stopPropagation(); // Prevent dropdown menu from closing
    clearNotification(id); // Clear the specific notification
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="link" id="dropdown-basic" style={{ color: 'white' }}>
        <span className="fa fa-bell fa-lg"></span>
        {notifications.length > 0 && <Badge pill variant="danger">{notifications.length}</Badge>}
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-right">
        <Dropdown.Header>Notifications</Dropdown.Header>
        {notifications.map(notification => (
          <div key={notification.id}>
            <Dropdown.Item onClick={(e) => e.stopPropagation()}>
              <Toast onClose={(e) => handleNotificationClose(e, notification.id)}>
                <Toast.Header closeButton={false}>
                  <strong className="me-auto">{notification.heading}</strong>
                  {/* <Button variant="link" onClick={(e) => handleNotificationClose(e, notification.id)} className="notification-close"> */}
                  <div style={{ marginLeft: 'auto' }}>
                    <span style={{ paddingRight: '10px', fontSize: '14px' }}>{notification.dateTime}</span>
                    <span className="fa fa-times notification-close" style={{ fontSize: '16px' }} onClick={(e) => handleNotificationClose(e, notification.id)}></span>
                    {/* </Button> */}
                  </div>
                </Toast.Header>
                <Toast.Body>{notification.description}</Toast.Body>
              </Toast>
            </Dropdown.Item>
          </div>
        ))}
        {notifications.length === 0 && <Dropdown.Item>No new notifications</Dropdown.Item>}
        <Dropdown.Divider />
        <Dropdown.Item onClick={clearAllNotifications}>Clear All</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Notification;
