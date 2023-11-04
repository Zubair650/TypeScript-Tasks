{
    // The never type is used when you are sure that something is never going to return.
    const throwError = (message: string): never => {
        throw new Error(message)
    }
    throwError("Wrong message");
}