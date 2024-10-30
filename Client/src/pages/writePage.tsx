import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import { FiPlus } from "react-icons/fi";
import { FaImage } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { PiVideoBold } from "react-icons/pi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [imageCover, setImageCover] = useState<File | null>(null);
  const navigate = useNavigate();

  const mutation = useMutation(
    async () => {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("content", content);
      if (imageCover) {
        formData.append("imageCover", imageCover);
      }

      const response = await axiosInstance.post("/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data.data;
    },
    {
      onSuccess: () => {
        navigate("/");
        alert("Post created successfully");
      },

      onError: (error) => {
        console.error("Error:", error);
      },
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // api req
    mutation.mutate();
    setTitle("");
    setDescription("");
    setCategory("");
    setContent("");
    setImageCover(null);
  };

  return (
    <>
      <div className="min-h-[calc(100vh-56px-160px)] bg-green-600 px-10 py-5 space-y-5">
        <div className="flex justify-between pr-32">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-3 ml-12 text-3xl bg-gray-500 border rounded-md"
          />
          <select
            name="category"
            id="category"
            className="px-3 ml-24 bg-gray-500 border rounded-md cursor-pointer"
            value={category}
            onChange={(e) => setCategory((e.target as HTMLSelectElement).value)}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="job">Job</option>
            <option value="learning">Learning</option>
            <option value="coding">Coding</option>
            <option value="travel">Travel</option>
            <option value="culture">Culture</option>
          </select>
          <button
            onClick={handleSubmit}
            className="px-4 py-0.5 bg-gray-500 rounded-2xl"
          >
            Publish
          </button>
        </div>

        <div className="flex items-start space-x-5 bg-blue-500">
          <button
            onClick={() => setOpen(!open)}
            className="p-1 bg-red-500 border rounded-3xl"
          >
            <FiPlus />
          </button>
          {open && (
            <div className="absolute z-10 flex pl-4 space-x-2">
              <input
                type="file"
                accept="image/*"
                id="image"
                onChange={(e) => {
                  if (e.target?.files && e.target.files.length > 0) {
                    setImageCover(e.target.files[0]);
                  }
                }}
                className="hidden"
              />
              <button className="p-1 bg-red-500 border rounded-3xl">
                <label htmlFor="image" className="cursor-pointer">
                  <FaImage />
                </label>
              </button>
              <button className="p-1 bg-red-500 border rounded-3xl">
                <FiUpload />
              </button>
              <button className="p-1 bg-red-500 border rounded-3xl">
                <PiVideoBold />
              </button>
            </div>
          )}
          <div className="flex flex-col w-full">
            <ReactQuill
              theme="bubble"
              placeholder="Tell your story description... (This will display on the post card)"
              value={description}
              onChange={setDescription}
              className="w-4/5 bg-yellow-500 placeholder:italic"
            />
            <ReactQuill
              theme="bubble"
              placeholder="Tell your story..."
              value={content}
              onChange={setContent}
              className="w-4/5 bg-red-500 placeholder:italic"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
