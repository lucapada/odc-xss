function convertContentIdToBucket(contentId) {
  return BigInt(contentId);
}

class StealMessageOperation {
  async run(data) {
    try {
      const { debugKey } = data;

      // Read from Shared Storage
      const message = await sharedStorage.get('message');

      // Generate the aggregation key and the aggregatable value
      const bucket = convertContentIdToBucket('1234');

      // Send an aggregatable report via the Private Aggregation API
      privateAggregation.enableDebugMode({ debugKey });
      privateAggregation.contributeToHistogram({ bucket, 1 });

      // Set the report submission status flag
      await sharedStorage.set('has-reported-content', true);
    } catch (e) {
      console.log(e);
    }
  }
}

register('steal-message', StealMessageOperation);
