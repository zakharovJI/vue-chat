const state = {
  userList: [
    {
      login: 'Иван Иванов',
      avatar: 'https://sun9-66.userapi.com/c638917/v638917588/50cc/fMMv1167jSg.jpg?ava=1',
      id: 1
    }
  ]
};

const getters = {
  getUserFreeId: state => {
    const userIdList = state.userList.map((x => x.id));

    return parseInt(Math.max(userIdList) + 1);
  },
  getUserById: state => id => state.userList.find(x => x.id === id),
  getAuthorizationInfo: state => state.userList.length > 1
};

const mutations = {
  ADD_USER(state, user) {
    state.userList.push(user);
  }
};

const actions = {
  setCurrentUser(context, user) {
    context.commit('ADD_USER', user);

    return new Promise(resolve => {
      resolve();
    })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
