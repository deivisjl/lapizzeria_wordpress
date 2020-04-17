<?php 

function lapizzeria_setup(){

	//habilitar imagenes destacadas
	add_theme_support('post-thumbnails');

	//tamaños de imagenes
	add_image_size('nosotros',437,291,true);
	add_image_size('especialidades',768,515,true);
	add_image_size('especialidades_portrait',435,526,true);
}

/* Habilitar soporte a fotos */
add_action('after_setup_theme','lapizzeria_setup');
/* CSS y JS*/

function lapizzeria_styles(){

	/*Agregar hojas de estilos*/
	wp_enqueue_style('normalize', get_template_directory_uri().'/css/normalize.css', array(), '8.0.1');

	//cargando el slick nav menu mobil
	wp_enqueue_style('slicknavCSS', get_template_directory_uri().'/css/slicknav.min.css', array('normalize'), '1.0.10');

	/* Google Font*/
	wp_enqueue_style('googleFont', 'https://fonts.googleapis.com/css?family=Open+Sans|Raleway:400,700,900|Staatliches&display=swap',array(),'1.0.0');

	/* Hoja de estilos personalizada*/
	wp_enqueue_style('style', get_stylesheet_uri(), array('normalize'), '1.0.0');

	/* Agregar el slicknav */
	wp_enqueue_script('slicknavJS', get_template_directory_uri() . '/js/slicknav.min.js', array('jquery'), '1.0.10', true);

	/* Agregar el script */
	wp_enqueue_script('scriptsJS', get_template_directory_uri() . '/js/scripts.js', array('jquery'), '1.0.0', true);
}

add_action('wp_enqueue_scripts','lapizzeria_styles');

/* Menus */
function lapizzeria_menus(){
	register_nav_menus(array(
		'header_menu' => 'Header menu',
		'redes-sociales' => 'Redes Sociales'
	));
}

add_action('init','lapizzeria_menus');