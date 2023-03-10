import { useGetCustomersQuery } from "../../../graphql/generated/schema"

function CustomersDashboard() {
  const { data: customersData, loading, error } = useGetCustomersQuery();
  console.log(customersData);
  if (loading) {
    return <div>loading</div>
  }
  if (error || !customersData) {
    return <div>error....</div>
  }
  return (
    <div>
      <h2>Customer</h2>
      <ul>
        {customersData.customers?.map(customer => (
          <li key={customer?.id}>{customer?.firstName}</li>
        ))}
      </ul>
    </div>
  )
}

export default CustomersDashboard