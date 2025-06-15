export interface IActivityLog {
  id: string;
  user_id: string;
  ip_address: string;
  user_agent: string;
  action: string;
  description: string;
  target_type: string;
  target_id: string;
  created_at: string;
}
