import getOrders from "@/actions/get-orders";
import { OrderClient } from "./components/client";
import { formatter } from "@/lib/utils";


export const revalidate = 0;

interface OrderPageProps {
  params:{
    orderId: string
  }
}

const OrderPage: React.FC<OrderPageProps> = async ({
  params
}) => {
  const orders = await getOrders();

  const formattedOrders = orders.map((item) => ({
    id: item.id,
    phone: item.phone,
    address: item.address,
    products: item.orderItems.map((orderItem) => {
        const productName = orderItem.product.name || 'Name Product Tidak tersedia'
        const productStock = orderItem.quantity || 'Quantity tidak tersedia'
        return `${productName} (Quantity Order: ${productStock})`
    }).join(', '),
    totalPrice: formatter.format(item.total),
    // totalPrice: formatter.format(item.orderItems.reduce((total, item) => {
    //     return total + Number(item.product.price)
    // }, 0)),
    isPaid: item.isPaid,
    createdAt: (item.createdAt)
}))


  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        {/* @ts-ignore */}
      <OrderClient data={formattedOrders}/>

      </div>
    </div>
   );
}
 
export default OrderPage;