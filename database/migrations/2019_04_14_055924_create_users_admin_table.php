<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersAdminTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_admin', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('created');
            $table->integer('modified');
            $table->string('name', 100);
            $table->string('email', 50)->unique()->nullable(false);
            $table->string('phone', 50);
            $table->string('password', 100);
            $table->date('birthday');
            $table->tinyInteger('status')->default('0')->nullable(false);
            $table->text('permissions');
            $table->text('address');
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
        Schema::dropIfExists('users_admin');
    }
}
