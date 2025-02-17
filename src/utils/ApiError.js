class ApiError extends Error{
    constructor(statuscode,message="SOMETHING WENT WRONG",error=[],stack="",data,success){
        super(message);
        this.statuscode=statuscode;
        this.error=error;
        this.message=message;
        this.data=null;
        this.success=false;
        if(stack){
            this.stack=stack
        } else{
            Error.captureStackTrace(this,this.constructor);
        }
    }
    
}
export default ApiError;
