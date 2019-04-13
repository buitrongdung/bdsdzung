<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RespositoryProvides extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
          'App\Respositories\User\UserInterface',
          'App\Respositories\User\UserRespository'
        );
    }
}
