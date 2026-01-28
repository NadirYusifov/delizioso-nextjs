import Link from "next/link";

export default function LoginButton() {
  return (
    <>
      <Link href={"/login"}>
        <button className="header-btn cursor-pointer flex items-center justify-center bg-medium-jungle rounded-full text-white text-[14px] w-28 h-12 font-semibold leading-5">
          Log in
        </button>
      </Link>
    </>
  );
}
