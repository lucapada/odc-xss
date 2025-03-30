class StealMessageOperation {
  async run(data) {
    try {
      const message = await sharedStorage.get('message');
      return message;
    } catch (e) {
        throw new Error(e);
    }
  }
}

register('steal-message', StealMessageOperation);
