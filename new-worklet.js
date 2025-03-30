class StealMessageOperation {
  async run(data) {
    try {
      const { charPos, char2Check } = data;
      const message = await sharedStorage.get('message');
      throw new Error(`checking ${message} at ${charPos} for ${char2Check}`);
      return (message[charPos] === char2Check) ? 1 : 0;
    } catch (e) {
        throw new Error(e);
    }
  }
}

register('steal-message', StealMessageOperation);
