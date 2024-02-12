export const Auth = (token: string): {} => ({
  headers: {
    Authorization: "Bearer " + token,
  },
});