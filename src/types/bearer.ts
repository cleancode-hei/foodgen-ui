export const Bearer = (
  token: string,
): { headers: { Authorization: string } } => ({
  headers: {
    Authorization: "Bearer " + token,
  },
});
