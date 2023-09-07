import { Payment, payments } from "@/mocks/data/payments"
import { columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  return payments
}

const Payment = async () => {
  const payments = await getData()

  return <div className="py-10">
    <DataTable data={payments} columns={columns} />
  </div>

}

export default Payment
