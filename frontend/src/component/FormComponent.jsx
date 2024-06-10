import { TextInput, DropdownSingle, CheckboxList, RadioList, DatePicker } from 'oolib';
import '../App.css';

const componentMap = {
  TextInput,
  DropdownSingle,
  CheckboxList,
  RadioList,
  DatePicker,
};

export default function FormComponent({ formData }) {
  return (
    <div className='fields'>
      {formData?.map(({ comp, props }) => {
        const Component = componentMap[comp];
        return Component ? <Component className="field" key={props.id} onChange={() => { }} {...props} /> : null;
      })}
    </div>
  )
}