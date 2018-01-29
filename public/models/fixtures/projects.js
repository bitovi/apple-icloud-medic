import fixture from 'can-fixture';
import env from '@root/shared/env';
import Projects from '@public/models/projects';
import mockServer from './mock-socket-server';
export function mock(){
  return [
    {
      title: 'First Project',
      description:
        'This is a project description. Learn all about this project here. Wow! It is so exciting',
      rules: [1, 2, 3],
      contributions: [4, 5, 6],
      category: 'category',
      id: 101
    },
    {
      title: 'Second Project',
      description:
        'This is a project description. Learn all about this project here. Wow! It is so exciting',
      rules: [1, 2, 3],
      contributions: [4, 5, 6],
      category: 'category',
      id: 102
    },
    {
      title: 'Third Project',
      description:
        'This is a project description. Learn all about this project here. Wow! It is so exciting',
      rules: [1, 2, 3],
      contributions: [4, 5, 6],
      category: 'category',
      id: 103
    },
    {
      title: 'Fourth Project',
      description:
        'This is a project description. Learn all about this project here. Wow! It is so exciting',
      rules: [1, 2, 3],
      contributions: [4, 5, 6],
      category: 'category',
      id: 104
    },
    {
      title: 'First Project',
      description:
        'This is a project description. Learn all about this project here. Wow! It is so exciting',
      rules: [1, 2, 3],
      contributions: [4, 5, 6],
      category: 'category',
      id: 105
    },
    {
      title: 'Second Project',
      description:
        'This is a project description. Learn all about this project here. Wow! It is so exciting',
      rules: [1, 2, 3],
      contributions: [4, 5, 6],
      category: 'category',
      id: 106
    },
    {
      title: 'Third Project',
      description:
        'This is a project description. Learn all about this project here. Wow! It is so exciting',
      rules: [1, 2, 3],
      contributions: [4, 5, 6],
      category: 'category',
      id: 107
    },
    {
      title: 'Fourth Project',
      description:
        'This is a project description. Learn all about this project here. Wow! It is so exciting',
      rules: [1, 2, 3],
      contributions: [4, 5, 6],
      category: 'category',
      id: 108
    },
    {
      title: 'First Project',
      description:
        'This is a project description. Learn all about this project here. Wow! It is so exciting',
      rules: [1, 2, 3],
      contributions: [4, 5, 6],
      category: 'category',
      id: 109
    },
    {
      title: 'Second Project',
      description:
        'This is a project description. Learn all about this project here. Wow! It is so exciting',
      rules: [1, 2, 3],
      contributions: [4, 5, 6],
      category: 'category',
      id: 110
    },
    {
      title: 'Third Project',
      description:
        'This is a project description. Learn all about this project here. Wow! It is so exciting',
      rules: [1, 2, 3],
      contributions: [4, 5, 6],
      category: 'category',
      id: 111
    },
    {
      title: 'Fourth Project',
      description:
        'This is a project description. Learn all about this project here. Wow! It is so exciting',
      rules: [1, 2, 3],
      contributions: [4, 5, 6],
      category: 'category',
      id: 112
    }
  ];
}

const url = `${env.API_BASE_URI}/projects`;
const store = fixture.store(mock(), Projects.connection.algebra);
fixture(url, store);
mockServer.onFeathersService(url, store);

export default store;
