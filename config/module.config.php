<?php
return array(
    'asset_manager' => array(
        'resolver_configs' => array(
            'paths' => array(
                __DIR__ . '/../dist/',
            ),
        ),
    ),
    'view_manager' => array(
        'template_map' => array(
            'api-tools-ui' => __DIR__ . '/../view/api-tools-ui.phtml',
        ),
    ),
);
