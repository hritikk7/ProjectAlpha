import customAPIError, {ErrorCode} from "./custom.errors";

class notFoundErrot extends customAPIError {
  statusCode: number;

  constructor(message: string, errorCode:ErrorCode ){
    super(message, errorCode, 404, null)
    this.statusCode = 404
  }
}

export default notFoundErrot