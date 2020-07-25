const state = {
  chatMessages: [
    {
      ownerIds: [1, 2],
      messages: [
        {
          sourceId: 1,
          text: 'Привет',
          time: '2011-04-20T09:30:51.01'
        },
        {
          sourceId: 1,
          text: 'W P?',
          time: '2011-04-20T09:30:51.01'
        },
      ]
    },
  ]
};

const getters = {
  getMessageList: state => params => {
    if (params.sourceId === params.destinationId) {
      return state.chatMessages.find(x => x.ownerIds[0] === x.ownerIds[1] && x.ownerIds[0] === params.sourceId)?.messages;
    } else {
      return state.chatMessages.find(x => x.ownerIds.includes(params.sourceId)
        && x.ownerIds.includes(params.destinationId))?.messages;
    }
  }
};

const mutations = {
  ADD_CHANEL_TO_CHAT_MESSAGES(state, ownerIds) {
    state.chatMessages.push({
      ownerIds,
      messages: []
    })
  },
  ADD_MESSAGE_TO_CHAT_MESSAGES_CHANEL(state, params) {
    if (params.ownerIds[0] === params.ownerIds[1]) {
      state.chatMessages.find(x => x.ownerIds[0] === x.ownerIds[1] && x.ownerIds[0] === params.ownerIds[0]).messages
        .push(params.message);
    } else {
      state.chatMessages.find(x => x.ownerIds.includes(params.ownerIds[0])
        && x.ownerIds.includes(params.ownerIds[1])).messages.push(params.message);
    }
  }
};
const actions = {
  addToChatMessages({commit, state}, params) {
    if (params.ownerIds[0] !== params.ownerIds[1]) {
      if (!state.chatMessages.find(x => x.ownerIds.includes(params.ownerIds[0]) &&
        x.ownerIds.includes(params.ownerIds[1]))) {
        commit('ADD_CHANEL_TO_CHAT_MESSAGES', params.ownerIds);
      }
    } else {
      if (!state.chatMessages.find(x => x.ownerIds[0] === x.ownerIds[1] && x.ownerIds[0] === params.ownerIds[0])) {
        commit('ADD_CHANEL_TO_CHAT_MESSAGES', params.ownerIds);
      }
    }

    commit('ADD_MESSAGE_TO_CHAT_MESSAGES_CHANEL', params);

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

