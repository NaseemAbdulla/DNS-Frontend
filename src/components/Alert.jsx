import { Alert } from "@material-tailwind/react";

export default function AlertBox({ show, type, message, handleAlert }) {
  const color =
    type === "error" ? "red" : type === "success" ? "green" : "blue";
  return (
    <>
      <Alert
        open={show}
        onClose={handleAlert}
        color={color}
        className="fixed top-0 right-4 w-max"
      >
        {message}
      </Alert>
    </>
  );
}
