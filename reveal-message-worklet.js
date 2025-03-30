class RevealMessage {
  async run(data) {
    const knownMessage = await sharedStorage.get('message');
    data.reveal.log(knownMessage);
    return true;
  }
}

register('reveal-message', RevealMessage);
