import { Typography } from "@material-tailwind/react";

export default function Table({ heading, data }) {
  console.log(data);
  return (
    <table className="w-full min-w-max table-auto text-left">
      <thead>
        <tr>
          {heading.map((head) => (
            <th
              key={head.key}
              className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                {head.label}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            {heading.map((head, i) => (
              <td
                className="p-4 border-b border-blue-gray-50"
                key={`${head.key}-${index}-${i}`}
              >
                {item[head.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
