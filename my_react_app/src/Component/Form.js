import { useFormContext } from "./Context/Contextuse"

function Form() {
 const {name}=useFormContext();

  return (
    <div>{name}</div>
  )
}

export default Form;