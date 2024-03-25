"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetail";

interface SetQuantityProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}
const btnStyles = "border-[1,2px] border-slate-300 px-2 rounded";
const SetQuantity: React.FC<SetQuantityProps> = ({
  cartCounter,
  cartProduct,
  handleQtyIncrease,
  handleQtyDecrease,
}) => {
  //TODO: html
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : (
        <>
          {" "}
          <div className="font-semibold">QUANTITY</div>
          <div className="flex gap-4 items-center">
            <button onClick={handleQtyDecrease} className={btnStyles}>
              -
            </button>
            <div>{cartProduct.quantity}</div>
            <button onClick={handleQtyIncrease} className={btnStyles}>
              +
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SetQuantity;
