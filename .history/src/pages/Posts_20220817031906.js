import { Table } from "antd";
import React from "react";
const columns = [
  {
    title: "No",
    dataIndex: "number",
    width: 150,
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
];
const data = [
  {
    key: "1",
    title: "John Brown",
    number: 23,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    title: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    title: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
];

export const Posts = () => {
  return (
    <div>
      <h4>Notice</h4>
      <Table columns={columns} dataSource={data} size="middle" />
    </div>
  );
};
