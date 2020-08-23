import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from '../App.module.css'

const query = {
    me: {
        resource: 'me',
    },
}

export const Home = () => (
    <div className={classes.containerhome}>
        <DataQuery query={query}>
            {({ error, loading, data }) => {
                if (error) return <span>ERROR</span>
                if (loading) return <span>...</span>
                return (
                    <>
                        <h1>
                            {i18n.t('Hello {{name}}', { name: data.me.name })}
                        </h1>
                        <h3>{i18n.t('Welcome to DHIS2!')}</h3>
                        <img className={classes.img2} src="http://slchaem.lk/web-app/webappdevsplash.png"  alt="splash"></img>
                        <h3>{('Developed for DHIS2 Academy 2020 (web-app-dev)')}</h3>
                        <h2>{('Chamika Senanayake')}</h2>
                <h4>{('E: senanayake.ch2015@pgim.cmb.ac.lk | M: +94775217777')}</h4>
                        
                    </>
                )
            }}
        </DataQuery>
    </div>

)

