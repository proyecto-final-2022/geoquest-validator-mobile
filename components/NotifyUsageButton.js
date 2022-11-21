import React from "react";  
import SwipeButton from "rn-swipe-button";


export default function NotifyUsageButton({notifyUse, ...props}) {
  return (
    <SwipeButton
      {...props}
      onSwipeSuccess={notifyUse}
      title={"Notificar Uso"}
      thumbIconBackgroundColor={"#A0C562"}
      railBackgroundColor={"#F0FFB2"}
      railFillBackgroundColor={"#C0E582"}
      titleStyles={{fontWeight: "bold"}}
    />
  );
}
