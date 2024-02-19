import Select from "react-select";

interface SelectProps {
    value: any;
    onChange: any;
    options: any;
    loading: any;
}

export function SelectComponent({ value, onChange, options, loading }: SelectProps) {
  return (
    <Select
      isSearchable
      value={value}
      onChange={onChange}
      options={options}
      getOptionLabel={(item: any) => item.name}
      getOptionValue={(item: any) => item.id.toString()}
      isLoading={loading}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          background: "#0f172a",
          color: "#FFF",
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          background: "#1e293b",
          color: "#FFF",
        }),
        option: (baseStyles) => {
          return {
            ...baseStyles,
            backgroundColor: "transparent",
            color: "#FFF",
            cursor: "pointer",
            transition: "all .1s",

            ":active": {
              ...baseStyles[":active"],
              backgroundColor: "transparent",
            },
            ":hover": {
              ...baseStyles[":hover"],
              background: "#334155",
            },
          };
        },
        singleValue: (baseStyles) => {
          return {
            ...baseStyles,
            color: "#FFF",
          };
        },
      }}
    />
  );
}
