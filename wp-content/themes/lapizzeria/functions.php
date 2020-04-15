<?php 

/* CSS y JS*/

function lapizzeria_styles(){

	/*Agregar hojas de estilos*/
	wp_enqueue_style('normalize', get_stylesheet_uri().'/css/normalize.css', array(), '8.0.1');

	/* Google Font*/
	wp_enqueue_style('googleFont', 'https://fonts.googleapis.com/css?family=Open+Sans|Raleway:400,700,900|Staatliches&display=swap',array(),'1.0.0');

	/* Hoja de estilos personalizada*/
	wp_enqueue_style('style', get_stylesheet_uri(), array('normalize'), '1.0.0');
}

add_action('wp_enqueue_scripts','lapizzeria_styles');

/* Menus */
function lapizzeria_menus(){
	register_nav_menus(array(
		'header_menu' => 'Header menu'
	));
}

add_action('init','lapizzeria_menus');