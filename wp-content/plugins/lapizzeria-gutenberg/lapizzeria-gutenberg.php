<?php 
/*
	Plugin Name: La Pizzeria Gutenberg Blocks
	Plugin: URI
	Description: Agrega bloques de Gutenberg nativos
	Version: 1.0
	Author URI: deivisjl
	License: https://www.gnu.org/licences/gpl-2.0.html
*/

if(!defined('ABSPATH')) exit;

/** Registrar bloques, scripts y CSS **/
function lapizzeria_registrar_bloques(){

	//Si gutenberg no existe, salir
	if(function_exists('register_block_type')){
		return;
	}

	//Registrar los bloques en el editor
	wp_register_script(
		'lapizzeria-editor-script', //nombre unico
		plugins_url('build/index.js', __FILE__), //archivos con los bloques
		array('wp-blocks','wp-i18n','wp-element','wp-editor'), //dependencias
		filemtime(plugin_dir_path(__FILE__).'build/index.js') //ultima version
	);

	//estilos para el editor (unicamente en gutenberg)
	wp_register_style(
		'lapizzeria-editor-styles', //nombre
		plugins_url('build/index.js', __FILE__), //archivos CSS con los bloques
		array('wp-edit-blocks'),
		filemtime(plugin_dir_path(__FILE__). 'build/editor.css')
	);

	//estilos para los bloques (backend y fronted)
	wp_register_style(
		'lapizzeria-fronted-styles', //nombre
		plugins_url('build/index.js', __FILE__), //archivos CSS con los bloques
		array(),
		filemtime(plugin_dir_path(__FILE__). 'build/styles.css')
	);

	//Arreglo de bloques
	$blocks = [
		'lapizzeria/boxes'
	];

	//Recorrer bloques y agregar scripts y styles
	foreach ($blocks as $block) {
		register_block_type($block, array(
			'editor_script' => 'lapizzeria-editor-script', //script principal
			'editor_style' => 'lapizzeria-editor-styles', //estilos para el editor
			'style' => 'lapizzeria-fronted-styles' //estilos para el frontend
		));
	}
}

add_action('init','lapizzeria_registrar_bloques');