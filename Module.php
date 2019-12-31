<?php

/**
 * @see       https://github.com/laminas-api-tools/api-tools-admin-ui for the canonical source repository
 * @copyright https://github.com/laminas-api-tools/api-tools-admin-ui/blob/master/COPYRIGHT.md
 * @license   https://github.com/laminas-api-tools/api-tools-admin-ui/blob/master/LICENSE.md New BSD License
 */

namespace Laminas\ApiTools\Admin\Ui;

class Module
{
    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }
}
