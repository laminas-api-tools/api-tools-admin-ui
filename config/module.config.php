<?php
return array(
    'asset_manager' => array(
        'resolver_configs' => array(
            'paths' => array(
                'ui' => __DIR__ . '/../dist',
            ),
        ),
    ),
    'view_manager' => array(
        'template_map' => array(
            'laminas/app/app' => __DIR__ . '/../view/api-tools-ui.phtml',
        ),
    ),
);
