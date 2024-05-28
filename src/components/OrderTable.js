import OrderRow from './OrderRow';

const orders = [
  {
    id: 'TBM1234567',
    tableNo: 1,
    customerName: 'Nanice Casale',
    orderType: 'Dine In',
    orderStatus: 'Order Updated',
    payment: 'Paid',
    date: '19 Dec 2022 06:28 PM',
  },
  {
    id: 'TBM1234568',
    tableNo: 2,
    customerName: 'Tim Mante',
    orderType: 'Delivery',
    orderStatus: 'New Order',
    payment: 'Un-Paid',
    date: '19 Dec 2022 06:28 PM',
  },
  {
    id: 'TBM1234569',
    tableNo: 3,
    customerName: 'Anatol Lambertazzi',
    orderType: 'Take Away',
    orderStatus: 'New Order',
    payment: 'Un-Paid',
    date: '19 Dec 2022 06:28 PM',
  },
  {
    id: 'TBM1234667',
    tableNo: 4,
    customerName: 'Nanice Casale',
    orderType: 'Dine In',
    orderStatus: 'Order Updated',
    payment: 'Paid',
    date: '19 Dec 2022 06:28 PM',
  },
  {
    id: 'TBM1234567',
    tableNo: 5,
    customerName: 'Olga Gaylord',
    orderType: 'Delivery',
    orderStatus: 'New Order',
    payment: 'Un-Paid',
    date: '19 Dec 2022 06:28 PM',
  },
  {
    id: 'TBM1234568',
    tableNo: 6,
    customerName: 'Anatol Lambertazzi',
    orderType: 'Take Away',
    orderStatus: 'New Order',
    payment: 'Paid',
    date: '19 Dec 2022 06:28 PM',
  },
  {
    id: 'TBM1234569',
    tableNo: 7,
    customerName: 'Nanice Casale',
    orderType: 'Dine In',
    orderStatus: 'Order Updated',
    payment: 'Paid',
    date: '19 Dec 2022 06:28 PM',
  },
  {
    id: 'TBM1234562',
    tableNo: 8,
    customerName: 'Crystal Rolfson',
    orderType: 'Delivery',
    orderStatus: 'New Order',
    payment: 'Un-Paid',
    date: '19 Dec 2022 06:28 PM',
  },
  {
    id: 'TBM1234564',
    tableNo: 9,
    customerName: 'Anatol Lambertazzi',
    orderType: 'Take Away',
    orderStatus: 'New Order',
    payment: 'Paid',
    date: '19 Dec 2022 06:28 PM',
  },
];

const OrderTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Order ID</th>

            <th className="px-4 py-2 border">Table no</th>

            <th className="px-4 py-2 border">Customer name</th>

            <th className="border flex justify-between items-center p-5">
              Order type
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </th>

            <th className="px-4 py-2 border">Order status</th>

            <th className="px-4 py-2 border">Payment</th>

            <th className="px-4 py-2 border">Order date</th>

            <th className="px-4 py-2 border">View order</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => (
            <OrderRow key={index} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
