<?php
/*
Title: Popup Settings
Post Type: popup
 */
piklist( 'field', [
    'type'        => 'text',
    'field'       => 'display_after',
    'label'       => __('Display Popup After','popupcreator'),
    'value'       => '0',
    'help'        => __('in seconds','popupcreator'),
] );

piklist( 'field', [
    'type'        => 'url',
    'field'       => 'url',
    'label'       => __('URL','popupcreator'),
] );

piklist( 'field', [
    'type'        => 'checkbox',
    'field'       => 'auto_hide',
    'label'       => __('Auto Hide','popupcreator'),
    'value'       => 1,
    'choices'  => [
        1 => __('Don\'t Hide','popupcreator'),
    ],
] );
piklist( 'field', [
    'type'        => 'checkbox',
    'field'       => 'on_exit',
    'label'       => __('Display On Exit','popupcreator'),
    'value'       => 1,
    'choices'  => [
        0 => __('Display On Exit','popupcreator'),
    ],
] );
piklist( 'field', [
    'type'        => 'select',
    'field'       => 'on_exit',
    'label'       => __('Popup Image Size','popupcreator'),
    'value'       => 'landscape',
    'choices'  => [
        'landscape' => __('Landscape','popupcreator'),
        'square' => __('Square','popupcreator'),
    ],
] );
