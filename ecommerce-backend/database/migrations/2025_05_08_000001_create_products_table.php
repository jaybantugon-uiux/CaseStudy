<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    public function up()
    {
        Schema::create('products', function (Blueprint $t) {
            $t->id();
            $t->string('name');
            $t->text('description')->nullable();
            $t->decimal('price', 10, 2);
            $t->integer('stock')->default(0);
            $t->string('image')->nullable();
            $t->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('products');
    }
}
