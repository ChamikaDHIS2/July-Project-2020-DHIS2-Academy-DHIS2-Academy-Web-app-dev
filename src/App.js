import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'

import { Form, Home, Attributes, NoMatch } from './views'
import { Navigation } from './navigation'
import styles from './App.module.css'
import {PaginatedVisualizationsTable} from './user_components/PaginatedVisualizationsTable.js'

const MyApp = () => (
    
    <BrowserRouter>
        <div className={styles.container}>
            <div className={styles.left}>
            <img src="http://slchaem.lk/web-app/JPlogo.png" alt="" width="100%"/><br></br>
                <Navigation/>
            </div>

            <div className={styles.right}>
                
                <Switch>
                    <Route
                        // Home route, will render "Home" component
                        // when "/" is the current url
                        exact
                        path="/"
                        component={Home}
                    />

                    <Route
                        // FAQ route, will render "Form" component
                        // when "/faq" is the current url
                        exact
                        path="/form"
                        component={Form}
                    />

                    <Route
                        // Attributes route, will render "Attributes" component
                        // when "/attributes" is the current url
                        exact
                        path="/attributes"
                        component={Attributes}

                    />
                    
                    <Route
                        // Attributes route, will render "Attributes" component
                        // when "/attributes" is the current url
                        exact
                        path="/visualizations"
                        component={PaginatedVisualizationsTable}
                    />

                    <Route
                        // 404 page
                        // The `NoMatch` component will redirect to "/"
                        component={NoMatch}
                    />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
)

export default MyApp