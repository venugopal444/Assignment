import React from "react";
import "../../index.css";
import "./SprintsTable.css";

const tableHeader = [
  "Sprint Name",
  "Status",
  "Start Date",
  "End Date",
  "Completed Date",
];

const sprintsTableData = [
  {
    sprintName: "Sprint Name 1",
    status: "Done",
    start_date: "11/07/2023",
    end_date: "15/07/2023",
    completed_date: "15/07/2023",
  },
  {
    sprintName: "Sprint Name 2",
    status: "Inprogress",
    start_date: "17/07/2023",
    end_date: "23/07/2023",
    completed_date: "23/07/2023",
  },
  {
    sprintName: "Sprint Name 3",
    status: "Done",
    start_date: "28/07/2023",
    end_date: "30/08/2023",
    completed_date: "30/08/2023",
  },
  {
    sprintName: "Sprint Name 4",
    status: "Done",
    start_date: "28/08/2023",
    end_date: "17/09/2023",
    completed_date: "17/09/2023",
  },
  {
    sprintName: "Sprint Name 5",
    status: "Inprogress",
    start_date: "20/09/2023",
    end_date: "20/10/2023",
    completed_date: "20/10/2023",
  },
  {
    sprintName: "Sprint Name 6",
    status: "Done",
    start_date: "25/10/2023",
    end_date: "05/11/2023",
    completed_date: "05/11/2023",
  },
];

const SprintsTable = () => {
  return (
    <div className="table_container">
      <table className="c_table">
        <thead className="table_i_container">
          <tr>
            {tableHeader.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table_b_container">
          {sprintsTableData.map((sprint, index) => (
            <tr className="table_body" key={index}>
              <td>{sprint.sprintName}</td>
              <td>{sprint.status}</td>
              <td>{sprint.start_date}</td>
              <td>{sprint.end_date}</td>
              <td>{sprint.completed_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SprintsTable;
