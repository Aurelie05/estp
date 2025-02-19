<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\IsAdmin; // Importez le middleware

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Enregistrement manuel du middleware is_admin
        Route::aliasMiddleware('is_admin', IsAdmin::class);
    }
}
