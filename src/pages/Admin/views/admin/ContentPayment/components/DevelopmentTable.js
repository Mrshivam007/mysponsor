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
import { approveContentPayment } from "../../../../../../redux/actions/paymentAction";
import { useDispatch } from "react-redux";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
import { useNavigate } from "react-router-dom";


export default function ManageTable(props) {
  const { columnsData, tableData, liveContentData, upcomingContentData, approvedEventPayment, not_approvedEventPayment } = props;
  console.log("Table Dtaa ", not_approvedEventPayment);

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

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
    sessionStorage.removeItem("successMessage");
    sessionStorage.removeItem("deletionMessage");
    sessionStorage.removeItem("updateMessage");

    if (deleteMessage) {
      setDeletionMessage(deleteMessage);
    }
    if (updateMessage) {
      setUpdateMessage(updateMessage)
    }
  }, []);

  const handleUpdation = (data) => {
    navigate("/update_content", { state: { contentData: data } });
  };



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePaymentApprove = (data) => {
    console.log("Payment data", data);
    console.log("Payment data Id", data.content_sponsor_id);
    dispatch(approveContentPayment(data.content_sponsor_id));
    sessionStorage.setItem("deletionMessage", "Event Payment has been Approved!!");
    navigate("/admin/payment_content");
    window.location.reload();
  };
  console.log(liveContentData);
  console.log(upcomingContentData);
  return (
    <Card
      direction='column'
      w='100%'
      px='0px'
      overflowX={{ sm: "scroll", lg: "hidden" }}>

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
          Content Payment Manage Table
        </Text>
        <Menu />
      </Flex>
      <Tabs isFitted variant='enclosed'>
        <TabList mb='1em'>
          <Tab>Approved Content Payment</Tab>
          <Tab>Not Approved Content Payment </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>

            <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
              <Thead>
                <Tr>
                  <Th
                    pe='10px'
                    borderColor={borderColor}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                      Content Name
                    </Flex>
                  </Th>
                  <Th
                    pe='10px'
                    borderColor={borderColor}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                      Content Category
                    </Flex>
                  </Th>
                  <Th
                    pe='10px'
                    borderColor={borderColor}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                      Content Date
                    </Flex>
                  </Th>
                  <Th
                    pe='10px'
                    borderColor={borderColor}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                      Content Status
                    </Flex>
                  </Th>
                </Tr>
              </Thead>
              {approvedEventPayment &&
                approvedEventPayment?.map((data) => (
                  <Tbody>
                    <Tr>
                      <Td
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor='transparent'>
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {data.content_id.title}
                        </Text>
                      </Td>
                      <Td
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor='transparent'>
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {data.content_id.content_category}
                        </Text>
                      </Td>
                      <Td
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor='transparent'>
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {data.content_id.content_start_date}
                        </Text>
                      </Td>
                      <Td
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor='transparent'>
                        {/* <ApproveButton
                          me='100%'
                          mb='50px'
                          w='140px'
                          minW='140px'
                          mt={{ base: "20px", "2xl": "auto" }}
                          variant='brand'
                          fontWeight='500'
                          onClick={() => handlePaymentApprove(data)}
                          >
                          
                        </ApproveButton> */}
                        <Flex align='center'>
                          <Icon w='24px' h='24px' me='5px' color="green.500" as={MdCheckCircle} />
                          <Text color={textColor} fontSize='sm' fontWeight='700'>
                            Approved
                          </Text>
                        </Flex>
                        {/* <Icon as={MdEdit} onClick={() => handleUpdation(data)}  color='secondaryGray.500' h='18px' w='32px' />
                        <Icon as={MdDelete} onClick={handleShow} color='secondaryGray.500' h='18px' w='32px' /> */}
                      </Td>
                    </Tr>
                  </Tbody>
                ))}
            </Table>
          </TabPanel>
          <TabPanel>
            <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
              <Thead>
                <Tr>
                  <Th
                    pe='10px'
                    borderColor={borderColor}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                      Content Name
                    </Flex>
                  </Th>
                  <Th
                    pe='10px'
                    borderColor={borderColor}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                      Content Category
                    </Flex>
                  </Th>
                  <Th
                    pe='10px'
                    borderColor={borderColor}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                      Content Date
                    </Flex>
                  </Th>
                  <Th
                    pe='10px'
                    borderColor={borderColor}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                      Content Action
                    </Flex>
                  </Th>
                </Tr>
              </Thead>
              {not_approvedEventPayment &&
                not_approvedEventPayment?.map((data) => (
                  <Tbody>
                    <Tr>
                      <Td
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor='transparent'>
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {data.content_id.title}
                        </Text>
                      </Td>
                      <Td
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor='transparent'>
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {data.content_id.content_category}
                        </Text>
                      </Td>
                      <Td
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor='transparent'>
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {data.content_id.content_start_date}
                        </Text>
                      </Td>
                      <Td
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor='transparent'>
                        <ApproveButton
                          me='100%'
                          mb='50px'
                          w='140px'
                          minW='140px'
                          mt={{ base: "20px", "2xl": "auto" }}
                          variant='brand'
                          fontWeight='500'
                          onClick={() => handlePaymentApprove(data)}
                        >
                          Approve now
                        </ApproveButton>
                      </Td>
                    </Tr>
                  </Tbody>
                ))}
            </Table>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
}
