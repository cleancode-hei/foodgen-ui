export const Auth = (
  token: string,
): { headers: { Authorization: string } } => ({
  headers: {
    Authorization: "Bearer " + token,
  },
});
