import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { IActivity } from "../../../app/model/Activity";

interface Props {
    activity:IActivity;
    cancelSelectActivity: () => void;
    editSelectActivity: () => void;
}

export default function ActivityDetails({activity, cancelSelectActivity, editSelectActivity}: Props) {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button basic color={'blue'} content={'Edit'} onClick={() => editSelectActivity()}/>
                    <Button basic color={'grey'} content={'Cancel'} onClick={() => cancelSelectActivity()}/>
                </Button.Group>
            </Card.Content>
        </Card>
    );
}
