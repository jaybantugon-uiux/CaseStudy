<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    AuthController,
    ProductController,
    CustomerOrderController,
    CheckoutMonitoringController
};

// Public
Route::post('register',[AuthController::class,'register']);
Route::post('login',[AuthController::class,'login']);
Route::get('products/search',[CustomerOrderController::class,'search']);

// Protected
Route::middleware('auth:sanctum')->group(function(){

    Route::post('logout',[AuthController::class,'logout']);

    // Customer (role middleware)
    Route::middleware('can:isCustomer')->group(function(){
        Route::get('cart',[CustomerOrderController::class,'viewCart']);
        Route::post('cart',[CustomerOrderController::class,'addToCart']);
        Route::post('checkout',[CustomerOrderController::class,'checkout']);
        Route::get('my-orders',[CustomerOrderController::class,'myOrders']);
    });

    // Employee
    Route::middleware('can:isEmployee')->group(function(){
        // Product CRUD
        Route::apiResource('products',ProductController::class);
        // Checkout monitoring
        Route::get('checkouts',[CheckoutMonitoringController::class,'index']);
        Route::get('checkouts/{id}',[CheckoutMonitoringController::class,'show']);
    });
});
