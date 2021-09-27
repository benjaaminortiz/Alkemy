import React, { useState } from 'react'
import { Formik, useFormik } from 'formik'
import { API_KEY } from './Home'
import { Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import Result from './Result'
import style from '../CSS/Search.module.css'

const Search = () => {
    const apiUrl = `https://superheroapi.com/api/${API_KEY}`
    const [resu, setResu] = useState([]);
    const clear = () => {
        setResu([])
    }
   
    return (

        <div className={style.team}>
            <div>
                <h3 className={style.title}>Search for your favourite heroes!</h3>
                <Formik
                    onSubmit={async (values) => {

                        await axios.get(`${apiUrl}/search/${values.search}`)
                            .then(res => {
                                const { response, results } = res.data
                                if (response === 'success') {
                                    setResu(results)
                                    console.log(resu)
                                } else return alert('No se han encontrado heroes')
                            })
                    }
                    }
                    initialValues={
                        { search: '' }
                    }
                    validate={(values) => {
                        let errors = {}
                        if (!values.search) {
                            errors.search = 'Please type a name'
                        }
                        return errors
                    }}
                >
                    {(props) => {
                        return (

                            <Form onSubmit={props.handleSubmit}>
                                <input

                                    type='search'
                                    label='search'
                                    name='search'
                                    placeholder='Search your favourite hero'
                                    onChange={props.handleChange}
                                    value={props.values.search}

                                >
                                </input>
                                <button type='submit' >SEARCH</button>

                                {props.errors.search && <Alert variant='warning'>{props.errors.search}</Alert>}
                            </Form>)
                    }}
                </Formik>
                {(resu.length > 0)  && <button onClick={clear}>CLEAR</button>}
            </div>
            {resu && resu.map((result) => {
                return <Result result={result} />
            })}</div>
    )
}

export default Search
