import React, { useState, useEffect } from "react";
import Project from "./Project";
import ProjectService from "../../services/ProjectService";
import NewProjectContainer from "./NewProjectContainer";

function ProjectContainer() {
  const [allProjects, setAllProjects] = useState([]);
  useEffect(() => {
    ProjectService.getAllProjects()
      .then((res) => {
        console.log(res.data);
        setAllProjects(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="projectContainer">
      <div className="viewProjectsContainer">
        <h1> Your Projects </h1>
        <table className="projectAttributesTable">
          <tbody>
            <tr>
              <td className="projectID"> Project ID </td>
              <td className="projectTitle"> Title </td>
              <td> Description </td>
              <td> Date Created </td>
              <td> View </td>
              <td> Delete Project </td>
            </tr>
          </tbody>
        </table>

        {allProjects.map((project) => (
          <Project key={project.projectID} project={project}></Project>
        ))}
      </div>
      <NewProjectContainer></NewProjectContainer>
    </div>
  );
}

export default ProjectContainer;
