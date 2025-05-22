<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * We’re not using any global (all-requests) middleware.
     */
    protected $middleware = [
        // (you can add global middleware here if you need them later)
    ];

    /**
     * Only the API middleware group, for sanctum + throttle + bindings.
     */
    protected $middlewareGroups = [
        'api' => [
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
    ];

    /**
     * No per-route middleware needed beyond Laravel’s basics.
     */
    protected $routeMiddleware = [
        'auth'     => \App\Http\Middleware\Authenticate::class,
        'can'      => \Illuminate\Auth\Middleware\Authorize::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
        // add your other custom middleware here…
    ];
}
