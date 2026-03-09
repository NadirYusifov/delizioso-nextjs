import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
    const isCheckout = request.nextUrl.pathname === '/order/checkout'
    const hasItems = request.cookies.get('cart_items')?.value

    if (isCheckout && !hasItems) {
        return NextResponse.redirect(new URL('/order', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/order/checkout']
}