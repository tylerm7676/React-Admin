import React from 'react';
import { List, Filter, TextInput, Datagrid, TextField, ShowButton, EditButton} from 'react-admin';
import { Show, SimpleShowLayout, DateField, RichTextField } from 'react-admin';
import { Create, Edit, SimpleForm, DisabledInput, DateInput, LongTextInput, ReferenceManyField } from 'react-admin';

const StudentsFilter = (props) =>
(
	<Filter {...props}>
		<TextInput label="ID#" source="id" />
		<TextInput label="Name" source="name" />
	</Filter>
);

export const ListStudents = (props) =>
(
	<List {...props} filters={<StudentsFilter />} bulkActionButtons={false}>
		<Datagrid>
			<TextField source="id" />
			<TextField source="name" />
			<ShowButton />
			<EditButton />
		</Datagrid>
	</List>
);

const StudentTitle = ({ record }) =>
{
	return <span>Student {record ? `"${record.id}"` : ''}</span>;
};

export const ShowStudent = (props) =>
(
	<Show title={<StudentTitle />} {...props}>
		<SimpleShowLayout>
			<TextField source="id" />
			<TextField source="name" />
		</SimpleShowLayout>
	</Show>
);


export const CreateStudent = (props) =>
(
	<Create title="Create Student" {...props}>
		<SimpleForm>
			<TextInput source="name" />
		</SimpleForm>
	</Create>
);

export const EditStudent = (props) =>
(
	<Edit title={<StudentTitle />} {...props}>
		<SimpleForm>
			<DisabledInput label="Id" source="id" />
			<TextInput source="name" />
		</SimpleForm>
	</Edit>
);

/* original
import React from 'react';

import { List, Datagrid, TextField} from 'react-admin';

export const StudentList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" Label="The Students Name Duh" />
        </Datagrid>
    </List>
);

*/