const OrderRow = ({ order }) => {
  return (
    <tr className="text-center">
      <td className="px-4 py-2 border text-blue-500">
        <p>{order.id}</p>
      </td>

      <td className="px-4 py-2 border">{order.tableNo}</td>

      <td className="px-4 py-2 border">{order.customerName}</td>

      <td
        className={`px-4 py-2 border ${
          order.orderType === 'Dine In'
            ? 'text-blue-500'
            : order.orderType === 'Delivery'
            ? 'text-red-500'
            : 'text-yellow-500'
        }`}
      >
        {order.orderType}
      </td>

      <td className="px-4 py-2 border">
        <div
          className={`rounded-md ${
            order.orderStatus === 'Order Updated'
              ? 'bg-purple-100 text-purple-500'
              : 'bg-red-100 text-red-500'
          }`}
        >
          {order.orderStatus}
        </div>
      </td>

      <td className="px-4 py-2 border">
        <div
          className={`rounded-md ${
            order.payment === 'Paid'
              ? 'bg-green-100 text-green-500'
              : 'bg-red-100 text-red-500'
          }`}
        >
          {order.payment}
        </div>
      </td>

      <td className="px-4 py-2 border">{order.date}</td>

      <td className="px-4 py-2 border">
        <p className="text-blue-500">🔗</p>
      </td>
    </tr>
  );
};

export default OrderRow;
