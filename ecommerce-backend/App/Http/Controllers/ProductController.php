<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // employee-only
    public function index()   { return Product::all(); }
    public function show($id){ return Product::findOrFail($id); }

    public function store(Request $r)
    {
        $p = Product::create($r->validate([
            'name'=>'required',
            'description'=>'nullable',
            'price'=>'required|numeric',
            'stock'=>'required|integer|min:0',
            'image'=>'nullable|url',
        ]));
        return response()->json($p,201);
    }

    public function update(Request $r, $id)
    {
        $p = Product::findOrFail($id);
        $p->update($r->validate([
            'name'=>'sometimes|required',
            'description'=>'nullable',
            'price'=>'sometimes|required|numeric',
            'stock'=>'sometimes|required|integer|min:0',
            'image'=>'nullable|url',
        ]));
        return response()->json($p);
    }

    public function destroy($id)
    {
        $p = Product::findOrFail($id);
        // prevent deletion if ordered
        if($p->orderItems()->exists()) {
            return response()->json(
              ['error'=>'Cannot delete a product that has been ordered'], 403
            );
        }
        $p->delete();
        return response()->json(null,204);
    }
}
