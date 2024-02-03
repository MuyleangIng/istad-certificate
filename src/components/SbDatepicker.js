'use client'
import React, { useState } from 'react';
import Datepicker from "tailwind-datepicker-react";
import {RiArrowLeftSFill, RiArrowRightSFill, RiCalendar2Fill} from "react-icons/ri";

const options = {
    title: "Date of Birth",
    inputDateFormatProp: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    },
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
        background: "bg-gray-50 dark:bg-gray-800",
        todayBtn: "",
        clearBtn: "",
        icons: "display-none",
        text: "",
        disabledText: "bg-gray-100 dark:bg-gray-900",
        input: "pl-9",
        inputIcon: "relative right-0.5",
        selected: "",

    },
    icons: {
        calendar: () => <RiCalendar2Fill />,
        prev: () => <RiArrowLeftSFill />,
        next: () => <RiArrowRightSFill />,
    },
    datepickerClassNames: "top-full",
    defaultDate: new Date("2000-01-01"),
    language: "en",
};

function SbDatepicker(props) {
    const [show, setShow] = useState(false);

    const handleChange = (selectedDate) => {
        if (props.onChange) {
            props.onChange(selectedDate);
        }
    };

    const handleClose = (state) => {
        setShow(state);
        if (props.setShow) {
            props.setShow(state);
        }
    };

    const defaultValue = props.value ? new Date(props.value) : new Date("2000-01-01");
    return (
        <div className={"gap-4 "}>
            <Datepicker
                options={{...options, defaultDate: defaultValue}}
                value={defaultValue}
                onChange={handleChange}
                show={show}
                setShow={handleClose}
            />
        </div>

    );
}


export default SbDatepicker;