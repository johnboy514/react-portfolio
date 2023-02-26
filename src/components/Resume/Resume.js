import React, { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import Button from 'react-bootstrap/Button';

function Resume() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }

  return (
    <div className="resume">
      <center>
      <header className="resume-header">
        <Document file="./images/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page  height="1500" pageNumber={pageNumber} />
        </Document>
        <div className="w-50 pb-3 pt-2" style={{backgroundColor: "lightGray", borderRadius: 25}}>
          <p> Page {pageNumber} of {numPages}</p>
        { pageNumber > 1 && 
        <Button onClick={changePageBack} className="me-2">Previous Page</Button>
        }
        {
          pageNumber < numPages &&
          <Button onClick={changePageNext}>Next Page</Button>
        }
        <br></br>
        <br></br>
          <a href="./images/resume.pdf" download="John Ifert-Millers Resume" target='_blank'>
            <button type="button" class="btn btn-success btn-lg btn-block">Download Resume</button>
          </a>
        </div>
      </header>
      </center>

    </div>
  );
}

export default Resume;