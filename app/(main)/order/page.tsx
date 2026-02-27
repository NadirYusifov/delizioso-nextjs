import { OrderList } from "@/pages/orderonline/orderlist"
import { PastaList } from "@/pages/orderonline/pastalist"
import { PizzaList } from "@/pages/orderonline/pizzalist"

export default function Order() {
    return (
            <main className="flex container mx-auto px-4">
                <div className="flex flex-col">
                <PastaList />
                </div>
                <OrderList />
            </main>
    )
}

