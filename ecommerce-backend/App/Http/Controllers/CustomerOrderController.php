<?php

namespace App\Http\Controllers;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CustomerOrderController extends Controller
{
    // Search products
    public function search(Request $r)
    {
        $q = $r->query('q');
        return Product::where('name','like',"%$q%")->get();
    }

    // Get or create cart
    protected function cart(Request $r)
    {
        return Cart::firstOrCreate(['user_id'=>$r->user()->id]);
    }

    // Add to cart
    public function addToCart(Request $r)
    {
        $data = $r->validate([
            'product_id'=>'required|exists:products,id',
            'quantity'=>'required|integer|min:1',
        ]);
        $product = Product::findOrFail($data['product_id']);
        if($product->stock < $data['quantity']) {
            return response()->json(['error'=>'Not enough stock'],422);
        }
        $cart = $this->cart($r);
        $item = $cart->items()->updateOrCreate(
            ['product_id'=>$product->id],
            ['quantity'=>$data['quantity']]
        );
        return response()->json($item,201);
    }

    // View cart
    public function viewCart(Request $r)
    {
        return $this->cart($r)->load('items.product');
    }

    // Checkout
    public function checkout(Request $r)
    {
        $cart = $this->cart($r)->load('items.product');
        if($cart->items->isEmpty()) {
            return response()->json(['error'=>'Cart is empty'],422);
        }

        return DB::transaction(function() use($cart, $r) {
            $total = 0;
            foreach($cart->items as $item) {
                $total += $item->quantity * $item->product->price;
                // decrement stock
                $item->product->decrement('stock',$item->quantity);
            }
            $order = Order::create([
                'user_id'=>$r->user()->id,
                'total'=>$total,
            ]);
            foreach($cart->items as $item) {
                OrderItem::create([
                    'order_id'=>$order->id,
                    'product_id'=>$item->product->id,
                    'quantity'=>$item->quantity,
                    'price'=>$item->product->price,
                ]);
            }
            // clear cart
            $cart->items()->delete();
            return response()->json($order->load('items.product'),201);
        });
    }

    // View customer orders
    public function myOrders(Request $r)
    {
        return $r->user()->orders()->with('items.product')->get();
    }
}
