
import React from 'react'
import { Card, Image, Button } from 'react-bootstrap'
import style from '../CSS/Result.module.css'
import { connect } from 'react-redux'
import { addHero } from './Redux/actions'

const Result = ({heroes, result, addHero }) => {

    const handleAdd = (array) => {
        let badCounter = 0;
        let goodCounter = 0;
       
        array.map((hero) => {
            console.log(hero.biography.alignment)
            let align = hero.biography.alignment
            if (align === 'good') {
                goodCounter++
                console.log(goodCounter)
            } else if (align === 'bad') {
                badCounter++
                console.log(badCounter)
            }
        })
        if (array.length >= 6) {
            return alert('Hero could not be added. Remember that you can only have up to 6 members')
        }else if((result.biography.alignment === 'bad') && (badCounter >= 3 )){
            return alert ('Try adding a hero')
        } else if ((result.biography.alignment === 'good') && (goodCounter >= 3 )) {
            return alert ('Try adding a villain')
        } else {
            alert('Hero added to team')
            return addHero(result)
            
        }
        
    
    }
  
    return (
        <Card className={style.card} style={{ display: 'inline-table' }} >
            <Image src={result.image.url} style={{ maxWidth: '200px' }} />
            <Card.Title>{result.name}</Card.Title>
            <Button className={style.button} onClick={() => handleAdd(heroes)}>Add to Team</Button>
        </Card>
    )
}

const mapStateToProps = (state) => ({
    heroes: state.heroes
})

const mapDispatchToProps = (dispatch) => ({
    addHero: (member) => dispatch(addHero(member))
})
export default connect(mapStateToProps, mapDispatchToProps)(Result)
