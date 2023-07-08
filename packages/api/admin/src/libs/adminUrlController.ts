export const approveUrl = {
  unapproveList: () => `/auth/unapproved/list`,
  approve: (userSeq: string) => `/auth/approved/${userSeq}`,
} as const;

export const authUrl = {
  userName: () => `/auth/username`,
  userInfo: () => `/auth/userinfo`,
  refresh: () => `/auth/token/refresh`,
  logout: () => '/auth/logout',
} as const;

export const postUrl = {
  writePost: () => `/post`,
  deletePost: (postSeq: number) => `/post/${postSeq}`,
} as const;
