import React from 'react'
import styles from "./modal.module.css";
import ReactDom from "react-dom";


const Backdrop = (props) => {
return <div className={styles.backdrop} ></div>
}
const ModalOverlay = (props) => {
<div className={styles.modal} >
<div className={styles.content} > {props.children} </div>
     </div>
}

const portalElement=document.getElementById("overlays");
const Modal = (props) => {
<React.Fragment>
{ReactDom.createPortal(<Backdrop/>, portalElement)}
{ReactDom.createPortal(<ModalOverlay>{props.children} </ModalOverlay>, portalElement)}
</React.Fragment>
}

export default Modal