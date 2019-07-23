<?php
/*
Plugin Name: Guy Buttery
Plugin URI: https://guybuttery.co.za
Description: A plugin to keep custom code for the WordPress/Nuxt integration
Version: 1.0
Author: Jason Tame
License: GPL2
*/

/****************************************************************************************************************
 * Custom Post types
 *
 */
function create_tour_post_type() {
    register_post_type( 'tours', // /casestudies instead of /posts
        array(
            'labels' => array(
                'name' => __( 'Tours' ),
                'singular_name' => __( 'Tour' )
                
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true,

        )
    );
}
add_action( 'init', 'create_tour_post_type' );