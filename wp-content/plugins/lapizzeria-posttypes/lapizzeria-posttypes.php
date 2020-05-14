<?php

/*
	Plugin Name: La Pizzeria - Especialidades
	Plugin URI:
	Description: Añade Post Types al Sitio Web
	Version: 1.0.0
	Author: deivisjl
	Author URI: deivisjl
	Text Domain: lapizzeria
*/

if(!defined('ABSPATH')) exit;

add_action( 'init', 'lapizzeria_especialidades' );

function lapizzeria_especialidades() {
	$labels = array(
		'name'               => _x( 'Especialidades', 'lapizzeria' ),
		'singular_name'      => _x( 'Especialidad', 'post type singular name', 'lapizzeria' ),
		'menu_name'          => _x( 'Especialidades', 'admin menu', 'lapizzeria' ),
		'name_admin_bar'     => _x( 'Especialidades', 'add new on admin bar', 'lapizzeria' ),
		'add_new'            => _x( 'Agregar Nueva', 'book', 'lapizzeria' ),
		'add_new_item'       => __( 'Agregar Especialidad', 'lapizzeria' ),
		'new_item'           => __( 'Nueva Especialidad', 'lapizzeria' ),
		'edit_item'          => __( 'Editar Especialidad', 'lapizzeria' ),
		'view_item'          => __( 'Ver Especialidad', 'lapizzeria' ),
		'all_items'          => __( 'Todas las Especialidades', 'lapizzeria' ),
		'search_items'       => __( 'Buscar Especialidades', 'lapizzeria' ),
		'parent_item_colon'  => __( 'Especialidad Padre', 'lapizzeria' ),
		'not_found'          => __( 'No se encontraron especialidaides', 'lapizzeria' ),
		'not_found_in_trash' => __( 'No se encontraron especialidaides', 'lapizzeria' )
	);

	$args = array(
		'labels'             => $labels,
    'description'        => __( 'Descripción.', 'lapizzeria' ),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'menu-pizzeria' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 6,
		'supports'           => array( 'title', 'editor', 'thumbnail' ),
		'taxonomies'         =>  array('categoria-menu')
	);

	register_post_type( 'especialidades', $args );
}

/** Registrar una Taxonomia */

function lapizzeria_menu_taxonomia() {

	$labels = array(
		'name'              => _x( 'Categoria Menu', 'taxonomy general name', 'lapizzeria' ),
		'singular_name'     => _x( 'Categoria Menu', 'taxonomy singular name', 'lapizzeria' ),
		'search_items'      => __( 'Buscar Categoria Menu', 'lapizzeria' ),
		'all_items'         => __( 'Todas Categorias Menu', 'lapizzeria' ),
		'parent_item'       => __( 'Categoria Menu Padre', 'lapizzeria' ),
		'parent_item_colon' => __( 'Categoria Menu:', 'lapizzeria' ),
		'edit_item'         => __( 'Editar Categoria Menu', 'lapizzeria' ),
		'update_item'       => __( 'Actualizar Categoria Menu', 'lapizzeria' ),
		'add_new_item'      => __( 'Agregar Categoria Menu', 'lapizzeria' ),
		'new_item_name'     => __( 'Nueva Categoria Menu ', 'lapizzeria' ),
		'menu_name'         => __( 'Categoria Menu', 'lapizzeria' ),
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'categoria-menu' ),
		'show_in_rest'	    => true,
		'rest-base'	    => 'categoria-menu'
	);

	register_taxonomy( 'categoria-menu', array( 'especialidades' ), $args );
}

add_action( 'init', 'lapizzeria_menu_taxonomia', 0 );