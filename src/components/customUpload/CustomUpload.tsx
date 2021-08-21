import React, { useState } from "react";
import "./customUpload.scss";
import avatar from "../../Images/avatar_profile.png";

type ImagePreviewPropTypes = {
  blobUrl: string;
};
const ImagePreview = ({ blobUrl }: ImagePreviewPropTypes): any => {
  return (
    <span className={"image-preview"}>
      <img src={blobUrl} alt="Nothing selected" width="300" height="300" />
    </span>
  );
};

const CustomUpload = () => {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e: any): any => {
    console.log(e.target.files, "e.target.files[0]");
    if (e.target.files.length) {
      console.log(
        URL.createObjectURL(e.target.files[0]),
        "URL.createObjectURL(e.target.files[0])"
      );
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleUpload = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    // await fetch("SERVICE_URL", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "multipart/form-data"
    //     },
    //     body: formData
    // });
  };
  const imageToShow = image.preview ? image.preview : avatar;
  return (
    <div>
      <div className={"file-upload"}>
        <label htmlFor="upload-button">
          {<ImagePreview blobUrl={imageToShow} />}
        </label>
      </div>

      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
        accept={".jpeg,.png"}
      />

      <br />
      {/* <button onClick={handleUpload}>Upload</button> */}
    </div>
  );
};

export default CustomUpload;
