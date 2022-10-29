import SwipeButton from "rn-swipe-button";



export default NotifyUsageButton = ({notifyUse, ...props}) => {
  return (
    <SwipeButton
      {...props}
      onSwipeSuccess={notifyUse}
    />
  );
}
