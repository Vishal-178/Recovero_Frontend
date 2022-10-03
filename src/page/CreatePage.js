import React from "react";
import Form from "../component/Form";
import Header from "../component/Header";
// Create or Update page
export default function Create() {
  return (
    <>
      <Header displaySearch={false} />

      <Form />
    </>
  );
}
