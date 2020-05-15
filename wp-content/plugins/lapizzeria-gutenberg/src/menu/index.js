const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;

/*Logo para el bloque*/
import { ReactComponent as Logo } from '../pizzeria-icon.svg'

registerBlockType('lapizzeria/menu',{
	title:'La Pizzeria Menu',
	icon: { src: Logo },
	category: 'lapizzeria',
	edit: ()=>{

	},
	save:()=>{
		
	}
});