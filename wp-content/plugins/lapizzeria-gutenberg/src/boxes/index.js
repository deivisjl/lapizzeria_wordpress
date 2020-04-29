const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

//logo para el bloque

import {ReactComponent as Logo } from '../pizzeria-icon.svg';

/*
	PASOS PARA CREAR UN BLOQUE EN GUTENBERG
	1.- Importar el componente que utilizaras
	2.- Coloca el componente donde deseas utilizarlo
	3.- Crea una funcion que lea los contenidos
	4.- Registra un atributo
	5.- Extraer el contenido desde props
	6.- Guarda el contenido con setAttributes
	7.- Lee los contenidos guardados en save()
*/

registerBlockType('lapizzeria/boxes', {
	title:'Pizzeria Cajas',
	icon:{ src: Logo },
	category:'lapizzeria',
	attributes:{
		headingBox: {
			type:'string',
			source:'html',
			selector:'.box h2'
		}
	},
	edit:(props)=>{

		//console.log(props);
		//extraer el componetido desde props
		const { attributes: { headingBox }, setAttributes } = props;

		const onChangeHeadingBox = (nuevoHeading) =>{
			//console.log(nuevoHeading);
		}

		return (
			<div className="box">
				<h2>
					<RichText 
						placeholder="Agrega el encabezado"
						onChange={onChangeHeadingBox}/>
				</h2>
			</div>
		)
	},
	save:()=>{
		return(
			<h1>Se ve en el frontend</h1>
		)
	}
});