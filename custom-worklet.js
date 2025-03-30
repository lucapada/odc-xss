class MessageReader {
  async run(data) {
    const message = await sharedStorage.get("message");
    const locMessage = await window.localStorage.setItem('message', message);
  }
}

register("read-message", MessageReader);
