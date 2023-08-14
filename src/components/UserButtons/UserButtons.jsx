import React from "react";
import { Button } from "react-bootstrap";
import styles from "./UserButtons.module.css";

const UserButtons = () => {
  return (
    <>
      <div className="d-flex gap-4">
        <Button
          className={`rounded-pill ${styles.btnLogin}`}
          variant="primary"
          size="lg"
        >
          Login
        </Button>
        <Button
          className={`rounded-pill ${styles.btnExplore}`}
          variant="light"
          size="lg"
        >
          Explore
        </Button>
      </div>
    </>
  );
};

export default UserButtons;
