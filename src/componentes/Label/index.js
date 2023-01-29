import './Label.css'
const Label = (props) => {

  const placeholderModificada  = `${props.placeholder}...`

  const aoDigitar = (e) => {
    props.aoAlterado(e.target.value)
  }
  return (
    <div className="campo-texto">
        <label>
          {props.label}
        </label>
        <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} type="text" name="name" placeholder={placeholderModificada}/>
    </div>
  )
}

export default Label