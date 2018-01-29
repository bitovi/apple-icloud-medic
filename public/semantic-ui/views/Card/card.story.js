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
            <div>
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
                  <div className='ui two buttons'>
                    <Button basic color='green'>
                      Approve
                    </Button>
                    <Button basic color='red'>
                      Decline
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </div>
          )
        },
        {
          title: 'Card Group Example',
          sectionFn: () => (
            <div>
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
                    <div className='ui two buttons'>
                      <Button basic color='green'>
                        Approve
                      </Button>
                      <Button basic color='red'>
                        Decline
                      </Button>
                    </div>
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
                    <div className='ui two buttons'>
                      <Button basic color='green'>
                        Approve
                      </Button>
                      <Button basic color='red'>
                        Decline
                      </Button>
                    </div>
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
                    <div className='ui two buttons'>
                      <Button basic color='green'>
                        Approve
                      </Button>
                      <Button basic color='red'>
                        Decline
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              </Card.Group>
            </div>
          )
        },{
          title: 'StyledCard Example',
          sectionFn: () => (
            <div>
              <StyledCard bgColor='green'>
                <Card.Content>
                  <StyledCard.Header>Steve Sanders</StyledCard.Header>

                  <Card.Meta>Friends of Elliot</Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group{' '}
                    <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button basic color='green'>
                      Approve
                    </Button>
                    <Button basic color='red'>
                      Decline
                    </Button>
                  </div>
                </Card.Content>
              </StyledCard>
            </div>
          )
        }

      ]
    }
  ]
});
