import { useState } from "react";
// import "@/components/phonenumberinput/style.css";
import "react-phone-number-input/style.css";
import Input from "react-phone-number-input";

export const PhoneInput = () => {
  const [value, setValue] = useState();

  return (
    <>
      <style>
        {`
            .PhoneInput {
                position: relative;
            }
                
            .PhoneInputInput {
                width: 100%;
                height: 3.125rem;
                background-color: #fafaf9;
                
                border-radius: 10px;
                color: #311f09;
                font-family: Popins, sans-serif;
                font-weight: 400;
                font-size: 11.93px;
                line-height: 110%;
                outline: none;
                position: absolute;
                padding: 0 0 0 120px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .PhoneInputCountry {
                width: 71.46px;
                height: 32.91px;
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                align-self: center;
                position: relative;
                z-index: 10;
                margin-left: 15px;
                border-radius: 4.7px 
            }
                
            .PhoneInputCountryIcon {
                width: 22.57px;
                height: 22.57px;
                border-radius: 100%;
            }

            .PhoneInputCountryIconImg {
                width: 22.57px;
                height: 22.57px;
                border-radius: 100%;
                aspect-ratio: 1 / 1;
                object-fit: cover;
            }
            
            .PhoneInputCountrySelectArrow {
                color: #311f09;
                margin-left: 9.4px;
                width: 7.05px;
                height: 7.05px;
            }

            .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon + .PhoneInputCountrySelectArrow {
                color: #311f09;
            }

            .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon--border {
                box-shadow: 0 0 0 #311f09
            }

            @media screen and (width >= 64rem) {
              .PhoneInputInput {
                  height: 6.25rem;
                  border-radius: 20px;
                  font-size: 25px;
                  padding: 0 0 0 200px;
            }
              .PhoneInputCountry {
                  width: 152px;
                  height: 70px;
                  border-radius: 20px;
              }

              .PhoneInputCountrySelectArrow {
                  width: 15px;
                  height: 15px;
                  margin-left: 20px;
              }

              .PhoneInputCountryIconImg {
                  width: 48px;
                  height: 48px;
              }
              
              .PhoneInputCountryIcon {
                  width: 48px;
                  height: 48px;
                  border-radius: 100%;
              }
            }
        `}
      </style>

      <Input
        international
        placeholder="Enter your phone"
        defaultCountry="DE"
        countryCallingCodeEditable={false}
        value={value}
        onChange={() => setValue}
      />
    </>
  );
};
