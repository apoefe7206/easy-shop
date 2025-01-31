type SuccessFullResponse<T> = {
  data: T;
  message: string;
  isSuccessful: true;
  error: null;
  messageObject?: MessageObject;
};
type ErrorResponse = {
  data: null;
  message: string;
  isSuccessful: false;
  error: string;
  messageObject?: MessageObject;
};

type MessageObject = {
  type: string;
  title: string;
  message: string;
  buttonText: string;
};

export type BaseResponse<T> = SuccessFullResponse<T> | ErrorResponse;
