import axios from "axios";

export async function login(credentials) {
    await axios
      .post("https://acca-backend-1.onrender.com/api/auth/login", credentials)
      .then(setIsLoading(true))
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.user._id);
        console.log(response.data);
        navigate("/");
      });
  }