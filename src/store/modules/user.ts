import User from "@/types/User";

export default {
  state: {
    userList: [
      {
        login: 'Иван Иванов',
        avatar: 'https://sun9-66.userapi.com/c638917/v638917588/50cc/fMMv1167jSg.jpg?ava=1',
        id: 1
      }
    ]
  },
  getters: {
    // @ts-ignore
    getUserFreeId: state => {
      const userIdList = state.userList.map((x: { id: number; }) => x.id);

      return Math.max(userIdList) + 1;
    },
    // @ts-ignore
    getUserById: state => id => state.user.find(x => x.id === id),
    // @ts-ignore
    getUserList: state => state.userList
  },
  mutations: {
    ADD_USER(state: any, user: User) {
      state.userList.push(user);
    }
  },
  actions: {
    setCurrentUser(context: any, user: User) {
      context.commit('ADD_USER', user);

      return new Promise(resolve => {
        resolve();
      })
    }
  },
}

