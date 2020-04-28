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
function lapizzeria_registrar_bloques{

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
}

add_action('init','lapizzeria_registrar_bloques');