import { columns} from "./columns"
import { DataTable } from "./data-table"
import type {Payment} from "./columns"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
     { id: "1", amount: 250, status: "pending",    email: "user1@example.com" },
    { id: "2", amount: 99,  status: "success",    email: "user2@example.com" },
    { id: "3", amount: 70,  status: "processing", email: "user3@example.com" },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}