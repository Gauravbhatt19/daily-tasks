<?php

namespace ColoredCow\LaravelMobileAPI;

use Illuminate\Support\Facades\Auth;
use Closure;

class RestAPIMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $type = '')
    {
        if($type == 'auth') {
            return $this->handleAuthRequest($request, $next);
        }
        
        return $next($request);
    }

    private function handleAuthRequest($request, $next) {
        $user = $request->user();
        Auth::setUser($user);
        return $next($request);
    }
}