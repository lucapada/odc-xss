class MessageReader {
  async run() {
    const message = await sharedStorage.get("message");
    return message;
  }
}

register("read-message", MessageReader);
