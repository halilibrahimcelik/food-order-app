import React, {Fragment} from 'react'
import styles from "./modal.module.css";
import ReactDom from "react-dom";


const Backdrop = ({onClose}) => {
return <div className={styles.backdrop}  onClick={onClose} ></div>
}
const ModalOverlay = (props) => {
return (<div className={styles.modal} >
<div  className={styles.content} > {props.children} </div>
     </div>)
}

const portalElement=document.getElementById("overlays");

console.log(portalElement)
const Modal = (props) => {
     const {onClose}=props;
return (<Fragment>
{ReactDom.createPortal(<Backdrop onClose={onClose} />, portalElement)}
{ReactDom.createPortal(<ModalOverlay>{props.children} </ModalOverlay>, portalElement)}
{/* <Backdrop/>
<ModalOverlay>{props.children} </ModalOverlay> */}
</Fragment>)
}

export default Modal;