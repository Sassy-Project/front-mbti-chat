import Label from '../styled-components/Label';
import BasicSelect from '../styled-components/BasicSelect';

interface LabelBasicSelectProps {
  label: string;
  text: string;
  id: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  hasError?: boolean;
  errorMessage?: string;
}

const LabelBasicSelect = (props: LabelBasicSelectProps) => {
  const { label, text, id, value, options, onChange, onBlur, hasError, errorMessage } = props;
  return (
    <div className='FormContainer'>
      <Label htmlFor={label} text={text} />
      <BasicSelect
        id={id}
        value={value}
        onChange={onChange}
        options={options}
        onBlur={onBlur}
        hasError={hasError}
      />
      {hasError && <span className='BasicInput__error'>{errorMessage}</span>}
    </div>
  );
};

export default LabelBasicSelect;
