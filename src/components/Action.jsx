import { Button } from "@material-tailwind/react";

export default function Action({ name, onClick, color = "black" }) {
  return (
    <>
      <Button onClick={onClick} size="sm" color={color}>
        {name}
      </Button>
    </>
  );
}
