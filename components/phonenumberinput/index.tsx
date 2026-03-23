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

            .PhoneInputCountry {
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                align-self: center;
                position: relative;
                z-index: 10;
                margin-left: 15px;
                border-radius: 20px
            }
                
            .PhoneInputCountryIcon {
                width: 48px;
                height: 48px;
                border-radius: 100%;
            }

            .PhoneInputCountryIconImg {
                width: 48px;
                height: 48px;
                border-radius: 100%;
                aspect-ratio: 1 / 1;
                object-fit: cover;
            }

            .PhoneInputInput {
                width: 100%;
                height: 100%;
                outline: none;
                position: absolute;
                padding: 0 0 0 200px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .PhoneInputCountrySelectArrow {
              color: #311f09;
              padding-left: 5px;
              font-size: 40px;
            }

            .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon + .PhoneInputCountrySelectArrow {
              color: #311f09;
            }

            .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon--border {
              box-shadow: 0 0 0 #311f09
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
