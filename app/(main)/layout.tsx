import Layout from '@/components/layouts/layout'
import React from 'react'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
                <Layout>
                    {children}
                </Layout>
    )
}
