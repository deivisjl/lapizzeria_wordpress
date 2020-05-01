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
		},
		textBox:{
			type:'string',
			source:'html',
			selector:'.box p'
		}
	},
	edit:(props)=>{

		//console.log(props);
		//extraer el componetido desde props
		const { attributes: { headingBox, textBox }, setAttributes } = props;

		const onChangeHeadingBox = (nuevoHeading) =>{
			setAttributes({ headingBox: nuevoHeading });
		}

		const onChangeTextBox = (nuevoTexto) =>{
			setAttributes({ textBox: nuevoTexto });
		}


		return (
			<div className="box">
				<h2>
					<RichText 
						placeholder="Agrega el encabezado"
						onChange={onChangeHeadingBox}
						value={ headingBox }/>
				</h2>
				<p>
					<RichText placeholder="Agrega el texto"
					onChange={onChangeTextBox}
					value={textBox}/>
				</p>
			</div>
		)
	},
	save:(props)=>{

		//console.log(props);
		//extraer el componetido desde props
		const { attributes: { headingBox, textBox } } = props;

		/*const onChangeHeadingBox = (nuevoHeading) =>{
			setAttributes({ headingBox: nuevoHeading });
		}*/

		return (
			<div className="box">
				<h2>
					<RichText.Content value={headingBox}/>
				</h2>
				<p>
					<RichText.Content value={textBox}/>
				</p>
			</div>
		)
	}
});