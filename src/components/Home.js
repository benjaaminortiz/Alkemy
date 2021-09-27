import React, { Component, useState } from 'react'
import axios from 'axios';
import style from '../CSS/Home.module.css'
import { Spinner} from 'react-bootstrap'
import Teams from './Teams'
import Result from './Result'
import { connect } from 'react-redux';
import Search from './Search';
import Average from './Average';
import wave from './Wave.svg'

export const API_KEY = process.env.REACT_APP_API_KEY;
const apiUrl = `https://superheroapi.com/api/${API_KEY}`

const Home = ({ heroes }) => {
 
    return (
        <div className={style.main}>
              <img alt='background' className={style.background} src={wave}></img>
            {(heroes.length === 0) ? <div className={style.wrapper}>
                {<div className={style.loading}>
                    <Spinner animation="border" variant="light" />
                    <h1> Loading heroes... </h1>
                </div>}
            </div>
                :
                <div>
                <div className={style.title}><h1>SuperHeroAPI!</h1>
                <div><Search/></div>
                <div className={style.avg}><Average heroes={heroes}/></div>
               </div>
               
               <div><Teams/></div>
                           
           </div> }
        </div>
    )
}
const mapStateToProps = (state) => ({
    heroes: state.heroes
})


export default connect(mapStateToProps)(Home)

// export default class Home extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             team1: [],
//             team2: [],
//             results:[],
//             loaded: false,

//         }
//     }




//     render() {

//         const { team1, team2, loaded } = this.state

//         const handleDelete = (id, team) => {
//             if (team === 'team1') {
//                 team1.splice(id, 1)
//                 this.setState({
//                     team1,
//                 })
//             } else if (team === 'team2') {
//                 team2.splice(id, 1)
//                 this.setState({
//                     team2,
//                 })
//             }
//         }
//        async function whileDo() {
//             let i = 1; 
//           await axios.get(`${apiUrl}/${API_KEY}/${i}`)
//             .then(res => console.log(res.data))


//         }


//         return (
//             <div className={style.main}>

//                 <div>
//                     {loaded ? <div >
//                         <div className={style.title}><h1>SuperHeroAPI!</h1>
//                         <button onClick={()=> whileDo}>Click me!</button>
//                         </div>

//                         <Formik
//                             onSubmit={async (values) => {

//                                 await axios.get(`${apiUrl}/search/${values.search}`)
//                                     .then(res => {
//                                         const { response, results } = res.data
//                                         if (response === 'success') {
//                                            this.setState({
//                                                results,
//                                            })

//                                         } else return alert('No se han encontrado heroes')
//                                     })
//                             }
//                             }
//                             initialValues={
//                                 { search: '' }
//                             }
//                             validate={(values) => {
//                                 let errors = {}
//                                 if (!values.search) {
//                                     errors.search = 'Por favor ingrese un nombre'
//                                 }
//                                 return errors
//                             }}
//                         >
//                             {(props) => {
//                                 return (
//                                     <Form onSubmit={props.handleSubmit}>
//                                         <input

//                                             type='search'
//                                             label='search'
//                                             name='search'
//                                             placeholder='Search your favourite hero'
//                                             onChange={props.handleChange}
//                                             value={props.values.search}

//                                         >
//                                         </input>
//                                         <button type='submit' >Search</button>

//                                         {props.errors.search && <span>{props.errors.search}</span>}
//                                     </Form>)
//                             }}
//                         </Formik>

//                             <div className={style.team}>
//                       {this.state.results.map((result) => {
//                           return <Result  result={result}/>
//                       })}</div>


//                         <div className={style.team}>

//                             <Container fluid='sm'>
//                                 <h1> Team Justice </h1>
//                                 {team1.map((hero) => {
//                                     return (<div>
//                                         <Team name={hero[0]}
//                                             powerstats={hero[1]}
//                                             img={hero[2]}
//                                             alignment={hero[3]}
//                                             id={hero[4]}
//                                             teamName='Team Guardians' />
//                                         <button  onClick={() => handleDelete(team1.indexOf(hero), 'team1')}>Delete</button></div>)

//                                 })}


//                             </Container>
//                         </div>
//                         <div className={style.team}>
//                             <Container fluid='sm'>
//                                 <h1> Team Warriors </h1>
//                                 {team2.map((hero) => {
//                                     return (<div>
//                                         <Team name={hero[0]}
//                                             powerstats={hero[1]}
//                                             img={hero[2]}
//                                             alignment={hero[3]}
//                                             id={hero[4]}
//                                             teamName='Team Guardians' />
//                                         <button className={style.close} onClick={() => handleDelete(team2.indexOf(hero), 'team2')}>Delete</button></div>)

//                                 })}
//                             </Container>
//                         </div>
//                     </div>

//                         :

//                         <div className={style.wrapper}>
//                             {<div className={style.loading}>
//                                 <Spinner animation="border" variant="light" />
//                                 <h1> Loading heroes... </h1>
//                             </div>}
//                         </div>
//                     }
//                 </div>
//             </div>
//         )
//     }


// }
