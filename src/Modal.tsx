import React, { useEffect, useRef, FunctionComponent, ReactNode } from "react";
import { createPortal } from "react-dom";

interface IProps {
  children: ReactNode;
}

const modalRoot = document.getElementById("modal");

const Modal: FunctionComponent<IProps> = ({ children }) => {
  const elRef = useRef(document.createElement("div"));

  useEffect(() => {
    if (!modalRoot) {
      return undefined;
    }

    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(<>{children}</>, elRef.current);
};

export default Modal;
