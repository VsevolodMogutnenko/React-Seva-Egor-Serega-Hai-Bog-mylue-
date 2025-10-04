import { useState } from "react"

export const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isShowText, setIsShowText] = useState(false)

    const handleChange = (event) => {
        const {value, name} = event.target
        if(name === 'name') {
            setName(value)
        } else if(name === 'email') {
            setEmail(value)
        } else if(name === 'password') {
            setPassword(value)
        }
    }

    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value)
    // }

    // const handlePasswordChange = (event) => {
    //     setPassword(event.target.value)
    // }


    const handleSubmit = (event) => {
        event.preventDefault()
        setIsShowText(true)
        setName('')
        setEmail('')
        setPassword('')
    }
    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} name='name' onChange={handleChange}/>
            <input type="email" value={email} name='email' onChange={handleChange}/>
            <input type="password" value={password} name='password' onChange={handleChange}/>
            <button type="submit">Seva</button>
        </form>
        {isShowText && <h1>'Данные успешно отправлены!'</h1>}
    </>
}