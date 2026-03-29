"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import { useState } from "react";
import { object, string } from "yup";
import { Radio } from "@/common/radio";
import { Input } from "@/common/input";
import { Button } from "@/common/button";
import { Arrow } from "@/common/icon/arrow";
import { useRouter } from "next/navigation";
import { Textarea } from "@/common/textarea";
import { MouseEvent, useEffect } from "react";
import "leaflet-geosearch/dist/geosearch.css";
import { Subtract } from "@/common/icon/subtract";
import { FormikProvider, useFormik } from "formik";
import { Slide, toast, ToastContainer } from "react-toastify";
import { PhoneInput } from "@/components/phonenumberinput";
// import { OpenStreetMapProvider } from "leaflet-geosearch";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface ContactFormValues {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  note?: string;
}

export const Checkout = () => {
  const router = useRouter();
  // const [value, setValue] = useState()
  // const [searchInput, setSearchInput] = useState("");
  // const [searchResults, setSearchResults] = useState<any[]>([]);
  // const [selectedLocation, setSelectedLocation] = useState<{
  //   lat: number;
  //   lng: number;
  // } | null>(null);
  // const [mapCenter, setMapCenter] = useState<[number, number]>([0, 0]);

  // const provider = new OpenStreetMapProvider();

  useEffect(() => {
    const iconUrl =
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png";
    const iconRetinaUrl =
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png";
    const shadowUrl =
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png";

    const defaultIcon = L.icon({
      iconUrl,
      iconRetinaUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    L.Marker.prototype.setIcon(defaultIcon);
  }, []);

  useEffect(() => {
    const hasItems = document.cookie.includes("cart_items");
    if (!hasItems) {
      router.replace("/order");
    }
  });

  // const handleSearchInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const query = e.target.value;
  //   setSearchInput(query);

  //   if (query.length > 2) {
  //     try {
  //       const results = await provider.search({ query });
  //       setSearchResults(results);
  //     } catch (error) {
  //       console.error("Arama hatası:", error);
  //       setSearchResults([]);
  //     }
  //   } else {
  //     setSearchResults([]);
  //   }
  // };

  // const handleSelectLocation = (result: any) => {
  //   const lat = parseFloat(result.y);
  //   const lng = parseFloat(result.x);

  //   setSelectedLocation({ lat, lng });
  //   setMapCenter([lat, lng]);
  //   setSearchInput(result.label);
  //   setSearchResults([]);
  // };

  // Validate schema
  const yupSchema = object().shape({
    firstname: string().min(2, "Firstname must be at least 2 characters").required("Firstname is required!"),
    lastname: string().min(2, "Lastname must be at least 2 characters").required("Lastname is required!"),
    email: string()
      .email("Email must be a valid email!")
      .required("Email is required!")
      .lowercase(),
    phone: string().required("Phone number is required!"),
    note: string().max(500, "The text exceeded the 500-word limit!"),
  });

  const handleSubmit = () => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        formik.submitForm();
      } else {
        toast.error("Please fill in all required fields!");
        formik.setTouched({
          firstname: true,
          lastname: true,
          email: true,
          phone: true,
          note: false,
        });
      }
    });
  };

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      note: "",
    },
    validationSchema: yupSchema,
    onSubmit: (values, actions) => {
      toast.success("Message sent success!");
      actions.setSubmitting(false);
      actions.resetForm({ values: formik.initialValues });
    },
  });

  return (
    <section className="mt-15.75 lg:mt-34.5">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <Button
            onClick={() => router.push("/order")}
            variant="default"
            className="bg-dark-coffee px-2.5 py-2.5 w-7.5 h-7.5 lg:w-12.5 lg:h-12.5 rounded-full flex items-center justify-center"
          >
            <Arrow stroke="#fff" />
          </Button>
          <article className="text-center grow">
            <h1 className="text-dark-coffee font-tinos font-bold leading-[100%] text-[30px] lg:text-[5rem]">
              Checkout
            </h1>
          </article>
        </div>
        <div className="mt-10 lg:mt-60">
         <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <fieldset>
              <legend className="font-semibold lg:font-medium text-[14px] lg:text-[30px] leading-[100%] font-popins">
                Order data
              </legend>
              <div className="my-7.5 lg:my-15">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-center">
                  <div>
                    <Input
                      className="w-full text-dark-coffee font-popins font-normal text-[11.93px] lg:text-[25px] leading-[110%] h-12.5 lg:h-25"
                      type="text"
                      name="firstname"
                      placeholder="First name"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.firstname}
                    />
                    {formik.errors.firstname && formik.touched.firstname && (
                      <p className="text-red-500 text-[0.875rem] pl-5 pt-0.5">
                        {formik.errors.firstname}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      className="w-full text-dark-coffee font-popins font-normal text-[11.93px] lg:text-[25px] leading-[110%] h-12.5 lg:h-25"
                      type="text"
                      name="lastname"
                      placeholder="Last name"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.lastname}
                    />
                    {formik.errors.lastname && formik.touched.lastname && (
                      <p className="text-red-500 text-[0.875rem] pl-5 pt-0.5">
                        {formik.errors.lastname}
                      </p>
                    )}
                  </div>
                  {/* <Input className="text-dark-coffee font-popins font-normal text-[11.93px] lg:text-[25px] leading-[110%] h-12.5 lg:h-25" type="text" name="" placeholder="Phone number" /> */}
                  {/* <PhoneInput className="" placeholder="Enter your phone number" value={value} onChange={() => setValue}/> */}
                      <PhoneInput
                        name="phone"
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                      />
                  <div>
                    <Input
                      className="w-full text-dark-coffee font-popins font-normal text-[11.93px] lg:text-[25px] leading-[110%] h-12.5 lg:h-25"
                      type="text"
                      name="email"
                      placeholder="Email address"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email && (
                      <p className="text-red-500 text-[0.875rem] pl-5 pt-0.5">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <Textarea
                    rows={12}
                    className="w-full col-span-2 font-popins font-normal text-[11.93px] lg:text-[25px] leading-[110%] mt-5 lg:mt-8"
                    name="note"
                    placeholder="Note"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.note}
                  />
                  {formik.errors.note && formik.touched.note && (
                    <p className="text-red-500 text-[0.875rem] pl-5 pt-0.5">
                      {formik.errors.note}
                    </p>
                  )}
                </div>
              </div>
              <legend className="text-[14px] lg:text-[30px] font-medium leading-[110%] font-popins">
                Order time
              </legend>
              <div className="flex space-x-10 my-7.5 lg:my-15">
                <div className="flex items-center gap-2">
                  <Radio
                    defaultChecked
                    type="radio"
                    value="Order now"
                    name="ordertime"
                    id="ordernow"
                    variant="custom"
                    className="radio"
                  />
                  <label
                    htmlFor="ordernow"
                    className="text-[12px] lg:text-[25px] font-popins leading-[100%] font-normal text-deep-walnut"
                  >
                    Order now
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    type="radio"
                    value="Order later"
                    name="ordertime"
                    id="orderlater"
                    variant="custom"
                    className="radio"
                  />
                  <label
                    htmlFor="orderlater"
                    className="text-[12px] lg:text-[25px] font-popins leading-[100%] font-normal text-deep-walnut"
                  >
                    Order later
                  </label>
                </div>
              </div>

              <legend className="text-[14px] lg:text-[30px] font-medium leading-[110%] font-popins">
                Order method
              </legend>
              <div className="flex space-x-10 my-7.5 lg:my-15">
                <div className="flex items-center gap-2">
                  <Radio
                    defaultChecked
                    type="radio"
                    value="Delivery"
                    name="ordermethod"
                    id="delivery"
                    variant="custom"
                    className="radio"
                  />
                  <label
                    htmlFor="delivery"
                    className="text-[12px] lg:text-[25px] font-popins leading-[100%] font-normal text-deep-walnut"
                  >
                    Delivery
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    type="radio"
                    value="Take a way"
                    name="ordermethod"
                    id="takeaway"
                    variant="custom"
                    className="radio"
                  />
                  <label
                    htmlFor="takeaway"
                    className="text-[12px] lg:text-[25px] font-popins leading-[100%] font-normal text-deep-walnut"
                  >
                    Take a way
                  </label>
                </div>
              </div>

              <legend className="text-[14px] lg:text-[30px] font-medium leading-[110%] font-popins">
                Payment method
              </legend>
              <div className="flex flex-col space-y-3.75 lg:space-y-10 my-7.5 lg:my-15">
                <div className="w-full lg:w-135 bg-dust-grey/10 rounded-[10px] lg:rounded-[20px] flex items-center gap-2 px-6.25 py-3.25 lg:py-7 lg:px-13.5">
                  <Radio
                    defaultChecked
                    type="radio"
                    value="Cash On Delivery"
                    name="paymentmethod"
                    id="cashondelivery"
                    variant="custom"
                    className="radio"
                  />
                  <label
                    htmlFor="cashondelivery"
                    className="text-[12px] lg:text-[25px] font-popins leading-[100%] font-normal text-deep-walnut"
                  >
                    Cash On Delivery
                  </label>
                </div>
                <div className="w-full lg:w-135 bg-dust-grey/10 rounded-[10px] lg:rounded-[20px] flex items-center gap-2 px-6.25 py-3.25 lg:py-7 lg:px-13.5">
                  <Radio
                    type="radio"
                    value="BCA Virtual Account"
                    name="paymentmethod"
                    id="bcavirtualaccount"
                    variant="custom"
                    className="radio"
                  />
                  <label
                    htmlFor="bcavirtualaccount"
                    className="text-[12px] lg:text-[25px] font-popins leading-[100%] font-normal text-deep-walnut"
                  >
                    BCA Virtual Account
                  </label>
                </div>
                <div className="w-full lg:w-135 bg-dust-grey/10 rounded-[10px] lg:rounded-[20px] flex items-center gap-2 px-6.25 py-3.25 lg:py-7 lg:px-13.5">
                  <Radio
                    type="radio"
                    value="Credit Card"
                    name="paymentmethod"
                    id="creditcard"
                    variant="custom"
                    className="radio"
                  />
                  <label
                    htmlFor="creditcard"
                    className="text-[12px] lg:text-[25px] font-popins leading-[100%] font-normal text-deep-walnut"
                  >
                    Credit Card
                  </label>
                </div>
              </div>

              <legend className="font-popins font-medium text-[14px] lg:text-[30px] leading-[110%] my-7.5 lg:my-15">
                Shipping address
              </legend>
              <div className="grid grid-cols-4 lg:grid-cols-7 gap-x-2.5 lg:gap-x-10.5 items-center">
                <Input
                  className="bg-dust-grey/10 form w-full h-12.5 lg:h-full font-normal text-deep-walnut placeholder:text-deep-walnut text-[12px] lg:text-[25px] col-span-3 lg:col-span-6 lg:py-10 lg:px-18.25 leading-[100%]"
                  type="text"
                  placeholder="Please type your address"
                  variant="outline"
                // value={searchInput}
                // onChange={handleSearchInput}
                />
                {/* Arama sonuçları dropdown */}
                {/* {searchResults.length > 0 && (
                  <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md mt-2 max-h-60 overflow-y-auto z-10 shadow-lg">
                    {searchResults.map((result, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
                        onClick={() => handleSelectLocation(result)}
                      >
                        <span className="text-sm">{result.label}</span>
                      </li>
                    ))}
                  </ul>
                )} */}
                <Button
                  className="bg-blue-bell h-12.5 lg:h-25 lg:col-span-1 text-white py-7 lg:py-10 px-7 text-[12px] lg:text-[25px] font-semibold font-popins leading-[100%] rounded-[10px] lg:rounded-[20px]"
                  variant="default"
                  onClick={(e: MouseEvent<HTMLButtonElement>) =>
                    e.preventDefault()
                  }
                >
                  Search
                </Button>
                <Button
                  variant="default"
                  className="bg-dust-grey/10 h-12.5 lg:h-25 text-[12px] lg:text-[25px] gap-7 col-span-full lg:col-span-6 flex justify-start text-cinnabar py-7 px-6.25 lg:py-10 lg:px-18.25 mt-6.25 lg:mt-10.25 leading-[100%] font-normal font-popins rounded-[6.31px] lg:rounded-[20px] border-0"
                  onClick={(e: MouseEvent<HTMLButtonElement>) =>
                    e.preventDefault()
                  }
                >
                  <Subtract /> Use your current location
                </Button>
              </div>

              <div className="mt-3.5 lg:mt-10 rounded-lg overflow-hidden shadow-lg">
                <MapContainer
                  scrollWheelZoom={false}
                  center={[40.885147, -73.9220459]}
                  zoom={13}
                  className="w-full h-164.75 rounded-xl z-10"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[40.885147, -73.9220459]}>
                    <Popup>
                      <div>
                        <p>Test message</p>
                      </div>
                    </Popup>
                  </Marker>
                  {/* {selectedLocation && (
                    <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
                      <Popup>
                        <div className="text-center">
                          <p className="font-semibold">Seçili Konum</p>
                          <p className="text-sm">
                            {selectedLocation.lat.toFixed(4)}, {selectedLocation.lng.toFixed(4)}
                          </p>
                        </div>
                      </Popup>
                    </Marker>
                  )} */}
                </MapContainer>
              </div>
              <div className="flex items-center justify-center mt-10 mb-[74.36px] lg:mt-25 lg:mb-31.25">
                <Button
                  onClick={handleSubmit}
                  className="w-full lg:w-135 rounded-[20px] py-9 font-popins font-normal lg:font-semibold text-[16px] lg:text-[25px] leading-[110%]"
                  type="submit"
                >
                  Order now
                </Button>
              </div>
            </fieldset>
          </form>
         </FormikProvider>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss transition={Slide} pauseOnHover draggable stacked />
    </section>
  );
};
