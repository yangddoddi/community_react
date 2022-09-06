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
    width: 300,
  },
];
const data = [
  {
    key: "1",
    title: "John Brown",
    number: 3,
    date: "2019-12-13",
  },
  {
    key: "2",
    title: "Jim Green",
    number: 2,
    date: "2018-21-12",
  },
  {
    key: "3",
    title: "Joe Black",
    number: 1,
    date: "2017-11-23",
  },
];

export const Posts = () => {
  return (
    <div>
      <h4>Notice</h4>
      <Table columns={columns} dataSource={data} size="default" />
    </div>
  );
};
