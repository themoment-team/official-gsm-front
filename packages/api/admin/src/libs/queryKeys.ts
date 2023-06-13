export const approveQueryKeys = {
  getUnapproveList: () => ['unapprove', 'list'],
  patchApprove: (userSeq: string) => ['approve', userSeq],
};

export const authQueryKeys = {
  patchUsername: () => ['auth', 'username'],
  getUserInfo: () => ['auth', 'userinfo'],
};
