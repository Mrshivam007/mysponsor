/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "./components/DevelopmentTable";
import CheckTable from "../../../views/admin/eventManagement/components/CheckTable";
import ColumnsTable from "../../../views/admin/eventManagement/components/ColumnsTable";
import ComplexTable from "../../../views/admin/eventManagement/components/ComplexTable";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "../../../views/admin/eventManagement/variables/columnsData";
import tableDataDevelopment from "../../../views/admin/eventManagement/variables/tableDataDevelopment.json";
// import { fetchEvent } from "../../../../../redux/actions/eventAction";
import { getEventApprove } from "../../../../../redux/actions/adminAction";
import tableDataCheck from "../../../views/admin/eventManagement/variables/tableDataCheck.json";
import tableDataColumns from "../../../views/admin/eventManagement/variables/tableDataColumns.json";
import tableDataComplex from "../../../views/admin/eventManagement/variables/tableDataComplex.json";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Settings() {
  const dispatch = useDispatch();
  const eventDetails = useSelector(state => state.admin)
  useEffect(() => {
    dispatch(getEventApprove())
  }, [])
  console.log(eventDetails.eventApproveDetails);
  // Chakra Color Mode
  return (
    <Box pt={{ base: "30px", md: "80px", xl: "80px" }}>
      <DevelopmentTable
        columnsData={columnsDataDevelopment}
        tableData={tableDataDevelopment}
        liveEventData={eventDetails.eventApproveDetails?.live_event}
        upcomingEventData={eventDetails.eventApproveDetails?.upcoming_event}
      />
      {/* <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: "20px", xl: "20px" }}>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </SimpleGrid> */}
    </Box>
  );
}
