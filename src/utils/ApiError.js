class ApiError extends Error{
    constructor(statusCode, message ="Wrong"){
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.success = false;
    }
}

export {ApiError};