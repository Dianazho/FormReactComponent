// components/CustomFileInput.tsx
import { useRef } from "react";
import { TiDelete } from "react-icons/ti";

function DropImage({ selectedFiles, onSetSelectedFiles }) {
  const ref = useRef(null);

  // 1. pass the click event to the hidden input element to trigger the file selection.
  const handleClick = () => {
    ref.current?.click();
  };

  // 2. convert FileList to File[]
  const handleChange = (e) => {
    const files = Array.from(e.currentTarget.files ?? []);
    onSetSelectedFiles(files);
  };

  function handleDeleteFile() {
    onSetSelectedFiles([]);
  }

  return (
    <div className="w-350 mb-6">
      <h1 className="mb-2">Photo</h1>
      {selectedFiles.length === 0 && (
        <div
          // 3. add onClick handler
          onClick={handleClick}
          className=" border-2 border-lightPurple p-4 flex flex-col items-center gap-2 bg-white text-lightGrey rounded hover:border-darkPurple focus:outline-none focus:ring-0 cursor-pointer"
        >
          <div>
            <span className="text-darkPurple underline underline-offset-2 cursor-pointer">
              Upload a file
            </span>
            <span className="hidden md:inline"> or drag and drop here</span>
          </div>
          <input
            type="file"
            ref={ref}
            className="hidden"
            // 4. add onChange handler
            onChange={handleChange}
          />
        </div>
      )}

      {/* 5. display selected file */}
      {selectedFiles.length > 0 && (
        <div className="flex p-4 mt-4 bg-white border-2 border-lightPurple overflow-hidden text-ellipsis rounded">
          {selectedFiles.map((file, i) => {
            return (
              <div
                key={i}
                className="flex w-full items-center justify-center gap-2"
              >
                <div>
                  <span className="text-text flex text-sm whitespace-nowrap">
                    {file.name}
                  </span>
                </div>
                <div>
                  <TiDelete
                    onClick={handleDeleteFile}
                    className="hover:text-darkRed flex w-5 h-5"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropImage;
