<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita7c3fec8cb0e86db1cd37d392452db1f
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'ColoredCow\\LaravelMobileAPI\\Test\\' => 33,
            'ColoredCow\\LaravelMobileAPI\\' => 28,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'ColoredCow\\LaravelMobileAPI\\Test\\' => 
        array (
            0 => __DIR__ . '/../..' . '/tests',
        ),
        'ColoredCow\\LaravelMobileAPI\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita7c3fec8cb0e86db1cd37d392452db1f::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita7c3fec8cb0e86db1cd37d392452db1f::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}