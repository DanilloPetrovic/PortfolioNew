import { React } from "react";
import "./AddProject.css";
import { useFormik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { storage, db } from "../../firebase";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { useEffect, useState } from "react";

const AddProject = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [imageInput, setImageInput] = useState(null);

  useEffect(() => {
    const importImg = () => {
      if (imageInput && imageInput[0]) {
        const storageRef = ref(storage, `${token + imageInput[0].name}`);
        uploadBytes(storageRef, imageInput[0]).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setImageUrls((prev) => [...prev, url]);
          });
        });
      }
    };

    importImg();
  }, [imageInput]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      image: "" || imageUrls,
      title: "",
      description: "",
      link: "",
    },

    validationSchema: Yup.object().shape({
      title: Yup.string().required("required"),
      description: Yup.string()
        .required("required")
        .max(200, "max description lenght is 200"),
      link: Yup.string(),
    }),

    onSubmit: async (values) => {
      const collectionRef = collection(db, "projects");
      const data = {
        imageURL: imageUrls[0],
        title: values.title,
        description: values.description,
        link: values.link,
      };
      await addDoc(collectionRef, data);
      alert("Finish");
    },
  });

  if (!token) {
    return <Navigate to={"/"} replace={true} />;
  }

  return (
    <div className="App">
      <main className="main-register">
        <div className="form">
          <div className="title-div">
            <h1 className="title">Create an ad</h1>
          </div>

          <div className="inputs">
            <div className="image-div">
              <label className="file-upload">Choose image</label> <br />
              <input
                name="image"
                onChange={(e) => setImageInput(e.target.files)}
                onBlur={formik.handleBlur}
                for={"fileInput"}
                type="file"
              />
              {formik.errors.image && formik.touched.image ? (
                <p className="error">{formik.errors.image}</p>
              ) : null}
            </div>

            <div className="title-div-2">
              <label>Title</label> <br />
              <input
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter title of your ad"
              />
              {formik.errors.title && formik.touched.title ? (
                <p className="error">{formik.errors.title}</p>
              ) : null}
            </div>

            <div className="description-div">
              <label>Description</label> <br />
              <textarea
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter description"
              />
              {formik.errors.description && formik.touched.description ? (
                <p className="error">{formik.errors.description}</p>
              ) : null}
            </div>

            <div className="link-div">
              <label>Link</label> <br />
              <input
                name="link"
                value={formik.values.link}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                placeholder="Enter link"
              />
              {formik.errors.link && formik.touched.link ? (
                <p className="error">{formik.errors.link}</p>
              ) : null}
            </div>
          </div>

          <div className="btns">
            <button type="button" onClick={formik.handleSubmit}>
              Create
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddProject;
