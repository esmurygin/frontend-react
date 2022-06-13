import * as React from 'react';
import style from '../styles/searchFilters.module.css'

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// npm install @mui/x-date-pickers date-fns

export default function searchfilters() {
    const [age, setAge] = React.useState('');
    const [age2, setAge2] = React.useState('');
    const [alignment, setAlignment] = React.useState('web');
    const [value, setValue] = React.useState(new Date());
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleChange2 = (event) => {
        setAge(event.target.value);
    };
    const handleChange3 = (event) => {
        setAge2(event.target.value);
    };

    return (
        <div className={style.searchFilters}>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                // value={"events"}
                exclusive
                onChange={handleChange}
                style={{ height: "32px", paddingBottom: "16px", marginTop: '16px' }}
            >
                <ToggleButton value="events" style={{ height: "32px", borderRadius: '32px 0 0 32px', textTransform:"none"}}>Мероприятия</ToggleButton>
                <ToggleButton value="organizators" style={{ height: "32px", borderRadius: '0 32px 32px 0', textTransform:"none" }} >Организаторы</ToggleButton>
            </ToggleButtonGroup>
            <hr style={{ borderTop: '1px solid #00000033', width: '100%' }}></hr>
            <div className={style.filterElements}>
                <div className={style.filterElem}>
                    <div className={style.filterElemTitle}>Местоположение</div>
                    <div className={style.filterElemChooser}>
                        <Box sx={{ minWidth: 190 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Город</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Город"
                                    onChange={handleChange2}
                                >
                                    <MenuItem value={"Москва"}>г. Москва</MenuItem>
                                    <MenuItem value={"Санкт-Петербург"}>г. Санкт-Петербург</MenuItem>
                                    <MenuItem value={"Ярославль"}>г. Ярославль</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>
                <div className={style.filterElem}>
                    <div className={style.filterElemTitle}>Дата</div>
                    <div className={style.filterElemChooser}><div> <LocalizationProvider bo dateAdapter={AdapterDateFns}><DesktopDatePicker
                        label=""
                        value={value}
                        minDate={new Date('2017-01-01')}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}

                        renderInput={(params) => <TextField style={{ border: 'none', outline: 'none', maxWidth: '150px' }} {...params} />}
                    /></LocalizationProvider></div></div>
                </div>
                <div className={style.filterElem}>
                    <div className={style.filterElemTitle}>Направление</div>
                    <div className={style.filterElemChooser}>
                        <Box sx={{ minWidth: 190 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age2}
                                    defaultValue={"Социальное"}
                                    label="Тип"
                                    onChange={handleChange3}
                                >
                                    <MenuItem value={"Социальное"}>Социальное</MenuItem>
                                    <MenuItem value={"Корпоративное"}>Корпоративное</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>
                <button className={style.searchButton}>
                    Поиск
                </button>
            </div>
        </div>
    )
}
