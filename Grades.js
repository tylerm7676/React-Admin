import React from 'react';
import { List, Filter, TextInput, Datagrid, TextField, ShowButton, EditButton} from 'react-admin';
import { Show, SimpleShowLayout, DateField, RichTextField } from 'react-admin';
import { Create, Edit, SimpleForm, DisabledInput, DateInput, LongTextInput, ReferenceManyField } from 'react-admin';

const GradesFilter = (props) =>
(
	<Filter {...props}>
		<TextInput label="ID#" source="student_id" />
		<TextInput label="Name" source="type" />
	</Filter>
);

export const ListGrades = (props) =>
(    
	<List {...props} filters={<GradesFilter />} bulkActionButtons={false} >
		<Datagrid>
			<TextField source="id" />
			<TextField source="student_id" />
			<TextField source="type" />
			<TextField source="max" />
			<TextField source="grade" />
			<ShowButton />
			<EditButton />
		</Datagrid>    
	</List>
);

const GradeTitle = ({ record }) =>
{
	return <span>Grade #{record ? `${record.id}` : ''}</span>;
};

export const ShowGrade = (props) =>
(
	<Show title={<GradeTitle />} {...props}>
		<SimpleShowLayout>
			<TextField source="id" />
			<TextField source="student_id" />
			<TextField source="type" />
			<TextField source="max" />
			<TextField source="grade" />
		</SimpleShowLayout>
	</Show>
);

export const CreateGrade = (props) =>
(
	<Create title="Create Grade" {...props}>
		<SimpleForm>
			<TextInput source="student_id" />
			<TextInput source="type" />
			<TextInput source="max" />
			<TextInput source="grade" />
		</SimpleForm>
	</Create>
);

export const EditGrade = (props) =>
(
	<Edit title={<GradeTitle />} {...props}>
		<SimpleForm>
			<DisabledInput label="Id" source="id" />
			<TextInput source="student_id" />
			<TextInput source="type" />
			<TextInput source="max" />
			<TextInput source="grade" />
		</SimpleForm>
	</Edit>
);
