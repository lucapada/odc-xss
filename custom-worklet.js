class StealMessageOperation {
    async run(data) {
        try {
            const message = await sharedStorage.get('message');
            const char2Check = await sharedStorage.get('char2Check');
            const charPos = await sharedStorage.get('charPos');
            return (message[charPos] === char2Check) ? 1 : 0;
        } catch (e) {
            throw new Error(e);
        }
    }
}

register('steal-message', StealMessageOperation);
