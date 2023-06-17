export const approveQueryKeys = {
  getUnapproveList: () => ['unapprove', 'list'],
  patchApprove: (userSeq: string) => ['approve', userSeq],
} as const;

export const authQueryKeys = {
  patchUserName: () => ['auth', 'userName'],
  getUserInfo: () => ['auth', 'userInfo'],
} as const;
