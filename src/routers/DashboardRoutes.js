import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { PostScreen } from '../components/Posts/PostScreen'
import { Navbar } from '../components/UI/Navbar'
import { HomeScreen } from '../pages/Home/HomeScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/post/:id" component={PostScreen} />                    <Redirect to="/" />
                </Switch>
            </div>
        </>
    )
}
