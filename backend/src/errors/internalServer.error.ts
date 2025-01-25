import customAPIError, {ErrorCode} from "./custom.errors";

class InternalServerError extends customAPIError {
  statusCode: number;

  constructor(message: string, errorCode:ErrorCode ){
    super(message, errorCode, 500, null)
    this.statusCode = 500
  }
}

export default InternalServerError