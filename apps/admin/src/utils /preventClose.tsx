export const preventClose = (e: BeforeUnloadEvent) => {
  e.preventDefault();
  e.returnValue = '';
};
