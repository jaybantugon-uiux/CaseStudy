<?php

use Illuminate\Support\Facades\Gate;

class AuthServiceProvider
{
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('isCustomer', fn($user)=> $user->role==='customer');
        Gate::define('isEmployee', fn($user)=> $user->role==='employee');
    }
}
