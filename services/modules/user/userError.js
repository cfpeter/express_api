const user = class user extends Error {
    constructor(message, status , description) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(message);
    
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, user);
        }
    
        this.name = 'user';  
        this.date = new Date();
        this.status = status || 400 ;
        this.description = description || '';
    }
}

module.exports = user

