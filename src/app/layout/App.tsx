import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Container } from "semantic-ui-react";
import { IActivity } from "../model/Activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../feature/activities/dashboard/ActivityDashboard";

function App() {
    const [activities, setActivities] = useState<IActivity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<IActivity | undefined>(undefined);

    useEffect(() => {
        axios.get<IActivity[]>('https://localhost:44314/api/activities').then(response => {
            setActivities(response.data);
        })
    }, [])

    function handleSelectedActivity(id: string) {
        setSelectedActivity(activities.find(activity => activity.id === id));
    }

    function handleCancelSelectedActivity() {
        setSelectedActivity(undefined);
    }

    return (
        <>
            <NavBar/>
            <Container style={{marginTop: '7em'}}>
                <ActivityDashboard
                    activities={activities}
                    selectedActivity={selectedActivity}
                    selectActivity={handleSelectedActivity}
                    cancelSelectActivity={handleCancelSelectedActivity}
                />
            </Container>
        </>
    );
}

export default App;
