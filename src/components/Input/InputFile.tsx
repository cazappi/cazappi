import React, { useRef, useState, InputHTMLAttributes } from "react";
import { Icon } from "@iconify-icon/react";
import { input } from "@material-tailwind/react";

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconOn?: boolean;
  className?: string;
}

const FileInput: React.FC<FileInputProps> = ({
  className,
  iconOn,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("Escolher arquivo");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = inputRef.current?.files;
    files
      ? setFileName(files?.item(0)?.name + "")
      : setFileName("Escolher arquivo");
  };

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (rest.onChange) {
      const files = inputRef.current?.files;
      files
        ? setFileName(files?.item(0)?.name + "")
        : setFileName("Escolher arquivo");

      rest.onChange(e);
    } else handleFileChange(e);
  }

  const icon =
    className?.indexOf("iconOn") !== -1 &&
    className?.indexOf("iconOn") !== undefined;

  return (
    <label
      className={`relative flex items-center w-full h-10 rounded-xl bg-GRAY_300 px-3 py-2 text-sm cursor-pointer ${className}`}
    >
      <input
        type="file"
        {...rest}
        // accept='pdf/*' // Analisar e automatizar no component
        className={`absolute w-full h-full opacity-0 cursor-pointer ${
          icon ? "pl-12" : ""
        }`}
        ref={inputRef}
        onChange={handleFile}
      />
      <span className={`${icon ? "ml-8" : ""} text-GRAY_600`}>{fileName}</span>

      {icon ? (
        <div className="absolute top-[58%] -translate-y-1/2 left-3 border-none bg-transparent">
          <Icon
            width={"22px"}
            icon="material-symbols:drive-folder-upload-outline"
            className="text-GRAY_600"
          ></Icon>
        </div>
      ) : (
        ""
      )}
    </label>
  );
};

export default FileInput;
