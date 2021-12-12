import { useState } from "react";
import { Modal, Form, FloatingLabel, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import s from "./ModalCustomDish.module.css";

function ModalCustomDish({ isShowModal, hideModal, toAddsCustomDish }) {
  const [customDish, setCustomDish] = useState({ title: "", recipe: "" });

  const inputHandler = (e) => {
    setCustomDish((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetForm = () => {
    setCustomDish({ title: "", recipe: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const addCustomDish = {
      idMeal: uuidv4(),
      strMeal: customDish.title,
      strInstructions: customDish.recipe,
    };

    toAddsCustomDish(addCustomDish);
    resetForm();
    hideModal();
  };

  return (
    <>
      <Modal
        backdropClassName={s.backdrop}
        contentClassName={s.modal}
        show={isShowModal}
        onHide={() => {
          resetForm();
          hideModal();
        }}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Hello, masterchef!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Enter dish title"
              className="mb-3"
            >
              <Form.Control
                onChange={inputHandler}
                name="title"
                value={customDish.title}
                as="input"
                placeholder="Leave a comment here"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Enter the details of your recipe"
            >
              <Form.Control
                onChange={inputHandler}
                name="recipe"
                value={customDish.recipe}
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "200px" }}
              />
            </FloatingLabel>

            <Button
              className={s.btn}
              type="submit"
              variant="primary"
              disabled={
                customDish.recipe.length === 0 || customDish.title.length === 0
              }
            >
              Save changes
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer></Modal.Footer> */}
      </Modal>
    </>
  );
}

export default ModalCustomDish;
