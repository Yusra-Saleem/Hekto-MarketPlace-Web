// schemas/address.js
export default {
  name: "address",
  type: "document",
  title: "Address",
  fields: [
    {
      name: "email",
      type: "string",
      title: "Email",
    },
    {
      name: "name",
      type: "string",
      title: "Full Name",
    },
    {
      name: "street",
      type: "string",
      title: "Street Address",
    },
    {
      name: "city",
      type: "string",
      title: "City",
    },
    {
      name: "state",
      type: "string",
      title: "State",
    },
    {
      name: "postalCode",
      type: "string",
      title: "Postal Code",
    },
    {
      name: "country",
      type: "string",
      title: "Country",
    },
  ],
};