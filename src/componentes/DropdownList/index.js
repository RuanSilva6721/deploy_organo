import './DropdownList.css'

const DropdownList = (props) => {
  return (
    <div className="lista-suspensa">
            <label>{props.label}</label>
            <select value={props.valor} onChange={e => props.aoAlterado(e.target.value)}  required={props.obrigatorio}>
              <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            
            </select>
      
    </div>
  )
}

export default DropdownList
