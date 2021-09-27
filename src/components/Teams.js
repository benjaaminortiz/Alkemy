import React from 'react'
import TeamMember from './TeamMember';
import style from '../CSS/Teams.module.css'
import { Container, Spinner, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

const Teams = ({ heroes }) => {


    return (
        <div>

            {(heroes.length === 0) ? <div className={style.wrapper}>
                {<div className={style.loading}>
                    <Spinner animation="border" variant="light" />
                    <h1> Loading heroes... </h1>
                </div>}
            </div>
                : <div>
                    <div className={style.team}>
                        <div className={style.header}>
                            <div className={style.title}> <h1>Team Justice</h1></div>
                           
                        </div>
                        <Container className={style.container} fluid='sm'>
                            <Row>
                           { heroes.map((hero)=> {
                               return  <Col lg={6}> <TeamMember hero={hero} /></Col>
                           })}
                           </Row>
                        </Container>
                    </div>
                </div>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    heroes: state.heroes
})


export default connect(mapStateToProps)(Teams)