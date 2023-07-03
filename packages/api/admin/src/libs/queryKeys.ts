export const approveQueryKeys = {
  getUnapproveList: () => ['unapprove', 'list'],
  patchApprove: () => ['approve', 'userSeq'],
  deleteApprove: () => ['approve', 'userSeq'],
} as const;

export const authQueryKeys = {
  patchUserName: () => ['auth', 'userName'],
  getUserInfo: () => ['auth', 'userInfo'],
} as const;

export const postQueryKeys = {
  postWritePost: () => ['post', 'write'],
  delPost: () => ['post', 'del'],
} as const;
