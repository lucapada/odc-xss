class MySharedStorageWorklet {
  async run(data) {
    const value = await this.sharedStorage.get('message');
    this.resolveWithResponse({ message: value });
  }
}
register('read-and-export', MySharedStorageWorklet);
