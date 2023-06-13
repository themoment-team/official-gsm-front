export const approveUrl = {
  unapproveList: () => `/auth/unapproved/list`,
  approve: (userSeq: string) => `/auth/approved/${userSeq}`,
} as const;

export const authUrl = {
  username: () => `/auth/username`,
  userInfo: () => `/auth/userinfo`,
} as const;
