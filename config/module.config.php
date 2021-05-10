<?php

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
