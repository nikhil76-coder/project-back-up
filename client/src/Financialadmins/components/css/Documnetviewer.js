import React, { useState, useEffect } from "react";
import { Container, makeStyles } from "@material-ui/core";
import download from "downloadjs";
import axios from "axios";
import "./Documentsviewer.css";

const useStyles = makeStyles((theme) => ({
  Container: {
    paddingTop: theme.spacing(10),
  },
}));

const FilesList = () => {
  const classes = useStyles();

  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/api/getMultipleFiles"
        );
        setErrorMsg("");
        setFilesList(data);
        console.log(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(
        `http://localhost:8080/api/download/${id}`,
        {
          responseType: "blob",
        }
      );
      const split = path.split("/");
      const filename = split[split.length - 1];
      setErrorMsg("");
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg("Error while downloading file. Try again later");
      }
    }
  };

  return (
    <Container className={classes.Container}>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <table className="files-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Download File</th>
          </tr>
        </thead>
        <tbody>
          {filesList.length > 0 ? (
            filesList.map(({ _id, title, files }) =>
              files.map(({ filePath, fileType }) => (
                <tr key={_id}>
                  <td className="file-title">{title}</td>
                  <td className="file-description">{_id}</td>
                  {/* <td>{title}</td>
                  <td>{_id}</td> */}
                  {/* <td className="file-description">{files}</td> */}
                  <td >
                    <a
                      href="#/"
                      onClick={() => downloadFile(_id, filePath, fileType)}
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))
            )
          ) : (
            <tr>
              <td colSpan={3} style={{ fontWeight: "300" }}>
                No files found. Please add some.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
};

export default FilesList;
