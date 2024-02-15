export const Bearer = (token: string) => ({
  headers: {
    Authorization: "Bearer " + token,
  },
});
