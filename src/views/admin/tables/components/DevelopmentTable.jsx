import React, { useMemo, useState } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import {
  MdCheckCircle,
  MdPending,
  MdOutlineError,
} from "react-icons/md";
import Progress from "components/progress";
import { Button } from "@chakra-ui/react";


const JobDetailsModal = ({ isOpen, onClose, job, isDarkMode }) => {
  if (!isOpen) return null;

  const assignTechnician = () => {
    // Add your logic to assign a technician to the job here
    // After assigning, you can update the job and close the modal
    onClose();
  };

  return (
    <div className={`fixed inset-0 z-50 ${isDarkMode ? "dark" : ""}`}>
    <div
      className={`fixed inset-0 ${
        isDarkMode ? "bg-black" : "bg-gray-200"
      } opacity-60`}
      onClick={onClose}
    ></div>
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className={`bg-white dark:bg-gray-800 w-[900px] p-8 rounded-lg`}
      >
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column: Job Details */}
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <h2
              className={`text-2xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Job Details
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <p
                className={`mb-2 col-span-1 font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Job ID:
              </p>
              <p
                className={`mb-2 col-span-1 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {job.jobId}
              </p>
              <p
                className={`mb-2 col-span-1 font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Customer Name:
              </p>
              <p
                className={`mb-2 col-span-1 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {job.customerName}
              </p>
              <p
                className={`mb-2 col-span-1 font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Customer Address:
              </p>
              <p
                className={`mb-2 col-span-1 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {job.customerAddress}
              </p>
              <p
                className={`mb-2 col-span-1 font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Customer Phone Number:
              </p>
              <p
                className={`mb-2 col-span-1 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {job.customerPhoneNumber}
              </p>
              <p
                className={`mb-2 col-span-1 font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Customer Email:
              </p>
              <p
                className={`mb-2 col-span-1 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {job.customerEmail}
              </p>
              <p
                className={`mb-2 col-span-1 font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Price
              </p>
              <p
                className={`mb-2 col-span-1 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {job.cost}
              </p>
              <p
                className={`mb-2 col-span-1 font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Job Details:
              </p>
              <p
                className={`mb-2 col-span-1 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {job.jobDetails}
              </p>

            </div>
          </div>

          {/* Right Column: List of Technicians */}
          <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <h2
              className={`text-2xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Technician Status
            </h2>
            {job.technicianAssigned ? (
              <>
                <div className="grid grid-cols-2 gap-2">
                  <p
                    className={`mb-2 col-span-1 font-bold ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Technician Assigned:
                  </p>
                  <p
                    className={`mb-2 col-span-1 ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {job.technicianName}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className={`mt-4 ${
                    isDarkMode ? "bg-gray-600 hover:bg-gray-700" : "bg-gray-400 hover:bg-gray-500"
                  } text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-gray-300`}
                >
                  Close
                </button>
              </>
            ) : (
              <>
                <p
                  className={`mb-2 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  No Technician Assigned
                </p>
                <button
                  onClick={assignTechnician}
                  className={`mt-4 ${
                    isDarkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
                  } text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300`}
                >
                  Assign Technician
                </button>
                <button
                  onClick={onClose}
                  className={`mt-4 ml-4 ${
                    isDarkMode ? "bg-gray-600 hover:bg-gray-700" : "bg-gray-400 hover:bg-gray-500"
                  } text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-gray-300`}
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
    );
};





const DevelopmentTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});
  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5 }, // Set the initial page size
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
  } = tableInstance;

  const openModal = (row) => {
    console.log(row)
    setSelectedJob(row);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob({});
  };

  return (
    <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-between">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Job ( Inspection )
        </div>
        <CardMenu />
      </div>

      <div className="mt-8 h-full overflow-x-scroll xl:overflow-hidden">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                    className="border-b border-gray-200 pr-24 pb-[10px] text-start dark:!border-navy-700"
                  >
                    <p className="text-xs tracking-wide text-gray-600">
                      {column.render("Header")}
                    </p>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = "";
                    if (cell.column.Header === "NAME") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "SERVICE") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "DATE") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "PROGRESS") {
                      data = (
                        <div className="flex items-center gap-3">
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}%
                          </p>
                          <Progress width="w-[68px]" value={cell.value} />
                        </div>
                      );
                    } else if (cell.column.Header === "JOB ID") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "STATUS") {
                      data = (
                        <div className="flex items-center gap-2">
                          <div className={`rounded-full text-xl`}>
                            {cell.value === "Accepted" ? (
                              <MdCheckCircle className="text-green-500" />
                            ) : cell.value === "Pending" ? (
                              <MdPending className="text-yellow-500" />
                            ) : null}
                          </div>
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}
                          </p>
                        </div>
                      );
                    } else if (cell.column.Header === "SEE DETAILS") {
                      data = (
                        <button
                          className="px-2 py-2 text-blue-800 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                          onClick={() => openModal(row.original)}
                        >
                          Details
                        </button>
                      );
                    }
                    return (
                      <td
                        className="pt-[14px] pb-[18px] sm:text-[14px]"
                        {...cell.getCellProps()}
                        key={index}
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Display the modal when showModal is true */}
      <JobDetailsModal isOpen={showModal} onClose={closeModal} job={selectedJob} />
    </Card>

  );
};

export default DevelopmentTable;




const columnsData = [
  {
    Header: "JOB ID",
    accessor: "jobId",
  },
  {
    Header: "SERVICE",
    accessor: "service",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
  {
    Header: "SEE DETAILS",
    accessor: "details",
  },
];

const tableData = [
  {
    jobId: "12345",
    service: "Service 1",
    date: "2023-09-09",
    status: "Accepted",
    details: "Details 1",
    customerName: "John Doe",
    customerAddress: "123 Main St",
    customerPhoneNumber: "555-555-5555",
    customerEmail: "john@example.com",
    jobDetails: "Job details for Service 1",
    jobAssignedStatus: "Assigned",
    date: "2023-09-09",
    cost: "$1000",
    technicianAssigned: true,
    technicianName: "Technician 1",
  },
  {
    jobId: "12345",
    service: "Service 1",
    date: "2023-09-09",
    status: "Accepted",
    details: "Details 1",
    customerName: "John Doe",
    customerAddress: "123 Main St",
    customerPhoneNumber: "555-555-5555",
    customerEmail: "john@example.com",
    jobDetails: "Job details for Service 1",
    jobAssignedStatus: "Pending",
    cost: "$1000",
    technicianAssigned: false,
    technicianName: "Technician 1",
  },
  {
    jobId: "67890",
    service: "Service 2",
    date: "2023-09-10",
    status: "Pending",
    details: "Details 2",
    customerName: "Jane Smith",
    customerAddress: "456 Oak Ave, newYork city , newyour-90001",
    customerPhoneNumber: "555-555-1234",
    customerEmail: "jane@example.com",
    jobDetails: "Job details for Service 2",
    jobAssignedStatus: "Assigned",
    cost: "$750",
    technicianAssigned: true,
    technicianName: "Technician 2",
  },
  {
    jobId: "54321",
    service: "Service 3",
    date: "2023-09-11",
    status: "Accepted",
    details: "Details 3",
    customerName: "Alice Johnson",
    customerAddress: "789 Elm St",
    customerPhoneNumber: "555-555-9876",
    customerEmail: "alice@example.com",
    jobDetails: "Job details for Service 3",
    jobAssignedStatus: "Pending",
    cost: "$1200",
    technicianAssigned: false,
    technicianName: "Technician 3",
  },
  {
    jobId: "98765",
    service: "Service 4",
    date: "2023-09-12",
    status: "Pending",
    details: "Details 4",
    customerName: "Bob Wilson",
    customerAddress: "101 Pine St",
    customerPhoneNumber: "555-555-2468",
    customerEmail: "bob@example.com",
    jobDetails: "Job details for Service 4",
    jobAssignedStatus: "Assigned",
    cost: "$900",
    technicianAssigned: true,
    technicianName: "Technician 4",
  },
  // Add more rows with similar data...
];