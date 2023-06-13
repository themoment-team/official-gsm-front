export const approveQueryKeys = {
  getUnapproveList: () => ['unapprove', 'list'],
  patchApprove: (userSeq: string) => ['approve', userSeq],
};

export const authQueryKeys = {
  patchUserName: () => ['auth', 'username'],
  getUserInfo: () => ['auth', 'userinfo'],
};
