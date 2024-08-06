import { SELECT } from "./style";

interface SelectProps {
    name: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
}

const SelectS: React.FC<SelectProps> = ({ name, onChange, options }) => {
    return (
        <SELECT name={name} onChange={onChange}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </SELECT>
    );
};

export default SelectS;
