import React from 'react';
import {
    Grid,
    Form,
    Container,
    Icon,
    Button,
    Segment,
    Input
} from 'semantic-ui-react';
import axios from 'axios';

// HomePage Component
export default class HomePage extends React.Component {

    // Component variables
    state = {
        string_To_Shift: '',
        cyclicallyShifted: '',
        alphabeticallyShifted: ''
    };

    // When typing begins
    onChange = (e) => {
        e.preventDefault();

        const {name, value} = e.target;

        // This is equal to "this.setState(inputText : value});"
        this.setState({[name]: value});
    };

    // When go button is clicked
    onSubmit = () => {
        console.log('My JSON Object:', this.state);

        let userText = JSON.stringify({
            string_To_Shift: this.state.string_To_Shift
        });

        console.log('userText variable =', userText);
        axios.post('http://localhost:8091/KWIC', userText, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {
                console.log(res);
                const cyclicallyShifted = res.data.cyclicallyShifted;
                const alphabeticallyShifted = res.data.alphabeticallyShifted;
                console.log('API Response:', cyclicallyShifted, alphabeticallyShifted);

                this.setState({cyclicallyShifted: cyclicallyShifted, alphabeticallyShifted: alphabeticallyShifted});
            })
            .catch(error => {
                console.log(JSON.stringify(error))
            });
    };

    // Show these tags
    render() {

        const {string_To_Shift} = this.state;

        return (
            <Container>
                <Grid divided='vertically' centered>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <h1 align='center'>Input</h1>
                            <p>Insert input and press the green button.</p>
                            <Form size='big'>
                                <Input type='text' name="string_To_Shift" onChange={this.onChange}
                                       value={string_To_Shift}
                                       placeholder='Input KWIC text here' fluid/>
                            </Form>
                        </Grid.Column>
                        <Grid.Column>
                            <Button onClick={this.onSubmit} size='huge' animated='vertical' color='green'
                                    floated='right'>
                                <Button.Content hidden>Proceed</Button.Content>
                                <Button.Content visible>
                                    <Icon name='arrow circle right'/>
                                </Button.Content>
                            </Button>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={2} verticalAlign="middle" style={{display: 'flex', lineHeight: '90px'}}>
                        <Grid.Column>
                            <h1 align='center'>Cyclical Shift</h1>
                            <Segment inverted>
                                <p>{this.state.cyclicallyShifted}</p>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <h1 align='center'>Alphabetical Shift</h1>
                            <Segment>
                                <p>{this.state.alphabeticallyShifted}</p>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}