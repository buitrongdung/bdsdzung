<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('created');
            $table->integer('modified');
            $table->string('name', 100);
            $table->string('email', 50)->unique()->nullable(false);
            $table->string('password', 100);
            $table->date('birthday');
            $table->string('phone', 50);
            $table->tinyInteger('status')->default(0)->nullable(false);
            $table->text('address');
            $table->text('permissions');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
