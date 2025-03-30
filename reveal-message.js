class RevealMessage {
  async run(data) {
    const knownMessage = await sharedStorage.get('message');
    data.revealMessage(knownMessage);
    return true;
  }
}

register('reveal-message', RevealMessage);
