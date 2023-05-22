import { uiAction } from "./ui-slice";
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Data is Sending!",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-first-38e92-default-rtdb.firebaseio.com/app13/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Sent",
          message: "Sent Successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error!",
          message: `Sending failed!`,
        })
      );
    }
  };
};
