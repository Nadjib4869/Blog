import { useState } from "react";
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
  const [content, setContent] = useState("");

  return (
    <>
      <div className="min-h-[calc(100vh-56px-160px)] bg-green-600 px-10 py-5 space-y-5">
        <div className="flex justify-between pr-32">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            className="px-3 ml-12 text-2xl bg-gray-500 border rounded-md"
          />
          <button className="px-4 py-0.5 bg-gray-500 rounded-2xl">
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
              <button className="p-1 bg-red-500 border rounded-3xl">
                <FaImage />
              </button>
              <button className="p-1 bg-red-500 border rounded-3xl">
                <FiUpload />
              </button>
              <button className="p-1 bg-red-500 border rounded-3xl">
                <PiVideoBold />
              </button>
            </div>
          )}
          <ReactQuill
            theme="bubble"
            placeholder="Tell your story..."
            value={content}
            onChange={setContent}
            className="w-4/5 bg-red-500"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
