<?php

namespace Laminas\ApiTools\Admin\Ui;

class Module
{
    /**
     * @return array<string, mixed>
     */
    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }
}
