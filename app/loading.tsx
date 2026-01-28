import Image from "next/image";
import Logo from "@/public/logoassets/logodeliziosoblack.png";

export default function Loading() {

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="pb-2">
          <Image src={Logo} width={150} height={150} alt="logo" quality={100} />
        </div>
        Loading
      </div>
    </>
  )
}
