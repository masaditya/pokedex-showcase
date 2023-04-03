import {
  GetPanicResponseType,
  GetValidationResponseType,
} from "internal/base/type";

const ErrorHandler = (err: any) => {
  const validation: GetValidationResponseType = err?.response?.data;
  if (validation?.errors != undefined && validation?.errors?.length > 0) {
    alert("Validation Error");
    return;
  }

  const panic: GetPanicResponseType = err?.response?.data;
  if (panic?.message != undefined) {
    alert("Internal Server Error");
    return;
  }

  const generalResponseError = err?.response?.data;
  if (generalResponseError?.error != undefined) {
    alert(generalResponseError?.error?.type);
    return;
  }

  const generalError = err;
  if (generalError?.message != undefined) {
    alert("Internal Client Error");
    return;
  }
};

export default ErrorHandler;
