import React from "react";

const OrdersTable = ({ data }) => {
  if (data.length === 0) {
    return (
      <tr>
        <td colSpan="10" className="text-center py-4 text-gray-500">
          There are no records to show
        </td>
      </tr>
    );
  }

  return (
    <>
      {data.map((order) => (
        <tr key={order.id} className="text-center border-t">
          <td className="border-t border-[#f2f2f2] p-[.9rem] text-[#212837] text- font-medium">{order.id}</td>
          <td className="border-t border-[#f2f2f2] p-[.9rem] text-[#212837] text- font-medium">{order.date}</td>
          <td className="border-t border-[#f2f2f2] p-[.9rem] text-[#212837] text- font-medium">{order.merchant}</td>
          <td className="border-t border-[#f2f2f2] p-[.9rem] text-[#212837] text- font-medium">{order.customer}</td>
          <td className="border-t border-[#f2f2f2] p-[.9rem] text-[#212837] text- font-medium">{order.items}</td>
          <td className="border-t border-[#f2f2f2] p-[.9rem] text-[#212837] text- font-medium">{order.total}</td>
          <td className="border-t border-[#f2f2f2] p-[.9rem] text-[#212837] text- font-medium">{order.type}</td>
          <td className="border-t border-[#f2f2f2] p-[.9rem] text-[#212837] text- font-medium">{order.payment}</td>
          <td className="border-t border-[#f2f2f2] p-[.9rem] text-[#212837] text- font-medium">{order.status}</td>
          <td className="border-t border-[#f2f2f2] p-[.9rem] text-[#212837] text- font-medium">{order.notes}</td>
        </tr>
      ))}
    </>
  );
};

export default OrdersTable;
