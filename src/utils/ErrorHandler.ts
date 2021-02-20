class ErrorHandler extends Error {
    public message: string;
    public status: number;

    constructor(message: string, status: number = 500) {
        super();
        this.message = message;
        this.status = status;
    }
}

export default ErrorHandler