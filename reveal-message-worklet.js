class RevealMessage {
  async run(data) {
    const knownMessage = await sharedStorage.get('message');
    privateAggregation.contributeToHistogram({
      bucket: 'message',
      value: knownMessage
    });
  }
}

register('reveal-message', RevealMessage);
