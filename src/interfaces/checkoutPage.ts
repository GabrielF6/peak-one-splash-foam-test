// if you need to add additional fields feel free to do so but keep things organized
export type CheckoutPageType = {
  slug: string;
  template: string;
  funnelFlux: string;
  metaTitle: string;
  metaDescription: string;
  logo: string;
  stickyCampaign: string;
  header: {
    product: string;
    logo: string;
    badge: string;
    background: string;
  };

  blurbs: {
    icon1: string;
    text1: string;
    icon2: string;
    text2: string;
    icon3: string;
    text3: string;
    final1: string;
    final2: string;
    final3: string;
  };

  product: {
    //i would refactor this type as product: {name, couponValue, quantityOffers[{image, price, ogPrice...},{...}]}, as this is an grotesce redundant missuse of typing, but as this is just an test and this type is used in a lot of other files unfortunatly i dont have time, i would refactor the type blurbs too, by the way this folder here is called Interfaces, but contains types, not interfaces, if this was a real job work, I would refactor this type and propagate the refactor to all the places that uses this type
    name: string;
    image1: string;
    price1: string;
    ogPrice1: string;
    qty1: string;
    ship1: string;
    shippingId1: string;
    offerId1: string;
    stickyId1: string;
    image2: string;
    price2: string;
    ogPrice2: string;
    qty2: string;
    ship2: string;
    shippingId2: string;
    offerId2: string;
    stickyId2: string;
    image3: string;
    price3: string;
    ogPrice3: string;
    qty3: string;
    ship3: string;
    shippingId3: string;
    offerId3: string;
    stickyId3: string;
    image4: string;
    price4: string;
    ogPrice4: string;
    qty4: string;
    ship4: string;
    shippingId4: string;
    offerId4: string;
    stickyId4: string;
    couponValue: string;
  };
  buttonCta: string;
  content: string;
};
