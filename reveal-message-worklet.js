class RevealMessage {
  async run(data) {
    const knownMessage = await sharedStorage.get('message');
    privateAggregation.enableDebugMode({debugKey: BigInt(1234)});
    privateAggregation.contributeToHistogram({
      bucket: BigInt(1234),
      value: knownMessage
    });
  }
}

register('reveal-message', RevealMessage);
