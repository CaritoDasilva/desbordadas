import React from "react";
import styles from './Description.module.scss';
import disabilityIcon from '../images/disabilityIcon.jpeg';
import caregiversIcon from '../images/houseIcon.jpeg';
import houseKeepersIcon from '../images/cleaningIcon.jpeg';
import childsIcon from '../images/childsIcon.jpeg';

const Description = () => {
    return(
        <div className={styles.description_container}>
            <input type="text" />
            <button>Buscar</button>
            <div className={styles.organization_list_container}>
                <div>
                    <h3>Organización A</h3>
                    <p>Región Metropolitana</p>
                    <div className={styles.icons_organization}>
                        <img src={disabilityIcon} alt="" />
                        <img src={houseKeepersIcon} alt="" />
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of 
                        type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the </p>
                </div>
                <div>
                    <h3>Organización B</h3>
                    <p>Región Metropolitana</p>
                    <div className={styles.icons_organization}>
                        <img src={disabilityIcon} alt="" />
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the </p>
                </div>
                <div>
                    <h3>Organización C</h3>
                    <p>Región Metropolitana</p>
                    <div className={styles.icons_organization}>
                        <img src={caregiversIcon} alt="" />
                        <img src={childsIcon} alt="" />
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the </p>
                </div>
            </div>
        </div>
    )
}

export default Description;