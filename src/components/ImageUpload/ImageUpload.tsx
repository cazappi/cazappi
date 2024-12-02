import React, { useState } from 'react';
import { AddImg, Icon, ImageComp, ImgContainer } from './style';
import {BsFillPencilFill} from 'react-icons/bs'

interface ImageUploadProps {
  defaultImageSrc: string;
  onImageUpload: (imageFile: File | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ defaultImageSrc, onImageUpload }) => {
  const [imageSrc, setImageSrc] = useState(defaultImageSrc);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImageSrc = reader.result as string;
        setImageSrc(newImageSrc);
        onImageUpload(file);
      };
      reader.readAsDataURL(file);
    } else {
      onImageUpload(null);
    }
  };

  return (
    <div>
      <ImageComp src={imageSrc} alt="Uploaded"/>
      <ImgContainer>
        <AddImg id="selecao-arquivo" type="file" accept="image/*" onChange={handleImageChange} />
        <Icon htmlFor='selecao-arquivo'><BsFillPencilFill/></Icon>
      </ImgContainer>
    </div>
  );
};

export default ImageUpload;
