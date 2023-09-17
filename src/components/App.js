import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Main from './Main';
import LinksPage from './LinksPage';
import ProfileDetailsPage from './ProfileDetailsPage';
import PreviewPage from './PreviewPage';
import Main from './Main';

// react routes
const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
	},
	{
		path: '/LinkPage',
		element: <LinksPage></LinksPage>,
	},
	{
		path: '/profile',
		element: <ProfileDetailsPage></ProfileDetailsPage>,
	},
	{
		path: '/Preview',
		element: <PreviewPage></PreviewPage>,
	},
]);

export default function App() {
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}
