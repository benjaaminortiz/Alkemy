import React, { useEffect, useState } from 'react'
import axios from 'axios';
import style from '../CSS/HeroDetail.module.css'
import { Spinner } from 'react-bootstrap';
import {useParams} from 'react-router-dom'
const API_KEY = process.env.REACT_APP_API_KEY;


const HeroDetail = (props) => {

    const [isLoading, setLoading] = useState(true);
    const [hero, setHero] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (localStorage.length === 0) {

           props.history.push('/')
            setLoading(false);


        } else {
        (async function fetching() {
            await axios.get(`https://superheroapi.com/api/${API_KEY}/${id}`)
                .then(res => {
                    let { appearance, biography, name, work } = res.data

                    const img = Object.values(res.data.image)
                    appearance = Object.values(appearance);
                    biography = Object.values(biography);
                    work = Object.values(work);

                    console.log(hero)
                    setHero([name, appearance, biography, work, img])
                    setLoading(false);

                }).catch(error => console.log(error))
        })();
    }}, [])

    let appe = hero[1];
    let bio = hero[2];
    let work = hero[3];



    return (

        <div className={style.main}>
            {isLoading ?
                <div className={style.loadwrapper}>
                    <div className={style.loading}>
                        <Spinner animation="border" variant="light" />
                        <h1> Loading details... </h1>
                    </div>
                </div>
                :
                <div className={style.wrapper}>
                    <div className={style.one}>
                        <img src={hero[4]} alt={bio[0]} />
                    </div>
                    <div className={style.two}>
                        <div className={style.dataWrapper} >
                            <h1>
                                {bio[0]}
                            </h1>
                            <h4>Aliases:</h4>
                            {bio[2].map((alias) => {
                                return <h6>{alias}</h6>
                            })}
                            <h4>Work Place:</h4>
                            <h6>{work[1]}</h6>
                <div className={style.appearance}>
                        <h3>Appearance</h3>
                        <h5>Hair Color:</h5><h6> {appe[5]}</h6>
                        <h5>Eyes color:</h5> <h6>{appe[4]}</h6>
                        <h5>Weight:</h5> {appe[3].map((unit) => {
                            return <h6>{unit}</h6>
                        })}
                        <h5>Height:</h5> {appe[2].map((unit) => {
                            return <h6>{unit}</h6>
                        })}
                        </div>
                        </div>
                    </div>
                </div>
            }


        </div>
    )


}

export default HeroDetail
