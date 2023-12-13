'use client'

import { useFormStatus } from "react-dom";

export default function ButtonSubmit({ value, ...props }) {
    const { pending } = useFormStatus();
    return (
        <button disabled={pending} {...props}>
            {pending ? "Submitting..." : value}
        </button>
    );
}
