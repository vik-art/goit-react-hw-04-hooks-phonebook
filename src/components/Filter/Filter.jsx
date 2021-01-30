import React from 'react';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) =>

<div className={s.filter}>
<label className={s.label}>Фильтр по имени
<input type="text" className={s.input} value={value} onChange={onChange}/>
</label>
</div>

export default Filter;