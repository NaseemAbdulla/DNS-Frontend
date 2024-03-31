import { useEffect, useState } from "react";
import Table from "./components/Table";
import { Typography } from "@material-tailwind/react";
import Action from "./components/Action";
import AddRecord from "./components/records/AddRecord";
import EditRecord from "./components/records/EditRecord";
import { getTimeElapsed } from "./helpers/dateHelper";

const TABLE_HEAD = [
  { label: "Names", key: "name" },
  { label: "Type", key: "type" },
  { label: "Value", key: "value" },
  { label: "TTL", key: "ttl" },
  { label: "Priority", key: "priority" },
  { label: "Age", key: "age" },
  { label: "Action", key: "action" },
];

export default function Records({ domainId }) {
  const [records, setRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {}, [domainId]);

  function handleRecordEdit(record) {
    setRecords((records) =>
      records.map((r) => {
        if (r.id === selectedRecord) {
          return {
            ...r,
            name: record.name,
            value: record.value,
            ttl: record.ttl,
            priority: record.priority,
            updated_at: new Date(),
          };
        }
        return r;
      })
    );
    setModalOpen(false);
  }

  function onEditClick(record) {
    setSelectedRecord(record.id);
    setModalOpen(true);
  }

  function onDeleteClick(record) {
    setRecords((records) => records.filter((item) => item.id !== record.id));
  }
  return (
    <>
      <Typography variant="h1">DNS Records</Typography>
      <div className="flex">
        <Typography variant="h5">Domain name:&nbsp;</Typography>
        <Typography variant="paragraph">pp</Typography>
      </div>

      <div className="w-full">
        <AddRecord records={records} setRecords={setRecords} />
      </div>
      {records.length > 0 && (
        <Table
          heading={TABLE_HEAD}
          data={records.map((item) => {
            return {
              ...item,
              age: getTimeElapsed(item.updated_at),
              action: (
                <div className="flex space-x-1">
                  <Action name="Edit" onClick={() => onEditClick(item)} />
                  <Action
                    name="Delete"
                    color="red"
                    onClick={() => onDeleteClick(item)}
                  />
                </div>
              ),
            };
          })}
        />
      )}
      {selectedRecord !== null && (
        <EditRecord
          open={modalOpen}
          setOpen={setModalOpen}
          record={records.filter((item) => item.id === selectedRecord)[0]}
          handleRecordEdit={handleRecordEdit}
        />
      )}
    </>
  );
}
