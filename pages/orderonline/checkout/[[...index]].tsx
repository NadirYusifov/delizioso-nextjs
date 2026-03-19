"use client";

import L from "leaflet";
import { MouseEvent, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { Input } from "@/common/input";
import { Button } from "@/common/button";
import { Arrow } from "@/common/icon/arrow";
import "leaflet-geosearch/dist/geosearch.css";
// import { useEffect, useState } from "react";
// import { OpenStreetMapProvider } from "leaflet-geosearch";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Textarea } from "@/common/textarea";
import { Subtract } from "@/common/icon/subtract";

export const Checkout = () => {
  // const [searchInput, setSearchInput] = useState("");
  // const [searchResults, setSearchResults] = useState<any[]>([]);
  // const [selectedLocation, setSelectedLocation] = useState<{
  //   lat: number;
  //   lng: number;
  // } | null>(null);
  // const [mapCenter, setMapCenter] = useState<[number, number]>([0, 0]);

  // const provider = new OpenStreetMapProvider();

  // // Harita marker iconunu düzeltme
  useEffect(() => {
    const iconUrl = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png";
    const iconRetinaUrl = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png";
    const shadowUrl = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png";

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

  return (
    <section className="mt-15.75 lg:mt-34.5">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <Button variant="default" className="bg-dark-coffee w-7.5 h-7.5 lg:w-12.5 lg:h-12.5 rounded-full flex items-center justify-center">
            <Arrow />
          </Button>
          <article className="text-center grow">
            <h1 className="text-dark-coffee font-tinos font-bold leading-[100%] text-[30px] lg:text-[5rem]">
              Checkout
            </h1>
          </article>
        </div>
        <div className="mt-10 lg:mt-60">
          <form>
            <fieldset>
              <legend className="font-semibold lg:font-medium text-[14px] lg:text-[30px] leading-[100%] font-popins">Order data</legend>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 my-7.5 lg:my-15">
                <Input className="text-dark-coffee font-popins font-normal text-[11.93px] lg:text-[25px] leading-[110%]" placeholder="First name" />
                <Input className="text-dark-coffee font-popins font-normal text-[11.93px] lg:text-[25px] leading-[110%]" placeholder="Last name" />
                <Input className="text-dark-coffee font-popins font-normal text-[11.93px] lg:text-[25px] leading-[110%]" placeholder="Phone number" />
                <Input className="text-dark-coffee font-popins font-normal text-[11.93px] lg:text-[25px] leading-[110%]" placeholder="Email address" />
                <Textarea rows={12} className="w-full col-span-2 font-popins font-normal text-[11.93px] lg:text-[25px] leading-[110%]" placeholder="Note" />
              </div>
              <legend className="text-[14px] lg:text-[30px] font-medium leading-[110%] font-popins">Order time</legend>
              <div className="flex space-x-10 my-15">
                <div className="flex items-center gap-2">
                  <input
                    className="radio radio-success radio-sm lg:radio-md"
                    name="ordertime"
                    id="ordernow"
                    value="Order now"
                    type="radio"
                    defaultChecked
                  />
                  <label htmlFor="ordernow" className="text-[12px] lg:text-[25px] font-popins leading-[100%] font-normal text-deep-walnut">Order now</label>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    className="radio radio-success radio-sm lg:radio-md"
                    name="ordertime"
                    id="orderlater"
                    value="Order later"
                    type="radio"
                  />
                  <label htmlFor="orderlater" className="text-[12px] lg:text-[25px] font-popins leading-[100%] font-normal text-deep-walnut">Order later</label>
                </div>
              </div>

              <legend className="text-[14px] lg:text-[30px] font-medium leading-[110%] font-popins">Order method</legend>
              <div className="flex space-x-10 my-7.5 lg:my-15">
                <div className="flex items-center gap-2">
                  <input
                    className="radio radio-success radio-sm lg:radio-md"
                    name="ordermethod"
                    id="delivery"
                    value="Delivery"
                    type="radio"
                    defaultChecked
                  />
                  <label htmlFor="delivery" className="text-[12px] lg:text-[25px] font-popins leading-[100%] font-normal text-deep-walnut">Delivery</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="radio radio-success radio-sm lg:radio-md"
                    name="ordermethod"
                    id="takeaway"
                    value="Take a way"
                    type="radio"
                  />
                  <label htmlFor="takeaway" className="text-[12px] lg:text-[25px] font-popins leading-[100%] font-normal text-deep-walnut">Take a way</label>
                </div>
              </div>

              <legend className="text-[14px] lg:text-[30px] font-medium leading-[110%] font-popins">Payment method</legend>
              <div className="flex flex-col space-y-3.75 lg:space-y-10 my-7.5 lg:my-15">
                <div className="w-full lg:w-135 bg-dust-grey/10 rounded-[20px] flex items-center gap-2 py-7 px-13.5">
                  <input
                    className="radio radio-success radio-sm lg:radio-md"
                    name="paymentmethod"
                    id="cashondelivery"
                    value="Cash On Delivery"
                    type="radio"
                    defaultChecked
                  />
                  <label htmlFor="cashondelivery" className="text-[12px] lg:text-[25px] font-popins leading-[100%] font-normal text-deep-walnut">Cash On Delivery</label>
                </div>
                <div className="w-full lg:w-135 bg-dust-grey/10 rounded-[20px] flex items-center gap-2 py-7 px-13.5">
                  <input
                    className="radio radio-success radio-sm lg:radio-md"
                    name="paymentmethod"
                    id="bcavirtualaccount"
                    value="BCA Virtual Account"
                    type="radio"
                  />
                  <label htmlFor="bcavirtualaccount" className="text-[12px] lg:text-[25px] font-popins leading-[100%] font-normal text-deep-walnut">BCA Virtual Account</label>
                </div>
                <div className="w-full lg:w-135 bg-dust-grey/10 rounded-[20px] flex items-center gap-2 py-7 px-13.5">
                  <input
                    className="radio radio-success radio-sm lg:radio-md"
                    name="paymentmethod"
                    id="creditcard"
                    value="Credit Card"
                    type="radio"
                  />
                  <label htmlFor="creditcard" className="text-[12px] lg:text-[25px] font-popins leading-[100%] font-normal text-deep-walnut">Credit Card</label>
                </div>
              </div>

              <legend className="font-popins font-medium text-[14px] lg:text-[30px] leading-[110%] my-7.5 lg:my-15">Shipping address</legend>
              <div className="grid grid-cols-3 lg:grid-cols-7 gap-x-2.5 lg:gap-x-10.5">
                <Input
                  className="form w-full font-normal text-deep-walnut placeholder:text-deep-walnut text-[12px] lg:text-[25px] col-span-2 lg:col-span-6 px-18.25 leading-[100%]"
                  type="text"
                  placeholder="Please type your address"
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
                  className="bg-blue-bell lg:col-span-1 text-white mt-2 py-10 px-7 text-[12px] lg:text-[25px] font-semibold font-popins leading-[100%] rounded-[20px]"
                  variant="default"
                  onClick={(e: MouseEvent<HTMLButtonElement>) => e.preventDefault()}
                >Search</Button>
                <Button
                  variant="default"
                  className="bg-dust-grey/10 text-[12px] lg:text-[25px] gap-7 col-span-full lg:col-span-6 flex justify-start text-cinnabar py-10 px-18.25 mt-10.25 leading-[100%] font-normal font-popins rounded-[20px] border-0"
                  onClick={(e: MouseEvent<HTMLButtonElement>) => e.preventDefault()}
                ><Subtract/> Use your current location</Button>
              </div>

              <div className="mt-3.5 lg:mt-10 rounded-lg overflow-hidden shadow-lg">
                <MapContainer center={[40.885147, -73.9220459]} zoom={13} className="w-full h-164.75 rounded-xl z-10">
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
                <Button className="w-full lg:w-135 rounded-[20px] py-9 font-popins font-normal lg:font-semibold text-[16px] lg:text-[25px] leading-[110%]" type="submit">Order now</Button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};
