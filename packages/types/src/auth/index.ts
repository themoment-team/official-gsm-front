export interface UserInfoType {
  userName: string | null;
  role: 'ADMIN' | 'UNAPPROVED';
  userEmail: string;
}
