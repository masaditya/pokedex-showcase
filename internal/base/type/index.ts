
export type GetValidationResponseType = {
    errors: Array<string>
  }
  
  export type GetPanicResponseType = {
    expection: string
    file: string
    line: number
    message: string
    trace: Array<GetTraceResponseType>
  }
  
  export type GetTraceResponseType = {
    class: string
    file: string
    function: string
    line: number
    type: string
  }