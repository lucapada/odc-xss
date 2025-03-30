class StealMessageOperation {
  async run(data) {
    try {
      const charPos = await sharedStorage.get('charPos');
      const char2Check = await sharedStorage.get('char2Check');
      const message = await sharedStorage.get('message');
      return (message[charPos] === char2Check) ? 1 : 0;
    } catch (e) {
        throw new Error(e);
    }
  }
}

register('steal-message', StealMessageOperation);
