import { poolNew } from './dbImplementation';

export const getPosts = () => poolNew.query('SELECT * FROM post_table');


