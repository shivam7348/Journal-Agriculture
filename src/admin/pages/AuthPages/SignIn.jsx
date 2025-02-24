import React from "react";
import { useEffect, useState } from "react";
import Input from "../../components/form/input/InputField";
import Label from "../../components/form/Label";
import EyeIcon from "../../icons/eye.svg";
import eyeCloseIcon from "../../icons/eye-close.svg";
import Button from "../../components/ui/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { login } from "../../../store/admin/adminAuthSlice";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    (state) => state.adminAuth.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/login`,
        {
          username,
          password,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        const { adminToken, adminUser } = response.data;
        dispatch(login({ adminToken, adminUser }));

        toast.success("Login successful!");
        navigate("/admin/dashboard");
      } else {
        setError("Invalid credentials");
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
      toast.error(err.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative flex w-full h-screen px-4 py-6 overflow-hidden bg-white z-1 dark:bg-gray-900 sm:p-0">
        <div className="flex flex-col flex-1 p-6 rounded-2xl sm:rounded-none sm:border-0 sm:p-8">
          <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
            {/* Heading */}
            <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6">
              Login to Dashboard
            </h2>

            <div>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <Label>
                      UserName <span className="text-error-500">*</span>{" "}
                    </Label>
                    <Input
                      placeholder="Enter your username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>
                      Password <span className="text-error-500">*</span>{" "}
                    </Label>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                      >
                        {showPassword ? (
                          <img
                            src={EyeIcon}
                            alt="Eye Close Icon"
                            className="w-6 h-6 text-gray-500 dark:text-gray-400"
                          />
                        ) : (
                          <img
                            src={eyeCloseIcon}
                            alt="Eye Close Icon"
                            className="w-6 h-6 text-gray-500 dark:text-gray-400"
                          />
                        )}
                      </span>
                    </div>
                  </div>

                  <div>
                    <Button
                      className="w-full"
                      size="sm"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Signing in..." : "Sign in"}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
