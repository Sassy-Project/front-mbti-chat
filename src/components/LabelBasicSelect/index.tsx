import Label from '../styled-components/Label';
import BasicSelect from '../styled-components/BasicSelect';

interface LabelBasicSelectProps {
  label?: string;
  text?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: { value: string; label: string }[];
  onBlur?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  hasError?: boolean;
  errorMessage?: string;
}

const LabelBasicSelect = (props: LabelBasicSelectProps) => {
  const { label, text, value, onChange, options, onBlur, hasError, errorMessage } = props;
  return (
    <div className='FormContainer'>
      <Label htmlFor={label} text={text} />
      <BasicSelect
        value={value}
        onChange={onChange}
        options={options}
        onBlur={onBlur}
        hasError={hasError}
      />
      {hasError ? <span className='BasicInput__error'>{errorMessage}</span> : null}
    </div>
  );
};

export default LabelBasicSelect;
