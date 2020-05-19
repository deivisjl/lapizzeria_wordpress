const { registerBlockType } = wp.blocks;
const { MediaUpload } = wp.editor;
const { IconButton } = wp.components;

// Logo para el bloque
import { ReactComponent as Logo } from '../pizzeria-icon.svg';

registerBlockType('lapizzeria/galeria', {
	title: 'La Pizzeria Galeria',
	icon: { src: Logo },
	category: 'lapizzeria',
	edit: props => {
		return(<h1>En el editor</h1>)
	},
	save: props => {
		return(<h1>En el frontend</h1>)
	}
})