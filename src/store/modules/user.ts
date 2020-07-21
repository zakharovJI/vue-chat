import User from "@/types/User";

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state: any, user: User) {
      state.user = user;
    }
  },
  actions: {},
}

