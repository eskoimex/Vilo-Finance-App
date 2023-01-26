import React from 'react'
import RequestCard from './requestCard'
import CardAvailable from './cardAvailable'
import { useSelector } from "react-redux";

export default function Card({ navigation }) {
  const card = useSelector((state) => state.card);
  return (
    <>
      {/* {card.isCardAvailable ? (
        <CardAvailable navigation={navigation}/>
      ) : ( */}
        <RequestCard navigation={navigation} />
      {/* )} */}
    </>
  )
}