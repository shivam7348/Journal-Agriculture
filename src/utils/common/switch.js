export const switchpage = (
  to,
  navigate,
  setPage,
  setEmail,
  setPassword,
  setError
) => {
  navigate(`/${to}`);
  setPage(to);
  setEmail("");
  setPassword("");
  setError("");
};
