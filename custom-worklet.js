class ReadMessageOperation {
  async run() {
    const value = await this.sharedStorage.get('message'); 
    return { message: value };
  }
}
register('read-message', ReadMessageOperation);
