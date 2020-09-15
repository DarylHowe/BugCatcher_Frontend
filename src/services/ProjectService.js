import axios from "axios";

const PROJECT_API_BASE_URL = "http://localhost:8080/project";

class ProjectService {
  getAllProjects() {
    return axios.get(PROJECT_API_BASE_URL + "/allprojects");
  }

  getProjectByID(projectID) {
    return axios.get(PROJECT_API_BASE_URL + "/allprojects/" + projectID);
  }

  createNewProject(title, description) {
    return axios.post(
      PROJECT_API_BASE_URL + "/createnewproject/" + title + "/" + description
    );
  }

  deleteProject(projectID) {
    return axios.delete(PROJECT_API_BASE_URL + "/deleteproject/" + projectID);
  }
}

export default new ProjectService();
