import { useState } from 'react';

const OPTIONS = [
  { name: 'Aaata', price: 200 },
  { name: 'grape', price: 100 },
  { name: 'maidha', price: 50 },
];

export default function App() {
  const [selectedItem, setSelectedItem] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    const item = OPTIONS.find((item) => item.name === value);
    setSelectedItem(item);
  };

  return (
    <>
      <label htmlFor="category">Category </label>
      <select
        value={selectedItem.name || ''}
        id="category"
        onChange={handleChange}
      >
        <option value="" disabled>
          Select Item
        </option>
        {OPTIONS.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      <div>
        <label htmlFor="category2">Category</label>
        <InterviewDropdown
          options={OPTIONS}
          label="category2"
          value={selectedItem.name}
          placeholder="Select an item"
          onChange={setSelectedItem}
        />
      </div>
    </>
  );
}

const InterviewDropdown = ({
  options,
  label,
  value,
  placeholder,
  onChange,
}) => {
  const handleChange = (e) => {
    const value = e.target.value;
    const item = options.find((i) => i.name === value);
    onChange(item);
  };
  return (
    <>
      <select id={label} value={value || ''} onChange={handleChange}>
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((opt) => (
          <option key={opt.name} value={opt.name}>
            {opt.name}
          </option>
        ))}
      </select>
    </>
  );
};
