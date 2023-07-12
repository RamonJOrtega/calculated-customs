
interface AspectDataList {
    id: String
}

export default function AspectDataList(props: any) {
    return (
      <datalist id={props.id} >
        <option value="10"></option><option value="15"></option><option value="20"></option><option value="25"></option>
        <option value="30"></option><option value="35"></option><option value="40"></option><option value="45"></option>
        <option value="50"></option><option value="55"></option><option value="60"></option><option value="75"></option>
        <option value="80"></option><option value="85"></option><option value="90"></option><option value="95"></option>
        <option value="100"></option>
      </datalist>
  )}
  