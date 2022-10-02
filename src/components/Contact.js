import React, { useState } from "react";
import Modal from "./Modal";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [target, setTarget] = useState(null);
  const openBodyModal = () => {
    setTarget("modal-component-wrapper");
    setIsOpen(true);
  };
  const openContactModal = () => {
    setTarget("contact");
    setIsOpen(true);
  };
  return (
    <div
      className="ui raised very padded text container segment"
      id="contact"
      style={{ marginTop: "80px" }}
    >
      <div>
        <h3 className="header">Contact</h3>
        <p className="text">To contact us find the below contacts.</p>
        <form class="ui form">
          <div class="field">
            <label>First Name</label>
            <input type="text" name="first-name" placeholder="First Name" />
          </div>
          <div class="field">
            <label>Last Name</label>
            <input type="text" name="last-name" placeholder="Last Name" />
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" tabindex="0" />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button class="ui button" type="submit">
            Submit
          </button>
        </form>
        <button onClick={openContactModal}>Contact</button>
        <button onClick={openBodyModal}>Body</button>
      </div>
      <Modal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        targetContainer={target}
      >
        This is contact Modal!
      </Modal>
    </div>
  );
};

export default Contact;
