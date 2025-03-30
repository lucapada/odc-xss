class ReadMessageOperation {
  async run(data) {
    const value = await sharedStorage.get('message'); 
    return { message: value };
  }
}

register('read-message', ReadMessageOperation);
