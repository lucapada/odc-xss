class ReadMessageOperation {
  async run() {
    const value = await sharedStorage.get('message'); 
    return { message: value };
  }
}
register('read-message', ReadMessageOperation);
