import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { EditPost } from '../components/Posts/EditPost'
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
                    <Route exact path="/post/:id" component={PostScreen} />      
                    <Route exact path="/new" component={EditPost} /> 
                    <Route exact path="/edit/:id" component={EditPost} />                
                    <Redirect to="/" />
                </Switch>
            </div>
        </>
    )
}
