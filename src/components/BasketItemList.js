import React from "react";
import { useObserver } from "mobx-react";
import useStore from "../useStore";
import BasketItem from "./BasketItem";

const BasketItemList = () => {
  const { market } = useStore();

  const onTake = (name) => {
    market.take(name);
  };

  return useObserver(() => {
    const itemList = market.selectedItems.map((item) => (
      <BasketItem item={item} key={item.name} onTake={onTake} />
    ));
    return <div>{itemList}</div>;
  });
};
export default BasketItemList;
