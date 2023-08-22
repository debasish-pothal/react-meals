import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

function Backdrop({ onClose }) {
  return <div className={classes.backdrop} onClick={onClose}></div>;
}

function ModalOverlay({ children }) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

function Modal({ children, onClose }) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay children={children} />,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
