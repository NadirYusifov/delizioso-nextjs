import { Button } from "@/common/button";
import Layout from "@/components/layouts/layout";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout>
      <div className="h-dvh flex flex-col items-center">
        <h1 className="text-[250px] leading-75 text-dark-orange">404</h1>
        <h3 className="text-[50px] text-medium-roast">Not Found</h3>
        <p className="text-[20px]">Could not find requested resource</p>
        <div className="p-10">
          <Link href="/">
            <Button title="Return Home" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
