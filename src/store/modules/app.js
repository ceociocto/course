const app = {
  state: {
    newVisible: true,
    projectList: [],
    enterpriseInfo: {}
  },
  mutations: {
    insertProject(state, project) {
      state.projectList.unshift(project)  
    },
    updateProjectList(state, projectList) {
      state.projectList = projectList
    },
    updateEnterpriseInfo(state, enterpriseInfo) {
      state.enterpriseInfo = enterpriseInfo
    }
  }
}

export default app