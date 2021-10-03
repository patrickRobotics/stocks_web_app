import { useReducer } from 'react'
import { Button, TextField } from '@material-ui/core'

export function DateFilter({ endDate, onFilterByDates, code }) {
    const firstDate = endDate ? endDate : new Date()
    const a = new Date(firstDate)
    const today = new Date()
    const thirtyDays = new Date(new Date().setDate(today.getDate()-30))
    const startDate = thirtyDays.toISOString().slice(0, 10)
    const lastDate = a.toISOString().slice(0, 10)

    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            startDate: startDate,
            endDate: lastDate
        }
    )

    const handleSubmit = evt => {
        evt.preventDefault();
        let data = { formInput }
        const filterText = `${code}?start_date=${data.formInput.startDate}&end_date=${data.formInput.endDate}`
        onFilterByDates({filterText})
    }

    const handleInput = evt => {
        const name = evt.target.name
        const newValue = evt.target.value
        setFormInput({ [name]: newValue })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="start_date" defaultValue={ startDate }
                    label="Start Date" name="startDate" type="date" onChange={ handleInput }
                    InputLabelProps={{  shrink: true, }}
                />
                <TextField
                    id="end_date" defaultValue={ lastDate } 
                    label="End Date" type="date" name="endDate" onChange={ handleInput }
                    InputLabelProps={{ shrink: true, }}
                />
                <Button
                    type="submit" variant="contained"
                    color="secondary"
                >
                    Filter by Dates
                </Button>
            </form>
        </div>
    );
}
