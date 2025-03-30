class MessageReader {
  async run(data) {
    const message = await sharedStorage.get("message");
    const locMessage = await localStorage.set('message', message);
  }
}

register("read-message", MessageReader);
