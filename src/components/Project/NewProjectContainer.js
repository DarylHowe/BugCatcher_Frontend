import React, { useState } from "react";
import ProjectService from "../../services/ProjectService";

function NewProjectContainer() {
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
  });

  const onSubmit = (e) => {
    console.log("SUBMIT");
    e.preventDefault();
    postToDatabase();
    setNewProject({ title: "", description: "" });
  };

  const postToDatabase = () => {
    console.log("POST TO DATABASE");

    ProjectService.createNewProject(newProject.title, newProject.description)
      .then((res) => {
        console.log("RESPONSE");
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="newProjectContainer">
      {" "}
      <b>Create A New Project</b>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Project Title.."
          onChange={(e) =>
            setNewProject({
              title: e.target.value,
              description: newProject.description,
            })
          }
        />
        <br></br>
        <input
          type="text"
          name="description"
          placeholder="Project Description.."
          onChange={(e) =>
            setNewProject({
              title: newProject.title,
              description: e.target.value,
            })
          }
        />
        <br></br>
        <input type="submit" value="Create New Project" className="btn" />
      </form>
    </div>
  );
}

export default NewProjectContainer;
