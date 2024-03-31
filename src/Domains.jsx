import { useState } from "react";
import Table from "./components/Table";
import { Typography } from "@material-tailwind/react";
import Action from "./components/Action";
import AddDomain from "./components/domain/AddDomain";

const TABLE_HEAD = [
  { label: "Domain", key: "domain" },
  { label: "Created at", key: "created_at" },
  { label: "Action", key: "action" },
];

export default function Domains({ setSelectedDomainId }) {
  const [domains, setDomains] = useState([]);

  function onItemClick(domain) {
    const domainId = domain.id;
    setSelectedDomainId(domainId);
  }

  return (
    <>
      <Typography variant="h1">Domains</Typography>
      <AddDomain domains={domains} setDomains={setDomains} />
      {domains.length > 0 && (
        <Table
          heading={TABLE_HEAD}
          data={domains.map((item) => {
            return {
              ...item,
              created_at: item.created_at.toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              action: <Action name="Select" onClick={onItemClick} />,
            };
          })}
        />
      )}
    </>
  );
}
