const { registerBlockType } = wp.blocks;

/*Logo para el bloque*/
import { ReactComponent as Logo } from '../pizzeria-icon.svg';

registerBlockType('lapizzeria/textoimagen',{
	title:'Pizzeria Texto e Imagen',
	icon: { src: Logo },
	category: 'lapizzeria',
	edit:props =>{
		return(
				<p>Desde el Editor</p>
			)
	},
	save:props =>{
		return(
				<p>Desde el FrontEnd</p>
			)
	}
});