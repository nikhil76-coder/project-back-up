import React, { useState, useEffect } from "react";
import { singleFileUpload, multipleFilesUpload } from "../api";
import { Container, makeStyles } from "@material-ui/core";

import { Send } from "@material-ui/icons";


import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  form: {
      paddingLeft:"25%",
    padding: theme.spacing(2),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  //   button:{
  //         // color: "#4a54f1",
  //         backgroundColor:"#4a54f1"
  //   }
}));

const FileUploadScreen = (props) => {
  const classes = useStyles();
  const [singleFile, setSingleFile] = useState("");
  const [multipleFiles, setMultipleFiles] = useState("");
  const [title, setTitle] = useState("");
  const [singleProgress, setSingleProgress] = useState(0);
  const [multipleProgress, setMultipleProgress] = useState(0);

  // const SingleFileChange = (e) => {
  //   setSingleFile(e.target.files[0]);
  //   setSingleProgress(0);
  // };
  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
    setMultipleProgress(0);
  };
  // const singleFileOptions = {
  //   onUploadProgress: (progressEvent) => {
  //     const { loaded, total } = progressEvent;
  //     const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
  //     setSingleProgress(percentage);
  //   },
  // };
  const mulitpleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setMultipleProgress(percentage);
    },
  };
  // const uploadSingleFile = async () => {
  //   const formData = new FormData();
  //   formData.append("file", singleFile);
  //   await singleFileUpload(formData, singleFileOptions);
  //   props.getsingle();
  // };
  const UploadMultipleFiles = async () => {
    const formData = new FormData();
    formData.append("title", title);
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append("files", multipleFiles[i]);
    }
    await multipleFilesUpload(formData, mulitpleFileOptions);
    props.getMultiple();
  };
  return (
    // <div className="col-6">
    //     <div className="form-group">
    //         <label>Select Single File</label>
    //         <input type="file" className="form-control" onChange={(e) => SingleFileChange(e)} />
    //     </div>
    //     <div className="row">
    //         <div className="col-10">
    //             <button type="button" className="btn btn-danger" onClick={() => uploadSingleFile()} >Upload</button>
    //         </div>

    //     </div>
    // </div>

    <form className={classes.form} autoComplete="off">
      <div className={classes.item}>
        <h1>Upload your Documents</h1>
      </div>
      <div className={classes.item}>
        <label>Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="enter title for your gallery"
        />
      </div>
      <div className={classes.item}>
        <label>Select Your Files</label>
        <input
          type="file"
          onChange={(e) => MultipleFileChange(e)}
          className="form-control"
          multiple
        />
      </div>
      <div className={classes.item}>
        <Button
          className={classes.button}
          variant="contained"
          component="span"
          type="button"
          onClick={() => UploadMultipleFiles()}
        >
          Upload
        </Button>
      </div>
    </form>
  );
};

export default FileUploadScreen;
