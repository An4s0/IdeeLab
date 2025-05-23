export interface ApiResponse<T = object> {
  success: boolean;
  message: string;
  data?: T;
}