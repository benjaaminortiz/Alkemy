import React from 'react'
import style from '../CSS/Average.module.css'
const Average = ({heroes}) => {

    const promedio = (heroes) => {
        let suma = [];
        for (let hero of heroes) {
            let values = Object.values(hero.powerstats)

            values.map((value) => {
                if (value === null) {
                    suma.push(0)
                    console.log(value)
                } else {
                    var intValue = parseInt(value)
                    suma.push(intValue)
                }

            })
        }
        const reducer = (previousValue, currentValue) => previousValue + currentValue;
        suma = suma.reduce(reducer)
        let avg = suma / 36;
        avg = avg.toFixed(1)
        return avg
    }
    return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div className={style.avg}>
           {promedio(heroes)} / 100
           </div>
           <div className={style.avg}>
               Room available on team: {6 - heroes.length} / 6
           </div>
        </div>
        
    )
}

export default Average
