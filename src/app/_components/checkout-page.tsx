import { CheckoutPageType } from "@/interfaces/checkoutPage";
import FunnelFluxScripts from "@/lib/funnel-flux-scripts";
import CheckoutClickId from "./checkout/checkout-click-id";
import Footer from "./checkout/checkout-footer";
import CheckoutForm from "./checkout/checkout-form";
import CheckoutForm2 from "./checkout/checkout-form-2";
import CheckoutHeader from "./checkout/checkout-header";

type Props = {
  info: CheckoutPageType;
};

const CheckoutPage = ({ info }: Props) => {
  if (!info) {
    return (
      <div>
        Error: Unable to load checkout information. Please try again later.
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center relative">
        <CheckoutHeader info={info} />
        {info.template === "1" && <CheckoutForm info={info} />}
        {info.template === "2" && <CheckoutForm2 info={info} />}

        <Footer info={info} />
        <FunnelFluxScripts funnelFlux={info.funnelFlux} />
        <CheckoutClickId />
      </div>
    </>
  );
};

export default CheckoutPage;
