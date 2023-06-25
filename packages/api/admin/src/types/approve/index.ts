export interface UnapproveListType {
  userSeq: string;
  userId: string;
  userName: string;
  role: 'UNAPPROVED' | 'ADMIN';
  requestedAt: string;
}
