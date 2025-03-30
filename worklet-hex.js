class StealMessageOperation {
    async run(data) {
        try {
            const charPos = await sharedStorage.get('charPos');
            const message = await sharedStorage.get('message');
            return message[charPos];
        } catch (e) {
            throw new Error(e);
        }
    }
}

register('steal-message', StealMessageOperation);
