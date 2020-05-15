const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;
const { RichText, InspectorControls } = wp.editor;
const { PanelBody, RangeControl, SelectControl } = wp.components;

/*Logo para el bloque*/
import { ReactComponent as Logo } from '../pizzeria-icon.svg';

registerBlockType('lapizzeria/menu',{
	title:'La Pizzeria Menu',
	icon: { src: Logo },
	category: 'lapizzeria',
	attributes:{
		cantidadMostrar:{
			type:'number',
			//default:4
		}
	},
	edit: withSelect((select, props) =>{

		const { attributes: { cantidadMostrar }, setAttributes } = props;

		const onChangeCantidadMostrar = nuevaCantidad => {
			setAttributes({ cantidadMostrar : parseInt(nuevaCantidad) })
		}

		return {
			categorias: select("core").getEntityRecords('taxonomy','categoria-menu'),
			//enviar una peticion a la API
			especialidades: select("core").getEntityRecords('postType','especialidades',{
				per_page: cantidadMostrar || 4
			}),
			onChangeCantidadMostrar,
			props
			//especialidades declarada en el postType
		};
	})

	(({categorias, especialidades, onChangeCantidadMostrar, props})=>{

		// Verificar especialidades
        if(!especialidades) {
            return 'Cargando...';
        }

        // Si no hay especialidades
        if(especialidades && especialidades.length === 0) {
            return 'No hay resultados';
        }

        //Verificar categorias
        if(!categorias){
        	return 'Cargando...';
        }
        if(categorias && categorias.length === 0)
        {
        	return 'No hay resultados';
        }

        //Generar label y values a categorias
        categorias.forEach(categoria => {
        	categoria['label'] = categoria.name;
        	categoria['value'] = categoria.id;
        })	

        const { attributes: { cantidadMostrar } } = props;

		return (
				<>
				<InspectorControls>
					<PanelBody
						title={'Cantidad a Mostrar'}
						initialOpen={true}
					>
						<div className="components-base-control">
							<div className="components-base-control__field">
								<label className="components-base-control__label">
									Cantidad a Mostrar
								</label>
								<RangeControl
									onChange={onChangeCantidadMostrar}
									min={1}
									max={10}
									value={cantidadMostrar || 4}
								/>
							</div>
						</div>
					</PanelBody>
					<PanelBody
						title={'Categoría de especialidad'}
						initialOpen={false}
					>
						<div className="components-base-control">
							<div className="components-base-control__field">
								<label className="components-base-control__label">
									Categoría de especialidad
								</label>
								<SelectControl
									options={categorias}
								/>
							</div>
						</div>
					</PanelBody>

				</InspectorControls>
				<h2 className="titulo-menu">Nuestras Especialidades</h2>
				<ul className="nuestro-menu">
					{especialidades.map(especialidad=>(
						<li>
							<img src={especialidad.imagen_destacada} />							
							<div className="platillo">
								<div className="precio-titulo">
									<h3>{especialidad.title.rendered}</h3>
									<p>$ {especialidad.precio}</p>
								</div>
								<div className="contenido-platillo">
									<p>
										<RichText value={especialidad.content.rendered.substring(0,180)}/>
									</p>
								</div>
							</div>
						</li>
					))}
				</ul>
				</>
		)
	}),
	save:()=>{
		return null
	}
})