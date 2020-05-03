import React, {useState} from "react";
import UploadIcon from "./UploadIcon";

const CustomUpload = () => {
    const [image, setImage] = useState({preview: "", raw: ""});

    const handleChange = (e: any): any => {
        console.log((e.target.files), 'e.target.files[0]');
        if (e.target.files.length) {
            console.log(URL.createObjectURL(e.target.files[0]), 'URL.createObjectURL(e.target.files[0])');
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
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

    return (
        <div
            // className={"file-upload"}
        >
            <label htmlFor="upload-button">
                {image.preview ? (
                    <img src={image.preview} alt="dummy" width="300" height="300"/>
                ) : (
                    <div>
                        <UploadIcon
                            className={"Icon"}
                            style={{ fill: "green", borderColor: "black" }}
                        />
                    </div>
                )}
            </label>

            <input
                type="file"
                id="upload-button"
                style={{display: "none"}}
                onChange={handleChange}
            />
            <h5 className="text-center">Upload your photo</h5>

            <br/>
            {/*<button onClick={handleUpload}>Upload</button>*/}
        </div>
    );
};

export default CustomUpload;
