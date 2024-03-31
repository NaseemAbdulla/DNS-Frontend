import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
} from "@material-tailwind/react";
import { useRef, useState } from "react";
import { createNanoId } from "../../helpers/uidHelper";
import AlertBox from "../Alert";

export default function AddDomain({ domains, setDomains }) {
  const [alert, setAlert] = useState({
    type: null,
    show: false,
    message: "",
  });

  const domainRef = useRef();

  function onDomainAdd(e) {
    e.preventDefault();

    const domain = domainRef.current.value;

    if (
      domains.length > 0 &&
      domains.map((item) => item.domain).includes(domain)
    ) {
      setAlert({
        type: "error",
        show: true,
        message: "Domain name already exist",
      });
      return;
    }

    setDomains((domains) => [
      ...domains,
      {
        id: createNanoId(),
        domain: domain,
        created_at: new Date(),
      },
    ]);

    domainRef.current.value = "";
  }

  return (
    <>
      <form onSubmit={onDomainAdd}>
        <Card className="border flex flex-col items-end">
          <CardBody className="flex space-x-4 w-full">
            <Input name="domain" label="Domain" inputRef={domainRef} required />
          </CardBody>
          <CardFooter className="pt-0 w-max">
            <Button type="submit">Add</Button>
          </CardFooter>
        </Card>
      </form>
      <AlertBox
        type={alert.type}
        show={alert.show}
        message={alert.message}
        handleAlert={() =>
          setAlert({
            type: null,
            show: false,
            message: "",
          })
        }
      />
    </>
  );
}
