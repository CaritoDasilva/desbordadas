import React from "react";
import logoCuidados from '../images/logoCuidados.jpeg'
import disabilityIcon from '../images/disabilityIcon.jpeg';
import caregiversIcon from '../images/houseIcon.jpeg';
import houseKeepersIcon from '../images/cleaningIcon.jpeg';
import childsIcon from '../images/childsIcon.jpeg';
import desbordadasLogo from '../images/desbordada_logo.jpeg';
import alquimiaLogo from '../images/alquimia_logo.jpeg';
import styles from './Categories.module.scss';

const Categories = () => {

    return(
        <div className={styles.category_container}>
            <div className={styles.top_section}>
                <div>
                    <img src={logoCuidados} alt="Logo Cuidados en resistencia" className={styles.logo} />
                </div>
                <div className={styles.title_container}>
                    <h3>Tramando redes para sostener la vida</h3>
                </div>
                <h3>Sé parte de esta gran red <a href="">aquí</a></h3>
            </div>
            <div className={styles.middle_section}>
                <h2>Macrotemas relacionados a los cuidados</h2>
                <div className={styles.theme_container}>
                    <div className={styles.icon_container}>
                        <img src={childsIcon} alt="Ícono derechos de los niños" />
                        <p>Derechos de los niños, niñas y adolescentes</p>
                    </div>
                    <div className={styles.icon_container}>
                        <img src={disabilityIcon} alt="Ícono cuidados personas con discapacidad" />
                        <p>Derechos de las personas con discapacidad</p>
                    </div>
                    <div className={styles.icon_container}>
                        <img src={caregiversIcon} alt="Ícono cuidadoras no remuneradas" />
                        <p>Derechos de las cuidadoras no remuneradas</p>
                    </div>
                    <div className={styles.icon_container}>
                        <img src={houseKeepersIcon} alt="Ícono de las trabajadoras de casa particular" />
                        <p>Derechos de las trabajadoras de casa particular</p>
                    </div>
                </div>
            </div>
            <div className={styles.bottom_section}>
                <img src={desbordadasLogo} alt="Logo de Desbordadas" className={styles.desbordada_logo} />
                <img src={alquimiaLogo} alt="Logo de Alquimia" />
            </div>
        </div>
    )

}

export default Categories;