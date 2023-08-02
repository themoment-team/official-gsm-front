export const approveQueryKeys = {
  getUnapproveList: () => ['unapprove', 'list'],
  patchApprove: () => ['approve', 'userSeq'],
  deleteApprove: () => ['approve', 'userSeq'],
} as const;

export const authQueryKeys = {
  patchUserName: () => ['auth', 'userName'],
  getUserInfo: () => ['auth', 'userInfo'],
  deleteLogout: () => ['auth', 'logout'],
} as const;

export const postQueryKeys = {
  postWritePost: () => ['post', 'write'],
  patchWritePost: () => ['post', 'patch'],
  deletePost: () => ['post', 'del'],
} as const;
