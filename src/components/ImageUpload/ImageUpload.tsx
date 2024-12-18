import React, { useEffect, useState } from 'react';
import { AddImg, Icon, ImageComp, ImageProfile, ImgContainer } from './style';
import {BsFillPencilFill} from 'react-icons/bs'

interface ImageUploadProps {
  defaultImageSrc: string;
  onImageUpload?: (imageFile: File | null) => void;
  onChange?: (newImageSrc: string, file: File) => void;
  altText?: string;
  inputId?: string;
  type?: 'banner' | 'profile'
}
 
const ImageUpload: React.FC<ImageUploadProps> = ({ 
  defaultImageSrc, 
  onImageUpload,
  onChange, 
  altText,
  inputId,
  type = 'banner',
}) => {
  const [imageSrc, setImageSrc] = useState(defaultImageSrc);

  useEffect(() => {
    console.log(defaultImageSrc);
    setImageSrc(defaultImageSrc);
  }, [defaultImageSrc]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImageSrc = reader.result as string;
        setImageSrc(newImageSrc);
        // TODO: Devido ao conflito que teve entre os códigos, verificar qual a função correta
        // para ser chamada aqui
        if (onImageUpload) {
          onImageUpload(file);
        }
        
        // onChange(newImageSrc, file);
      };
      reader.readAsDataURL(file);
    } else {
      if (onImageUpload) {
        onImageUpload(null);
      }      
    }
  };
  const Image = type === 'profile'? ImageProfile : ImageComp;
  return (
    <>
      <div style={{width: '100%'}}>
        <Image src={imageSrc} alt={altText}/>
        <ImgContainer>
          <AddImg id={inputId} type="file" accept="image/*" onChange={handleImageChange} />
          <Icon htmlFor={inputId}><BsFillPencilFill/></Icon>
        </ImgContainer>
      </div>
    </>
  );
};

export default ImageUpload;
