const authError = class authError extends Error {
    constructor(message, status , description) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(message);
    
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, authError);
        }
    
        this.name = 'authError';  
        this.date = new Date();
        this.status = status || 500 ;
        this.description = description || '';
    }
}

module.exports = authError

