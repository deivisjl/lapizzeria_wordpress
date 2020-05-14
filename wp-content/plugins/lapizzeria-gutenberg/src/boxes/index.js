const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette } = wp.editor;
const { PanelBody } = wp.components;

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
		},
		colorFondo:{
			type:'string'
		},
		colorTexto:{
			type:'string'
		}
	},
	edit:(props)=>{

		//console.log(props);
		//extraer el componetido desde props
		const { attributes: { headingBox, textBox, colorFondo, colorTexto }, setAttributes } = props;

		const onChangeHeadingBox = (nuevoHeading) =>{
			setAttributes({ headingBox: nuevoHeading });
		}

		const onChangeTextBox = (nuevoTexto) =>{
			setAttributes({ textBox: nuevoTexto });
		}

		const onChangeColorFondo = (nuevoColor) =>{
			setAttributes({ colorFondo: nuevoColor });
		}

		const onChangeColorTexto = (nuevoColor) =>{
			setAttributes({ colorTexto: nuevoColor });
		}


		return (
			<>
				<InspectorControls>
					<PanelBody
						title={'Color de Fondo'}
						initialOpen={true}
					>
						<div className="components-base-control">
							<div className="components-base-control__field">
								<label className="components-base-control__label">
									Color de Fondo
								</label>
								<ColorPalette
									onChange={onChangeColorFondo}
									value={colorFondo}
								>
								</ColorPalette>
							</div>
						</div>
					</PanelBody>
					<PanelBody
						title={'Color de Texto'}
						initialOpen={true}
					>
						<div className="components-base-control">
							<div className="components-base-control__field">
								<label className="components-base-control__label">
									Color de Texto
								</label>
								<ColorPalette
									onChange={onChangeColorTexto}
									value={colorTexto}
								>
								</ColorPalette>
							</div>
						</div>
					</PanelBody>
				</InspectorControls>
				<div className="box" style={{ backgroundColor : colorFondo }}>
					<h2 style={{ color: colorTexto }}>
						<RichText 
							placeholder="Agrega el encabezado"
							onChange={onChangeHeadingBox}
							value={ headingBox }/>
					</h2>
					<p style={{ color: colorTexto }}>
						<RichText placeholder="Agrega el texto"
						onChange={onChangeTextBox}
						value={textBox}/>
					</p>
				</div>
			</>
		)
	},
	save:(props)=>{

		//console.log(props);
		//extraer el componetido desde props
		const { attributes: { headingBox, textBox, colorFondo, colorTexto } } = props;

		return (
			<div className="box" style={{ backgroundColor : colorFondo }}>
				<h2 style={{ color: colorTexto }}>
					<RichText.Content value={headingBox}/>
				</h2>
				<p style={{ color: colorTexto }}>
					<RichText.Content value={textBox}/>
				</p>
			</div>
		)
	}
});