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
          background: "transparent",
          color: "#FFF",
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          background: "#020617",
          border: "1px solid white",
          color: "#FFF",
        }),
        option: (baseStyles) => {
          return {
            ...baseStyles,
            backgroundColor: "#000",
            color: "#FFF",
            cursor: "pointer",
            transition: "all .1s",

            ":active": {
              ...baseStyles[":active"],
              backgroundColor: "transparent",
            },
            ":hover": {
              ...baseStyles[":hover"],
              background: "#030922",
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
