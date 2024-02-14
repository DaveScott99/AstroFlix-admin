import { LabelHTMLAttributes, forwardRef } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = forwardRef<HTMLLabelElement, LabelProps> (
    ({ label }: any) => {
        return(
            <>
                <label>
                    {label}
                </label>
            </>
        );
    }
)