<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\Auth\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [LoginController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    /**
     * Revoke all user's tokens.
     * @authenticated
     */
    Route::get('/revoke/tokens', function (Request $request) {
        return ['revokedTokens' => $request->user()->tokens()->delete()];
    });
    Route::get('/data', [HomeController::class, 'dashboard']);

    Route::post('/task/store', [TaskController::class ,'store']);
    Route::post('/task/update/{task}', [TaskController::class ,'update']);
    Route::get('/task/completed/{task}', [TaskController::class ,'completed']);
    Route::get('/task/pending/{task}', [TaskController::class ,'pending']);
});
