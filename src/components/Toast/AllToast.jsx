import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle } from 'react-icons/fa'; // Using react-icons for the success icon

const Success = () => {
    const notify = () => {
        // toast("Default Notification !");
  
        toast.success("Success Notification !", {
          position: "top-right"
        });
  
        // toast.error("Error Notification !", {
        //   position: "top-left"
        // });
  
        // toast.warn("Warning Notification !", {
        //   position: "bottom-left"
        // });
  
        // toast.info("Info Notification !", {
        //   position: "bottom-center"
        // });
  
        // toast("Custom Style Notification with css class!", {
        //   position: "bottom-right",
        //   className: 'foo-bar'
        // });
      };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <button onClick={notify}>Show Success Toast</button>
    </div>
  );
};

export default Success;
