/* eslint-disable */
import {
  Flex,
  Progress,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Icon,
  Tr,
  useColorModeValue,
  Button as ApproveButton,
} from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/card/Card";
import { AndroidLogo, AppleLogo, WindowsLogo } from "../../../../components/icons/Icons";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Menu from "../../../../components/menu/MainMenu";
import React, { useEffect, useMemo, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { MdDelete, MdEdit } from "react-icons/md";
// import { deleteEvent } from "../../../../../../redux/actions/eventAction";
import { deleteContent } from "../../../../../../redux/actions/contentAction";
import { approveContent } from "../../../../../../redux/actions/adminAction";
import { approveEventPayment } from "../../../../../../redux/actions/paymentAction";
import { ApproveWithdraw } from "../../../../../../redux/actions/paymentWithdraw";
import { useDispatch, useSelector } from "react-redux";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { InfoOutlineIcon } from '@chakra-ui/icons';


export default function ManageTable(props) {
  const { columnsData, tableData, liveContentData, upcomingContentData, approvedWithdraw, not_approvedWithdraw } = props;
  console.log("Table Dtaa ", not_approvedWithdraw);

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);
  const paymentWithdraw = useSelector((state) => state.paymentWithdraw);
  const { approveWithdrawError, approveWithdraw } = paymentWithdraw;
  const [errorMessage, setErrorMessage] = useState("");
  console.log("Withdraw Approve message ", approveWithdraw);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  const [expandedRowIndex, setExpandedRowIndex] = useState(null);

  const handleExpandRow = (index) => {
    setExpandedRowIndex(index === expandedRowIndex ? null : index);
  };

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const iconColor = useColorModeValue("secondaryGray.500", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  const [show, setShow] = useState(false);
  const [deletionMessage, setDeletionMessage] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");

  useEffect(() => {
    // Retrieve success message from sessionStorage
    const deleteMessage = sessionStorage.getItem("deletionMessage");
    const updateMessage = sessionStorage.getItem("contentUpdateMessage");
    // Clear success message from sessionStorage
    sessionStorage.removeItem("deletionMessage");
    sessionStorage.removeItem("contentUpdateMessage");

    if (deleteMessage && !deletionMessage) { // Check if deletionMessage is not already set
      setDeletionMessage(deleteMessage);
      // Remove the deletion message after 3 seconds
      const deleteMessageTimer = setTimeout(() => {
        setDeletionMessage("");
      }, 3000);
      // Return cleanup function for the delete message timer
      return () => clearTimeout(deleteMessageTimer); // Cleanup timer
    }

    if (updateMessage) {
      setUpdateMessage(updateMessage);
      // Remove the update message after 3 seconds
      const updateMessageTimer = setTimeout(() => {
        setUpdateMessage("");
      }, 3000);
      // Return cleanup function for the update message timer
      return () => clearTimeout(updateMessageTimer); // Cleanup timer
    }

    // Return cleanup function for any timers that might have been set
    return () => { };
  }, [deletionMessage]); // Ensure useEffect runs when deletionMessage changes




  const handleUpdation = (data) => {
    navigate("/update_content", { state: { contentData: data } });
  };


  const [selectedEventData, setSelectedEventData] = useState(null);

  const handleClose = () => {
    setShow(false);
    setSelectedEventData(null); // Clear selected event data when closing modal
  };

  const handleShow = (eventData) => {
    setSelectedEventData(eventData); // Set the selected event data
    setShow(true); // Show the modal
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePaymentApprove = (id) => {
    dispatch(ApproveWithdraw(id));
    // sessionStorage.setItem("deletionMessage", "Payment Withdraw has been Approved!!");

    // navigate("/admin/payment_withdraw");
    // window.location.reload();
  };

  useEffect(() => {
    console.log("getting message under useEffect ", approveWithdraw);
    if (approveWithdraw) {
      if (approveWithdraw.msg == "withdra approved") {
        console.log("Event created successfully");
        sessionStorage.setItem("deletionMessage", "Payment Withdraw has been Approved!!");
        navigate("/admin/payment_withdraw");
        window.location.reload();
      } else {
        console.log("An error occurred while creating the event");
        window.scroll(0, 0);
        setErrorMessage("An error occurred during creating an event");
      }
    }
  }, [approveWithdraw]);
  console.log(liveContentData);
  console.log(upcomingContentData);
  return (
    <Card
      direction='column'
      w='100%'
      px='0px'
      overflowX={{ sm: "scroll", lg: "hidden" }}>

      {errorMessage && (
        <div className="container">
          <div
            className="alert alert-danger"
            role="alert"
            style={{ borderRadius: "10px" }}
          >
            {errorMessage}
          </div>
        </div>
      )}

      {deletionMessage && (
        <div className="container">
          <div
            class="alert alert-success"
            role="alert"
            style={{ borderRadius: "10px" }}
          >
            {deletionMessage}
          </div>
        </div>
      )}
      {updateMessage && (
        <div className="container">
          <div
            class="alert alert-success"
            role="alert"
            style={{ borderRadius: "10px" }}
          >
            {updateMessage}
          </div>
        </div>
      )}
      <Flex px='25px' justify='space-between' mb='20px' align='center'>
        <Text
          color={textColor}
          fontSize='22px'
          fontWeight='700'
          lineHeight='100%'>
          Event Payment Manage Table
        </Text>
        <Menu />
      </Flex>
      <Tabs isFitted variant='enclosed'>
        <TabList mb='1em'>
          <Tab>Approved Event Payment</Tab>
          <Tab>Not Approved Event Payment </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>

            <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
              <Thead>
                <Tr>
                  <Th pe='10px' borderColor={borderColor}>
                    <Flex justify='space-between' align='center' fontSize={{ sm: "10px", lg: "12px" }} color='gray.400'>
                      Name
                    </Flex>
                  </Th>
                  <Th pe='10px' borderColor={borderColor}>
                    <Flex justify='space-between' align='center' fontSize={{ sm: "10px", lg: "12px" }} color='gray.400'>
                      Date
                    </Flex>
                  </Th>
                  <Th pe='10px' borderColor={borderColor}>
                    <Flex justify='space-between' align='center' fontSize={{ sm: "10px", lg: "12px" }} color='gray.400'>
                      Amount
                    </Flex>
                  </Th>
                  <Th pe='8px' borderColor={borderColor}>
                    <Flex justify='space-between' align='center' fontSize={{ sm: "10px", lg: "12px" }} color='gray.400'>
                      Type
                    </Flex>
                  </Th>
                  <Th pe='10px' borderColor={borderColor}>
                    <Flex justify='space-between' align='center' fontSize={{ sm: "10px", lg: "12px" }} color='gray.400'>
                      Event Action
                    </Flex>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {approvedWithdraw && approvedWithdraw.map((data, index) => (
                  <>
                    <Tr key={index} onClick={() => handleExpandRow(index)}>
                      <Td fontSize={{ sm: "14px" }} minW={{ sm: "150px", md: "200px", lg: "auto" }} borderColor='transparent'>
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {data.user_id.first_name} {data.user_id.last_name}
                        </Text>
                      </Td>
                      <Td fontSize={{ sm: "14px" }} minW={{ sm: "150px", md: "200px", lg: "auto" }} borderColor='transparent'>
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {data.date}
                        </Text>
                      </Td>
                      <Td fontSize={{ sm: "14px" }} minW={{ sm: "150px", md: "200px", lg: "auto" }} borderColor='transparent'>
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {data.amount}
                        </Text>
                      </Td>
                      <Td fontSize={{ sm: "14px" }} minW={{ sm: "150px", md: "200px", lg: "auto" }} borderColor='transparent'>
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {data.user_id.user_type}
                        </Text>
                      </Td>
                      <Td
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor='transparent'>
                        <Flex align='center'>
                          <Icon w='24px' h='24px' me='5px' color="green.500" as={MdCheckCircle} />
                          <Text color={textColor} fontSize='sm' fontWeight='700'>
                            Approved
                          </Text>
                        </Flex>
                      </Td>
                    </Tr>
                    {expandedRowIndex === index && (
                      <tr key={`expanded_${index}`}>
                        <td colSpan={5}>
                          <table className="table table-borderless">
                            <thead>
                              <tr>
                                <th>Acc. Holder Name</th>
                                <th>Account Number</th>
                                <th>IFSC Code</th>
                                <th>Bank Name</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Account Holder Name</td>
                                <td>Acccount Number</td>
                                <td>IFSC Code</td>
                                <td>Bank Name</td>
                                {/* Add additional cells for extra details */}
                                {/* Add as many cells as needed for the additional details */}
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </Tbody>
            </Table>
          </TabPanel>
          <TabPanel>
            <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
              <Thead>
                <Tr>
                  <Th pe='10px' borderColor={borderColor}>
                    <Flex justify='space-between' align='center' fontSize={{ sm: "10px", lg: "12px" }} color='gray.400'>
                      Name
                    </Flex>
                  </Th>
                  <Th pe='10px' borderColor={borderColor}>
                    <Flex justify='space-between' align='center' fontSize={{ sm: "10px", lg: "12px" }} color='gray.400'>
                      Date
                    </Flex>
                  </Th>
                  <Th pe='10px' borderColor={borderColor}>
                    <Flex justify='space-between' align='center' fontSize={{ sm: "10px", lg: "12px" }} color='gray.400'>
                      Amount
                    </Flex>
                  </Th>
                  <Th pe='8px' borderColor={borderColor}>
                    <Flex justify='space-between' align='center' fontSize={{ sm: "10px", lg: "12px" }} color='gray.400'>
                      Type
                    </Flex>
                  </Th>
                  <Th pe='10px' borderColor={borderColor}>
                    <Flex justify='space-between' align='center' fontSize={{ sm: "10px", lg: "12px" }} color='gray.400'>
                      Event Action
                    </Flex>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {not_approvedWithdraw && not_approvedWithdraw.map((data, index) => (
                  <>
                    <Tr key={index} onClick={() => handleExpandRow(index)}>
                      <Td fontSize={{ sm: "14px" }} minW={{ sm: "150px", md: "200px", lg: "auto" }} borderColor='transparent'>
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {data.user_id.first_name} {data.user_id.last_name}
                        </Text>
                      </Td>
                      <Td fontSize={{ sm: "14px" }} minW={{ sm: "150px", md: "200px", lg: "auto" }} borderColor='transparent'>
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {data.date}
                        </Text>
                      </Td>
                      <Td fontSize={{ sm: "14px" }} minW={{ sm: "150px", md: "200px", lg: "auto" }} borderColor='transparent'>
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {data.amount}
                        </Text>
                      </Td>
                      <Td fontSize={{ sm: "14px" }} minW={{ sm: "150px", md: "200px", lg: "auto" }} borderColor='transparent'>
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {data.user_id.user_type}
                        </Text>
                      </Td>
                      <Td
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor='transparent'
                      >
                        <ApproveButton
                          me='100%'
                          mb='50px'
                          w='140px'
                          minW='140px'
                          mt={{ base: "20px", "2xl": "auto" }}
                          variant='brand'
                          fontWeight='500'
                          onClick={() => handleShow(data)} // Pass event data to handleShow
                        >
                          Approve now
                        </ApproveButton>
                        <Modal
                          show={show}
                          onHide={handleClose}
                          scrollable={true}
                          style={{ zIndex: "2000" }}
                        >
                          <Modal.Header>
                            <Modal.Title>
                              Approve Payment of {selectedEventData?.id} {/* Display selected event ID */}
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Are you sure you want to approve payment for this event?
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              variant="primary"
                              onClick={() => handlePaymentApprove(selectedEventData?.id)} // Pass event ID to handlePaymentApprove
                            >
                              Yes
                            </Button>
                            <Button
                              variant="secondary"
                              onClick={handleClose}
                            >
                              No
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </Td>
                    </Tr>
                    {expandedRowIndex === index && (
                      <tr key={`expanded_${index}`}>
                        <td colSpan={5}>
                          <table className="table table-borderless">
                            <thead>
                              <tr>
                                <th>Acc. Holder Name</th>
                                <th>Account Number</th>
                                <th>IFSC Code</th>
                                <th>Bank Name</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Account Holder Name</td>
                                <td>Acccount Number</td>
                                <td>IFSC Code</td>
                                <td>Bank Name</td>
                                {/* Add additional cells for extra details */}
                                {/* Add as many cells as needed for the additional details */}
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </Tbody>
            </Table>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
}
