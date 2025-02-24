const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem("token");
  const expiryTime = localStorage.getItem("tokenExpiry");

  if (!token || !expiryTime) {
    return null; // Token nahi hai
  }

  if (Date.now() > parseInt(expiryTime, 10)) {
    // Token expire ho chuka hai
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");
    localStorage.removeItem("user");
    return null;
  }

  return token; // Token valid hai
};

export default getTokenFromLocalStorage;
