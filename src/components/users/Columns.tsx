import React from "react";

export default () => {
  // "name": "Daniel",
  // "lastName": "Lobo",
  // "nickName": "Da1j21234213olo1",
  // "password": "Hola",
  // "email": "12eso@corres1231os.com",
  // "country": "Colombia",
  // "city": "Santa Marta",
  // "phone": "389847",
  // "status": false,
  // "deletedAt": null

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Last name",
      dataIndex: "lastName",
    },
    {
      title: "NickName",
      dataIndex: "nickName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Country",
      dataIndex: "country",
    },
    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
  ];
  return columns;
};
