class MySharedStorageWorklet {
  async run(data) {
    const key = data.key;
    const value = await this.sharedStorage.get(key);
    this.resolveWithResponse({ [key]: value });
  }
}
register('read-and-export', MySharedStorageWorklet);
