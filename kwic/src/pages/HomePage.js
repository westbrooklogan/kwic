import React from 'react';
import {Grid, Form, TextArea, Container, Message, Icon, Button, Segment, Dimmer, Loader} from 'semantic-ui-react';

export default class HomePage extends React.Component {
    render() {
        return (
                <Container>
                    <Grid divided='vertically' >
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <Form>
                                    <TextArea placeholder='Input KWIC text here'/>
                                </Form>
                            </Grid.Column>
                            <Grid.Column>
                                <Message icon>
                                    <Icon name='circle notched' loading />
                                    <Message.Content>
                                        <Message.Header>Just one second</Message.Header>
                                        We are fetching that content for you.
                                    </Message.Content>
                                </Message>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row columns={3} verticalAlign="middle" style={{display: 'flex', lineHeight: '90px'}}>
                            <Grid.Column>
                                <Button animated='vertical'>
                                    <Button.Content hidden>Shop</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='shop' />
                                    </Button.Content>
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>
                                    <Dimmer active>
                                        <Loader>Loading</Loader>
                                    </Dimmer>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>
                                <Dimmer active inverted>
                                    <Loader inverted>Loading</Loader>
                                </Dimmer>
                            </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
        );
    }
}