<?php
/*
Plugin Name: Popup Creator
Plugin URI: http://example.com/
Description: Creates Beautiful popup
Version: 1.0
Author: sadat himel
Author URI: http://example.com/
License: GPLv2 or later
Text Domain: popupcreator
Domain Path: /languages
 */

class PopupCreator {
    public function __construct() {
        add_action( 'plugin_loaded', [$this, 'load_textdomain'] );
        add_action( 'init', [$this, 'register_cpt_popups'] );
    }

    public function load_textdomain() {
        load_plugin_textdomain( 'popupcreator', false, plugin_dir_path( __FILE__ ) . '/languages' );
    }

/// Register Custom Post Type
    function register_cpt_popups() {

        $labels = [
            'name'           => __( 'Poppus', 'popupscreator' ),
            'singular_name'  => __( 'Popups', 'popupscreator' ),
            'featured_image' => __( 'Popups image', 'popupscreator' ),
            'set_featured_image' => __('Set popups image', 'popupscreator') 
        ];
        $args = [
            'label'               => __( 'Popups', 'popupscreator' ),
            'description'         => __( 'Post Type Description', 'popupscreator' ),
            'labels'              => $labels,
            'supports'            => ['title', 'thumbnail'],
            'taxonomies'          => ['category', 'post_tag'],
            'hierarchical'        => false,
            'public'              => true,
            'show_ui'             => true,
            'show_in_menu'        => true,
            'menu_position'       => 5,
            'show_in_admin_bar'   => true,
            'show_in_nav_menus'   => true,
            'can_export'          => true,
            'has_archive'         => true,
            'exclude_from_search' => false,
            'publicly_queryable'  => true,
            'capability_type'     => 'page',
        ];
        register_post_type( 'popup', $args );

    }

}

new PopupCreator();