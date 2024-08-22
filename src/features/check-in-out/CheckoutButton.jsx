import { useCheckout } from "./useCheckout";
import Button from "../../ui/Button";
import propTypes from "prop-types";

function CheckoutButton({ bookingId }) {
  const { isCheckingOut, checkout } = useCheckout();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;

CheckoutButton.propTypes = {
  bookingId: propTypes.number,
};
