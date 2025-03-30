class RevealMessage {
  async run(data) {
    const knownMessage = await sharedStorage.get('message');
    privateAggregation.enableDebugMode();
    privateAggregation.contributeToHistogram({
      bucket: BigInt(1234),
      value: knownMessage
    });
    privateAggregation.enableDebugMode();
  }
}

register('reveal-message', RevealMessage);
