export const approveUrl = {
  unapproveList: () => `/auth/unapproved/list`,
  approve: (userSeq: string) => `/auth/approved/${userSeq}`,
} as const;
