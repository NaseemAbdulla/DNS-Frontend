import { useRef, useState } from "react";

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
} from "@material-tailwind/react";

export default function EditRecord({
  open,
  setOpen,
  record,
  handleRecordEdit,
}) {
  const nameRef = useRef();
  const valueRef = useRef();
  const ttlRef = useRef();
  const priorityRef = useRef();

  return (
    <>
      <Dialog open={open} handler={() => setOpen((open) => !open)}>
        <DialogHeader>Edit {record.type} Record</DialogHeader>
        <DialogBody className="flex flex-col space-y-4">
          <Input
            defaultValue={record.name}
            name="name"
            label="Name"
            inputRef={nameRef}
            required
          />
          <Input
            defaultValue={record.value}
            required
            label="Value"
            inputRef={valueRef}
          />
          <Input
            defaultValue={record.ttl}
            required
            label="TTL"
            inputRef={ttlRef}
          />
          <Input
            defaultValue={record.priority}
            required
            label="Priority"
            inputRef={priorityRef}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setOpen(false)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() =>
              handleRecordEdit({
                name: nameRef.current.value,
                value: valueRef.current.value,
                ttl: ttlRef.current.value,
                priority: priorityRef.current.value,
              })
            }
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
