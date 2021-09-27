import React from 'react';
import style from '../CSS/Team.module.css';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteHero } from './Redux/actions';
import { connect } from 'react-redux';

const TeamMember = ({ hero, deleteHero }) => {

    const power = Object.entries(hero.powerstats)

    const selectStyle = (al) => {
        if (al === 'good') {
            return style.herobadge
        } else return style.villainbadge
    }



    const handleDelete = (member) => {
        console.log(member)
        deleteHero(member)
    }
    return (
        <div className={style.main}>
            <div className={style.imgwrap}>
                <Image className={style.img} src={hero.image.url} alt={hero.name} />
            </div>
            <div className={style.text}>

                <div>
                    <Link to={`/detail/${hero.id}`}>
                        <h3 className={style.title}>{hero.name}</h3>
                    </Link>
                </div>
                <div>
                    <span className={selectStyle(hero.biography.alignment)}>{hero.biography.alignment}</span>
                </div>
                <div className={style.stats}>
                    <ul>{power.map((powerstat) => {

                        return (<li><p className={style.key}>{`${powerstat[0]}:`}</p> <p className={style.value}>{`${powerstat[1]}`}</p></li>)

                    })}</ul>
                </div>
                <div className={style.close}> <button onClick={() => handleDelete(hero)}>DELETE</button> </div>
            </div>
        </div>

    )

}
const mapDispatchToProps = (dispatch) => ({
    deleteHero: (member) => dispatch(deleteHero(member))
})
export default connect(null, mapDispatchToProps)(TeamMember)
