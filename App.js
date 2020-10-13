import React from 'react';

/*import students_icon from '@material-ui/icons/People';
import grades_icon from '@material-ui/icons/List_Alt';
*/
import
{ 
	Admin,
	Resource,
	fetchUtils,
} from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';

import AuthProvider from './AuthProvider';

import
{
	ListStudents,
	//    EditStudents,
	ShowStudent,
	EditStudent,
	CreateStudent,
} from './Students';
import
{
	ListGrades,
	ShowGrade,
	EditGrade,
	CreateGrade,
} from './Grades';


let host = window.location.host; 
host = host.split(':')[0] + ':3000';
let url = 'http://'+host;

const httpClient = (url, options = {}) =>
{
	if(!options.headers)
	{
		options.headers = new Headers({ Accept: 'application/json' });
	}
	const authString = localStorage.getItem('authString');
	options.headers.set('Authorization', 'Basic '+ authString);
	return fetchUtils.fetchJson(url, options);
}

const App = () =>
(
	<Admin authProvider={AuthProvider} dataProvider={jsonServerProvider(url, httpClient)}>
		<Resource name="Students" /*icon={students_icon}*/ list={ListStudents} show={ShowStudent} edit={EditStudent} create={CreateStudent} />
		<Resource name="Grades" /*icon={grades_icon}*/ list={ListGrades} show={ShowGrade} edit={EditGrade} create={CreateGrade} />
	</Admin>
);

export default App;