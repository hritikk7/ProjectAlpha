import customAPIError, {ErrorCode} from "./custom.errors";

class badRequestError extends customAPIError {
  statusCode: number;
  constructor(message : string, errorCode: ErrorCode){
    super(message, errorCode, 404, null)
    this.statusCode = 400
  }
}

export default badRequestError