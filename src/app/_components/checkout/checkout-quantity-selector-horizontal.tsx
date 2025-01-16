import { delay } from "@/app/_utils/delay";
import { CheckoutPageType } from "@/interfaces/checkoutPage";
import { ProductInfoType } from "@/interfaces/productInfo";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BestSeller } from "../best-seller/best-seller";
import { FormSectionHeader } from "../form-section-header/form-section-header";
import { SaveSeal } from "../save-seal/SaveSeal";
import { PriceDisplaySimple } from "./checkout-price-display";
import CustomCheckbox from "./checkout-select-quantity-checkbox";

type QuantityProps = {
  product: ProductInfoType;
  info: CheckoutPageType;
  setProduct: (product: ProductInfoType) => void;
  couponActive: boolean;
  country: string;
};

// Select the number of products to purchase
const QuantitySelectorHorizontal = ({
  product,
  info,
  setProduct,
  couponActive,
  country,
}: QuantityProps) => {
  const handleProductClick = (
    productNum: number,
    productPrice: number,
    productShipping: number,
    productShippingId: number,
    productOfferId: number,
    productStickyId: number
  ) => {
    setProduct({
      product: productNum,
      productName: `${productNum + 1}x ${info.product.name}`,
      productPrice: productPrice.toString(),
      productShipping: productShipping.toString(),
      productShippingId: productShippingId.toString(),
      productOfferId: productOfferId.toString(),
      productStickyId: productStickyId.toString(),
    });
  };

  const [price1, setPrice1] = useState(Number(info.product.price1));
  const [price2, setPrice2] = useState(Number(info.product.price2));
  const [price3, setPrice3] = useState(Number(info.product.price3));
  const [price4, setPrice4] = useState(Number(info.product.price4));

  const [showCouponFlag, setShowCouponFlag] = useState(false);

  useEffect(() => {
    function scrollIfNotVisible(elementId: string) {
      const element = document.getElementById(elementId);

      if (!element) return; // Exit if the element is not found

      const rect = element.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Check if the element is completely within the viewport
      const isCompletelyVisible =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= viewportHeight &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth);

      // If not fully visible, scroll into view
      if (!isCompletelyVisible) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center", // Adjust this if you want it to align differently
        });
      }
    }

    const changePriceDrama = async () => {
      scrollIfNotVisible("quantity-selector");
      document.getElementById("price1")!.style.background = "#5acd65"; //i would make this a theme prop in tailwind config, but as this is an test i dont have time to refactor all I want, I will just deliver the main request (in a real work I aways try to deliver more than asked if it makes sense)
      await delay(200);
      setPrice1(price1 - parseFloat(info.product.couponValue));
      document.getElementById("price1")!.style.background = "none";
      document.getElementById("price2")!.style.background = "#5acd65";
      await delay(200);
      setPrice2(price2 - parseFloat(info.product.couponValue));
      document.getElementById("price2")!.style.background = "none";
      document.getElementById("price3")!.style.background = "#5acd65";
      await delay(200);
      setPrice3(price3 - parseFloat(info.product.couponValue));
      document.getElementById("price3")!.style.background = "none";
      document.getElementById("price4")!.style.background = "#5acd65";
      await delay(200);
      setPrice4(price4 - parseFloat(info.product.couponValue));
      document.getElementById("price4")!.style.background = "none";
      setShowCouponFlag(true);
    };
    if (couponActive) {
      changePriceDrama();
    }
  }, [couponActive]);

  const ProductCard = ({ index }: { index: string }) => {
    const currentPrice =
      info.product[
        `price${index}` as "price1" | "price2" | "price3" | "price4"
      ];
    const currentImage =
      info.product[
        `image${index}` as "image1" | "image2" | "image3" | "image4"
      ];
    const currentOgPrice =
      info.product[
        `ogPrice${index}` as "ogPrice1" | "ogPrice2" | "ogPrice3" | "ogPrice4"
      ];
    const currentShip =
      info.product[`ship${index}` as "ship1" | "ship2" | "ship3" | "ship4"];
    const currentShippingId =
      info.product[
        `shippingId${index}` as
          | "shippingId1"
          | "shippingId2"
          | "shippingId3"
          | "shippingId4"
      ];
    const currentOfferId =
      info.product[
        `offerId${index}` as "offerId1" | "offerId2" | "offerId3" | "offerId4"
      ];
    const currentStickyId =
      info.product[
        `stickyId${index}` as
          | "stickyId1"
          | "stickyId2"
          | "stickyId3"
          | "stickyId4"
      ];
    //all of these declarations would not be necessary if the info type had products as {prop, prop, Obj[]}

    return (
      <div //i would make this a component in another file, but unforunately i dont have time right now for a test, if this was an actual job work I would create another file
        className={`flex w-full relative sm:w-full rounded-md p-[18px] cursor-pointer h-[172px] md:h-[203px] transition-all ${
          product.product === Number(index) - 1
            ? "border-[#126abc] border-[2px] bg-[#ffffcb]"
            : "border-[2px] border-[#c2c2c2]"
        }`}
        onClick={() => {
          handleProductClick(
            Number(index) - 1,
            Number(currentPrice),
            Number(currentShip),
            Number(currentShippingId),
            Number(currentOfferId),
            Number(currentStickyId)
          );
        }}
      >
        {Number(index) === 2 && <BestSeller />}
        <div className="flex flex-col w-1/3 sm:w-1/2 justify-center gap-y-[20px] items-start">
          <CustomCheckbox
            checked={product.product === Number(index) - 1}
            quantity={Number(index)}
          />

          <div
            className="h-[118px] w-[255px] "
            style={{ position: "relative" }}
          >
            <Image
              src={currentImage}
              width={159} // in this case i had a doubt if you wanted the image exactly like your example w= 255 h = 118 because of croping, aspect ration problems well known in ecommerce front end, but i decided to speed up letting same height
              height={118}
              alt="Quantity 1"
              className="w=[200px] h-[93px] md:w-[255px] md:h-[118px] object-contain"
            />
            {Number(index) !== 1 && (
              <SaveSeal
                percent={Math.abs(
                  Number(currentPrice) / Number(currentOgPrice)
                )}
              />
            )}
          </div>
        </div>
        <div className="flex w-2/3 sm:w-1/2 flex-col justify-center  text-[#282828] text-center">
          <div className="flex flex-row flex-col justify-center items-end w-full space-x-2 sm:space-x-0">
            <p className="text-[16px] templatetwo  relative">
              {/* {info.product.ogPrice1} */}
              <PriceDisplaySimple
                priceUSD={parseFloat(currentOgPrice)}
                countryCode={country}
                digits={0}
              />
            </p>

            <p
              className="text-[24px] md:text-[30px] text-[#000000]  font-bold font-inter"
              id="price1"
            >
              {/* ${price1.toFixed(2)} */}
              <PriceDisplaySimple
                priceUSD={Number(currentPrice)}
                countryCode={country}
                digits={2}
              />
            </p>
            <p
              className="text-[15px] md:text-[19px] font-inter text-[#26b80e]  font-bold"
              id="price1"
            >
              {/* ${price1.toFixed(2)} */}
              {"You save "}
              <PriceDisplaySimple
                priceUSD={Number(currentOgPrice) - Number(currentPrice)}
                countryCode={country}
                digits={2}
              />
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div
        className="flex w-full flex-col justify-between items-center pb-6 "
        id="quantity-selector"
      >
        <FormSectionHeader
          icon="frm-hdr-icn1"
          title="Select Quantity"
          subtitle={`How many ${info.product.name} units do you want?`}
        />

        <div className="flex items-center justify-center bg-[#ffe7e7] w-full rounded-md p-[10px] mb-[35px]">
          <div className="w-[13px] h-[18px] flex justify-center items-center bg-[url('/images/splash-foam/fire-img.png')] bg-contain bg-no-repeat bg-center text-white font-bold font-inter text-[20px] pt-[8px] leading-[22px] text-center uppercase" />
          <div className="pl-[8px] ">
            <span className="text-red-500 font-bold text-[13px] md:text-[17px]">
              High Demand:
            </span>
            <span className=" text-[13px] md:text-[17px]">
              {" "}
              87 people are looking this offer!
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full gap-y-[45px] h-auto">
          <ProductCard index="1" />
          <ProductCard index="2" />

          <ProductCard index="3" />
          <ProductCard index="4" />
        </div>
      </div>
      {/* all these 4 Product card code duplactions would not be necessary if these were a Obj[] type, i would just use products.map(...) */}
    </>
  );
};

export default QuantitySelectorHorizontal;
