class SelectURLOperation {
  async run(urls) {
    const knownMessage = await sharedStorage.get('message');
    return {url: urls[0], data: knownMessage};
  }
}
register('known-message', SelectURLOperation);
