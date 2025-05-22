<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartsAndItems extends Migration
{
    public function up()
    {
        Schema::create('carts', function (Blueprint $t) {
            $t->id();
            $t->foreignId('user_id')->constrained()->onDelete('cascade');
            $t->timestamps();
        });

        Schema::create('cart_items', function (Blueprint $t) {
            $t->id();
            $t->foreignId('cart_id')->constrained()->onDelete('cascade');
            $t->foreignId('product_id')->constrained()->onDelete('cascade');
            $t->integer('quantity');
            $t->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('cart_items');
        Schema::dropIfExists('carts');
    }
}
