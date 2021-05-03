<?php

namespace ColoredCow\LaravelMobileAPI\Traits;

use Closure;

trait CanHaveAPIEndPoints
{
    protected $isApi = true;
    protected $apiVersion = 'v1';
    private $versionIndex = 1;

    protected function resolveApiRequest()
    {
        $request = request();
        $requestSegments = collect($request->segments());
        $this->isApi = $requestSegments->first() == 'api';
        $this->apiVersion = $requestSegments->get($this->versionIndex);
    }

    public function isApi()
    {
        $this->resolveApiRequest();
        return $this->isApi;
    }

    public function returnFormattedResponse($arg1 = [], $arg2 = '')
    {
        if ($this->isApi()) {
            return $this->sendApiResponse($arg1, $arg2);
        }

        return $this->sendWebResponse($arg1, $arg2);
    }

    protected function sendApiResponse($arg1, $arg2)
    {
        if (is_array($arg1)) {
            return response()->json($arg1, 200);
        }

        if ($arg1 instanceof Closure) {
            return $arg1();
        }
    }

    protected function sendWebResponse($arg1, $arg2)
    {
        if (is_string($arg2)) {
            return view($arg2)->with($arg1);
        }

        if ($arg2 instanceof Closure) {
            return $arg2();
        }
    }

    public function renderErrorResponseForAPI($exception)
    {
        if (method_exists($exception, 'getStatusCode')) {
            $statusCode = ($exception->getStatusCode()) ?: 500;
        }

        if (get_class($exception) == 'Illuminate\Auth\AuthenticationException') {
            $statusCode = 404;
        }

        return response()->json([
            'error' => true,
            'message' => $exception->getMessage(),
            'status-code' => $statusCode
        ], $statusCode);
    }
}
