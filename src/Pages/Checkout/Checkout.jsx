import { useDispatch, useSelector } from "react-redux";
import InputFeild from "../../Components/InputField/InputFeild";
import Footer from "../../Components/Footer/Footer";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { toast } from "sonner";
import { checkShippingDetails } from "../../ShoppingCart/Cart/ShippingDetails";
import { addToCart, emptyCart } from "../../ShoppingCart/Cart/CartSlice";

// Validation Schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  message: Yup.string(),
});
const initialValues = {
  name: "",
  email: "",
  number: "",
  address: "",
  message: "",
};

const Checkout = () => {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [isFormSumitted, setIsFormSubmitted] = useState(false);

  const onSubmit = (values, onSubmitProps) => {
    dispatch(checkShippingDetails(true));
    if (isFormSumitted) {
      toast.warning("Shipping details already added");
      onSubmitProps.resetForm();
      return;
    }
    setIsFormSubmitted(true);
    toast.success("Form submitted successfully with values: ");
    onSubmitProps.resetForm();
  };

  // Order Confirmation

  const ConfirmOrder = () => {
    if (data.cart.length <= 0) {
      toast.error("Your Cart is Empty");
    }
    if (!isFormSumitted) {
      toast.error("Please Fill the Shipping Details");
    } else {
      toast.success("You Order has been Placed");
      dispatch(emptyCart());
    }
  };
  return (
    <>
      <div className="w-95 mx-auto xxl:w-[1700px]">
        <div className=""></div>
        <div className="flex md:flex-col md:gap-y-9 xxl:justify-center">
          <div className="w-8/12  mt-6 md:w-full">
            <div className=""></div>
            <div className="">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ isSubmitting }) => {
                  return (
                    <Form>
                      <Field name="name" title="Name" component={InputFeild} />
                      <Field
                        name="email"
                        title="Email"
                        component={InputFeild}
                      />
                      <Field
                        name="number"
                        title="Phone Number"
                        component={InputFeild}
                      />
                      <Field
                        name="address"
                        title="Address"
                        component={InputFeild}
                      />

                      <label htmlFor="message">Enter Message</label>
                      <br />
                      <Field
                        name="message"
                        as="textarea"
                        cols="30"
                        rows="10"
                        className="border-2 border-slate-300 rounded-md py-2 px-3 outline-none w-9/12 my-3 md:w-full"
                        placeholder="Enter Your Message"
                      />

                      <button
                        type="submit"
                        className="text-white rounded-full w-36 py-4 bg-[#f4952c] block duration-300 hover:bg-black"
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
          <div className="w-4/12  md:w-full ">
            <div className="flex justify-between border py-5 px-4">
              <h3>Product</h3>
              <h3>Sub total</h3>
            </div>
            <div className="h-[200px] overflow-y-scroll border">
              {data.cart.map((item) => {
                return (
                  <div className="flex justify-between p-4 " key={item.id}>
                    <h3>{item.name}</h3>
                    <h3>${item.subTotal}</h3>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between border py-5 px-4">
              <h3>Total</h3>
              <h3 className="text-3xl">${data.totalPrice}</h3>
            </div>
            <button
              className="w-8/12 bg-black text-white py-4 text-lg duration-300 hover:bg-[#f4952c] block mx-auto mt-6 rounded-full"
              onClick={ConfirmOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Checkout;
