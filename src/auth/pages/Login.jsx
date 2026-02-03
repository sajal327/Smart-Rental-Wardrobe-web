import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

import loginImage from "../../assets/images/login.jpg";
import logo from "../../assets/images/laxxa.png";

const LoginPage = () => {
  const GoogleIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <path
        fill="#EA4335"
        d="M24 9.5c3.2 0 5.9 1.1 8.1 3.1l6-6C34.3 2.7 29.6 0 24 0 14.6 0 6.5 5.4 2.6 13.3l7.3 5.7C11.7 13.2 17.4 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.1 24.5c0-1.6-.1-2.8-.4-4H24v7.6h12.7c-.5 3-2.3 5.6-5 7.3l7.7 6c4.5-4.1 6.7-10.1 6.7-16.9z"
      />
      <path
        fill="#FBBC05"
        d="M9.9 28.9c-.5-1.5-.8-3-.8-4.6s.3-3.1.8-4.6l-7.3-5.7C.9 17.3 0 20.6 0 24.3s.9 7 2.6 10l7.3-5.4z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.5 0 12-2.1 16-5.7l-7.7-6c-2.1 1.4-4.8 2.2-8.3 2.2-6.6 0-12.2-3.7-14.1-9.1l-7.3 5.6C6.5 42.6 14.6 48 24 48z"
      />
    </svg>
  );

  const navigate = useNavigate();

  const [authMode, setAuthMode] = useState("email"); // email | phone
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const isEmail = authMode === "email";

  /* ---------------- Validation Helpers ---------------- */
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone);

  /* ---------------- Live Validation ---------------- */
  useEffect(() => {
    if (!value) {
      setError("");
      return;
    }

    if (isEmail && !validateEmail(value)) {
      setError("Please enter a valid email address");
    } else if (!isEmail && !validatePhone(value)) {
      setError("Please enter a valid 10-digit phone number");
    } else {
      setError("");
    }
  }, [value, isEmail]);

  const handleContinue = () => {
    if (error || !value) return;

    navigate("/verify-otp", {
      state: {
        type: authMode,
        value: isEmail ? value : `+91 ${value}`,
      },
    });
  };

  const handleModeSwitch = () => {
    setAuthMode((prev) => (prev === "email" ? "phone" : "email"));
    setValue("");
    setError("");
  };

  const isDisabled = !value || !!error;

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[6fr_7fr]">
      {/* IMAGE */}
      <div className="hidden lg:block h-screen">
        <img
          src={loginImage}
          alt="Fashion"
          className="w-full h-full object-cover"
        />
      </div>

      {/* LOGIN */}
      <div className="flex items-center justify-center bg-linear-to-b from-[#fffcf7] to-[#FFECB2] px-8">
        <div className="w-full max-w-160 h-[85vh] bg-white rounded-2xl px-26.25 py-16 shadow-sm flex flex-col">
          <img src={logo} alt="LAXXA" className="mx-auto mb-12 w-32.5" />

          <p className="text-gray-700 mb-8 text-left">
            {isEmail ? "Enter email address" : "Enter phone number"}
          </p>

          <div className="min-h-19 mb-2">
            <div
              className={`flex items-center border rounded-[9px] overflow-hidden ${
                error ? "border-red-400" : "border-gray-500"
              }`}
            >
              {!isEmail && (
                <span className="px-4 text-gray-600 border-r bg-gray-50 whitespace-nowrap">
                  +91
                </span>
              )}

              <input
                type={isEmail ? "email" : "tel"}
                inputMode={!isEmail ? "numeric" : undefined}
                maxLength={!isEmail ? 10 : undefined}
                placeholder={
                  isEmail
                    ? "Enter your email address"
                    : "Enter your phone number"
                }
                value={value}
                onChange={(e) =>
                  setValue(
                    !isEmail
                      ? e.target.value.replace(/\D/g, "")
                      : e.target.value,
                  )
                }
                className="flex-1 min-w-0 px-6 py-3 focus:outline-none"
              />
            </div>

            <div
              className={`transition-all duration-200 overflow-hidden ${
                error ? "mt-2 max-h-6 opacity-100" : "mt-0 max-h-0 opacity-0"
              }`}
            >
              <p className="text-xs text-red-500 text-left">{error}</p>
            </div>
          </div>

          <button
            onClick={handleContinue}
            disabled={isDisabled}
            className={`w-full py-3 rounded-[9px] font-[420] transition mt-auto mb-8 ${
              isDisabled
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#FFE7A3] text-black hover:bg-[#ffdfa0]"
            }`}
          >
            Continue
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          <button className="w-full bg-black text-white py-3 rounded-[9px] flex items-center justify-center gap-3 mb-8">
            <GoogleIcon />
            Continue with Google
          </button>

          <button
            onClick={handleModeSwitch}
            className="w-full border border-gray-500 py-3 rounded-[9px] flex items-center justify-center gap-3 hover:bg-gray-50"
          >
            {isEmail ? <Phone size={18} /> : <Mail size={18} />}
            {isEmail ? "Continue with Phone Number" : "Continue with Email"}
          </button>

          <p className="text-xs text-gray-400 underline cursor-pointer text-center mt-auto pt-10">
            Terms & Privacy Links
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
