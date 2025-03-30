class SelectURLOperation {
  async run(urls) {
    const knownMessage = await sharedStorage.get('message');
    return knownMessage;
  }
}
register('known-message', SelectURLOperation);
