class CustomRetryPolicy {
    maxRetryAttempts = 0;

    nextRetryDelayInMilliseconds(retryContext) {
        console.info(`Retry :: ${retryContext.retryReason}`);
        if (retryContext.previousRetryCount === 10) return null;

        var nextRetry = retryContext.previousRetryCount * 1000 || 1000;
        console.log(`Retry in ${nextRetry} milliseconds`);
        return nextRetry;
    }

}