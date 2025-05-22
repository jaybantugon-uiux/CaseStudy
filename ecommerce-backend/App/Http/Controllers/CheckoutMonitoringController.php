<?php

namespace App\Http\Controllers;
use App\Models\Order;
use Illuminate\Http\Request;

class CheckoutMonitoringController extends Controller
{
    public function index(Request $r)
    {
        $q = Order::with('user','items.product');
        if($r->has('from') && $r->has('to')) {
            $q->whereBetween('created_at', [$r->query('from'), $r->query('to')]);
        }
        return $q->get();
    }

    public function show($id)
    {
        return Order::with('user','items.product')->findOrFail($id);
    }
}
