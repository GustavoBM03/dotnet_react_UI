import React, { useState } from 'react';
import { Grid } from "semantic-ui-react";
import { IActivity } from "../../../app/model/Activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
    activities: IActivity[];
    selectedActivity: IActivity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
}

export default function ActivityDashboard({activities, selectedActivity, selectActivity, cancelSelectActivity}: Props) {

    const [editActivity, setEditActivity] = useState(false);

    function handleEditActivity() {
        setEditActivity(true);
    }

    function handleCancelEditActivity() {
        setEditActivity(false);
    }

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity &&
				<ActivityDetails
					activity={selectedActivity}
					cancelSelectActivity={cancelSelectActivity}
					editSelectActivity={handleEditActivity}
				/>}
                {selectedActivity && editActivity &&
				<ActivityForm activity={selectedActivity} cancelEditActivity={handleCancelEditActivity}/>}
            </Grid.Column>
        </Grid>
    );
};
