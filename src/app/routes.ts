import { PostsComponent } from './components/posts/posts.component';

// Define the routes
export const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];

