import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import './ResumeCard.css';
import resume from './files/kgresume.pdf';

/**
 * TODO:
 * Figure out a cleaner way to display the resume.
 * Mobile-friendly support needed.
 * Resume download access.
 * Clean up the css file
*/

class ResumeCard extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
    console.log("document loaded");
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className="ResumeCard-layout">
        <Document
          file={resume}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

export default ResumeCard;
