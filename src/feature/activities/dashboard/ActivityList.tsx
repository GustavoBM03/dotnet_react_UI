import React from 'react';
import { IActivity } from "../../../app/model/Activity";
import { Button, Item, Label, Segment } from "semantic-ui-react";

interface Props {
    activities: IActivity[];
    selectActivity: (id:string) => void;
}

function ActivityList({activities, selectActivity}: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as={'a'}>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activity.id)} floated={'right'} content={'View'} color={'blue'}/>
                                <Label basic circular content={activity.category}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    );
}

export default ActivityList;