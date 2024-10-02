import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill theme

// Import React Icons
import {
  RiAlignCenter,
  RiAlignRight,
  RiAlignJustify,
  RiArrowDownSLine,
  RiArrowGoBackFill,
  RiArrowGoForwardFill,
  RiLinkM,
  RiStrikethrough,
  RiImageLine,
} from "react-icons/ri";
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineUnderline,
} from "react-icons/ai";
import { BiListOl, BiListUl, BiSolidQuoteAltRight } from "react-icons/bi";

// Define some colors to choose from
const colorOptions = [
  "#000000",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FFA500",
  "#800080",
  "#FFFFFF",
  "#FFC0CB",
  "#A52A2A",
  "#808080",
  "#FFFFE0",
  "#7FFF00",
  "#D2691E",
  "#ADFF2F",
];

const CustomEditor = () => {
  const [value, setValue] = useState("");
  const quillRef = useRef(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#000000"); // default black

  useEffect(() => {
    const quill = quillRef.current.getEditor();
    const undoButton = document.querySelector(".ql-undo");
    const redoButton = document.querySelector(".ql-redo");

    undoButton.addEventListener("click", () => quill.history.undo());
    redoButton.addEventListener("click", () => quill.history.redo());

    // Close color picker when clicking outside
    const handleClickOutside = (event) => {
      if (!event.target.closest(".color-picker") && showColorPicker) {
        setShowColorPicker(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showColorPicker]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setShowColorPicker(false);

    const quill = quillRef.current.getEditor();
    quill.format("color", color); // Apply text color formatting
  };

  const modules = {
    toolbar: {
      container: "#toolbar", // Attach the custom toolbar
    },
  };

  const formats = [
    "header",
    "font",
    "align",
    "list",
    "bullet",
    "indent",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "link",
    "image",
    "color",
  ];

  return (
    <div className="w-full mx-auto rounded-[10px]">
      {/* Custom Toolbar */}
      <div
        id="toolbar"
        className="bg-[#E4E4E7] p-2 rounded-t-lg flex items-center gap-[12px] flex-wrap"
      >
        <div>
          <button className="ql-undo">
            <RiArrowGoBackFill size={22} color="#09090B" />
          </button>
          <button className="ql-redo">
            <RiArrowGoForwardFill size={22} color="#09090B" />
          </button>
        </div>

        {/* Text Style Dropdown with Custom Arrow */}
        <div className="relative text-[#09090B]">
          <select
            className="ql-header pr-8 w-max appearance-none border-none bg-transparent text-style"
            style={{ WebkitAppearance: "none", MozAppearance: "none" }}
          >
            <option value="0" className="w-max">
              Normal Text
            </option>
            <option value="2">Heading 2</option>
            <option value="1">Heading 1</option>
          </select>
          <div className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 pointer-events-none">
            <RiArrowDownSLine />
          </div>
        </div>

        {/* Align Dropdown */}
        <select className="ql-align ms-[10px]">
          <option defaultValue="" />
          <option value="center">
            <RiAlignCenter />
          </option>
          <option value="right">
            <RiAlignRight />
          </option>
          <option value="justify">
            <RiAlignJustify />
          </option>
        </select>

        {/* Custom Color Picker */}
        <div className="relative color-picker">
          <button
            className="rounded-[4px]"
            style={{
              backgroundColor: selectedColor,
              width: "20px !important",
              height: "20px !important",
            }}
            onClick={() => setShowColorPicker(!showColorPicker)}
          ></button>
          {showColorPicker && (
            <div className="absolute z-10 mt-2 bg-white shadow-lg p-1 rounded-md w-[200px]">
              <div className="grid grid-cols-5 gap-2 p-2">
                {colorOptions.map((color) => (
                  <button
                    key={color}
                    className="w-10 h-10 rounded-lg border border-gray-300"
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorChange(color)}
                  ></button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <button className="ql-bold">
            <AiOutlineBold size={22} />
          </button>
          <button className="ql-italic">
            <AiOutlineItalic size={22} />
          </button>
          <button className="ql-underline">
            <AiOutlineUnderline size={22} />
          </button>
          <button className="ql-strike">
            <RiStrikethrough size={22} />
          </button>

          <button className="ql-list" value="ordered">
            <BiListOl size={22} />
          </button>
          <button className="ql-list" value="bullet">
            <BiListUl size={22} />
          </button>

          <button className="ql-link">
            <RiLinkM size={22} />
          </button>
          <button className="ql-image">
            <RiImageLine size={22} />
          </button>
          <button className="ql-blockquote">
            <BiSolidQuoteAltRight size={22} />
          </button>
        </div>
      </div>

      {/* Rich Text Editor */}
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        placeholder="Product description"
      />
    </div>
  );
};

export default CustomEditor;
