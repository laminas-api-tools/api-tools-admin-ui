<?php

/**
 * @see       https://github.com/laminas-api-tools/api-tools-admin-ui for the canonical source repository
 * @copyright https://github.com/laminas-api-tools/api-tools-admin-ui/blob/master/COPYRIGHT.md
 * @license   https://github.com/laminas-api-tools/api-tools-admin-ui/blob/master/LICENSE.md New BSD License
 */

return [
    'asset_manager' => [
        'resolver_configs' => [
            'paths' => [
                __DIR__ . '/../dist/',
            ],
        ],
    ],
    'view_manager' => [
        'template_map' => [
            'api-tools-ui' => __DIR__ . '/../view/api-tools-ui.phtml',
        ],
    ],
];
