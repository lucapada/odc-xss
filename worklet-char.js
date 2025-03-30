class StealMessageOperation {
    async run(data) {
        try {
            var alphabet = "abcdef0123456789";
            const charPos = await sharedStorage.get('charPos');
            const message = await sharedStorage.get('message');
            return alphabet.indexOf(message[charPos]);
        } catch (e) {
            throw new Error(e);
        }
    }
}

register('steal-message', StealMessageOperation);
