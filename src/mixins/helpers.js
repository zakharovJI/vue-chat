export default {
  methods: {
    _getTimeFromDate(date) {
      const bindDate = new Date(date);

      return `${bindDate.getHours()}:${bindDate.getMinutes()}`
    }
  }
}