import UserPhoto from "../../public/img/users/user-1.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosPerson } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaAt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbFilePencil } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
import { useAuth } from "../context/authContext";
import { useMutation } from "react-query";
import axiosInstance from "../api/axiosInstance";
import { DiVim } from "react-icons/di";

export default function EditProfile() {
  const { user } = useAuth();
  const [passwordCurrent, setPasswordCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [view, setView] = useState<"editProfile" | "changePassword">(
    "editProfile"
  );

  const mutation = useMutation(
    async () => {
      const response = await axiosInstance.patch("/users/updateMyPassword", {
        passwordCurrent,
        password,
        passwordConfirm,
      });
      return response.data.data;
    },
    {
      onSuccess: () => {
        console.log("Password updated successfully!");
        alert("Password updated successfully!");
      },
      onError: (error: any) => {
        console.error("Password change failed:", error);
        if (error.response && error.response.status === 401) {
          setErrorMessage("Invalid current password! Please try again.");
        } else {
          setErrorMessage(
            "An unexpected error occurred! Please try again later."
          );
        }
      },
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
    setErrorMessage(""); // Clear any previous error messages
    setPasswordConfirm("");
    setPassword("");
    setPasswordCurrent("");
  };

  return (
    <div className="flex h-[calc(100vh-56px)] bg-green-600 px-32">
      <div className="w-1/4 mt-5 space-y-10 bg-slate-400">
        <div className="flex flex-col items-start">
          <h2 className="px-2">Dashboard</h2>
          <div className="flex flex-col items-start w-full p-2 border-t-2 space-y-7">
            <div className="flex items-center w-full mt-5 space-x-2 cursor-pointer hover:bg-slate-600">
              <IoDocumentTextOutline />
              <button>
                <Link to="/dashboard">Blogs</Link>
              </button>
            </div>
            <div className="flex items-center w-full space-x-2 cursor-pointer hover:bg-slate-600">
              <TbFilePencil />
              <button>
                <Link to="/write-page">Write</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="px-2">Settings</h2>
          <div className="flex flex-col items-start w-full p-2 border-t-2 space-y-7">
            <div
              onClick={() => setView("editProfile")}
              className="flex items-center w-full mt-5 space-x-2 cursor-pointer hover:bg-slate-600"
            >
              <IoPersonOutline />
              <button>Edit Profile</button>
            </div>
            <div
              onClick={() => setView("changePassword")}
              className="flex items-center w-full space-x-2 cursor-pointer hover:bg-slate-600"
            >
              <RiLockPasswordLine />
              <button>Change Password</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 mt-5 bg-slate-500">
        {view === "editProfile" && (
          <>
            <h2 className="px-7">Edit Profile</h2>
            <div className="flex">
              <div className="flex flex-col items-center w-1/4 space-y-5">
                <img
                  src={
                    user
                      ? `http://localhost:8000/img/users/${user.user.photo}`
                      : ""
                  }
                  className="mt-5 rounded-full h-36"
                  alt="User-Photo"
                />
                <button
                  id="upload"
                  className="py-1 px-7 rounded-2xl bg-slate-300"
                >
                  Upload
                </button>
              </div>
              <form className="flex flex-col w-3/4 mt-5">
                <div className="flex space-x-2">
                  <div className="relative w-1/2">
                    <IoIosPerson className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                    <input
                      type="text"
                      placeholder="name"
                      className="w-full px-10 py-2 rounded-sm"
                    />
                  </div>
                  <div className="relative w-1/2">
                    <IoMdMail className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                    <input
                      type="email"
                      placeholder="email"
                      className="w-full px-10 py-2 rounded-sm"
                    />
                  </div>
                </div>
                <div className="relative mt-5">
                  <FaAt className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                  <input
                    type="text"
                    placeholder="tag"
                    className="w-full px-10 py-2 rounded-sm"
                  />
                </div>
                <p className="text-sm space-0">
                  Username will use to search user and will be visible to all
                  users
                </p>
                <textarea
                  placeholder="Bio"
                  className="px-3 py-2 mt-5 rounded-sm"
                  style={{ resize: "none" }}
                  cols={30}
                  rows={5}
                ></textarea>
                <p className="text-sm">chars character left</p>
                <p className="mt-4 text-sm">Add your social handles below</p>
                <div className="flex space-x-2 bg-slate-600">
                  <div className="flex flex-col w-1/2 space-y-3">
                    <div className="relative">
                      <FaYoutube className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                      <input
                        type="url"
                        defaultValue="https://"
                        className="w-full px-10 py-2 rounded-sm"
                      />
                    </div>
                    <div className="relative">
                      <FaFacebook className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                      <input
                        type="url"
                        defaultValue="https://"
                        className="w-full px-10 py-2 rounded-sm"
                      />
                    </div>
                    <div className="relative">
                      <FaGithub className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                      <input
                        type="url"
                        defaultValue="https://"
                        className="w-full px-10 py-2 rounded-sm"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 space-y-3">
                    <div className="relative">
                      <AiFillInstagram className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                      <input
                        type="url"
                        defaultValue="https://"
                        className="w-full px-10 py-2 rounded-sm"
                      />
                    </div>
                    <div className="relative">
                      <FaXTwitter className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                      <input
                        type="url"
                        defaultValue="https://"
                        className="w-full px-10 py-2 rounded-sm"
                      />
                    </div>
                    <div className="relative">
                      <FaLink className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                      <input
                        type="url"
                        defaultValue="https://"
                        className="w-full px-10 py-2 rounded-sm"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button className="flex items-start px-3 py-1 mt-5 bg-yellow-200 rounded-2xl">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
        {view === "changePassword" && (
          <>
            <h2 className="px-7">Change Password</h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-2/5 mt-10 ml-7"
            >
              <div className="relative">
                <RiLockPasswordLine className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full px-10 py-2 rounded-sm"
                  value={passwordCurrent}
                  onChange={(e) => setPasswordCurrent(e.target.value)}
                  required
                />
              </div>
              <div className="relative mt-4">
                <RiLockPasswordLine className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full px-10 py-2 rounded-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="relative mt-4">
                <RiLockPasswordLine className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full px-10 py-2 rounded-sm"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="flex items-center px-4 py-2 mt-5 bg-yellow-200 rounded-3xl"
                >
                  Update Password
                </button>
              </div>
              {errorMessage && (
                <p className="font-semibold text-red-600">{errorMessage}</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
