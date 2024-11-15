export interface BaseResponse<T> {
    status: 'success' | 'error';
    object?: T; 
    error?: string;
  }