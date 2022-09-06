import { Table } from "antd";
import React from "react";
const columns = [
  {
    title: "No",
    dataIndex: "name",
    innerWidth: 100,
    outerWidth: 100,
    width: 100,
  },
  {
    title: "title",
    dataIndex: "age",
  },
  {
    title: "uploaded",
    dataIndex: "address",
  },
];
const data = [
  {
    key: "1",
    title: "John Brown",
    uploaded: 23,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
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
