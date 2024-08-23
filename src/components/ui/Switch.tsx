const Switch = ({
  checked,
  onChange,
  className,
  children,
}: {
  checked: boolean;
  onChange: Function;
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={className}>
      <input
        type="checkbox"
        name="themeSwitch"
        id="themeSwitch"
        hidden
        checked={checked}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
      <label htmlFor="themeSwitch" className="w-full cursor-pointer">
        {children}
      </label>
    </div>
  );
};

export default Switch;
