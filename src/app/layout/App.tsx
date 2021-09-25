import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Container } from "semantic-ui-react";
import { IActivity } from "../model/IActivity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../feature/activities/dashboard/ActivityDashboard";
import {v4 as uuid} from 'uuid';

function App() {
    const [activities, setActivities] = useState<IActivity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<IActivity | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        axios.get<IActivity[]>('https://localhost:44314/api/activities').then(response => {
            setActivities(response.data);
        })
    }, [])

    function handleSelectActivity(id: string) {
        setSelectedActivity(activities.find(activity => activity.id === id));
    }

    function handleCancelSelectActivity() {
        setSelectedActivity(undefined);
    }

    function handleFormOpen(id?: string) {
        id ? handleSelectActivity(id) : handleCancelSelectActivity();
        setEditMode(true);
    }

    function handleFormClose() {
        setEditMode(false);
    }

    function handleCreateOrEditActivity(activity: IActivity){
        activity.id
            ? setActivities([...activities.filter(item => item.id !== activity.id), activity])
            : setActivities([...activities, {...activity, id: uuid()}]);
        setEditMode(false);
        setSelectedActivity(activity)
    }

    function handleDeleteActivitiy(id: string) {
        setActivities([...activities.filter(item => item.id !== id)])
    }

    return (
        <>
            <NavBar openForm={handleFormOpen}/>
            <Container style={{marginTop: '7em'}}>
                <ActivityDashboard
                    activities={activities}
                    selectedActivity={selectedActivity}
                    selectActivity={handleSelectActivity}
                    cancelSelectActivity={handleCancelSelectActivity}
                    editMode={editMode}
                    openForm={handleFormOpen}
                    closeForm={handleFormClose}
                    createOrEdit={handleCreateOrEditActivity}
                    deleteActivity={handleDeleteActivitiy}
                />
            </Container>
        </>
    );
}

export default App;
