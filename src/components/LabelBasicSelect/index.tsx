import Label from '../styled-components/Label';
import BasicSelect from '../styled-components/BasicSelect';

const LabelBasicSelect = (props: any) => {
  const { label, text, value, onChange, options } = props;
  return (
    <div>
      <Label htmlFor={label} text={text} />
      <BasicSelect value={value} onChange={onChange} options={options} />
    </div>
  );
};

export default LabelBasicSelect;
