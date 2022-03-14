import { FormEventHandler } from 'react'
import Select, { components } from 'react-select'
import Creatable from 'react-select'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const computerOptions = [
    { value: 'laptop', label: '💻 Laptop' },
    { value: 'desktop', label: '🖥 Asztali gép' },
]

const toolOptions = [
    { value: 'wordpad', label: 'Jegyzettömb', icon: '/notepad.png' },
    { value: 'firefox', label: 'Firefox', icon: '/firefox.png' },
    { value: 'chrome', label: 'Chrome', icon: '/chrome.png' },
    { value: 'safari', label: 'Safari', icon: '/safari.png' },
]

const PreferencesPage = () => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault()
        navigate('/email-confirmation')
    }

    const computerOptions = [
        { value: 'laptop', label: '💻' + t('computerOptions.laptop') },
        { value: 'desktop', label: '🖥' + t('computerOptions.desktop') },
    ]

    return (
        <form onSubmit={handleSubmit}>
            <Select options={computerOptions} placeholder= {t("select")+ "..."} />
            <Creatable
                isMulti
                placeholder= {t("select")+ "..."}
                options={toolOptions}
                components={{
                    Option: ({ children, ...rest }) => (
                        <components.Option {...rest}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    columnGap: '8px',
                                }}
                            >
                                <img style={{ height: '16px', width: '16px' }} src={rest.data.icon} alt="" />
                                {children}
                            </div>
                        </components.Option>
                    ),
                }}
            />
            <input type="submit" value={t<string>('register')} />
        </form>
    )
}

export default PreferencesPage
