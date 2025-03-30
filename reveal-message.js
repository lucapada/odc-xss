class RevealMessage {
  async run(data) {
    const knownMessage = await sharedStorage.get('message');
    privateAggregation.contributeToHistogram({
      bucket: BigInt(1234),
      value: knownMessage
    });
  }
}

register('reveal-message', RevealMessage);
