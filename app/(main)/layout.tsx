import Layout from "@/components/layouts/layout";
import React from "react";
import StoreProvider from "./StoreProvider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Layout>
      <StoreProvider>
        {children}
      </StoreProvider>
    </Layout>
  )
}
