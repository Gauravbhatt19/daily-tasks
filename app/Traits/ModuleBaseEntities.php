<?php

namespace App\Traits;

use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use ColoredCow\LaravelMobileAPI\Traits\CanHaveAPIEndPoints;

trait ModuleBaseEntities
{
    use ValidatesRequests, CanHaveAPIEndPoints;

    use AuthorizesRequests {
        resourceAbilityMap as resourceAbilityMapTrait;
    }

    function resourceAbilityMap()
    {
        // Map the "index" ability to the "index" function in our policies
        return array_merge($this->resourceAbilityMapTrait(), ['index' => 'index']);
    }
}
