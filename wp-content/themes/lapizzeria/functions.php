<?php 

function lapizzeria_setup(){

	/* titulos para SEO*/
	add_theme_support('title-tag');
	/* Gutenberg */

	/* Soporte de estilos por default de gutenberg en el tema*/
	add_theme_support('wp-block-styles');

	//Soporte para contenido completo
	add_theme_support('align-wide');

	//Paleta de colores
	add_theme_support('editor-color-palette', array(
		array(
			'name'=>'Rojo',
			'slug'=>'rojo',
			'color'=>'#a61206'
		),
		array(
			'name'=>'Naranja',
			'slug'=>'naranja',
			'color'=>'#F19F30'
		),

		array(
			'name'=>'Verde',
			'slug'=>'verde',
			'color'=>'#127427'
		),
		array(
			'name'=>'Blanco',
			'slug'=>'blanco',
			'color'=>'#fff'
		),
		array(
			'name'=>'Negro',
			'slug'=>'negro',
			'color'=>'#000'
		)
	));

	//deshabilita la personalizacion de colores en la paleta de gutenberg
	add_theme_support('disable-custom-colors');

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

/* Zona de widgets */
function lapizzeria_widgets(){
	register_sidebar(array(
		'name' => 'Blog Sidebar',
		'id' => 'blog_sidebar',
		'before_widget' => '<div class="widget">',
		'after_widget' => '</div>',
		'before_title' => '<h3>',
		'after_title' => '</h3>'
	));
}

add_action('widgets_init','lapizzeria_widgets');

/* Agregar botones a paginador */
function lapizzeria_botones_paginador(){
	return 'class="boton boton-secundario"';
}

/* Aplicar filtros para agregar clases a botones de paginacion */
add_filter('next_posts_link_attributes','lapizzeria_botones_paginador');
add_filter('previous_posts_link_attributes','lapizzeria_botones_paginador');