import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Card, StyledCard } from '../../index';

storiesOf('Semantic UI/Views', module).addWithChapters('Card', {
  chapters: [
    {
      sections: [
        {
          title: 'Card Example',
          sectionFn: () => (
            <Card>
              <Card.Content>
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group{' '}
                  <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button.Group fluid>
                  <Button basic color='green'>
                    Approve
                  </Button>
                  <Button basic color='red'>
                    Decline
                  </Button>
                </Button.Group>
              </Card.Content>
            </Card>
          )
        },
        {
          title: 'Card Group Example',
          sectionFn: () => (
            <Card.Group>
              <Card>
                <Card.Content>
                  <Card.Header>Steve Sanders</Card.Header>
                  <Card.Meta>Friends of Elliot</Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group{' '}
                    <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button.Group fluid>
                    <Button basic color='green'>
                      Approve
                    </Button>
                    <Button basic color='red'>
                      Decline
                    </Button>
                  </Button.Group>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Card.Header>Steve Sanders</Card.Header>
                  <Card.Meta>Friends of Elliot</Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group{' '}
                    <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button.Group fluid>
                    <Button basic color='green'>
                      Approve
                    </Button>
                    <Button basic color='red'>
                      Decline
                    </Button>
                  </Button.Group>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Card.Header>Steve Sanders</Card.Header>
                  <Card.Meta>Friends of Elliot</Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group{' '}
                    <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button.Group fluid>
                    <Button basic color='green'>
                      Approve
                    </Button>
                    <Button basic color='red'>
                      Decline
                    </Button>
                  </Button.Group>
                </Card.Content>
              </Card>
            </Card.Group>
          )
        },{
          title: 'StyledCard Example',
          sectionFn: () => (
            <Card.Group>
              <StyledCard bgColor='green'>
                <Card.Content>
                  <Card.Header>Steve Sanders</Card.Header>

                  <Card.Meta>Friends of Elliot</Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group{' '}
                    <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button.Group fluid>
                    <Button basic color='green'>
                      Approve
                    </Button>
                    <Button basic color='red'>
                      Decline
                    </Button>
                  </Button.Group>
                </Card.Content>
              </StyledCard>
              <StyledCard bgColor='green'>
                <Card.Header>Header is direct child</Card.Header>
                <Card.Content>
                  <Card.Meta>Friends of Elliot</Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group{' '}
                    <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button.Group fluid>
                    <Button basic color='green'>
                      Approve
                    </Button>
                    <Button basic color='red'>
                      Decline
                    </Button>
                  </Button.Group>
                </Card.Content>
              </StyledCard>
            </Card.Group>
          )
        }
      ]
    }
  ]
});
