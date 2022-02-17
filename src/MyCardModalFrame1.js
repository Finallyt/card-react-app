import React from 'react';
import styled from 'styled-components';
import close from './close.png'
import MyCardModalCss from './MyCardModal.css'

const ModalFrame = (props) => {    
  const  { open, close} = props; 
    return (
    <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
        <div className="MyCardModalFrame" >
            <div className="ModalBackground" onClick={_handleModal} />
            <div className="ModalBlock" {...rest}>
            <h1 onClick={close}>
              {' '}
              &times;{' '}
            </h1>
                <div className="ModalContents">
                    {children}
                </div>
                <main>{props.children}</main>
            </div>
        </div>) : null }
        
     </div>
    );
};

export default ModalFrame;