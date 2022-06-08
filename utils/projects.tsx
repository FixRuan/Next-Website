import DevlandiaImage from '../public/assets/projects/devlandia.png';
import GoPizzaImage from '../public/assets/projects/gopizza.png';
import RentxImage from '../public/assets/projects/rentx.png';
import GoFinancesImage from '../public/assets/projects/gofinances.png';
import PokedexImage from '../public/assets/projects/pokedex.png';
import IgnewsImage from '../public/assets/projects/ignews.png';

interface Project {
    name: string;
    description: string;
    image: any;
    projectUrl: string;
};

const projectsArray: Project[] = [
    {
        name: 'Devlândia',
        description: 'React Native',
        image: DevlandiaImage,
        projectUrl: '/devlandia',
    },
    {
        name: 'Go Pizza',
        description: 'React Native',
        image: GoPizzaImage,
        projectUrl: '/gopizza',
    },
    {
        name: 'RentX',
        description: 'React Native',
        image: RentxImage,
        projectUrl: '/rentx',
    },
    {
        name: 'Go Finances',
        description: 'React Native',
        image: GoFinancesImage,
        projectUrl: '/gofinances',
    },
    {
        name: 'Pokedex',
        description: 'React Native',
        image: PokedexImage,
        projectUrl: '/pokedex',
    },
    {
        name: 'IGnews',
        description: 'React Js',
        image: IgnewsImage,
        projectUrl: '/ignews',
    },
];

export { projectsArray };