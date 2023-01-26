import React, { useState } from "react";
import { useSelector } from "react-redux";
import Home from "./home";
import HomeWithoutKyc from "./homeWithoutKyc";

export default function Overview({ navigation }) {
  const user = useSelector((state) => state.user);

  return (
    <>
      {user?.user[0]?.isDocumentVerified ? (
        <Home navigation={navigation} />
      ) : (
        <HomeWithoutKyc navigation={navigation} />
      )}
    </>
  );
}
