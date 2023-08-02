import React, { useRef } from 'react';
import { Icon } from '@iconify-icon/react';

interface FileInputProps {
    className?: string;
  }

const FileInput: React.FC<FileInputProps> = ({ className }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Se você quiser realizar alguma ação quando um arquivo for selecionado, você pode fazer aqui.
    // A referência para o input é `inputRef.current`.
  };

  const icon = (className?.indexOf("iconOn") !== -1 && className?.indexOf("iconOn") !== undefined);

  return (
    <label className={`relative flex items-center w-full h-10 rounded-xl bg-GRAY_300 px-3 py-2 text-sm cursor-pointer ${className}`}>
      <input
        type="file"
        className={`absolute w-full h-full opacity-0 cursor-pointer ${icon ? "pl-12" : ""}`}
        ref={inputRef}
        onChange={handleFileChange}
      />
      <span className={`${icon ? "ml-8" : ""} text-GRAY_600`}>Escolher arquivo</span>
      
        {icon ?
            <div className="absolute top-[58%] -translate-y-1/2 left-3 border-none bg-transparent">
                <Icon width={"22px"} icon="material-symbols:drive-folder-upload-outline" className="text-GRAY_600">
                </Icon>
            </div>
            :
            ""
        }
    </label>
  );
};

export default FileInput;
