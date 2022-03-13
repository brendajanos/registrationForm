import  { FormEventHandler } from 'react'
import Select, { components } from 'react-select'
import Creatable from 'react-select'
import { useNavigate } from 'react-router-dom'


const computerOptions = [
    { value: 'laptop', label: '💻 Laptop' },
    { value: 'desktop', label: '🖥 Asztali gép' },
]

const toolOptions = [
    { value: 'wordpad', label: 'Jegyzettömb', icon:"/notepad.png" },
    { value: 'firefox', label: 'Firefox', icon:"/firefox.png" },
    { value: 'chrome', label: 'Chrome', icon:"/chrome.png" },
    { value: 'safari', label: 'Safari', icon:"/safari.png" },
]

const PreferencesPage = () => {
    const navigate = useNavigate()

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault()
        navigate("/email-confirmation")

    }

    return (
        <form onSubmit={handleSubmit}>
            <Select options={computerOptions} />
            <Creatable
                isMulti
                options={toolOptions}
                components={{
                    Option: ({ children, ...rest }) => (
                        <components.Option {...rest}>
                            <div style={{display: 'flex',flexDirection: 'row',alignItems: 'center',columnGap: '8px' }}>
                                <img style={{ height: '16px', width: '16px' }} src={rest.data.icon} alt="" />
                                  {children}
                            </div>
                        </components.Option>
                    ),
                }}
            />
            <input type="submit" value="Regisztráció" />
        </form>
    )
}

export default PreferencesPage
