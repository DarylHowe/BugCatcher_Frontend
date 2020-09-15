import React from "react";
import BugContainer from "./Bug/BugContainer";
import ProjectService from "../../services/ProjectService";
import { Link } from "react-router-dom";

function Project(props) {
  const {
    projectID,
    title,
    description,
    dateCreated,
    bugQueue,
    employeeList,
  } = props.project;

  const deleteProject = (projectID) => {
    console.log("DELETE PROJECT");
    console.log("PROJECT ID:" + projectID);
    ProjectService.deleteProject(projectID)
      .then((res) => {
        console.log("RESPONSE");
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="singleProject">
      <table>
        <tbody>
          <tr>
            <td className="projectID">{projectID}</td>
            <td className="projectTitle">{title}</td>
            <td>{description}</td>
            <td>{dateCreated}</td>
            <td>
              <Link to="/bugs" className="link">
                View
              </Link>
            </td>
            <td>
              <button
                onClick={() => deleteProject(projectID)}
                className="deleteProjectButton"
              ></button>
            </td>
          </tr>
        </tbody>
      </table>
      {/*
        {bugQueue.priorityQueue.map((bug) => (
          <BugContainer key={bug.bugID} bug={bug}></BugContainer>
        ))}
        */}
    </div>
  );
}

export default Project;
